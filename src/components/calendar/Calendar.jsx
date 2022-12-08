import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Navigation from '../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import CreateEventModal from '../modal/CreateEventModal';
import { deleteEvent, fetchEvents } from '../../gateway/events';

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
        {this.props.showCreateEventModal && (
          <CreateEventModal
            onClose={this.props.onCloseButtonClick}
            events={this.state.events}
            fetchEvents={this.onFetchEvents}
          />
        )}
      </section>
    );
  }
}

export default Calendar;

Calendar.propTypes = {
  weekDates: PropTypes.array.isRequired,
  onCloseButtonClick: PropTypes.func.isRequired,
  showCreateEventModal: PropTypes.bool.isRequired,
};
