import { createBrowserRouter } from "react-router-dom";
import Login from "../common/Login/Login";
import Register from "../common/Register/Register";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound/NotFound";
import { ProtectedRoute } from "protected-route-react";
import { useSelector } from "react-redux";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
