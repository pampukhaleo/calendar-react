import React, { useEffect, useState } from 'react';
import moment from 'moment';
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
      currentDate === +moment(date).format('DD') - 1 &&
      currentMonth + 1 === +moment(date).format('MM') ? (
        <div style={{ marginTop: currentMinutes }} className="red-line"></div>
      ) : null}
    </div>
  );
};

export default RedLine;

RedLine.propTypes = {
  hour: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};
