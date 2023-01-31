import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, index) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex 
            flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              viewport={{
                once: true,
              }}
              style={{ height: "300px", width: "300px", background: "red" }}
              src="../public/photo.jpeg"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#1D4ED8]">
                  Case study {index + 1} of {projects.length}:
                </span>
                Project name
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                commodi, accusamus debitis ratione nihil fuga perferendis
                numquam ea! Aspernatur, at odio ab porro atque dolorem
                exercitationem praesentium nobis qui saepe. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Blanditiis harum
                corporis, atque temporibus quis pariatur neque corrupti eum
                labore. Explicabo qui impedit ipsum doloribus, magnam laborum
                praesentium odio tempore aliquid!
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
