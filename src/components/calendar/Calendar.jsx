import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import Navigation from '../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import Modal from '../modal/Modal';
import { createEvents, deleteEvent, fetchEvents } from '../../gateway/events';
import Delete from '../delete/Delete';

import './calendar.scss';

class Calendar extends Component {
  state = {
    events: [],
  };

  componentDidMount() {
    this.onFetchEvents();
  }

  onFetchEvents = () => {
    fetchEvents()
      .then(result => {
        this.setState({
          events: result,
        });
      })
      .catch(() => {
        alert(`'Internal Server Error. Can't display events'`);
      });
  };

  onSubmit = eventData => {
    const { id, title, description, startTime, endTime, date } = eventData;
    const newEvent = {
      id,
      title,
      description,
      dateFrom: moment(`${date} ${startTime}`).format(),
      dateTo: moment(`${date} ${endTime}`).format(),
    };
    createEvents(newEvent)
      .then(() => {
        this.onFetchEvents();
      })
      .catch(() => {
        alert(`'Internal Server Error. Can't submit events'`);
      });
  };

  onDelete = e => {
    deleteEvent(e.target.dataset.id)
      .then(() => this.onFetchEvents())
      .catch(() => {
        alert(`'Internal Server Error. Can't delete events'`);
      });
  };

  render() {
    const { weekDates } = this.props;
    return (
      <section className="calendar">
        <Navigation weekDates={weekDates} />
        <div className="calendar__body">
          <div className="calendar__week-container">
            <Sidebar />
            <Week weekDates={weekDates} events={this.state.events} onDelete={this.onDelete} />
          </div>
        </div>
        {this.props.isShown && (
          <Modal onCloseButtonClick={this.props.handleCreateToggle} onSubmit={this.onSubmit} />
        )}
      </section>
    );
  }
}

export default Calendar;

Calendar.propTypes = {
  weekDates: PropTypes.array.isRequired,
  handleCreateToggle: PropTypes.func.isRequired,
  isShown: PropTypes.bool.isRequired,
};
