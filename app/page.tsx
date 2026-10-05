import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Experience from "@/components/experience";
import AiNative from "@/components/ai-native";
import Education from "@/components/education";
import Wakatime from "@/components/wakatime";
import Blogs from "@/components/blogs";
import Projects from "@/components/projects";
import Credentials from "@/components/credentials";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <AiNative />
        <Wakatime />
        <Blogs />
        <Projects />
        <Education />
        <Credentials />
        <Contact />
      </main>
    </>
  );
}
