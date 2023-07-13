import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import s from "./ProjectItem.module.scss";
import { sanityImageUrlBuilder } from "../../../sanity";
import { Project } from "../../../typings";

type Props = {
  project: Project;
};

export default function ProjectItem({ project }: Props) {
  const { _id, title, image } = project;
  const imageUrl = sanityImageUrlBuilder(image[0]);

  const t = useTranslations("Index");

  return (
    <div className={s.projectItem}>
      <div className={s.imageContainer}>
        <img
          className="placeholder-image"
          src="/placeholder-normal.jpg"
          alt={image[0]["description"]}
        />
        <Image
          className={s.image}
          src={imageUrl}
          alt={image[0]["description"]}
          quality={100}
          fill
          sizes="(max-width: 768px) 600px, 860px"
        />
      </div>

      <div className={s.content}>
        <span className={s.title}>{title}</span>
        <Link className={s.link} href={`/projects/${_id}`}>
          {t("view-project")}
        </Link>
      </div>
    </div>
  );
}
