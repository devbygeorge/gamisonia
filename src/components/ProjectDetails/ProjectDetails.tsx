"use client";

import { useState } from "react";

import Image from "next/image";
import { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import s from "./ProjectDetails.module.scss";
import { sanityImageUrlBuilder } from "../../../sanity";
import { Project } from "../../../typings";

type Props = {
  project: Project;
};

export default function ProjectDetails({ project }: Props) {
  const { title, description, category, image } = project;

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <article className={s.projectDetails}>
      <div className={s.activeImageContainer}>
        <Swiper
          className={s.mainSwiper}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation, Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        >
          {image.map((item, i) => (
            <SwiperSlide key={i} className={s.mainSwiperSlide}>
              <Image
                className={s.mainImage}
                src={sanityImageUrlBuilder(item)}
                alt={item["description"]}
                quality={100}
                fill
                placeholder="blur"
                blurDataURL="/placeholder-normal.jpg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Swiper
        className={s.thumbsSwiper}
        slidesPerView={3.7}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 5.5,
            spaceBetween: 20,
          },
        }}
        onSwiper={setThumbsSwiper}
      >
        {image.map((thumb, i) => (
          <SwiperSlide key={i} className={s.thumbSwiperSlide}>
            <Image
              className={s.thumbImage}
              data-active={i == currentSlide}
              src={sanityImageUrlBuilder(thumb)}
              alt={thumb["description"]}
              quality={100}
              fill
              placeholder="blur"
              blurDataURL="/placeholder-small.jpg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={s.detailsField}>
        <span className={s.detailsFieldLabel}>name:</span>
        <span className={s.detailsFieldValue}>{title}</span>
      </div>

      <div className={s.detailsField}>
        <span className={s.detailsFieldLabel}>category:</span>
        <span className={s.detailsFieldValue}>{category}</span>
      </div>

      <div className={s.detailsField}>
        <span className={s.detailsFieldLabel}>description:</span>
        <p className={s.detailsFieldValue}>{description}</p>
      </div>
    </article>
  );
}
