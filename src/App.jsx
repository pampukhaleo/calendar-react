import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());

  const handleWeekRangeIncrease = () => {
    setWeekStartDate(date => {
      date.setDate(date.getDate() + 7);
      return new Date(date);
    });
  };

  const handleWeekRangeDecrease = () => {
    setWeekStartDate(date => {
      date.setDate(date.getDate() - 7);
      return new Date(date);
    });
  };

  const handleTodayButton = () => {
    setWeekStartDate(new Date());
  };

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  return (
    <>
      <Header
        onIncreaseBtnClick={handleWeekRangeIncrease}
        onDecreaseBtnClick={handleWeekRangeDecrease}
        onTodayButtonClick={handleTodayButton}
      />
      <Calendar weekDates={weekDates} />
    </>
  );
};

export default App;
