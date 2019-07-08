import React from "react";

class EventResult extends React.Component {

    constructor() {
        super();

        this.state = {
        }
    }

    render() {
        return (
            <div className="event-container">
                <h4>{this.props.eventName}</h4>
                <p className="event-datetime">Event Date and Time: {this.props.eventDate}  {this.props.eventTime}</p>
                <div className="event-information">
                    <a className="event-link" href={this.props.eventLink}>Click here for the event link.</a>
                    <p className="event-address">Venue: {this.props.eventVenue}, {this.props.city}</p>
                    <p className="event-address">{this.props.eventAddress}</p>
                    <div dangerouslySetInnerHTML={{ __html: this.props.eventDescription }} />
                </div>
            </div>
        );
    }
}

export default EventResult;