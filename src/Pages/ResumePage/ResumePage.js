import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../../style";
import { Link } from "react-router-dom";
const ResumePage = () => {
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const resumeTemplateData = [
    {
      id: 1,
      type: "free",
      image: "https://i.ibb.co/RYRb4Mz/15.png",
    },

    {
      id: 2,
      type: "free",
      image: "https://i.ibb.co/Wgxv60G/13.png",
    },
    {
      id: 3,
      type: "free",
      image: "https://i.ibb.co/mbhYnrJ/14.png",
    },
    {
      id: 4,
      type: "premium",
      image: "https://i.ibb.co/47MKFqL/1.png",
    },
    {
      id: 5,
      type: "premium",
      image: "https://i.ibb.co/1fShcwn/2.png",
    },
    {
      id: 6,
      type: "premium",
      image: "https://i.ibb.co/KGJ6y3j/3.png",
    },
    {
      id: 7,
      type: "free",
      image: "https://i.ibb.co/Jnx4MYP/4.png",
    },
    {
      id: 8,
      type: "premium",
      image: "https://i.ibb.co/6D2tCz8/5.png",
    },
    {
      id: 9,
      type: "premium",
      image: "https://i.ibb.co/47fTyrV/7.png",
    },
    {
      id: 10,
      type: "free",
      image: "https://i.ibb.co/TqJ1psX/8.png",
    },
    {
      id: 11,
      type: "premium",
      image: "https://i.ibb.co/cQpw7W0/9.png",
    },
    {
      id: 12,
      type: "free",
      image: "https://i.ibb.co/vhhz7yT/10.png",
    },
    {
      id: 13,
      type: "premium",
      image: "https://i.ibb.co/cQpw7W0/9.png",
    },
    {
      id: 14,
      type: "premium",
      image: "https://i.ibb.co/6YSjnjs/12.png",
    },

    {
      id: 15,
      type: "free",
      image: "https://i.ibb.co/mc1hwdh/6.png",
    },
  ];

  const [works, setWorks] = useState(resumeTemplateData);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All templates") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.type.includes(item)));
      }
    }, 500);
  };
  return (
    <div className={`${styles.padding}`}>
      <section className=" relative    ">
        <div class="bg-white  ">
          <div class="text-center w-full mx-auto py-4 px-4 sm:px-6 lg:py-4lg:px-8 z-20">
            <h2 class="text-2xl font-extrabold text-black sm:text-4xl">
              <span class="block">Need to make a resume but </span>
              <span class="block text-secondary">
                don't know how to make it?
              </span>
            </h2>
            <p class="text-lg mt-4 max-w-md mx-auto text-gray-400">
              Select a template and customize your resume. <br /> Freshers &
              experienced Both people can create resume.
            </p>
            <div class="lg:mt-0 lg:flex-shrink-0">
              <div className={`${styles.padding} flex gap-4 justify-center`}>
                {["All templates", "premium", "free"].map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleWorkFilter(item)}
                    className={`app__work-filter-item  md:py-3 md:px-4  py-2 px-3 bg-primary hover:bg-secondary focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white md:w-[20%]  transition ease-in duration-200 text-center md:text-base text-[15px] font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  uppercase  cursor-pointer ${
                      activeFilter === item ? "item-active" : ""
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className=" grid md:grid-cols-3 grid-cols-1 gap-5"
        >
          {filterWork.map((work, index) => (
            <Link to="/cv-template">
              <div className="border rounded-md border-primary" key={index}>
                <div className="app__work-img ">
                  <img src={work.image} alt={work.type} />

                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                      staggerChildren: 0.5,
                    }}
                    className="app__work-hover flex justify-center items-center "
                  >
                    <a href={work.projectLink} target="_blank" rel="noreferrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className=" flex justify-center items-center"
                      >
                        <button className="bg-primary capitalize font-semibold px-3 py-2 rounded">
                          {" "}
                          Use {work.type} Template
                        </button>
                      </motion.div>
                    </a>
                  </motion.div>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default ResumePage;
