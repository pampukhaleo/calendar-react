import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import './day.scss';

import Hour from '../hour/Hour';
import RedLine from '../redLine/RedLine';

const Day = ({ dataDay, dayEvents, onDelete }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map(hour => {
        // getting all events from the day we will render
        const hourEvents = dayEvents.filter(event => {
          const convertHours = moment(event.dateFrom).format('H');
          return +convertHours === hour;
        });

        return (
          <div key={dataDay + hour}>
            <RedLine hour={hour} date={dataDay} />
            <Hour dataHour={hour} hourEvents={hourEvents} onDelete={onDelete} />
          </div>
        );
      })}
    </div>
  );
};

export default Day;

Day.propTypes = {
  dayEvents: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  dataDay: PropTypes.string.isRequired,
};
