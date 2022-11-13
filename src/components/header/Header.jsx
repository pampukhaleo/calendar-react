import React from 'react';

import './header.scss';

const Header = ({
  onIncreaseBtnClick,
  onDecreaseBtnClick,
  onTodayButtonClick,
  onCreateButtonClick,
}) => {
  return (
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
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon" onClick={onIncreaseBtnClick}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month"></span>
      </div>
    </header>
  );
};

export default Header;
