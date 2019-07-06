import React from "react";

class GroupResult extends React.Component {

    constructor() {
        super();

        this.state = {
        }
    }

    render() {

        return (
            <div className="group-container" tabIndex="0">
                <div className="group-header">
                    <div className="group-image-container">
                        <img className="group-thumbnail-image" src={this.props.thumbnailImage} alt="" />
                    </div>
                    <h4>{this.props.groupName}</h4>
                </div>
                <div className="group-information">
                    <p>{this.props.memberCount} Members</p>
                    <p>{this.props.city}, {this.props.country}</p>
                </div>
            </div>
        );
    }

}

export default GroupResult;