import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import './modal.scss';

class Modal extends Component {
  state = {
    id: Math.random(),
    title: '',
    date: moment().format('YYYY-MM-DD'),
    startTime: moment().format('HH:mm'),
    endTime: moment().add(1, 'hour').format('HH:mm'),
    description: '',
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      id: Math.random(),
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.props.onCloseButtonClick();
  };

  render() {
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
                  value={this.state.date}
                />
                <input
                  type="time"
                  name="startTime"
                  className="event-form__field"
                  onChange={this.handleChange}
                  value={this.state.startTime}
                />
                <span>-</span>
                <input
                  type="time"
                  name="endTime"
                  className="event-form__field"
                  onChange={this.handleChange}
                  value={this.state.endTime}
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
