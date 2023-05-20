import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import RecipesLayout from "../layouts/RecipesLayout";
import Recipes from "../components/Recipes";
import RecipesDetails from "../components/RecipesDetails";
import PrivateRoute from "./PrivateRoute";

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
