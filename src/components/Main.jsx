import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Carousel, Container } from "react-bootstrap";

const Main = () => {
  return (
    <div>
      <Header></Header>
      {/* banner start */}
      <Container className="mb-5">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded"
              src={
                "https://dev.octavian.design/cookbook/images/4646066888_397b6d0301_o.jpg"
              }
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Ham It Up Morning Sandwich</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded"
              src={
                "https://dev.octavian.design/cookbook/images/4646066856_56101b17c6_o.jpg"
              }
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Long Island Iced Tea Mixed Drink Recipe</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded"
              src={
                "https://dev.octavian.design/cookbook/images/4604770406_37b2e0b2f6_o.jpg"
              }
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Best of the Week: Fish Bow</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      {/* banner end */}
      <Footer></Footer>
    </div>
  );
};

export default Main;
