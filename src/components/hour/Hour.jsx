import React from 'react';
import PropTypes from 'prop-types';

import Event from '../event/Event';

const Hour = ({ dataHour, hourEvents, onDelete }) => (
  <div className="calendar__time-slot" data-time={dataHour + 1}>
    {hourEvents.map(event => (
      <Event key={event.id} event={event} onDelete={onDelete} />
    ))}
  </div>
);

export default Hour;

Hour.propTypes = {
  dataHour: PropTypes.number.isRequired,
  hourEvents: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
