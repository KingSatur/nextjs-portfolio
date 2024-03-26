import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { SkillSchema } from "../typings";

type Props = {
  skillsData: SkillSchema[];
};

const Skills = ({ skillsData }: Props) => {
  return (
    <motion.div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="uppercase absolute top-24 tracking-[20px] text-gray-500 sm:text-2xl text-1xl text-center">
        Tech stack
      </h3>
      <div className="flex flex-wrap justify-center sm:grid sm:grid-cols-5 sm:gap-0 p-3 min-w-[277px]">
        {skillsData?.map(({ imagePath, logo, _id }) => {
          return <Skill key={_id} imagePath={imagePath} logo={logo} />;
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
