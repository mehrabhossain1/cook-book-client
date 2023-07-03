import React, { useContext } from "react";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log("user", user);

  return (
    <Container>
      <Navbar bg='white' variant='white' expand='lg'>
        <Navbar.Brand href='#home'>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mx-auto'>
            <Link className='me-2' to='/'>
              Home
            </Link>
            <Link className='me-2' to='/about'>
              About
            </Link>
            <Link className='me-2' to='/blogs'>
              Blogs
            </Link>
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
