import { createBrowserRouter } from 'react-router-dom';
import Login from '../common/Login/Login';
import Register from '../common/Register/Register';
import Main from '../Layout/Main';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import CoverLetter from '../Pages/CoverLetter/CoverLetter';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound/NotFound';
import ForgotPassword from '../Pages/ForgotPassword/ForgotPassword';
import ResumeTemplate from '../Pages/ResumeTemplate/ResumeTemplate';
import CvTemplate from '../Pages/CV/CvTemplate';
import CvTemplates from '../Pages/CV/CvTemplates';

export const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cv-template',
        element: <CvTemplates />,
      },

      {
        path: '/resume-Templates',
        element: <ResumeTemplate />,
      },

      {
        path: '/about',

        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },

      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/cover-letter',
        element: <CoverLetter />,
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);
