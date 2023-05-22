import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../providers/AuthProvider";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          <Nav className="ms-auto d-flex align-items-center">
            <Link className="me-2" to="/home">
              Home
            </Link>
            <Link className="me-2" to="/recipes">
              Recipes
            </Link>
            <Link className="me-2" to="/blogs">
              Blogs
            </Link>

            <Link className="me-2" to="/register">
              Registration
            </Link>

            {user && (
              <OverlayTrigger
                overlay={
                  <Tooltip id="my-tooltip-id">{user?.displayName}</Tooltip>
                }
              >
                <img
                  style={{ height: "60px" }}
                  className="rounded-circle"
                  src={user?.photoURL}
                  alt=""
                />
              </OverlayTrigger>
            )}

            {user ? (
              <Link className="me-2">
                <Button className="rounded" onClick={handleLogout}>
                  Logout
                </Button>
              </Link>
            ) : (
              <Link className="me-2" to="/login">
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
