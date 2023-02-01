import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { SkillData } from "../typings";

type Props = {
  skillsData: SkillData[];
};

const Skills = ({ skillsData }: Props) => {
  return (
    <motion.div
      className="h-screen flex relative flex-col text-center md:text-left 
        max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center gap-7"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
        Tech stack
      </h3>
      <div className="grid grid-cols-5 gap-5">
        {skillsData?.map(({ imagePath, logo }) => {
          return <Skill imagePath={imagePath} logo={logo} />;
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
