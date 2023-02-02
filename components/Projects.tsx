import React from "react";
import { motion } from "framer-motion";
import { ShowCase } from "../typings";
import { urlFor } from "../santiy";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type Props = {
  projects: ShowCase[];
};

const Projects = ({ projects }: Props) => {
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
        Some projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#1D4ED8]">
        {projects.map((project, index) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex 
            flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center flex justify-center items-center gap-5">
                Project {index + 1} of {projects.length}:{" "}
                <span className="underline uppercase decoration-[#1D4ED8] font-semibold">
                  {project.name}
                </span>
              </h4>
              <ul className="list-decimal">
                {project?.facts.map((fact) => (
                  <li className="text-lg text-center md:text-left">{fact}</li>
                ))}
              </ul>
              <Link href={project?.link}>
                <div className="flex justify-center items-center mt-8">
                  <button className="hover:bg-[#1D4ED8] bg-[#1D4ED8]/20 py-5 px-10 rounded-xl text-white font-bold text-lg transition-all">
                    Check it out the project
                  </button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#A8A29E]/20 left-0 h-[500px] skew-y-12" />
    </motion.div>
  );
};

export default Projects;
