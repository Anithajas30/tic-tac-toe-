// src/components/WinnerModal.js
import React from 'react';
import Modal from 'react-modal';
import Confetti from 'react-confetti';
import './WinnerModal.css';

Modal.setAppElement('#root');

const WinnerModal = ({ isOpen, winner, onClose }) => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Winner Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <h1>RESULT..!!</h1>
        <h2>{winner ? `Winner: ${winner}` : 'It\'s a Draw!'}</h2>
        <button onClick={onClose} className="close-button">Close</button>
        {winner && <Confetti width={windowWidth} height={windowHeight} />}
      </div>
    </Modal>
  );
};

export default WinnerModal;
