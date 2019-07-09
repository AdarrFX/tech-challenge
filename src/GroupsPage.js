import React from "react";
import GroupResult from "./GroupResult";
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { has, get } from "lodash";
import jsonp from 'jsonp'
import noPhoto from "../src/nophotoavailable-icon.jpg";
import Loader from "./Loader";

class EventsPage extends React.Component {

    constructor(props) {
        super(props);

        
        this.state = {
            query: queryString.parse(props.location.search),
            currentUrlPath: props.location,
            groupResults: [],
            isLoading: true,
            hasError: false,
            }
    }

    callGroupAPI = () => {
        jsonp(`https://api.meetup.com/find/groups?key=5e2a4f7e595a61e6c1b2268171a1018&page=25&text=${this.state.query.search}`, null, (err, data) => {

            if(err) {
                this.setState({
                    hasError: true,
                    isLoading: false,
                })
            } else {
                this.setState({
                    groupResults: data.data,
                    isLoading: false,
                    hasError: false,
                })
            }
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
                isLoading: true,
            }, () => {
                this.callGroupAPI();
            })
        }
    }

    render() {

        if (this.state.isLoading) {
            return (<Loader />);
        }

        if (this.state.hasError) {
            return (<h2>API Error! Network connection may be interrupted, or the API may be experiencing issues.</h2>);
        }

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