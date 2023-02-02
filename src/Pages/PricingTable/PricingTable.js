import React from "react";
import axiosInstance from "../../utils/axiosInstance";

const PricingTable = () => {
  const handleClick = async (priceId) => {
    const { data } = await axiosInstance.post(
      `/api/checkout`,
      { priceId },
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
        withCredentials: true,
      }
    );
    if (data) {
      window.location.href = data.url;
    }
  };
  return (
    <main className="max-w-6xl mx-auto pt-10 pb-36 px-8">
      <div className="max-w-md mx-auto mb-14 text-center">
        <h1 className="text-4xl font-semibold mb-6 lg:text-5xl">
          <span className="text-indigo-600">Unique Resume</span> Plans
        </h1>
        <p className="text-xl text-gray-500 font-medium">
          Choose a plan that works best for you and your team.
        </p>
      </div>

      <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
        <div className="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
          <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
            <img
              alt=""
              src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
              className="rounded-3xl w-20 h-20"
            />
            <div className="ml-5">
              <span className="block text-2xl font-semibold">Basic</span>
              <span>
                <span className="font-medium text-gray-500 text-xl align-top">
                  $&thinsp;
                </span>
                <span className="text-3xl font-bold">10 </span>
              </span>
              <span className="text-gray-500 font-medium">/ 1 month</span>
            </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex text-lg mb-2">
              <img
                alt=""
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3">Unlimited PDF Downloads</span>
            </li>
            <li className="flex text-lg mb-2">
              <img
                alt=""
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3">
                <span className="text-black">Unlimited Resumes</span>
              </span>
            </li>
            <li className="flex text-lg">
              <img
                alt=""
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3">
                <span className="text-black"></span> Unlimited Cover Letters
              </span>
            </li>
          </ul>
          <button
            onClick={() => handleClick("price_1MWIviAdpdqyZqEIkWuODN34")}
            className="flex justify-center w-full items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl"
          >
            Choose Plan
            <img
              alt=""
              src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
              className="ml-2"
            />
          </button>
        </div>

        <div className="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
          <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
            <img
              alt=""
              src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
              className="rounded-3xl w-20 h-20"
            />
            <div className="ml-5">
              <span className="block text-3xl font-semibold text-white">
                Standard
              </span>
              <span>
                <span className="font-medium text-xl align-top">$&thinsp;</span>
                <span className="text-3xl font-bold text-white">24 </span>
              </span>
              <span className="font-medium">/ 3 month</span>
            </div>
          </div>
          <ul className="mb-10 font-medium text-xl">
            <li className="flex mb-6">
              <img
                alt=""
                src="https://res.cloudinary.com/williamsondesign/check-white.svg"
              />
              <span className="ml-3">
                Unlock All <span className="text-white">features</span>
              </span>
            </li>
            <li className="flex mb-6">
              <img
                alt=""
                src="https://res.cloudinary.com/williamsondesign/check-white.svg"
              />
              <span className="ml-3">
                <span className="text-white">Unlimited PDF Downloads</span>
              </span>
            </li>
            <li className="flex">
              <img
                alt=""
                src="https://res.cloudinary.com/williamsondesign/check-white.svg"
              />
              <span className="ml-3">
                <span className="text-white">Unlimited Resumes </span>
              </span>
            </li>
          </ul>
          <button
            onClick={() => handleClick("price_1MWYDlAdpdqyZqEIxsZ2800B")}
            className="flex justify-center items-center w-full bg-indigo-600 rounded-xl py-6 px-4 text-center text-white text-2xl"
          >
            Choose Plan
            <img
              alt=""
              src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
              className="ml-2"
            />
          </button>
        </div>

        <div className="w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
          <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
            <img
              alt=""
              src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"
              className="rounded-3xl w-20 h-20"
            />
            <div className="ml-5">
              <span className="block text-2xl font-semibold">Premium</span>
              <span>
                <span className="font-medium text-gray-500 text-xl align-top">
                  $&thinsp;
                </span>
                <span className="text-3xl font-bold">35 </span>
              </span>
              <span className="text-gray-500 font-medium">/6 month</span>
            </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex text-lg mb-2">
              <img
                alt=""
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3">
                Unlock All <span className="text-black">features</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <img
                alt=""
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3">
                <span className="text-black">Unlimited PDF Downloads</span>
              </span>
            </li>
            <li className="flex text-lg">
              <img
                alt=""
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3">
                <span className="text-black">Unlimited</span> Downloads
              </span>
            </li>
          </ul>
          <button
            onClick={() => handleClick("price_1MWYGLAdpdqyZqEINSXPFXHH")}
            className="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl"
          >
            Choose Plan
            <img
              alt=""
              src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
              className="ml-2"
            />
          </button>
        </div>
      </div>
    </main>
  );
};

export default PricingTable;
