"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
// @ts-ignore
import PhotoSwipeLightbox from "photoswipe/lightbox";
import { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import s from "./ProjectDetails.module.scss";
import { sanityImageUrlBuilder } from "../../../sanity";
import { Project } from "../../../typings";

import "photoswipe/style.css";

type Props = {
  project: Project;
};

export default function ProjectDetails({ project }: Props) {
  const { title, description, category, image } = project;

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + "mainSwiper",
      children: "a",
      showHideAnimationType: "fade",
      mouseMovePan: true,
      initialZoomLevel: "fit",
      secondaryZoomLevel: 2,
      maxZoomLevel: 1,
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <article className={s.projectDetails}>
      <Swiper
        id="mainSwiper"
        className={s.mainSwiper}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
      >
        {image.map((item, i) => {
          const imageUrl = sanityImageUrlBuilder(item);
          return (
            <SwiperSlide key={i} className={s.mainSwiperSlide}>
              <a
                href={imageUrl}
                data-pswp-width={800}
                data-pswp-height={800}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="placeholder-image"
                  src="/placeholder-normal.jpg"
                  alt={image[0]["description"]}
                />
                <Image
                  className={s.mainImage}
                  src={imageUrl}
                  alt={item["description"]}
                  quality={100}
                  fill
                />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>

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
          <SwiperSlide
            key={i}
            className={s.thumbSwiperSlide}
            data-active={i == currentSlide}
          >
            <img
              className="placeholder-image"
              src="/placeholder-small.jpg"
              alt={image[0]["description"]}
            />
            <Image
              className={s.thumbImage}
              src={sanityImageUrlBuilder(thumb)}
              alt={thumb["description"]}
              quality={100}
              fill
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
