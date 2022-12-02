import React from 'react';
import PropTypes from 'prop-types';

import { dayNumberClassName, days } from '../../utils/dateUtils.js';

const Navigation = ({ weekDates }) => (
  <header className="calendar__header">
    {weekDates.map(dayDate => {
      return (
        <div className="calendar__day-label day-label" key={dayDate.getDate()}>
          <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
          <span className={dayNumberClassName(dayDate)}>{dayDate.getDate()}</span>
        </div>
      );
    })}
  </header>
);

export default Navigation;

Navigation.propTypes = {
  weekDates: PropTypes.array.isRequired,
};
