import React, { useContext } from "react";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <Container>
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
          {user && <Nav.Link href='#deets'>{user.displayName}</Nav.Link>}

          {user ? (
            <Button>Logout</Button>
          ) : (
            <Link to='/login'>
              <Button>Login</Button>
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Container>
  );
};

export default Header;
