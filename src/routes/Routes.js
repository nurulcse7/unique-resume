import { createBrowserRouter } from "react-router-dom";
import Login from "../common/Login/Login";
import Register from "../common/Register/Register";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound/NotFound";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import CvEditor from "../Pages/CV/CvEditor";
import CVpage from "../Pages/CVpage/CVpage";
import ResumePage from "../Pages/ResumePage/ResumePage";
import CoverLetterPage from "../Pages/CoverLetterPage/CoverLetterPage";
import Template4 from "../Pages/ResumeTemplate/Template4";
import Template3 from "../Pages/ResumeTemplate/Template3";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardResume from "../Pages/DashboardResume/DashboardResume";
import DashboardCv from "../Pages/DashboardCv/DashboardCv";
import DashboardCoverLetter from "../Pages/DashboardCoverLetter/DashboardCoverLetter";
import ExploreTeamMember from "../components/MeetOurTeam/ExploreTeamMember";
import PrivetRoute from "./PrivetRoute";
import CoverEditor from "../Pages/CoverLetter/CoverEditor/CoverEditor";
import MeetOurTeam from "../components/MeetOurTeam/MeetOurTeam";
import Faq from "../components/FAQ/Faq";

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
        element: (
          <PrivetRoute>
            <CvEditor />
          </PrivetRoute>
        ),
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
        path: "/resume-template4",
        element: <Template4 />,
      },
      {
        path: "/resume-template3",
        element: <Template3 />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/about-team-member",
        element: <ExploreTeamMember />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/resume-templates/:id",
        element: (
          <PrivetRoute>
            <CvEditor />
          </PrivetRoute>
        ),
      },      
      {
        path: "/cover-letter",
        element: <CoverLetterPage />,
      },
      {
        path: "/cover-letter-editors",
        element: <CoverEditor />,
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
        path: "/login",
        element: <Login />,
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
