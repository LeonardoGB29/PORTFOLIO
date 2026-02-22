import { Metadata } from "next";

import AboutMe from "@/src/components/about-me";
import Banner from "@/src/components/banner";
import Experiences from "@/src/components/experiences";
import IntroScreen from "@/src/components/intro-screen";
import ProjectList from "@/src/components/project-list";
import Skills from "@/src/components/skills";
import { SECTION_FLAGS } from "@/src/lib/data";

export const metadata: Metadata = {
  title: "Full Stack Developer"
};

export default function Home() {
  return (
    <>
      <IntroScreen />
      <div className="container px-8 md:px-0">
        <Banner />
        {SECTION_FLAGS.showAbout && <AboutMe />}
        {SECTION_FLAGS.showSkills && <Skills />}
        {SECTION_FLAGS.showExperience && <Experiences />}
        {SECTION_FLAGS.showProjects && <ProjectList />}
      </div>
    </>
  );
}
