import React from 'react';
import PropTypes from 'prop-types';

import { days } from '../../utils/dateUtils.js';

const Navigation = ({ weekDates }) => (
  <header className="calendar__header">
    {weekDates.map(dayDate => {
      const dayNumberClassName =
        new Date().getDate() === dayDate.getDate() &&
        new Date().getMonth() === dayDate.getMonth() &&
        new Date().getDay() === dayDate.getDay()
          ? `day-label__day-number today-circle`
          : 'day-label__day-number';

      return (
        <div className="calendar__day-label day-label" key={dayDate.getDate()}>
          <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
          <span className={dayNumberClassName}>{dayDate.getDate()}</span>
        </div>
      );
    })}
  </header>
);

export default Navigation;

Navigation.propTypes = {
  weekDates: PropTypes.array.isRequired,
};
