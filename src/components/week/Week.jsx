import React from 'react';
import PropTypes from 'prop-types';

import './week.scss';

import Day from '../day/Day';

const Week = ({ weekDates, events, onDelete }) => (
  <div className="calendar__week">
    {weekDates.map(dayStart => {
      const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);
      const dayEvents = events.filter(
        event => new Date(event.dateFrom) > dayStart && new Date(event.dateTo) < new Date(dayEnd),
      );

      return (
        <Day
          key={dayStart}
          dataDay={dayStart}
          dayEvents={dayEvents}
          onDelete={onDelete}
        />
      );
    })}
  </div>
);

export default Week;

Week.propTypes = {
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
