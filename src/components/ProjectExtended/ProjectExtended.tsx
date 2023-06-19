"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import s from "./ProjectExtended.module.scss";
import { sanityImageUrlBuilder } from "../../../sanity";
import { Project } from "../../../typings";

type Props = {
  project: Project;
};

export default function ProjectExtended({ project }: Props) {
  const { title, description, category, image } = project;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <article className={s.projectExtended}>
      <div className="container">
        <Link className={`${s.button} button`} href="/#projects" scroll={false}>
          back
        </Link>

        <div className={s.activeImageContainer}>
          <Image
            className={s.activeImage}
            src={sanityImageUrlBuilder(image[activeImageIndex])}
            alt={image[activeImageIndex]["description"]}
            quality={100}
            fill
            placeholder="blur"
            blurDataURL="/placeholder-normal.jpg"
          />
        </div>

        <Swiper
          className={s.thumbsSwiper}
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {image.map((thumb, i) => (
            <SwiperSlide
              key={i}
              className={s.thumbSwiperSlide}
              onClick={() => setActiveImageIndex(i)}
            >
              <Image
                className={s.thumbImage}
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
      </div>
    </article>
  );
}
