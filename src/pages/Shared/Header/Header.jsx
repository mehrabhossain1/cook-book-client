import React from "react";
import { Button, Nav, NavDropdown, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Navbar.Brand href='#home'>Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mx-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#about'>About</Nav.Link>
          <Nav.Link href='#services'>Blog</Nav.Link>
          <Nav.Link href='#contact'>Contact</Nav.Link>
        </Nav>

        {/* profile  */}

        <Nav>
          <Nav.Link href='#deets'>User profile pic</Nav.Link>
          <Nav.Link eventKey={2} href='#memes'>
            <Button>Login</Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
