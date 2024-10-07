import React, { useState} from 'react';
import  AdaptiveModal from '@/components/AdaptiveModal'
import Sig from '@/components/SignInModalContent'
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const CustomNavbar: React.FC = () => {

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleButtonClick = (title: string, content: React.ReactNode) => {
    setModalTitle(title);
    setModalContent(content);
    
    handleShow();
  };

  return (
    <>
      {/* Línea naranja superior */}
      <div className="top-line">
      <p >#1 Home Improvement Retailer</p>
      </div>

      {/* Barra de navegación */}
      <Navbar expand="lg" className="custom-navbar">
        <Container fluid>
          {/* Logo de Home Depot */}
          <Navbar.Brand href="#">
            <img 
              src="images/home.png" 
              alt="Home Depot Logo" 
              className="home-depot-logo" 
            />
          </Navbar.Brand>

          <div className="icon-section">
          <img src="images/location.png" alt="Icon 1" className="nav-icon" />  Mcallen
          <span className="icon-text">10PM</span> {/* Aquí está el texto "10PM" */}
          <img src="images/truck.png" alt="Icon 3" className="nav-icon" />
        </div>

          {/* Barra de búsqueda */}
          <Form className="d-flex mx-auto search-bar">
            <FormControl
              type="search"
              placeholder="What can we help you find today?"
              className="me-2"
              aria-label="Search"
            />
            <Button className="search-button">
              <img src="/images/search.png" alt="Search Icon" className="button-icon" />
            </Button>
          </Form>

          {/* Navegación de íconos */}
          <Nav className="ms-auto icon-section">
  <Nav.Link href="#">
    <div className="icon-container">
      <img src="/images/bucket.png" alt="Location Icon" className="nav-icon" />
      <span className="icon-text">Shop All</span>
    </div>
  </Nav.Link>

  <Nav.Link href="#">
    <div className="icon-container">
      <img src="/images/drill.png" alt="Favorites Icon" className="nav-icon" />
      <span className="icon-text">Services</span>
    </div>
  </Nav.Link>

  <Nav.Link href="#">
    <div className="icon-container">
      <img src="/images/hammer.png" alt="Orders Icon" className="nav-icon" />
      <span className="icon-text">DIY</span>
    </div>
  </Nav.Link>

  <Nav.Link href="#">
    <div className="icon-container">
      <img src="/images/me.png" alt="Account Icon" className="nav-icon" onClick={() => handleButtonClick('Sign In or Create an Account', <Sig /> )}/>
      <span className="icon-text">Me</span>
    </div>
    
  </Nav.Link>

  <Nav.Link href="#">
    <div className="icon-container">
      <img src="/images/cart.png" alt="Cart Icon" className="nav-icon" />
      <span className="icon-text">Cart</span>
    </div>
  </Nav.Link>
</Nav>
        </Container>
      </Navbar>
      <AdaptiveModal 
        title={modalTitle}
        show={showModal}
        onHide={handleClose}
        side='right'
      >
        {modalContent}
      </AdaptiveModal>
    </>
  );
};

export default CustomNavbar;
