import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg=""
      variant=""
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
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Recipes</Nav.Link>
            <Nav.Link>Blogs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
