import Link from "next/link";

import ProjectDetails from "@/components/ProjectDetails";
import ScrollToTop from "@/components/SrollToTop";
import s from "@/styles/Projects.module.scss";
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
      <ScrollToTop />
      <div className="container">
        <Link className={`${s.button} button`} href="/#projects">
          back
        </Link>

        <ProjectDetails project={project} />
      </div>
    </main>
  );
}
