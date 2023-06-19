import ProjectExtended from "@/components/ProjectExtended";
import getProject from "@/utils/getProject";

type Props = {
  params: {
    id: string;
  };
};

export default async function Project({ params }: Props) {
  const { id } = params;
  const project = await getProject(id);

  return (
    <main className="main">
      <ProjectExtended project={project} />
    </main>
  );
}
