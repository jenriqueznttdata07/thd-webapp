import React from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Adaptivemodal.css';

interface MyModalProps {
  title: string;
  children: React.ReactNode;
  show: boolean; // Prop para controlar la visibilidad
  onHide: () => void; // Prop para manejar el cierre
  side?: 'left' | 'right'; // Prop para especificar el lado

}

const MyModal: React.FC<MyModalProps> = ({ title, children, show, onHide, side}) => {
    
  return (
    <Modal show={show} onHide={onHide} className={`custom-modal ${side}`}>
      <Modal.Header closeButton className="modal-header-fixed">
      <Modal.Title className="modal-title-custom">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal>
  );
};
    
export default MyModal;