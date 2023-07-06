import React, { useContext } from "react";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log("user", user);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Container>
      <Navbar className='rounded' bg='light' variant='white' expand='lg'>
        <Navbar.Brand href='#home'>Cook Book</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mx-auto'>
            <Link className='me-2 text-dark' to='/'>
              Home
            </Link>
            <Link className='me-2 text-dark' to='/about'>
              About
            </Link>
            <Link className='me-2 text-dark' to='/blogs'>
              Blogs
            </Link>
          </Nav>

          {/* profile  */}

          <Nav>
            {user && <Nav.Link href='#deets'>{user.displayName}</Nav.Link>}

            {user ? (
              <Button className='btn btn-danger' onClick={handleLogOut}>
                Logout
              </Button>
            ) : (
              <Link to='/login'>
                <Button className='btn btn-primary'>Login</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
