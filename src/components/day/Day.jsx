import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Hour from '../hour/Hour';
import RedLine from '../redLine/RedLine';

const Day = ({ dataDay, dayEvents, onDelete }) => {
  const hours = Array(24)
    .fill()
    .map((_, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map(hour => {
        const hourEvents = dayEvents.filter(event => {
          const eventStartHour = moment(event.dateFrom).hours();
          return eventStartHour === hour;
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
  dataDay: PropTypes.instanceOf(Date).isRequired,
};
