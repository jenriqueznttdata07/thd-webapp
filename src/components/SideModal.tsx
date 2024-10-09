import React from 'react';
import '../styles/SideModal.css';

interface SideModalProps {
  show: boolean;
  onClose: () => void;
}

const SideModal: React.FC<SideModalProps> = ({ show, onClose }) => {
  return (
    <>
      {show && <div className="backdrop" onClick={onClose} />}
      <div className={`side-modal ${show ? 'show' : ''}`}>
        <div className="modal-header">
          Signing in just got easier.
        </div>
        <div className="icon-container">
          <img src="icon1.png" alt="Icon 1" />
          <img src="icon2.png" alt="Icon 2" />
          <img src="icon3.png" alt="Icon 3" />
        </div>
        <button className="orange-button">Text me a code to sign in</button>
        <button className="orange-button2">Email me a Code to sign in</button>
        <a href="#" className="link">What is this?</a>
        <div className="divider" />
        <a href="#" className="link2">No thanks</a>
      </div>
    </>
  );
};

export default SideModal;