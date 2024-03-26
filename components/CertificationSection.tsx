import React from "react";
import { motion } from "framer-motion";
import { CertificationSchema } from "../typings";
import { urlFor } from "../santiy";

type Props = {
  certificationsData: CertificationSchema[];
};

export default function CertificationsSection({ certificationsData }: Props) {
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
        Certifications
      </h3>

      <div className="flex justify-center items-center relative lg:flex-nowrap text-center flex-wrap min-[400px]:flex-row max-[400px]:flex-col">
        {certificationsData.map((certification, index) => (
          <div className="flex" key={certification._id}>
            <motion.img
              onClick={() => window.open(certification.credentialUrl, "_blank")}
              src={String(urlFor(certification.image).url())}
              className="flex-1 object-cover
                            max-w-60 max-h-60
                            lg:w-60 lg:h-60
                            md:w-60 md:h-60
                            sm:w-40 sm:h-40
                            max-[640px]:w-28 max-[640px]:h-28
                            transition duration-300 ease-in-out p-2 md:p-5 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
