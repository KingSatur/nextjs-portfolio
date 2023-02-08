import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../santiy";
import { Image } from "../typings";

type Props = {
  directionLeft?: boolean;
  imagePath?: string;
  logo?: Image;
};

const Skill = (props: Props) => {
  return (
    <div className="group relative flex-cursor-pointer rounded-lg">
      <motion.img
        initial={{
          x: props?.directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src={props?.imagePath ? props?.imagePath : String(urlFor(props.logo))}
        className="border border-gray-500
        max-[400px]:w-20 max-[400px]:h-20
        min-[400px]:w-20 min-[400px]:h-20
        object-cover
        sm:w-24 sm:h-24
        md:w-32 md:h-32
        filter 
        group-hover:grayscale 
        transition duration-300 ease-in-out p-2 md:p-5"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition durantion-300 
        ease-in-out group-hover:bh-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100"></p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
