import React, { useState } from 'react';

import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange } from './utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [isEventModalShown, setIsEventModalShown] = useState(false);

  const handleCreateEventModal = () => {
    setIsEventModalShown(!isEventModalShown);
  };

  const handleNextWeek = () => {
    setWeekStartDate(date => {
      date.setDate(date.getDate() + 7);
      return new Date(date);
    });
  };

  const handlePrevWeek = () => {
    setWeekStartDate(date => {
      date.setDate(date.getDate() - 7);
      return new Date(date);
    });
  };

  const handleCurrentWeek = () => {
    setWeekStartDate(new Date());
  };

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  return (
    <>
      <Header
        onNextWeek={handleNextWeek}
        onPrevWeek={handlePrevWeek}
        onCurrentWeek={handleCurrentWeek}
        onCreateButtonClick={handleCreateEventModal}
        weekStartDate={weekStartDate}
      />
      <Calendar
        weekDates={weekDates}
        onCloseButtonClick={handleCreateEventModal}
        showCreateEventModal={isEventModalShown}
      />
    </>
  );
};

export default App;
