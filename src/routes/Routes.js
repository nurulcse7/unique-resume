import { createBrowserRouter } from "react-router-dom";
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
        path: "/login",
        element: <Login />,
      },
      {
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
    ],
  },
]);
