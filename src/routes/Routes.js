import { createBrowserRouter } from "react-router-dom";
import CVTemplate from "../common/CVTempletes/CVTemplate";
import CVTempletes from "../common/CVTempletes/CVTempletes";
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
      {
        path: "/cv-templete",
        element: <CVTemplate />,
      },

      {
        path: "/cv-templetes",
        element: <CVTempletes />,
      },
    ],
  },
]);
