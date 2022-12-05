import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';
import { getDisplayedMonth } from '../../utils/dateUtils';

const Header = ({ onNextWeek, onPrevWeek, onCurrentWeek, onCreateButtonClick, weekStartDate }) => (
  <header className="header">
    <button className="button create-event-btn" onClick={onCreateButtonClick}>
      <i className="fas fa-plus create-event-btn__icon"></i>
      Create
    </button>
    <div className="navigation">
      <button className="navigation__today-btn button" onClick={onCurrentWeek}>
        Today
      </button>
      <button className="icon-button navigation__nav-icon" onClick={onPrevWeek}>
        <i className="fas fa-chevron-left "></i>
      </button>
      <button className="icon-button navigation__nav-icon" onClick={onNextWeek}>
        <i className="fas fa-chevron-right"></i>
      </button>
      <span className="navigation__displayed-month">{getDisplayedMonth(weekStartDate)}</span>
    </div>
  </header>
);

export default Header;

Header.propTypes = {
  onNextWeek: PropTypes.func.isRequired,
  onPrevWeek: PropTypes.func.isRequired,
  onCurrentWeek: PropTypes.func.isRequired,
  onCreateButtonClick: PropTypes.func.isRequired,
  weekStartDate: PropTypes.instanceOf(Date).isRequired,
};
