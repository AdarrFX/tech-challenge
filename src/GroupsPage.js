import React from "react";
import GroupResult from "./GroupResult";
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { has, get } from "lodash";
import jsonp from 'jsonp'
import noPhoto from "../src/nophotoavailable-icon.jpg";

class EventsPage extends React.Component {

    constructor(props) {
        super(props);

        
        this.state = {
            query: queryString.parse(props.location.search),
            currentUrlPath: props.location,
            groupResults: [],
            }
    }

    callGroupAPI = () => {
        jsonp(`https://api.meetup.com/find/groups?key=5e2a4f7e595a61e6c1b2268171a1018&page=15&text=${this.state.query.search}`, null, (err, data) => {
                console.log(err, data);
                this.setState({
                    groupResults: data.data
                })
            });
    }

    insertGroupPhoto = (object, type) => {
        if (has(object, type)){
            return get(object, type);
        } else {
            switch(type) {
                case "group_photo.thumb_link":
                    return noPhoto;
                default:
                    return "";
            }
        }
    }

    componentDidMount() {

        console.log(this.state.query.search);

        this.setState({
            currentUrlPath: this.props.location
        })

        if(this.state.query.search !== ""){
            this.callGroupAPI();
        }
    }

    componentDidUpdate() {
        if (this.state.currentUrlPath !== this.props.location) {
            this.setState({
                query: queryString.parse(this.props.location.search),
                currentUrlPath: this.props.location,
            }, () => {
                this.callGroupAPI();
                console.log(this.state.query);

            })
        }
    }

    render() {

        return (
            <div className="group-results-container">
              {this.state.groupResults.map((group, index) => {
                    console.log("Index ", index);
                return <Link to={`/group/${group.urlname}`}><GroupResult  groupName={group.name} memberCount={group.members} city={group.localized_location} country={group.localized_country_name} thumbnailImage={this.insertGroupPhoto(group, "group_photo.thumb_link")} /></Link>
              })}
            </div>
        );
    }

}

export default EventsPage;