"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
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

  const t = useTranslations("Index");

  function getImageDimensions(url: string) {
    const regex = /(\d+)x(\d+)/;
    const match = url.match(regex);
    if (match) {
      const width = parseInt(match[1], 10);
      const height = parseInt(match[2], 10);
      return { width, height };
    }
    return null;
  }

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
    <div className="container">
      <Link className={`${s.button} button`} href="/#projects">
        {t("back")}
      </Link>

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
          {image?.map((item, i) => {
            const imageUrl = sanityImageUrlBuilder(item);
            const dimensions = getImageDimensions(imageUrl);
            let width = 800;
            let height = 800;

            if (dimensions) {
              width = dimensions.width;
              height = dimensions.height;
            }
            console.log(width, height);

            return (
              <SwiperSlide key={i} className={s.mainSwiperSlide}>
                <a
                  className={s.mainImageWrapper}
                  href={imageUrl}
                  data-pswp-width={width}
                  data-pswp-height={height}
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
                    sizes="(max-width: 1200) 100vw, 1120px"
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
          {image?.map((thumb, i) => (
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
                sizes="185px"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={s.detailsField}>
          <span className={s.detailsFieldLabel}>{t("name")}:</span>
          <span className={s.detailsFieldValue}>{title}</span>
        </div>

        <div className={s.detailsField}>
          <span className={s.detailsFieldLabel}>{t("category")}:</span>
          <span className={s.detailsFieldValue} data-capitalize>
            {t(category)}
          </span>
        </div>

        <div className={s.detailsField}>
          <span className={s.detailsFieldLabel}>{t("description")}:</span>
          <p className={s.detailsFieldValue}>{description}</p>
        </div>
      </article>
    </div>
  );
}
