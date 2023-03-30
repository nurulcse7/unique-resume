import React from "react";
import businessInSider from "../../assets/brands/logo-business-insider.png";
import forbes from "../../assets/brands/logo-forbes.png";
import independent from "../../assets/brands/logo-independent.png";
import engineering from "../../assets/brands/logo-interesting-engineering.png";
import recruiter from "../../assets/brands/logo-recruiter.png";
const FeatureBrands = () => {
  const brands = [businessInSider, forbes, independent, engineering, recruiter];
  return (
    <div className="py-12">
      <div className=" py-6 bg-gradient-to-r from-primary via-secondary to-secondary">
        <span className="md:text-[36px] text-xl text-white ">
          Our Trusted <span className="border-b-2 border-primary">Brands</span>
        </span>
        <div className="flex items-center justify-center md:gap-11 gap-5 ">
          {brands.map((brand, i) => (
            <img
              src={brand}
              className="md:h-[15%] md:w-auto w-[15%] aspect-[3/2] object-contain"
              key={i}
              alt={brand}
            ></img>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureBrands;
