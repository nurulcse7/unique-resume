import React from "react";
import logo from "../../assets/unique resume favicon.png";
import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
const socialLink = [
  {
    id: 1,
    icon: <BsFacebook />,
    to: "https://facebook.com",
  },
  {
    id: 2,
    icon: <BsTwitter />,
    to: "https://twitter.com",
  },
  {
    id: 3,
    icon: <BsInstagram />,
    to: "https://instagram.com",
  },
  {
    id: 4,
    icon: <BsGithub />,
    to: "https://github.com",
  },
];

const services = [
  {
    id: 1,
    to: "create-resume",
    title: "create a resume",
  },
  {
    id: 2,
    to: "resume-example",
    title: "Resume Examples",
  },
  {
    id: 3,
    to: "resume-templates",
    title: "Resume Templates",
  },
  {
    id: 4,
    to: "cover-templates",
    title: "Cover Letter Templates",
  },
];
const Footer = () => {
  return (
    <div>
      <footer aria-label="Site Footer" className="bg-secondary">
        <div className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex gap-2 items-center">
                <img src={logo} alt="footer-logo" className="w-11" />
                <Link to="/">
                  <button data-text="Awesome" className="button">
                    <span className="actual-text">
                      &nbsp;UniqueResume&nbsp;
                    </span>
                    <span className="hover-text" aria-hidden="true">
                      &nbsp;UniqueResume&nbsp;
                    </span>
                  </button>
                </Link>
              </div>

              <p className="max-w-xs mt-4 text-left text-white">
                Connect With Us On different types of Social Media
              </p>

              <ul className="flex gap-6 mt-8">
                {socialLink.map((s) => (
                  <a
                    key={s.id}
                    href={s.to}
                    rel="noreferrer"
                    className="text-white text-3xl"
                  >
                    {s.icon}
                  </a>
                ))}
              </ul>
            </div>

            <div className="grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
              <div>
                <p className="font-bold text-left uppercase text-white">
                  Services
                </p>

                <nav aria-label="Footer Navigation - Services" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    {services.map((service) => (
                      <Link
                        className=" capitalize text-[15px] text-white text-left flex flex-col gap-2 transition hover:opacity-75 "
                        key={service.id}
                        to={service.to}
                      >
                        <li>{service.title}</li>
                      </Link>
                    ))}
                  </ul>
                </nav>
              </div>

              <div>
                <p className="font-bold  text-white text-left uppercase ">
                  Our Company
                </p>

                <nav aria-label="Footer Navigation - Company" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <Link
                        to="/about"
                        className=" capitalize text-[15px] text-white text-left flex flex-col gap-2 transition hover:opacity-75 "
                      >
                        About
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/meet-the-team"
                        className=" capitalize text-[15px] text-white text-left flex flex-col gap-2 transition hover:opacity-75 "
                      >
                        Meet the Team
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div>
                <p className="font-bold  text-white text-left uppercase ">
                  Support
                </p>

                <nav aria-label="Footer Navigation - Company" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <Link
                        to="/contact"
                        className=" capitalize text-[15px] text-white text-left flex flex-col gap-2 transition hover:opacity-75 "
                      >
                        Contact
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/faq"
                        className=" capitalize text-[15px] text-white text-left flex flex-col gap-2 transition hover:opacity-75 "
                      >
                        Faq
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <p className="text-xs text-white ">
            &copy; 2023. Unique Resume. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
