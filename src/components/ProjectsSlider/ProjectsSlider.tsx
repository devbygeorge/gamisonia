import Image from "next/image";
import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import CategoriesMenu from "@/components/CategoriesMenu";
import ProjectItem from "@/components/ProjectItem";

import s from "./ProjectsSlider.module.scss";
import { Project } from "../../../typings";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

type Props = {
  projects: {
    interior: Project[];
    architecture: Project[];
    object: Project[];
  };
  categories: string[];
  activeCategory: string;
  changeActiveCategory: (category: string) => void;
  resetActiveCategory: () => void;
};

export default function ProjectsSlider({
  projects,
  categories,
  activeCategory,
  changeActiveCategory,
  resetActiveCategory,
}: Props) {
  return (
    <div className={s.projectsSlider}>
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
        {projects[activeCategory as keyof typeof projects].map((project) => (
          <SwiperSlide key={project["_id"]} className={s.projectsSwiperSlide}>
            <ProjectItem project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
