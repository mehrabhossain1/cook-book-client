import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";

const ChefRecipes = () => {
  const { id } = useParams();
  const singleChef = useLoaderData();
  console.log(singleChef);
  return (
    <Container>
      <h2>ChefRecipes Page:</h2>
    </Container>
  );
};

export default ChefRecipes;
