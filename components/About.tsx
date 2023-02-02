import React from "react";
import { motion } from "framer-motion";
import { AboutData } from "../typings";
import { urlFor } from "../santiy";

type Props = {
  aboutData: AboutData;
};

function About({ aboutData }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src={String(urlFor(aboutData?.photo))}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-[300px] xl:w-[500px] xl:h-[600px]"
      ></motion.img>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold text-blue-500">
          My <span className="underline decoration-[white]">background</span>
        </h4>
        <p className="text-lg">{aboutData.background}</p>
      </div>
    </motion.div>
  );
}

export default About;
