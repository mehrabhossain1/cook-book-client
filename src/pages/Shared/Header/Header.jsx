import React from "react";
import { Button, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Navbar.Brand href='#home'>Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mx-auto'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/blogs'>Blogs</Link>
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
