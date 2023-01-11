import React from "react";
import { BiCustomize } from "react-icons/bi";
const featureContent = [
  {
    id: 1,
    title: " elegant Dark Mode",
    icon: <BiCustomize className="text-secondary" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet",
  },
  {
    id: 2,
    title: " Easy to customiztions",
    icon: <BiCustomize />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet",
  },
  {
    id: 3,
    title: " Simple & clean designs",
    icon: <BiCustomize />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet",
  },
  {
    id: 4,
    title: " Simple & clean designs",
    icon: <BiCustomize className="text-secondary" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet",
  },
  {
    id: 5,
    title: " Simple & clean designs",
    icon: <BiCustomize />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet",
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

          <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            quam voluptatibus
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {featureContent.map((feature) => (
              <div
                key={feature.id}
                className="p-8 space-y-3 border-2  border-blue-400 dark:border-blue-300 rounded-xl"
              >
                <span className="inline-block text-[45px] text-blue-800 ">
                  {feature.icon}
                </span>

                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  {feature.title}
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                  {feature.description}
                </p>
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
