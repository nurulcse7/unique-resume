import { createBrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import CVTemplate from "../common/CVTempletes/CVTemplate";
import CVTempletes from "../common/CVTempletes/CVTempletes";
import Login from "../common/Login/Login";
import Register from "../common/Register/Register";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound/NotFound";
=======
import Login from "../common/Login/Login";
import Register from "../common/Register/Register";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound/NotFound";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import CvTemplates from "../Pages/CV/CvTemplates";
import CVpage from "../Pages/CVpage/CVpage";
import ResumePage from "../Pages/ResumePage/ResumePage";
import CoverLetterPage from "../Pages/CoverLetterPage/CoverLetterPage";
import Template4 from "../Pages/ResumeTemplate/Template4";
>>>>>>> bed1e5d71a3687c46b18b4254a5cabc38e8d141e

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
<<<<<<< HEAD
=======
        path: "/cv-template",
        element: <CvTemplates />,
      },

      {
        path: "/cv-templates",
        element: <CVpage />,
      },
      {
        path: "/resume-templates",
        element: <ResumePage />,
      },
      {
        path: "/resume-Template4",
        element: <Template4 />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
>>>>>>> bed1e5d71a3687c46b18b4254a5cabc38e8d141e
        path: "/login",
        element: <Login />,
      },
      {
<<<<<<< HEAD
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
=======
        path: "/cover-letter",
        element: <CoverLetterPage />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/register",
        element: <Register />,
      },
>>>>>>> bed1e5d71a3687c46b18b4254a5cabc38e8d141e
    ],
  },
]);
