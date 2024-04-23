import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment/moment';

import './event.scss';

import Delete from '../delete/Delete';

const Event = ({ onDelete, event }) => {
  const { id, title, dateFrom, dateTo, description } = event;

  const [isDeletePopupShown, setIsDeletePopupShown] = useState(false);

  const eventStart = `${moment(dateFrom).format('HH')}:${moment(dateFrom).format('mm')}`;
  const eventEnd = `${moment(dateTo).format('HH')}:${moment(dateTo).format('mm')}`;
  // const height = (moment(dateTo).valueOf() - moment(dateFrom).valueOf()) / (1000 * 60);
  const marginTop = +moment(dateFrom).format('mm');

  const onEventClick = () => {
    setIsDeletePopupShown(!isDeletePopupShown);
  };

  const eventStyle = {
    // height,
    marginTop,
  };

  return (
    <div style={eventStyle} className="event" onClick={onEventClick}>
      <div className="event__title">{title}</div>
      <div className="event__time">{`${eventStart} - ${eventEnd}`}</div>
      <div className="event__description">{description}</div>
      {isDeletePopupShown && <Delete marginTop={marginTop} deletePopup={onDelete} id={id} />}
    </div>
  );
};

export default Event;

Event.propTypes = {
  onDelete: PropTypes.func.isRequired,
  event: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    dateFrom: PropTypes.string,
    dateTo: PropTypes.string,
  }),
};
