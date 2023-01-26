import React from "react";

const Dashboard = () => {
  return (
    <div className="w-[70%] mx-auto  mt-7">
      <h1 className="text-5xl font-bold my-5">My Account</h1>
      <form className="w-[90%] mx-auto">
        <div>
          <label htmlFor="name">
            {" "}
            <input
              placeholder="Your Name"
              className="w-full pt-2 pb-1 px-3 my-2 border-b border-white bg-inherit focus:outline-none "
              type="text"
              name="name"
              id="name"
            />
          </label>
          <label htmlFor="email">
            {" "}
            <input
              placeholder="  arif@gmail.com"
              className="w-full pt-2 pb-1 px-3 my-2 border-b border-white bg-inherit focus:outline-none "
              type="email"
              name="email"
              id="email"
              readOnly
              disabled
              defaultValue="arif@gmail.com"
            />
          </label>

          <p>
            {" "}
            <button
              className="bg-primary md:text-[15px] text-[12px] uppercase cursor-pointer   text-white  rounded shadow hover:shadow-lg py-1 md:py-2 z-10 px-4 border border-primary hover:border-transparent"
              type="submit"
            >
              Update Now
            </button>
          </p>
        </div>
      </form>

      <div className="w-[90%] mx-auto py-6  mt-7">
        <div className="flex justify-around items-center">
          <div>
            <h1 className="text-left font-bold text-4xl mb-2">
              Account Options{" "}
            </h1>
            <p className="text-left font-bold text-lg">
              Get a copy of your data
            </p>
          </div>
          <div>
            <button className="px-2 py-3 uppercase rounded-md border-white border-4">
              Request Your Data
            </button>
          </div>
        </div>

        <div className="mt-7">
          <button className="font-bold text-sky-500 underline">
            {" "}
            Delete Your Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
