import React, {useEffect} from 'react';
import '../styles/AdaptiveModal.css';

interface MySidebarProps {
  title: string;
  children: React.ReactNode;
  show: boolean;
  onHide: () => void;
  side?: 'left' | 'right';
}

const MySidebar: React.FC<MySidebarProps> = ({ title, children, show, onHide, side }) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add('modal-open'); // Agregar clase para bloquear scroll
    } else {
      document.body.classList.remove('modal-open'); // Quitar clase para permitir scroll
    }

    return () => {
      document.body.classList.remove('modal-open'); // Limpiar clase al desmontar
    };
  }, [show]);
  return (
    <>
      {show && <div className="backdrop-custom" onClick={onHide} />}
      <div className={`sidebar ${side} ${show ? 'show' : ''}`}>
        <div className="sidebar-header">
          <h5 className="modal-title-custom">{title}</h5>
          <button className="close" onClick={onHide}>&times;</button>
        </div>
        <div className="sidebar-body">
          {children}
        </div>
      </div>
    </>
  );
};

export default MySidebar;