import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col md={6}>
            <h5>About Us</h5>
            <p>
              We are a company dedicated to providing high-quality products and
              services to our customers.
            </p>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-map-marker-alt mr-2"></i>123 Main St,
                Anytown USA
              </li>
              <li>
                <i className="fas fa-envelope mr-2"></i>info@example.com
              </li>
              <li>
                <i className="fas fa-phone mr-2"></i>(123) 456-7890
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="bg-secondary py-2">
        <Container>
          <Row>
            <Col>
              <p className="m-0 text-center">
                &copy; {new Date().getFullYear()} My Company. All rights
                reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
