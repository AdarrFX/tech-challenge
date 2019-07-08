import React from "react";
import EventResult from "./EventResult";
import jsonp from "jsonp";
import { has, get } from "lodash";
import noPhoto from "../src/nophotoavailable-icon.jpg";

class EventsPage extends React.Component {

    constructor(props) {
        super(props);

        const { match } = props

        this.state = {
            urlName: match.params.urlname,
            events: [],
            group: {},
        }
    }

    componentDidMount() {

        console.log("Mounted.")

        jsonp(`https://api.meetup.com/${this.state.urlName}?key=5e2a4f7e595a61e6c1b2268171a1018&page=15`, null, (err, data) => {
            console.log(err, data);
            this.setState({
                group: data.data
            });
        });
        jsonp(`https://api.meetup.com/${this.state.urlName}/events?key=5e2a4f7e595a61e6c1b2268171a1018&page=5`, null, (err, data) => {
            console.log("Events Data: ", err, data);
            this.setState({
                events: data.data
            });
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

    render() {

        let noEventsMessage = null;

        if(this.state.events.length === 0){
            noEventsMessage = <h3>No upcoming events for the selected group.</h3>
        }

        return (
            <div className="group-event-container">
                <div className="group-details-container">
                    <div className="group-details-info">
                        <p>Group Details: {this.state.urlName}</p>
                        <a href={this.state.group.link}><h3>{this.state.group.name}</h3></a>
                        <div className="group-details-image-container">
                            <img className="group-thumbnail-image" src={this.insertObjectData(this.state.group, "group_photo.photo_link")} alt={this.state.group.name + " group logo"} />
                            {console.log("Here's the photo gruop: ", this.state.group)}
                        </div>
                        <p>{this.state.group.localized_location}, {this.state.group.localized_country_name}</p>
                        <p>{this.state.group.members} Members.</p>
                        <div className="group-details-info-desc" dangerouslySetInnerHTML={{ __html: this.state.group.description }} />
                    </div>
                </div>
                <div className="group-event-list">
                    {noEventsMessage}
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