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
  AboutSchema,
  CertificationSchema,
  ContactSchema,
  HeroSchema,
  JobSchema,
  ShowCaseSchema,
  SkillSchema,
  SocialSchema,
} from "../typings";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

import Link from "next/link";
import CertificationsSection from "../components/CertificationSection";

type Props = {
  heroData: HeroSchema | {};
  aboutData: AboutSchema | {};
  skillsData: SkillSchema[];
  jobData: JobSchema[];
  showCases: ShowCaseSchema[];
  contactData: ContactSchema;
  socialData: SocialSchema[];
  certificationData: CertificationSchema[];
};

export default function Home({
  heroData,
  aboutData,
  jobData = [],
  socialData = [],
  certificationData = [],
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

      {/* <section id="hero" className="snap-start">
        <Hero heroData={heroData} />
      </section>

      <section id="about" className="snap-center">
        <About aboutData={aboutData} />
      </section> */}

      <section id="certifications" className="snap-center">
        <CertificationsSection certificationsData={certificationData} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience jobData={jobData} />
      </section>

      {/* <section id="projects" className="snap-center">
        <Projects projects={showCases} />
      </section> */}

      {/* <section id="contact-me" className="snap-center">
        <ContactMe contactData={contactData} />
      </section> */}

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

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const heroData: HeroSchema = await getData<HeroSchema>(Paths.GET_HERO_DATA);
//   const aboutData: AboutSchema = await getData<AboutSchema>(
//     Paths.GET_ABOUT_DATA
//   );

//   const certificationData: CertificationSchema[] = await getData<
//     CertificationSchema[]
//   >(Paths.GET_CERTIFICATION_DATA);

//   const contactData: ContactSchema = await getData<ContactSchema>(
//     Paths.GET_CONTACT_DATA
//   );

//   const jobData: JobSchema[] = await getData<JobSchema[]>(Paths.GET_JOB_DATA);
//   const socialData: SocialSchema[] = await getData<SocialSchema[]>(
//     Paths.GET_SOCIAL_DATA
//   );

//   return {
//     props: {
//       heroData,
//       aboutData,
//       certificationData,
//       skillsData: [],
//       jobData,
//       showCases: [],
//       contactData,
//       socialData,
//     },
//     revalidate: 10,
//   };
// };
