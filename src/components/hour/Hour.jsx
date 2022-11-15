import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import Event from '../event/Event';

const Hour = ({ dataHour, hourEvents, onDelete }) => (
  <div className="calendar__time-slot" data-time={dataHour + 1}>
    {/* if no events in the current hour nothing will render here */}
    {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
      const eventStart = `${moment(dateFrom).format('hh')}:${moment(dateFrom).format('mm')}`;
      const eventEnd = `${moment(dateTo).format('hh')}:${moment(dateTo).format('mm')}`;

      return (
        <Event
          onDelete={onDelete}
          key={id}
          id={id}
          // calculating event height = duration of event in minutes
          height={(moment(dateTo).valueOf() - moment(dateFrom).valueOf()) / (1000 * 60)}
          marginTop={+moment(dateFrom).format('mm')}
          time={`${eventStart} - ${eventEnd}`}
          title={title}
        />
      );
    })}
  </div>
);

export default Hour;

Hour.propTypes = {
  dataHour: PropTypes.number.isRequired,
  hourEvents: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
