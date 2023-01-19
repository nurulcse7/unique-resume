import React from "react";

import {
  FaAccusoft,
  FaLeanpub,
  FaHandshake,
  FaHeadSideVirus,
  FaFileSignature,
  FaChalkboardTeacher,
} from "react-icons/fa";
const featureContent = [
  {
    id: 1,
    title: " Easy online resume builder",
    icon: <FaAccusoft />,
    description:
      "Create an awesome resume, cover letter or online profile without leaving your web browser.",
  },
  {
    id: 2,
    title: " Automatic spell-checker",
    icon: <FaLeanpub />,
    description:
      "Our built-in spell-checker takes care of the grammar for you. Create a resume with zero typos or errors.",
  },
  {
    id: 3,
    title: " Your data is safe",
    icon: <FaHandshake />,
    description:
      "Your data is kept private and protected by strong 256-bit encryption.",
  },
  {
    id: 4,
    title: "Automatic summary generator",
    icon: <FaHeadSideVirus />,
    description:
      "Create a powerful resume profile or cover letter in one click. Writer’s block is no longer an obstacle.",
  },
  {
    id: 5,
    title: " Approved templates",
    icon: <FaFileSignature />,
    description:
      "Professionally-designed resume templates and examples (+guides). Just edit and download in 5 minutes.",
  },
  {
    id: 6,
    title: " Job tracking",
    icon: <FaChalkboardTeacher />,
    description:
      "We’ll keep you ahead of the competition by tracking the employers and jobs you apply to.",
  },
];

const Features = () => {
  return (
    <div className="py-12">
      <section className="bg-gradient-to-r from-primary via-secondary to-secondary ">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
            explore our <br /> awesome{" "}
            <span className="underline decoration-primary">Features</span>
          </h1>

          <p className="mt-4 text-white xl:mt-6 ">
            Features designed to help you win your dream job for Growth of Your
            Career
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {featureContent.map((feature) => (
              <div
                key={feature.id}
                className="p-8 space-y-3 border-2  border-blue-400 dark:border-blue-300 rounded-xl"
              >
                <span className="inline-block text-[45px] text-[#CAF0F8] ">
                  {feature.icon}
                </span>

                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  {feature.title}
                </h1>

                <p className=" text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 lg:inset-x-auto bottom-6 lg:right-8 xl:right-10 xl:bottom-8"></div>
    </div>
  );
};

export default Features;
