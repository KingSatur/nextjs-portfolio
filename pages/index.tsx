import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import { GetServerSideProps, GetStaticProps } from "next";
import { Paths, getData } from "../utils/fetch";
import {
  AboutData,
  ContactData,
  HeroData,
  JobData,
  ShowCase,
  SkillData,
  SocialData,
} from "../typings";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

import Link from "next/link";

type Props = {
  heroData: HeroData;
  aboutData: AboutData;
  skillsData: SkillData[];
  jobData: JobData[];
  showCases: ShowCase[];
  contactData: ContactData;
  socialData: SocialData[];
};

export default function Home({
  heroData,
  aboutData,
  skillsData,
  jobData,
  showCases,
  socialData,
  contactData,
}: Props) {
  return (
    <div
      className="bg-[rgb(31,36,44)] text-white h-screen snap-y 
      snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#1D4ED8]"
    >
      <Head>
        <title>Portfolio</title>
      </Head>

      <Header socialData={socialData} />
      <section id="hero" className="snap-start">
        <Hero heroData={heroData} />
      </section>

      <section id="about" className="snap-center">
        <About aboutData={aboutData} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience jobData={jobData} />
      </section>

      <section id="skills" className="snap-center">
        <Skills skillsData={skillsData} />
      </section>

      <section id="projects" className="snap-center">
        <Projects projects={showCases} />
      </section>

      <section id="contact-me" className="snap-center">
        <ContactMe contactData={contactData} />
      </section>

      <Link href={"#hero"}>
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <ArrowUpCircleIcon className="text-[white] h-14 w-14 animate-pulse" />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const heroData: HeroData = await getData<HeroData>(Paths.GET_HERO_DATA);
  const aboutData: AboutData = await getData<AboutData>(Paths.GET_ABOUT_DATA);

  const skillsData: SkillData[] = await getData<SkillData[]>(
    Paths.GET_SKILL_DATA
  );

  const contactData: ContactData = await getData<ContactData>(
    Paths.GET_CONTACT_DATA
  );

  const jobData: JobData[] = await getData<JobData[]>(Paths.GET_JOB_DATA);
  const socialData: SocialData[] = await getData<SocialData[]>(
    Paths.GET_SOCIAL_DATA
  );
  const showCaseData: ShowCase[] = await getData<ShowCase[]>(
    Paths.GET_SHOW_CASE
  );

  jobData.sort((a, b) => a.relevance - b.relevance);
  showCaseData.sort((a, b) => a.relevance - b.relevance);

  return {
    props: {
      heroData,
      aboutData,
      skillsData,
      jobData,
      showCases: showCaseData,
      contactData,
      socialData,
    },
    revalidate: 10,
  };
};

// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//   const heroData: HeroData = await getData<HeroData>(Paths.GET_HERO_DATA);
//   const aboutData: AboutData = await getData<AboutData>(Paths.GET_ABOUT_DATA);

//   const skillsData: SkillData[] = await getData<SkillData[]>(
//     Paths.GET_SKILL_DATA
//   );

//   const contactData: ContactData = await getData<ContactData>(
//     Paths.GET_CONTACT_DATA
//   );

//   const jobData: JobData[] = await getData<JobData[]>(Paths.GET_JOB_DATA);
//   const socialData: SocialData[] = await getData<SocialData[]>(
//     Paths.GET_SOCIAL_DATA
//   );
//   const showCaseData: ShowCase[] = await getData<ShowCase[]>(
//     Paths.GET_SHOW_CASE
//   );

//   jobData.sort((a, b) => a.relevance - b.relevance);
//   showCaseData.sort((a, b) => a.relevance - b.relevance);

//   return {
//     props: {
//       heroData,
//       aboutData,
//       skillsData,
//       jobData,
//       showCases: showCaseData,
//       contactData,
//       socialData,
//     },
//   };
// };
