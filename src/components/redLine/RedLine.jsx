import React from 'react';

import './redline.scss'
import moment from 'moment';

const RedLine = ({ hour, date }) => {
  const currentHour = new Date().getHours();
  // console.log(hour);
  // console.log(currentHour);
  const currentDate = new Date().getDate();
  console.log('cure date', currentDate);
  console.log(+moment(date).format('DD'));
  const currentMinutes = new Date().getMinutes()

  return (
    <div>
      {currentHour === hour && currentDate === (+moment(date).format('DD') -1)
        ? (<div style={{ marginTop: currentMinutes }} className="red-line"></div>)
        : null
      }
    </div>
  )
}

export default RedLine;



