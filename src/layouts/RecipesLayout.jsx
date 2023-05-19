import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Recipes from "../components/Recipes";

const RecipesLayout = () => {
  return (
    <div>
      <Header></Header>
      <Recipes></Recipes>
      <Footer></Footer>
    </div>
  );
};

export default RecipesLayout;
