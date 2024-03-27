import React from "react";
import { motion } from "framer-motion";
import { AboutSchema } from "../typings";
import { urlFor } from "../santiy";

type Props = {
  aboutData: AboutSchema;
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
      <h3
        className="md:absolute sm:absolute xl:absolute top-24 uppercase tracking-[20px] 
        text-gray-500 sm:text-2xl md:text-2xl xl:text-2xl text-1xl mt-10 md:mt-0 xl:mt-0"
      >
        About
      </h3>

      {aboutData?.photo && (
        <motion.img
          initial={{
            x: -200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          src={String(urlFor(aboutData?.photo))}
          className="-mb-20 md:mb-0 flex-shrink-0 w-200px h-200px rounded-lg object-cover md:rounded-lg md:w-64 md:h-[300px] xl:w-[500px] xl:h-[600px] "
        ></motion.img>
      )}

      <div className="space-y-10 px-0 md:px-10 mt-16 md:mt-0 xl:mt-0">
        <h4 className="md:text-4xl xl:text-4xl sm:text-3xl text-2xl font-semibold text-blue-500">
          My <span className="underline decoration-[white]">background</span>
        </h4>
        <p className="text-sm sm:text-base md:text-lg xl:text-lg">
          {aboutData?.description}
        </p>
      </div>
    </motion.div>
  );
}

export default About;
