import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to='/home'></Navigate>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/recipes"),
      },
      {
        path: "/recipes/:id",
        element: <ChefRecipes></ChefRecipes>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/recipes/${params.id}`),
      },
    ],
  },
]);

export default router;
