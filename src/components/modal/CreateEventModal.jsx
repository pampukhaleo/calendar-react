import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import './createEventModal.scss';
import { handleValidation } from '../../utils/dateUtils';

class CreateEventModal extends Component {
  state = {
    fields: {
      id: Math.random(),
      title: '',
      date: moment().format('YYYY-MM-DD'),
      startTime: moment().format('HH:mm'),
      endTime: moment().add(60, 'minutes').format('HH:mm'),
      description: '',
    },
    errors: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    const { fields } = this.state;
    fields[name] = value;

    this.setState({ fields });
    handleValidation(this.state, this.props.events);
  };

  handleSubmit = e => {
    e.preventDefault();

    if (handleValidation(this.state, this.props.events)) {
      this.props.onSubmit(this.state.fields);
      this.props.onClose();
    } else {
      alert('Event with that time range already exists');
    }
  };

  render() {
    const { date, startTime, endTime } = this.state.fields;
    return (
      <div className="modal overlay">
        <div className="modal__content">
          <div className="create-event">
            <button className="create-event__close-btn" onClick={this.props.onClose}>
              +
            </button>
            <form className="event-form" onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="event-form__field"
                onChange={this.handleChange}
                required
              />
              <div className="event-form__time">
                <input
                  type="date"
                  name="date"
                  className="event-form__field"
                  onChange={this.handleChange}
                  value={date}
                />
                <input
                  type="time"
                  name="startTime"
                  className="event-form__field"
                  onChange={this.handleChange}
                  value={startTime}
                />
                <span>-</span>
                <input
                  type="time"
                  name="endTime"
                  className="event-form__field"
                  onChange={this.handleChange}
                  value={endTime}
                />
              </div>
              <textarea
                name="description"
                placeholder="Description"
                className="event-form__field"
                onChange={this.handleChange}
              ></textarea>
              <button type="submit" className="event-form__submit-btn">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEventModal;

CreateEventModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
