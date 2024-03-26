import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { SocialSchema } from "../typings";

type Props = {
  socialData: SocialSchema[];
};

const Header = ({ socialData }: Props) => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center flex-1 gap-3"
      >
        {socialData?.map((social) => {
          return (
            <SocialIcon
              key={social?._id}
              className="cursor-pointer"
              bgColor="white"
              target="_blank"
              url={social?.url}
            />
          );
        })}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer gap-2"
      >
        <SocialIcon
          network="email"
          className="cursor-pointer"
          bgColor="white"
        />
        <Link href={"#contact-me"}>
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400 font-semibold tracking-[3px]">
            Let's talk
          </p>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
