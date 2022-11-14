import React from 'react';

import './redline.scss'

const RedLine = ({ hour, date }) => {
  const currentHour = new Date().getHours();
  const currentDate = new Date().getDate();
  const currentMinutes = new Date().getMinutes()

  return (
    <div>
      {currentHour === hour && currentDate === date
        ? (<div style={{ marginTop: currentMinutes }} className="red-line"></div>)
        : null
      }
    </div>
  )
}

export default RedLine;



