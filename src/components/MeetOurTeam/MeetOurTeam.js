import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MeetOurTeam = () => {
  const [members, setMembers] = useState();
  const [hover, setHover] = useState(0);
  useEffect(() => {
    fetch("members.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  return (
    <section>
      <div className="w-full md:max-w-[1000px] my-6 p-4 mx-auto ">
        <h1 className="sm:text-3xl text-4xl font-extrabold text-center title-font text-gray-900 mb-4">
          Meet Out Team
        </h1>

        <div className="md:my-6 my-2  grid grid-cols-1  md:grid-cols-3 gap-4">
          {members?.map((member) => (
            <div
              onMouseOver={() => setHover(member.id)}
              onMouseOut={() => setHover(0)}
              key={member.id}
              className="w-full rounded-md  shadow-xl border border-[#03045E] text-gray-800 relative"
            >
              <img
                src={member.image}
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
              />
              <div className="flex flex-col leading-none py-3 justify-between p-2 space-y-8">
                <div className="space-y-2 ">
                  <h2 className="text-xl md:text-2xl uppercase font-semibold tracking-wide">
                    {member.name}
                  </h2>
                  <div className="leading-none">
                    <p className="text-gray-800 font-bold">
                      {member.teamPosition}
                    </p>
                    <p className="text-gray-800 font-semibold">
                      {member.designation}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={` ${
                  hover === member.id ? "absolute" : "hidden"
                } absolute top-0 left-0 w-full h-full text-white bg-black/60 border border-white rounded-lg  `}
              >
                <div className="flex justify-center  items-center w-full h-full">
                  <Link
                    to={`about-team-member?id=${member.id}`}
                    className="font-bold py-2 px-6 border border-white rounded-lg bg-[#03045E]"
                  >
                    Explore Member
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
