import React from "react";
import CoverHero from "./CoverHero/CoverHero";
import {
  FaHandSparkles,
  FaHeadSideVirus,
  FaCloudMeatball,
  FaHorseHead,
} from "react-icons/fa";

import cover1 from "../../assets/cover-letters/cover1.avif";
import cover2 from "../../assets/cover-letters/cover2.avif";
import cover3 from "../../assets/cover-letters/cover3.avif";
import cover4 from "../../assets/cover-letters/cover4.avif";
import cover5 from "../../assets/cover-letters/cover5.avif";
import cover6 from "../../assets/cover-letters/cover6.avif";
import CoverCard from "./CoverCard/CoverCard";
import CallToAction from "../../components/CallToAction/CallToAction";

const template = [
  { id: 1, img: cover1 },
  { id: 2, img: cover2 },
  { id: 3, img: cover3 },
  { id: 4, img: cover4 },
  { id: 5, img: cover5 },
  { id: 6, img: cover6 },
];

const CoverLetter = () => {
  return (
    <div className="py-6">
      <section>
        <CoverHero />
      </section>
      <section className="container mx-auto">
        <div className="my-4 border-b-2 ">
          <ul className=" w-7/12 mx-auto py-3  flex justify-between items-center ">
            <li className="flex justify-evenly items-center hover:text-secondary ">
              {" "}
              <span>
                {" "}
                <FaHandSparkles />{" "}
              </span>
              <span className="font-bold text-lg">Modern</span>{" "}
            </li>
            <li className="flex justify-evenly items-center hover:text-secondary ">
              {" "}
              <span>
                {" "}
                <FaHorseHead />{" "}
              </span>
              <span className="font-bold text-lg">Creative</span>{" "}
            </li>
            <li className="flex justify-evenly items-center hover:text-secondary ">
              {" "}
              <span>
                {" "}
                <FaCloudMeatball />{" "}
              </span>
              <span className="font-bold text-lg">Simple</span>{" "}
            </li>
            <li className="flex justify-evenly items-center hover:text-secondary ">
              {" "}
              <span>
                {" "}
                <FaHeadSideVirus />{" "}
              </span>
              <span className="font-bold text-lg">Professional</span>{" "}
            </li>
          </ul>
        </div>
        {/* cover letter card */}
        <div className="my-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {template.map((tem) => (
              <CoverCard key={tem.id} template={tem}></CoverCard>
            ))}
          </div>
        </div>
        {/* call to action */}
        <div className="my-2">
          <CallToAction />
        </div>
      </section>
    </div>
  );
};

export default CoverLetter;
