import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import getPageInfo from "@/utils/getPageInfo";
import getProjects from "@/utils/getProjects";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const pageInfo = await getPageInfo(locale);
  const projects = await getProjects(locale);

  return (
    <main className="main">
      <Hero pageInfo={pageInfo} />
      <Projects projects={projects} />
      <About pageInfo={pageInfo} />
      <Contact pageInfo={pageInfo} />
    </main>
  );
}
