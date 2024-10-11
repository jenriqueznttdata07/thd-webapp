import React, { useState } from 'react';
import MySidebar from '@/components/AdaptiveModal'; 
import Sig from '@/components/SignInModalContent';
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { useAppSelector } from '@/app/store';




const CustomNavbar: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [sidebarTitle, setSidebarTitle] = useState('');
  const [sidebarContent, setSidebarContent] = useState<React.ReactNode>(null);

  const isAuth = useAppSelector((state) => state.auth.isAuth);

  const handleShow = () => setShowSidebar(true);
  const handleClose = () => setShowSidebar(false);

  const handleButtonClick = (title: string, content: React.ReactNode) => {
    setSidebarTitle(title);
    setSidebarContent(content);
    
    handleShow();
  };

  return (
    <>
      {/* Línea naranja superior */}
      <div className="top-line">
        <p>#1 Home Improvement Retailer</p>
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
              <div className="icon-container"
               onClick={() => handleButtonClick(isAuth ? 'Hello!':'Sign In or Create an Account', <Sig />)} >
                <img 
                  src="/images/me.png" 
                  alt="Account Icon" 
                  className="nav-icon" 
                />
                <span className="icon-text"> {isAuth ? 'Me' : "Login"}</span>
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

      <MySidebar 
        title={sidebarTitle}
        show={showSidebar}
        onHide={handleClose}
        side='right'
      >
        {sidebarContent}
      </MySidebar>
    </>
  );
};

export default CustomNavbar;
