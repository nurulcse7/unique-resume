import React from "react";

const CoverHero = () => {
  return (
    <div>
      <section className="bg-gray-50">
        <div className=" container mx-auto  px-4 py-32 lg:flex  lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Free cover letter templates
            </h1>

            <p className="mt-4 sm:text-xl sm:leading-relaxed">
              Stand out and get hired faster with our collection of free
              professional cover letter templates expertly-designed to land you
              the perfect position.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                className="inline-block px-5 py-3 border-[1px]  hover:bg-primary bg-secondary border-white text-white font-medium text-sm leading-snug uppercase rounded-md  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Select Template
              </button>

              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium  shadow  focus:outline-none focus:ring  sm:w-auto"
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoverHero;
