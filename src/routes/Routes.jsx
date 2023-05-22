import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import RecipesLayout from "../layouts/RecipesLayout";
import Recipes from "../components/Recipes";
import RecipesDetails from "../components/RecipesDetails";
import PrivateRoute from "./PrivateRoute";
import Main from "../components/Main";
import Blogs from "../components/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
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
    path: "/home",
    element: <Main></Main>,
  },
  {
    path: "blogs",
    element: <Blogs></Blogs>,
  },
  {
    path: "recipes",
    element: <RecipesLayout></RecipesLayout>,
    children: [
      {
        path: "/recipes",
        element: <Recipes></Recipes>,
      },
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <RecipesDetails></RecipesDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
