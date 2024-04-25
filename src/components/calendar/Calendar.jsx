import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Navigation from '../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import CreateEventModal from '../modal/CreateEventModal';
import { deleteEvent, fetchEvents } from '../../gateway/events';

import './calendar.scss';

const Calendar = ({ weekDates, onCloseButtonClick, showCreateEventModal }) => {
  const [events, setEvents] = useState([]);

  const onFetchEvents = () => {
    fetchEvents()
      .then(result => {
        setEvents(result);
      })
      .catch(() => {
        alert(`'Internal Server Error. Can't display events'`);
      });
  };

  useEffect(() => {
    onFetchEvents();
  }, []);

  const onDelete = e => {
    deleteEvent(e.target.dataset.id)
      .then(() => onFetchEvents())
      .catch(() => {
        alert(`'Internal Server Error. Can't delete events'`);
      });
  };

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week weekDates={weekDates} events={events} onDelete={onDelete} />
        </div>
      </div>
      {showCreateEventModal && (
        <CreateEventModal
          onClose={onCloseButtonClick}
          events={events}
          fetchEvents={onFetchEvents}
        />
      )}
    </section>
  );
};

export default Calendar;

Calendar.propTypes = {
  weekDates: PropTypes.array.isRequired,
  onCloseButtonClick: PropTypes.func.isRequired,
  showCreateEventModal: PropTypes.bool.isRequired,
};
