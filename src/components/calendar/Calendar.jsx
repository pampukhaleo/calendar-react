import React, { Component } from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import Modal from '../modal/Modal';
import events from '../../gateway/events';

import './calendar.scss';

class Calendar extends Component {
  state = {
    events,
  };

  onSubmit = eventData => {
    const { id, title, description, startTime, endTime, date } = eventData
    const newEvent = {
      id,
      title,
      description,
      dateFrom: new Date(`${date}T${startTime}`),
      dateTo: new Date(`${date}T${endTime}`),
    }
    const updatedEvents = this.state.events
      .slice()
      .concat(newEvent)
    this.setState({
      events: updatedEvents
    })
  }

  onDelete = event => {
    console.log(event.target);
  }

  render() {
    const { weekDates } = this.props;

    return (
      <section className="calendar">
        <Navigation weekDates={weekDates} />
        <div className="calendar__body">
          <div className="calendar__week-container">
            <Sidebar />
            <Week weekDates={weekDates} events={this.state.events} onDelete={this.onDelete}/>
          </div>
        </div>
        {this.props.isShown && <Modal onCloseButtonClick={this.props.handleCreateToggle} onSubmit={this.onSubmit}/>}
      </section>
    );
  }
}

export default Calendar;
