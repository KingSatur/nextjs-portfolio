import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import { GetServerSideProps, GetStaticProps } from "next";
import { getHeroData } from "../utils/fetchHero";
import { HeroData } from "../typings";
import { sanityClient } from "../santiy";
import { groq } from "next-sanity";

type Props = {
  heroData: HeroData;
};

export default function Home({ heroData }: Props) {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y 
      snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#1D4ED8]"
    >
      <Head>
        <title>Create Next App</title>
      </Head>

      <Header />
      <section id="hero" className="snap-start">
        <Hero heroData={heroData} />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-center">
        <Skills />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>

      <section id="contact-me" className="snap-center">
        <ContactMe />
      </section>

      {/* <Link href={"#hero"}>
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src=""
              alt=""
            />
          </div>
        </footer>
      </Link> */}
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  // const query = groq`
  //   *[_type == "hero"][0]
  // `;

  // const heroData: HeroData = await sanityClient.fetch(query);
  const heroData: HeroData = await getHeroData();

  return {
    props: {
      heroData,
    },
    revalidate: 20,
  };
};

// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//   const heroData: HeroData = await getHeroData();

//   return {
//     props: {
//       heroData,
//     },
//   };
// };
