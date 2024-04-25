import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange } from './utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [isEventModalShown, setIsEventModalShown] = useState(false);
  const [weekStartDate, setWeekStartDate] = useState(new Date());

  const handleCreateEventModal = () => {
    setIsEventModalShown(!isEventModalShown);
  };

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  return (
    <>
      <Header
        onCreateButtonClick={handleCreateEventModal}
        setWeekStartDate={setWeekStartDate}
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
