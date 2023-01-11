import React from "react";
import { BiCustomize } from "react-icons/bi";
const featureContent = [
  {
    id: 1,
    title: " elegant Dark Mode",
    icon: "",
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
    icon: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet",
  },
  {
    id: 3,
    title: " Simple & clean designs",
    icon: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet",
  },
  {
    id: 3,
    title: " Simple & clean designs",
    icon: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet",
  },
];

const Features = () => {
  return (
    <div>
      <section class="bg-gradient-to-r from-primary via-secondary to-secondary ">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
            explore our <br /> awesome{" "}
            <span class="underline decoration-blue-500">Features</span>
          </h1>

          <p class="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            quam voluptatibus
          </p>

          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {featureContent.map((feature) => (
              <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                <span class="inline-block text-blue-500 dark:text-blue-400">
                  {feature.icon}
                </span>

                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  {feature.title}
                </h1>

                <p class="text-gray-500 dark:text-gray-300">
                  {feature.description}
                </p>

                <a
                  href="#"
                  class="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div class="fixed inset-x-0 lg:inset-x-auto bottom-6 lg:right-8 xl:right-10 xl:bottom-8"></div>
    </div>
  );
};

export default Features;
