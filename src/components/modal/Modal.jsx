import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ onClose, children }) => (
  <div>
    <button className="create-event__close-btn" onClick={onClose}>
      +
    </button>
    {children}
  </div>
);

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
