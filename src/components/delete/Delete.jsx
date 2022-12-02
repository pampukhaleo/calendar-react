import React from 'react';

import './delete.scss';

const Delete = ({ deletePopup, id }) => (
  <button className="delete-event" onClick={deletePopup} data-id={id}>
    <i className="fas fa-trash-alt delete-event__icon"></i>
    Delete
  </button>
);

export default Delete;
