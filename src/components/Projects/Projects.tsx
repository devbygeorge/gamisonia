"use client";

import { useContext } from "react";

import CategoriesGrid from "@/components/CategoriesGrid";
import ProjectsSlider from "@/components/ProjectsSlider";
import { CategoriesContext } from "@/context/categories.context";

import s from "./Projects.module.scss";
import { Project } from "../../../typings";

type Props = {
  projects: {
    interior: Project[];
    architecture: Project[];
    object: Project[];
  };
};

export default function Projects({ projects }: Props) {
  const { state } = useContext(CategoriesContext);

  return (
    <section id="projects" className={s.projects}>
      {!state.activeCategory ? (
        <CategoriesGrid />
      ) : (
        <ProjectsSlider projects={projects} />
      )}
    </section>
  );
}
