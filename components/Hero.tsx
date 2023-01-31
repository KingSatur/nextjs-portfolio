import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { HeroData } from "../typings";

type Props = {
  heroData: HeroData;
};

const Hero = ({ heroData }: Props) => {
  const [text, count] = useTypewriter({
    words: heroData?.words,
    loop: true,
    delaySpeed: 1000,
    deleteSpeed: 100,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-fill h-32 w-32 mx-auto object-cover"
        src="../public/photo_profile.jfif"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="lightcyan" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="sectionButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="sectionButton">Experience</button>
          </Link>
          <Link href="#projects">
            <button className="sectionButton">Projects</button>
          </Link>
          <Link href="#skills">
            <button className="sectionButton">Skills</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
