import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../providers/AuthProvider";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

const Header = () => {
  const { user, LogOut } = useContext(AuthContext);
  // console.log(user?.photoURL);

  const handleLogout = () => {
    LogOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg=""
      variant="light"
      className="shadow p-3 mb-5 bg-body-tertiary rounded"
    >
      <Container>
        <Navbar.Brand>
          {" "}
          <img
            src={"https://dev.octavian.design/cookbook/images/logo.png"}
            alt=""
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto d-flex align-items-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/recipes">Recipes</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>

            <Nav.Link href="/register">Registration</Nav.Link>

            <OverlayTrigger
              overlay={
                <Tooltip id="my-tooltip-id">{user?.displayName}</Tooltip>
              }
            >
              <img className="rounded-circle" src={user?.photoURL} alt="" />
            </OverlayTrigger>

            {user?.email ? (
              <Nav.Link>
                <Button className="rounded" onClick={handleLogout}>
                  Logout
                </Button>
              </Nav.Link>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
