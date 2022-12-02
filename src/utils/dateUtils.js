import moment from 'moment';
import PropTypes from 'prop-types';

export const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const getWeekStartDate = date => {
  const dateCopy = new Date(date);
  const dayOfWeek = dateCopy.getDay();
  const difference =
    dayOfWeek === 0
      ? -6 // for Sunday
      : 1 - dayOfWeek;

  const monday = new Date(dateCopy.setDate(date.getDate() + difference));
  return new Date(monday.getFullYear(), monday.getMonth(), monday.getDate());
};

export const generateWeekRange = startDate => {
  const result = [];
  for (let i = 0; i < 7; i += 1) {
    const base = new Date(startDate);
    result.push(new Date(base.setDate(base.getDate() + i)));
  }
  return result;
};

export const getDisplayedMonth = date => {
  const weekStart = getWeekStartDate(date);
  const weekEnd = moment(date).add(6, 'days').toDate();
  const startMonth = weekStart.getMonth();
  const startYear = weekStart.getFullYear();
  const endMonth = weekEnd.getMonth();
  const endYear = weekEnd.getFullYear();
  const isSameMonth = startMonth === endMonth;
  if (isSameMonth) {
    return `${months[startMonth]} ${startYear}`;
  }
  const isSameYear = startYear === endYear;
  return isSameYear
    ? `${months[startMonth]} - ${months[endMonth]} ${startYear}`
    : `${months[startMonth]} ${startYear} - ${months[endMonth]} ${endYear}`;
};

export const handleValidation = (data, events) => {
  const { fields } = data;
  let formIsValid = true;
  // Date
  events.forEach(event => {
    const eventDate = moment(event.dateFrom, 'YYYY-MM-DD').format('YYYY-MM-DD');
    const eventStartTime = new Date(event.dateFrom).getTime();
    const eventEndTime = new Date(event.dateTo).getTime();
    if (
      eventDate === fields.date &&
      eventStartTime <= new Date(`${fields.date} ${fields.endTime}`).getTime() &&
      eventEndTime >= new Date(`${fields.date} ${fields.startTime}`).getTime()
    ) {
      formIsValid = false;
    }
  });
  return formIsValid;
};
