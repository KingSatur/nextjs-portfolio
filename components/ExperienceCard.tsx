import React from "react";
import { JobSchema } from "../typings";
import { urlFor } from "../santiy";

type Props = {
  job: JobSchema;
};

const ExperienceCard = ({ job }: Props) => {
  return (
    <article
      className="flex flex-col 
    rounded-lg items-center 
    space-y-7 flex-shrink-0 
    md:w-[700px]
    xl:w-[700px] 
    w-[100%]
    snap-center
    bg-[#292929] xl:p-10 md:p-10 p-7 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{job.name}</h4>
        <p className="font-bold text-2xl mt-1">{job.role}</p>
        <div className="flex gap-2 flex-wrap">
          {job?.techStack?.map((skill) => {
            return (
              <img
                key={skill._id}
                className="md:h-10 md:w-10 xl:h-10 xl:w-10 w-7 h-7"
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
        <ul className="list-disc space-y-4 md:ml-5 xl:ml-5 text-lg h-[28rem] max-h-[28rem] sm:h-96 md:h-96 xl:h-96 scrollbar-thin md:overflow-hidden xl:overflow-hidden scrollbar-track-gray-400/20 scrollbar-thumb-[#1D4ED8]">
          {job?.keyAchievements?.map((achievement, i) => {
            return (
              <li className="text-sm md:text-sm xl:text-sm" key={i}>
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
