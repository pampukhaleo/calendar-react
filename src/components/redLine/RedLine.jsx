import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './redline.scss';

const RedLine = ({ hour, date }) => {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentMonth = new Date().getMonth();
  const currentHour = new Date().getHours();
  const currentDate = new Date().getDate();
  const currentMinutes = new Date().getMinutes();
  return (
    <div>
      {currentHour === hour &&
      currentDate === new Date(date).getDate() &&
      currentMonth === new Date(date).getMonth() ? (
        <div style={{ marginTop: currentMinutes }} className="red-line"></div>
      ) : null}
    </div>
  );
};

export default RedLine;

RedLine.propTypes = {
  hour: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};
