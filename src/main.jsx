import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorPage from "./components/Error.jsx";
import LoginLayout from "./layouts/LoginLayout";
import Blogs from "./components/Blogs";
import Main from "./components/Main";
import Recipes from "./components/Recipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "login",
    //     element: <LoginLayout></LoginLayout>,
    //   },
    // ],
  },
  {
    path: "/blogs",
    element: <Blogs></Blogs>,
  },
  {
    path: "/recipes",
    element: <Recipes></Recipes>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
