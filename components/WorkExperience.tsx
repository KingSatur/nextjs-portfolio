import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import { JobData } from "../typings";

type Props = {
  jobData: JobData[];
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
        max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="uppercase mt-6 tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory 
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
