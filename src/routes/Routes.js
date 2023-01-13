import { createBrowserRouter } from "react-router-dom";
import Login from "../common/Login/Login";
import Register from "../common/Register/Register";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound/NotFound";

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
        path: "/signup",
        element: <Register />,
      },
    ],
  },
]);