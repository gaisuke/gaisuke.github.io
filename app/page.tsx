import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
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
        <Contact />
      </main>
    </>
  );
}
