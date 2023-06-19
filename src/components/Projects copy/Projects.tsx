"use client";

import { useState } from "react";

import Image from "next/image";
import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import CategoriesGrid from "@/components/CategoriesGrid";
import CategoriesMenu from "@/components/CategoriesMenu";
import ProjectItem from "@/components/ProjectItem";

import s from "./Projects.module.scss";
import { Project } from "../../../typings";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const categories = ["interior", "architecture", "object"];

export default function Projects() {
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
        <>
          <Image
            className={s.backgroundImage}
            src={`/${activeCategory}.jpg`}
            alt={`${activeCategory} image`}
            quality={100}
            fill
          />
          <div className={s.backgroundOverlay}></div>

          <CategoriesMenu
            activeCategory={activeCategory}
            categories={categories}
            changeActiveCategory={changeActiveCategory}
            resetActiveCategory={resetActiveCategory}
          />

          <Swiper
            className={s.projectsSwiper}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            spaceBetween={80}
          >
            {projects[activeCategory as keyof typeof projects].map(
              (project) => (
                <SwiperSlide
                  key={project["_id"]}
                  className={s.projectsSwiperSlide}
                >
                  <ProjectItem project={project} />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </>
      )}
    </section>
  );
}
