import React from 'react';

class EventResult extends React.Component {
  constructor () {
    super();
    this.state = {
      descVisible: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  // Handles whether or not to show the event description when clicked on.
  handleClick (e) {
    e.preventDefault();
    this.setState(prevState => ({ descVisible: !prevState.descVisible }));
  }

  render () {
    return (
      <div className='event-container' tabIndex='0'>
        <button className='info-toggle event-info-toggle' tabIndex='0' onClick={this.handleClick} >Show/Hide Details</button>
        <h4>{this.props.eventName}</h4>
        <p className='event-datetime'>Event Date and Time: {this.props.eventDate}  {this.props.eventTime}</p>
        <div className={`event-information${this.state.descVisible ? '' : ' hidden'}`}>
          <a className='event-link' href={this.props.eventLink}>Click here for the event link.</a>
          <p className='event-address'>Venue: {this.props.eventVenue}, {this.props.city}</p>
          <p className='event-address'>{this.props.eventAddress}</p>
          <div className='event-description' dangerouslySetInnerHTML={{ __html: this.props.eventDescription }} />
        </div>
      </div>
    );
  }
}

export default EventResult;
