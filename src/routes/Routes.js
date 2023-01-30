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
import Template1 from "../Pages/ResumeTemplate/Template1";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardResume from "../Pages/DashboardResume/DashboardResume";
import DashboardCv from "../Pages/DashboardCv/DashboardCv";
import DashboardCoverLetter from "../Pages/DashboardCoverLetter/DashboardCoverLetter";
import ExploreTeamMember from "../components/MeetOurTeam/ExploreTeamMember";
import CreateRessume from "../Pages/ResumeTemplate/CreateRessume";

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
        path: "/resume-template2",
        element: <Template1 />,
      },
      {
        path: "/resume-templates",
        element: <ResumePage />,
      },

      {
        path: "/create-resume",
        element: <CreateRessume />,
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
      {
        path: "/about-team-member",
        element: <ExploreTeamMember />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/resume",
        element: <DashboardResume></DashboardResume>,
      },
      {
        path: "/dashboard/cv",
        element: <DashboardCv />,
      },
      {
        path: "/dashboard/coverletter",
        element: <DashboardCoverLetter />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/resume",
        element: <DashboardResume></DashboardResume>,
      },
      {
        path: "/dashboard/cv",
        element: <DashboardCv />,
      },
      {
        path: "/dashboard/coverletter",
        element: <DashboardCoverLetter />,
      },
    ],
  },
]);
