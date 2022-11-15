import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

import { GetDisplayedMonth } from '../../utils/dateUtils';

const Header = ({
  onIncreaseBtnClick,
  onDecreaseBtnClick,
  onTodayButtonClick,
  onCreateButtonClick,
  weekStartDate,
}) => (
  <header className="header">
    <button className="button create-event-btn" onClick={onCreateButtonClick}>
      <i className="fas fa-plus create-event-btn__icon"></i>
      Create
    </button>
    <div className="navigation">
      <button className="navigation__today-btn button" onClick={onTodayButtonClick}>
        Today
      </button>
      <button className="icon-button navigation__nav-icon" onClick={onDecreaseBtnClick}>
        <i className="fas fa-chevron-left "></i>
      </button>
      <button className="icon-button navigation__nav-icon" onClick={onIncreaseBtnClick}>
        <i className="fas fa-chevron-right"></i>
      </button>
      <span className="navigation__displayed-month">
        <GetDisplayedMonth date={weekStartDate} />
      </span>
    </div>
  </header>
);

export default Header;

Header.propTypes = {
  onIncreaseBtnClick: PropTypes.func.isRequired,
  onDecreaseBtnClick: PropTypes.func.isRequired,
  onTodayButtonClick: PropTypes.func.isRequired,
  onCreateButtonClick: PropTypes.func.isRequired,
  weekStartDate: PropTypes.instanceOf(Date).isRequired,
};
