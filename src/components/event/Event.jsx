import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './event.scss';

import Delete from '../delete/Delete';

const Event = ({ height, marginTop, title, time, id, onDelete }) => {
  const [isDeleteShown, setIsDeleteShown] = useState(false);

  const onEventClick = () => {
    setIsDeleteShown(!isDeleteShown);
  };

  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <div style={eventStyle} className="event" onClick={onEventClick}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      {isDeleteShown && <Delete marginTop={marginTop} onDelete={onDelete} id={id} />}
    </div>
  );
};

export default Event;

Event.propTypes = {
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
