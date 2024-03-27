import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import { GetServerSideProps, GetStaticProps } from "next";
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
import { fetchWithSanityQuery, Querys } from "../utils/sanityFetcher";

type Props = {
  heroData: HeroSchema;
  aboutData: AboutSchema;
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

      <section id="hero" className="snap-start">
        <Hero heroData={heroData} />
      </section>

      <section id="about" className="snap-center">
        <About aboutData={aboutData} />
      </section>

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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const heroData: HeroSchema = await fetchWithSanityQuery<HeroSchema>(
    Querys.GET_HERO_DATA_QUERY
  );
  const aboutData: AboutSchema = await fetchWithSanityQuery<AboutSchema>(
    Querys.GET_ABOUT_DATA_QUERY
  );

  const certificationData: CertificationSchema[] = await fetchWithSanityQuery<
    CertificationSchema[]
  >(Querys.GET_CERTIFICATION_DATA_QUERY);

  const contactData: ContactSchema = await fetchWithSanityQuery<ContactSchema>(
    Querys.GET_CONTACT_DATA_QUERY
  );

  const jobData: JobSchema[] = await fetchWithSanityQuery<JobSchema[]>(
    Querys.GET_JOB_DATA_QUERY
  );
  const socialData: SocialSchema[] = await fetchWithSanityQuery<SocialSchema[]>(
    Querys.GET_SOCIAL_DATA_QUERY
  );

  return {
    props: {
      heroData,
      aboutData,
      certificationData,
      skillsData: [],
      jobData,
      showCases: [],
      contactData,
      socialData,
    },
    revalidate: 10,
  };
};
