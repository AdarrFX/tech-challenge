import React from 'react';

const GroupResult = (props) => {
  return (
    <div className='group-container'>
      <div className='group-header'>
        <div className='group-image-container'>
          <img className='group-thumbnail-image' src={props.thumbnailImage} alt={`${props.groupName} group thumbnail`} />
        </div>
        <h4>{props.groupName}</h4>
      </div>
      <div className='group-information'>
        <p>{props.memberCount} Members</p>
        <p>{props.city}, {props.country}</p>
      </div>
    </div>
  );
};

export default GroupResult;
