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
import CoverLetterEditor from "../Pages/CoverLetterEditor/CoverLetterEditor";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import AdminRoute from "./AdminRoute";
import Chekout from "../Pages/PricingTable/Chekout";
import Blog from "../Pages/Blog/Blog";
import BlogLayout from "../Layout/BlogLayout";
import HowToWrite from "../Pages/Blog/BlogElements/HowToWrite";
import ResumeFormats from "../Pages/Blog/BlogElements/ResumeFormats";
import ChoronicalResume from "../Pages/Blog/BlogElements/ChoronicalResume";
import FunctionalResume from "../Pages/Blog/BlogElements/FunctionalResume";
import ResumeElements from "../Pages/Blog/BlogElements/ResumeElements";

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
        path: "/checkout/:id",
        element: (
          <PrivetRoute>
            <Success />
          </PrivetRoute>
        ),
      },
      {
        path: "/checkout",
        element: <Chekout />,
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
        path: "/blog",
        element: <BlogLayout />,
        children: [
          {
            path: "/blog",
            element: <HowToWrite></HowToWrite>,
          },
          {
            path: "/blog/resume-formats",
            element: <ResumeFormats />,
          },
          {
            path: "/blog/choronical-resume",
            element: <ChoronicalResume />,
          },
          {
            path: "/blog/functional-resume",
            element: <FunctionalResume />,
          },
          {
            path: "/blog/resume-elements",
            element: <ResumeElements />,
          },
        ],
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/cover-letter",
        element: <CoverLetterPage />,
      },
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
        element: (
          <AdminRoute>
            <AllUser />
          </AdminRoute>
        ),
      },
    ],
  },
]);
