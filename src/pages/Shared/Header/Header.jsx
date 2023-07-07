import React, { useContext } from "react";
import {
  Button,
  Container,
  Image,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log("user", user);

  // logout
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => {
        console.error(err);
      });
  };

  // active link indicate
  const activeLink = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <Container>
      <Navbar className='rounded' bg='light' variant='white' expand='lg'>
        <Navbar.Brand href='#home'>Cook Book</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mx-auto'>
            <NavLink style={activeLink} className='me-2 text-dark' to='/'>
              Home
            </NavLink>
            <NavLink style={activeLink} className='me-2 text-dark' to='/blogs'>
              Blogs
            </NavLink>
          </Nav>

          {/* profile  */}

          <Nav>
            {user && (
              <img
                data-toggle='tooltip'
                data-placement='left'
                title={user.displayName}
                className='me-2 w-25 rounded-circle'
                src={user.photoURL}
                alt=''
              />
            )}

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
