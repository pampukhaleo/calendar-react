import React, { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './createEventModal.scss';
import { handleValidation } from '../../utils/dateUtils';
import Modal from './Modal';
import { createEvents } from '../../gateway/events';

const CreateEventModal = ({ onClose, events, fetchEvents }) => {
  const [fields, setFields] = useState({
    id: Math.random(),
    title: '',
    date: moment().format('YYYY-MM-DD'),
    startTime: moment().format('HH:mm'),
    endTime: moment().add(60, 'minutes').format('HH:mm'),
    description: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFields(prevFields => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const onSubmit = eventData => {
    const { id, title, description, startTime, endTime, date } = eventData;
    const newEvent = {
      id,
      title,
      description,
      dateFrom: moment(`${date} ${startTime}`).format(),
      dateTo: moment(`${date} ${endTime}`).format(),
    };

    createEvents(newEvent)
      .then(() => fetchEvents())
      .catch(() => alert(`Internal Server Error. Can't submit events`));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isFormValid = handleValidation({ fields }, events);
    if (isFormValid) {
      onSubmit(fields);
      onClose();
    } else {
      alert('Event with that time range already exists');
    }
  };

  const { date, startTime, endTime } = fields;
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <Modal onClose={onClose}>
            <form className="event-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="event-form__field"
                onChange={handleChange}
                required
              />
              <div className="event-form__time">
                <input
                  type="date"
                  name="date"
                  className="event-form__field"
                  onChange={handleChange}
                  value={date}
                />
                <input
                  type="time"
                  name="startTime"
                  className="event-form__field"
                  onChange={handleChange}
                  value={startTime}
                />
                <span>-</span>
                <input
                  type="time"
                  name="endTime"
                  className="event-form__field"
                  onChange={handleChange}
                  value={endTime}
                />
              </div>
              <textarea
                name="description"
                placeholder="Description"
                className="event-form__field"
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="event-form__submit-btn">
                Create
              </button>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default CreateEventModal;

CreateEventModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired,
  fetchEvents: PropTypes.func.isRequired,
};
