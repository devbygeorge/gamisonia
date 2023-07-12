"use client";

import { useContext } from "react";

import Image from "next/image";
import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import CategoriesMenu from "@/components/CategoriesMenu";
import ProjectItem from "@/components/ProjectItem";
import { CategoriesContext } from "@/context/categories.context";
import isMobileViewport from "@/utils/isMobileViewport";

import s from "./ProjectsSlider.module.scss";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Projects } from "../../../typings";

type Props = {
  projects: Projects;
};

export default function ProjectsSlider({ projects }: Props) {
  const { state, dispatch } = useContext(CategoriesContext);

  return (
    <div className={s.projectsSlider}>
      <Image
        className={s.backgroundImage}
        src={`/${state.activeCategory}.jpg`}
        alt={`${state.activeCategory} image`}
        quality={100}
        fill
        sizes="100vw"
      />
      <div className={s.backgroundOverlay}></div>

      <CategoriesMenu />

      <Swiper
        className={s.projectsSwiper}
        effect={isMobileViewport() ? "slide" : "coverflow"}
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
        spaceBetween={20}
        breakpoints={{
          768: {
            spaceBetween: 80,
          },
        }}
        initialSlide={state.activeSlide}
        onSlideChange={(swiper) => {
          dispatch({ type: "CHANGE_SLIDE", payload: swiper.activeIndex });
        }}
      >
        {projects[state.activeCategory as keyof typeof projects].map(
          (project) => (
            <SwiperSlide key={project["_id"]} className={s.projectsSwiperSlide}>
              <ProjectItem project={project} />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
}
