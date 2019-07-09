import React from "react";
import EventResult from "./EventResult";
import jsonp from "jsonp";
import { has, get } from "lodash";
import noPhoto from "../src/nophotoavailable-icon.jpg";
import Loader from "./Loader";

class EventsPage extends React.Component {

    constructor(props) {
        super(props);

        const { match } = props

        this.state = {
            urlName: match.params.urlname,
            events: [],
            group: {},
            groupLoading: true,
            eventsLoading: true,
            hasGroupError: false,
            hasEventsError: false,
            descVisible: false,
        }
    }

    componentDidMount() {

        console.log("Mounted.")

        jsonp(`https://api.meetup.com/${this.state.urlName}?key=5e2a4f7e595a61e6c1b2268171a1018`, null, (err, data) => {
            console.log(err, data);
            if(err) {
                this.setState({
                    hasGroupError: true,
                    groupLoading: false,
                })
            } else {
                this.setState({
                    group: data.data,
                    groupLoading: false,
                    hasGroupError: false,
                })
            }
        });
        jsonp(`https://api.meetup.com/${this.state.urlName}/events?key=5e2a4f7e595a61e6c1b2268171a1018&page=10`, null, (err, data) => {
            console.log("Events Data: ", err, data);

            if(err) {
                this.setState({
                    hasEventsError: true,
                    eventsLoading: false,
                })
            } else {
                this.setState({
                    events: data.data,
                    eventsLoading: false,
                    hasEventsError: false,
                })
            }
        });

    }

    insertObjectData = (object, type) => {
        
        console.log("Object: ", object)
        console.log("Here it is: ", object[type])

        if (has(object, type)){
            console.log("Returned Obj", object[type])
            return get(object, type);
        } else {
            switch(type) {
                case "name":
                    return "No Event Name Specified";
                case "local_date":
                    return "No Date";
                case "local_time":
                    return "No Time";
                case "description":
                    return "No Event Description.";
                case "venue.name":
                    return "No venue specified";
                case "venue.city":
                    return "City not specified";
                case "venue.address_1":
                    return "";
                case "group_photo.photo_link":
                    return noPhoto;
                default:
                    return "";
            }
        }
    }

    handleGroupDescriptionClick = (e) => {
        e.preventDefault();
        this.setState(prevState => ({ descVisible: !prevState.descVisible}));
    }

    render() {

        let eventErrorJSX,
            groupErrorJSX,
            noEventsMessage,
            groupLoaderJSX,
            eventLoaderJSX,
            groupInfo = null;

        if(this.state.eventsLoading) {
            eventLoaderJSX = <Loader />
        }

        if(this.state.groupLoading) {
            groupLoaderJSX = <Loader />
        }

        if(this.state.events.length === 0 
            && this.state.eventsLoading === false 
            && this.state.hasEventsError === false
            && this.state.hasGroupError === false){
            noEventsMessage = <h3>No upcoming events for the selected group.</h3>
        }

        if(this.state.hasGroupError) {
            groupErrorJSX = <h3>There was an API error fetching group info. Either your network is down, or the API has an issue.</h3>
        }

        if(this.state.hasEventsError) {
            eventErrorJSX = <h3>There was an API error fetching event info for the group. Either your network is down, or the API has an issue.</h3>
        }

        if(this.state.groupLoading === false 
            && this.state.hasEventsError === false) {
            groupInfo = (
                <div className="group-details-info">
                        <p>Group Details: {this.state.urlName}</p>
                        <a href={this.state.group.link}><h3>{this.state.group.name}</h3></a>
                        <div className="group-details-image-container">
                            <img className="group-thumbnail-image" src={this.insertObjectData(this.state.group, "group_photo.photo_link")} alt={this.state.group.name + " group logo"} />
                        </div>
                        <p>{this.state.group.localized_location}, {this.state.group.localized_country_name}</p>
                        <p>{this.state.group.members} Members.</p>
                        <button className="info-toggle" tabIndex="0" onClick={this.handleGroupDescriptionClick} >Show/Hide Description</button>
                        <div className={`group-details-info-desc ${this.state.descVisible ? "" : " hidden"}`} dangerouslySetInnerHTML={{ __html: this.state.group.description }} />
                    </div>
            );
        }


        return (
            <div className="group-event-container">
                <div className="group-details-container">
                    {groupLoaderJSX}
                    {groupErrorJSX}
                    {groupInfo}
                </div>
                <div className="group-event-list">
                    <h3 className="group-event-list-header">Upcoming Events:</h3>
                    {noEventsMessage}
                    {eventLoaderJSX}
                    {eventErrorJSX}
                    <ul>
                        {this.state.events.map((event, index) => {
                            console.log(index, event)

                            return (
                                <li className="event-list-item">
                                    <EventResult eventName={this.insertObjectData(event, "name")} eventDate={this.insertObjectData(event, "local_date")} eventTime={this.insertObjectData(event, "local_time")} eventLink={event.link} eventDescription={this.insertObjectData(event, "description")} eventVenue={this.insertObjectData(event, "venue.name")} city={this.insertObjectData(event, "venue.city")} eventAddress={this.insertObjectData(event, "venue.address_1")} />

                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }

}

export default EventsPage;