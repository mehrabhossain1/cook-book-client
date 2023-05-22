import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import { Outlet } from "react-router-dom";
import ChefSection from "./ChefSection";

const Main = () => {
  

  // console.log(recipesData);

  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <ChefSection></ChefSection>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
