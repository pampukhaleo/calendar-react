import React from 'react';

import { days } from '../../utils/dateUtils.js';

const Navigation = ({ weekDates }) => {
  return (
    <header className="calendar__header">
      {weekDates.map(dayDate => {
        const dayNumberClassName =
          new Date().getDate() === dayDate.getDate()
            ? `day-label__day-number today-circle`
            : 'day-label__day-number';

        return (
          <div className="calendar__day-label day-label">
            <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
            <span className={dayNumberClassName}>{dayDate.getDate()}</span>
          </div>
        );
      })}
    </header>
  );
};

export default Navigation;
