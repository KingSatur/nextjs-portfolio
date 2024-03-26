import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { HeroSchema } from "../typings";
import { urlFor } from "../santiy";

type Props = {
  heroData: HeroSchema;
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
      {heroData?.photo && (
        <img
          className="relative rounded-full h-36 w-36 mx-auto object-cover"
          src={String(urlFor(heroData?.photo))}
          alt=""
        />
      )}
      <div className="z-20">
        <h2 className="text-lg font-semibold uppercase text-gray-500 pb-2 tracking-[10px]">
          {heroData?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="lightcyan" />
        </h1>
        <div className="pt-5 flex flex-col sm:flex sm:flex-wrap md:block xl:block">
          <Link href="#about">
            <button className="sectionButton">About</button>
          </Link>
          <Link href="#certifications">
            <button className="sectionButton">Certifications</button>
          </Link>
          <Link href="#experience">
            <button className="sectionButton">Experience</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
