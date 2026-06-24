import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Education from "@/components/education";
import Contact from "@/components/contact";
import Wakatime from "@/components/wakatime";
import Blogs from "@/components/blogs";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Wakatime />
        <Blogs />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  );
}
