import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
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
        src="../public/photo_profile.jfif"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      ></motion.img>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#1D4ED8]">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          consequuntur aliquid maxime exercitationem inventore debitis iste
          itaque error eligendi neque! Voluptates, cumque optio. Dolores quidem
          minima adipisci ea quo earum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Provident odit iure incidunt illo omnis
          necessitatibus iusto porro at distinctio explicabo, illum culpa fugiat
          vitae perferendis, veritatis velit quaerat deserunt. Soluta.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
