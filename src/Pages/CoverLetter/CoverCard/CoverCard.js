import React, { useState } from "react";

const CoverCard = ({ template }) => {
  const { img } = template;

  const [ishover, setIsHover] = useState(false);

  return (
    <div>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={`${
          ishover
            ? " border relative bg-slate-300 z-10 bg-opacity-30 rounded-lg  py-3 px-4 shadow-lg text-center  "
            : "border relative bg-slate-300 py-3 px-4 shadow-lg rounded-lg  "
        }`}
      >
        <img
          className={`${ishover ? "w-full   -z-10 " : "w-full   "}`}
          src={img}
          alt="cover"
        />

        <button
          type="button"
          className={`${
            ishover
              ? "absolute px-5 py-3 border-[1px]  hover:bg-primary bg-secondary border-white text-white font-medium text-sm -translate-y-44 delay-1000 leading-snug bottom-28  left-28 uppercase rounded-md  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              : "hidden"
          } `}
        >
          Use This Template
        </button>
      </div>
    </div>
  );
};

export default CoverCard;
