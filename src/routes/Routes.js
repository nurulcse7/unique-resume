import { createBrowserRouter } from "react-router-dom";
import Login from "../common/Login/Login";
import Register from "../common/Register/Register";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound/NotFound";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import CVpage from "../Pages/CVpage/CVpage";
import ResumePage from "../Pages/ResumePage/ResumePage";
import CoverLetterPage from "../Pages/CoverLetterPage/CoverLetterPage";
import Template1 from "../Pages/ResumeTemplate/Template1";
import Template3 from "../Pages/ResumeTemplate/Template3";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardResume from "../Pages/Dashboard/DashboardResume/DashboardResume";
import DashboardCv from "../Pages/Dashboard/DashboardCv/DashboardCv";
import DashboardCoverLetter from "../Pages/Dashboard/DashboardCoverLetter/DashboardCoverLetter";
import ExploreTeamMember from "../components/MeetOurTeam/ExploreTeamMember";
import PrivetRoute from "./PrivetRoute";
import CoverEditor from "../Pages/CoverLetter/CoverEditor/CoverEditor";
import PricingTable from "../Pages/PricingTable/PricingTable";
import Success from "../Pages/PricingTable/Success";
import Faq from "../components/FAQ/Faq";
import Editor from "../Pages/Editor/Editor";
import CVEditor from "../Pages/CVEditor/CVEditor";
import CvTemplate1 from "../components/CvTemplates/Cvtemplate1";
import Cvtemplate2 from "../components/CvTemplates/Cvtemplate2";
import CoverLetterEditor from "../Pages/CoverLetterEditor/CoverLetterEditor";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
<<<<<<< HEAD
=======
import AdminRoute from "./AdminRoute";
>>>>>>> b25e53f0c4f47a1a27133d61a38779688eeeb9ee

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
        path: "/cv-template/:id",
        element: (
          <PrivetRoute>
            <CVEditor />
          </PrivetRoute>
        ),
      },
      {
        path: "/cv-templates",
        element: <CVpage />,
      },
      {
        path: "/select-plan",
        element: (
          <PrivetRoute>
            <PricingTable />
          </PrivetRoute>
        ),
      },
      {
        path: "/cover-letter-editor/:id",
        element: (
          <PrivetRoute>
            <CoverLetterEditor />
          </PrivetRoute>
        ),
      },
      {
        path: "/resume-templates",
        element: <ResumePage />,
      },
      {
        path: "/cv-2",
        element: <Cvtemplate2 />,
      },
      {
        path: "/cv-1",
        element: <CvTemplate1 />,
      },
      {
        path: "/checkout/:id",
        element: <Success />,
      },
      {
        path: "/resume-template4",
        element: <Template1 />,
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
        path: "/cover-letter",
        element: <CoverLetterPage />,
      },
      // {
      //   path: "/cover-1",
      //   element: <CoverLetterTemplate1 />,
      // },
      // {
      //   path: "/cover-2",
      //   element: <CoverLetterTemplate2 />,
      // },
      // {
      //   path: "/cover-3",
      //   element: <CoverLetterTemplate3 />,
      // },
      {
        path: "/editor",
        element: <Editor />,
      },
      {
        path: "/resume-templates/:id",
        element: (
          <PrivetRoute>
            <Editor />
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
<<<<<<< HEAD
        path: "/template",
        element: <CvTemplate1 />,
      },
      {
=======
>>>>>>> b25e53f0c4f47a1a27133d61a38779688eeeb9ee
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
    element: (
      <PrivetRoute>
        <DashboardLayout />
      </PrivetRoute>
    ),
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
      {
        path: "/dashboard/all-user",
<<<<<<< HEAD
        element: <AllUser />,
=======
        element: (
          <AdminRoute>
            <AllUser />
          </AdminRoute>
        ),
>>>>>>> b25e53f0c4f47a1a27133d61a38779688eeeb9ee
      },
    ],
  },
]);
