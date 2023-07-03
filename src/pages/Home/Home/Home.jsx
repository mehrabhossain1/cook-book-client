import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Banner/Banner";
import ChefSection from "../ChefSection/ChefSection";

const Home = () => {
  return (
    <Container>
      {/* <h2>this is home</h2> */}
      <Banner></Banner>
      <ChefSection></ChefSection>
    </Container>
  );
};

export default Home;
