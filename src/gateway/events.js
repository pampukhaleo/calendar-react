const baseUrl = `https://636fb347f2ed5cb047e33dbd.mockapi.io/api/events`;

export const fetchEvents = () =>
  fetch(baseUrl).then(res => {
    if (!res.ok) {
      throw new Error('Error on fetch');
    }
    return res.json();
  });

export const createEvents = taskData =>
  fetch(baseUrl, {
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

export const deleteEvent = id =>
  fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error('Error on delete');
    }
  });
