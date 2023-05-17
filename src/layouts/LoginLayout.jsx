import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Login from "../components/Login";

const LoginLayout = () => {
  return (
    <div>
      <Header></Header>
      <Login></Login>
      <h2>this is login layout</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default LoginLayout;
