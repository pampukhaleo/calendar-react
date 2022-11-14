import React from 'react';
import Hour from '../hour/Hour';

import './day.scss';

const Day = ({ dataDay, dayEvents, onDelete }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  const currentHour = new Date().getHours();
  const currentDate = new Date().getDate();
  const currentMinutes = new Date().getMinutes()

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map(hour => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);

        return (
          <>
            {currentHour === hour && currentDate === dataDay
              ? (<div style={{ marginTop: currentMinutes }} className="red-line"></div>)
              : null
            }
            <Hour
              key={dataDay + hour}
              dataDay={dataDay}
              dataHour={hour}
              hourEvents={hourEvents}
              onDelete={onDelete}
            />
          </>
        );
      })}
    </div>
  );
};

export default Day;
