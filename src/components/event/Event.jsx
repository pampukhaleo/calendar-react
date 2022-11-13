import React, { useEffect, useRef } from 'react';

import './event.scss';

const Event = ({ height, marginTop, title, time, id, onDelete }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  // const ref = useRef(null);
  //
  // useEffect(() => {
  //   const handleClick = event => {
  //     console.log(event);
  //   };
  //
  //   const element = ref.current;
  //
  //   element.addEventListener('click', handleClick);
  //
  //   // 👇️ remove the event listener when component unmounts
  //   return () => {
  //     element.removeEventListener('click', handleClick);
  //   };
  // }, []);

  return (
    <div style={eventStyle} className="event" data-id={id} onClick={onDelete}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
    </div>
  );
};

export default Event;
