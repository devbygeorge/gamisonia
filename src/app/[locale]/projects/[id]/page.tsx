import ProjectDetails from "@/components/ProjectDetails";
import ScrollToTop from "@/components/SrollToTop";
import getProject from "@/utils/getProject";

type Props = {
  params: {
    id: string;
    locale: string;
  };
};

export default async function Project({ params }: Props) {
  const { id, locale } = params;
  const project = await getProject(id, locale);

  return (
    <main className="main">
      <ScrollToTop />
      <ProjectDetails project={project} />
    </main>
  );
}
