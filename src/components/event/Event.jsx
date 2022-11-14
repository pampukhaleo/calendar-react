import React from 'react';

import './event.scss';

const Event = ({ height, marginTop, title, time, id, onDelete }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  console.log('height', height);
  console.log('margin', marginTop);

  return (
    <div style={eventStyle} className="event" data-id={id} onClick={onDelete}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
    </div>
  );
};

export default Event;
