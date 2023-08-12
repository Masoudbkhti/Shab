import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

const PopUp = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Popup"
    >
      <div>
        <h2>Popup Content</h2>
        <p>This is the content of the popup window.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default PopUp;
