import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import getPageInfo from "@/utils/getPageInfo";
import getProjects from "@/utils/getProjects";

export default async function Home() {
  const pageInfo = await getPageInfo();
  const projects = await getProjects();

  return (
    <main className="main">
      <Hero pageInfo={pageInfo} />
      <Projects projects={projects} />
      <About pageInfo={pageInfo} />
      <Contact pageInfo={pageInfo} />
    </main>
  );
}
