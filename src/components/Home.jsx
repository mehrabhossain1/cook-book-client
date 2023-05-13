import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-center">This is home comp</h2>
      <Footer></Footer>
    </div>
  );
};

export default Home;
