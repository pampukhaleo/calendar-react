import React from 'react';
import Day from '../day/Day';

import './week.scss';
import moment from 'moment';

const Week = ({ weekDates, events, onDelete }) => {
  return (
    <div className="calendar__week">
      {weekDates.map(dayStart => {
        const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);
        const convertStartDate = moment(dayStart).format("YYYY-MM-DDThh:mm:ssZ")
        const convertEndDate = moment(dayEnd).format("YYYY-MM-DDThh:mm:ssZ")
        //getting all events from the day we will render
        const dayEvents = events.filter(
          event => {
            return event.dateFrom > convertStartDate && event.dateTo < convertEndDate
          },
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
};

export default Week;
