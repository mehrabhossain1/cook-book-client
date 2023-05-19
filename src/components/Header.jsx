import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);

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
          <Nav className="m-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/recipes">Recipes</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>

            {user?.email ? (
              <Nav.Link>
                <Button>Logout</Button>
              </Nav.Link>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}

            <Nav.Link href="/register">Registration</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
