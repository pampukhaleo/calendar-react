import React from 'react';

import './delete.scss';

const Delete = ({  onDelete, id }) => {
  return (
    <button className="delete-event" onClick={onDelete} data-id={id}>
      <i className="fas fa-trash-alt delete-event__icon"></i>
      Delete
    </button>
  );
};

export default Delete;
