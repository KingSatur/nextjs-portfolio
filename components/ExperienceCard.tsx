import React from "react";
import { motion } from "framer-motion";
import { JobData } from "../typings";
import { urlFor } from "../santiy";

type Props = {
  job: JobData;
};

const ExperienceCard = ({ job }: Props) => {
  return (
    <article
      className="flex flex-col 
    rounded-lg items-center 
    space-y-7 flex-shrink-0 
    w-[500px] md:w-[600px] 
    xl:w-[900px] 
    snap-center
    bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{job.name}</h4>
        <p className="font-bold text-2xl mt-1">{job.role}</p>
        <div className="flex space-x-2 my-2">
          {job?.techStack?.map((skill) => {
            return (
              <img
                className="h-10 w-10"
                src={skill.imagePath || String(urlFor(skill.logo))}
                alt=""
              />
            );
          })}
        </div>
        <p className="uppercase py-5 text-gray-300 font-semibold">
          {new Date(job?.starDate).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
          })}{" "}
          -
          {job?.isCurrentlyWorking
            ? " Present"
            : new Date(job?.finishDate).toLocaleDateString("en-us", {
                year: "numeric",
                month: "long",
              })}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg max-h-68">
          {job?.keyAchievements?.map((achievement, i) => {
            return (
              <li className="text-sm" key={i}>
                {achievement}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
