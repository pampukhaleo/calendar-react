import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import './week.scss';

import Day from '../day/Day';

const Week = ({ weekDates, events, onDelete }) => (
  <div className="calendar__week">
    {weekDates.map(dayStart => {
      const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);
      const convertStartDate = moment(dayStart).format('YYYY-MM-DDTHH:mm:ssZ');
      const convertEndDate = moment(dayEnd).format('YYYY-MM-DDTHH:mm:ssZ');
      // getting all events from the day we will render
      const dayEvents = events.filter(
        event => event.dateFrom > convertStartDate && event.dateTo < convertEndDate,
      );

      return (
        <Day
          key={convertStartDate}
          dataDay={convertEndDate}
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
