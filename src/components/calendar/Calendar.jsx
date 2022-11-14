import React, { Component } from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import Modal from '../modal/Modal';
import events, { createEvents, fetchEvents } from '../../gateway/events';

import './calendar.scss';
import moment from 'moment';

class Calendar extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    this.onFetchEvents();
  }

  onFetchEvents = () => {
    fetchEvents().then(result =>
      this.setState({
        events: result,
      }),
    );
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
      .then(() => this.onFetchEvents());
  };

  onDelete = e => {
    const updatedEvents = this.state.events
      .slice()
      .filter(event => +e.target.dataset.id !== event.id);

    this.setState({
      events: updatedEvents,
    });
  };

  render() {
    const { weekDates } = this.props;
    console.log(this.state.events);
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
