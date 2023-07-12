"use client";

import { useContext } from "react";

import CategoriesGrid from "@/components/CategoriesGrid";
import ProjectsSlider from "@/components/ProjectsSlider";
import { CategoriesContext } from "@/context/categories.context";

import s from "./Projects.module.scss";
import { Projects } from "../../../typings";

type Props = {
  projects: Projects;
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
