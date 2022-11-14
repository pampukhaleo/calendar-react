const events = [
  {
    id: 1,
    title: 'Go to the gym',
    description: 'some text here',
    dateFrom: new Date(2022, 11, 11, 10, 15),
    dateTo: new Date(2022, 11, 11, 15, 0),
  },
  {
    id: 2,
    title: 'Go to the school',
    description: 'hello, 2 am',
    dateFrom: new Date(2020, 8, 16, 10, 15),
    dateTo: new Date(2020, 8, 16, 11, 0),
  },
  {
    id: 3,
    title: 'Lunch',
    description: '',
    dateFrom: new Date(2020, 8, 17, 10, 30),
    dateTo: new Date(2020, 8, 17, 11, 30),
  },
  {
    id: 4,
    title: 'Meet friend',
    description: 'at the cafe',
    dateFrom: new Date(2020, 8, 25, 10, 30),
    dateTo: new Date(2020, 8, 25, 11, 0),
  },
];

export default events;

const baseUrl = `https://636fb347f2ed5cb047e33dbd.mockapi.io/api/events`;

export const fetchEvents = () => {
  return fetch(baseUrl)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
};

export const createEvents = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Error on create');
    }
  });
};

export const deleteTask = id => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error('Error on delete');
    }
  });
};

export const updateStatusTask = ( id, taskData) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Error on status update');
    }
  });
}

