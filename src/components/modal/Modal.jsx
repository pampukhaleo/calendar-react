import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import './modal.scss';

class Modal extends Component {
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

  handleValidation() {
    const { fields } = this.state;
    let errors = '';
    let formIsValid = true;
    // Date
    this.props.events.forEach(event => {
      const eventDate = moment(event.dateFrom, 'YYYY-MM-DD').format('YYYY-MM-DD');
      const eventStartTime = new Date(event.dateFrom).getTime();
      const eventEndTime = new Date(event.dateTo).getTime();
      if (
        eventDate === fields.date &&
        eventStartTime <= new Date(`${fields.date} ${fields.endTime}`).getTime() &&
        eventEndTime >= new Date(`${fields.date} ${fields.startTime}`).getTime()
      ) {
        formIsValid = false;
        errors = 'Event with that time range already exists';
      }
    });
    this.setState({ errors });
    return formIsValid;
  }

  handleChange = e => {
    const { name, value } = e.target;
    const { fields } = this.state;
    fields[name] = value;

    this.setState({ fields });
    this.handleValidation();
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.handleValidation()) {
      this.props.onSubmit(this.state.fields);
      this.props.onCloseButtonClick();
    } else {
      alert(this.state.errors);
    }
  };

  render() {
    const { date, startTime, endTime } = this.state.fields;
    return (
      <div className="modal overlay">
        <div className="modal__content">
          <div className="create-event">
            <button className="create-event__close-btn" onClick={this.props.onCloseButtonClick}>
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

export default Modal;

Modal.propTypes = {
  onCloseButtonClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
