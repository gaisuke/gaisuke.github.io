import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Experience from "@/components/experience";
import Skill from "@/components/skill";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Skill />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
