import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import getProjects from "@/utils/getProjects";

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="main">
      <Hero />
      <Projects projects={projects} />
      <About />
      <Contact />
    </main>
  );
}
