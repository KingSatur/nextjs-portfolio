import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import { JobSchema } from "../typings";

type Props = {
  jobData: JobSchema[];
};

const WorkExperience = ({ jobData }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative 
        overflow-hidden flex-col text-lft 
        max-w-full px-10 mx-auto items-center"
    >
      <h3
        className="md:absolute sm:absolute xl:absolute top-24 uppercase tracking-[20px] 
        text-gray-500 sm:text-2xl md:text-2xl xl:text-2xl text-1xl mt-10 md:mt-0 xl:mt-0"
      >
        Experience
      </h3>
      <div
        style={{ marginTop: "10rem" }}
        className="w-full flex space-x-5 overflow-x-scroll md:p-10 xl:p-10 snap-x snap-mandatory
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#1D4ED8]"
      >
        {jobData?.map((jobData) => {
          return <ExperienceCard key={jobData._id} job={jobData} />;
        })}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
