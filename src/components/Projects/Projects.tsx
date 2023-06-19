"use client";

import { useState } from "react";

import CategoriesGrid from "@/components/CategoriesGrid";
import ProjectsSlider from "@/components/ProjectsSlider";

import s from "./Projects.module.scss";
import { Project } from "../../../typings";

const categories = ["interior", "architecture", "object"];

type Props = {
  projects: {
    interior: Project[];
    architecture: Project[];
    object: Project[];
  };
};

export default function Projects({ projects }: Props) {
  const [activeCategory, setActiveCategory] = useState<null | string>(null);

  const changeActiveCategory = (category: string) => {
    setActiveCategory(category);
  };

  const resetActiveCategory = () => {
    setActiveCategory(null);
  };

  return (
    <section id="projects" className={s.projects}>
      {!activeCategory ? (
        <CategoriesGrid
          categories={categories}
          changeActiveCategory={changeActiveCategory}
        />
      ) : (
        <ProjectsSlider
          projects={projects}
          categories={categories}
          activeCategory={activeCategory}
          changeActiveCategory={changeActiveCategory}
          resetActiveCategory={resetActiveCategory}
        />
      )}
    </section>
  );
}
