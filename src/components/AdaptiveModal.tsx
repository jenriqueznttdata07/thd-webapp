import React from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AdaptiveModal.css';

interface MyModalProps {
  title: string;
  children: React.ReactNode;
  show: boolean; // Prop para controlar la visibilidad
  onHide: () => void; // Prop para manejar el cierre
  side?: 'left' | 'right'; // Prop para especificar el lado

}

const MyModal: React.FC<MyModalProps> = ({ title, children, show, onHide, side}) => {
    
  return (
    <>
    {show && <div className="backdrop-custom" onClick={onHide} />} {/* Backdrop personalizado */}
    <Modal show={show} onHide={onHide} className={`custom-modal ${side}`} backdrop="static" keyboard={false}>
      <Modal.Header closeButton className="modal-header-fixed">
      <Modal.Title className="modal-title-custom">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal>
   </>
  );
};
    
export default MyModal;