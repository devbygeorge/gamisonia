import Image from "next/image";
import { useTranslations } from "next-intl";

import s from "./About.module.scss";
import { sanityImageUrlBuilder } from "../../../sanity";
import { PageInfo } from "../../../typings";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  const { aboutParagraph1, aboutParagraph2, aboutParagraph3, aboutImageNew } =
    pageInfo;
  const aboutImageUrl = sanityImageUrlBuilder(aboutImageNew);

  const t = useTranslations("Index");

  return (
    <section id="about" className={s.about}>
      <div className="container">
        <h2 className="section-title">{t("about-us")}</h2>
        <p className={s.paragraph}>{aboutParagraph1}</p>
        <div className={s.columns}>
          <div>
            <p className={s.paragraph}>{aboutParagraph2}</p>
            <p className={s.paragraph}>{aboutParagraph3}</p>
          </div>
          <div className={s.aboutImageContainer}>
            <Image
              className={s.aboutImage}
              src={aboutImageUrl}
              alt={aboutImageNew["description"]}
              quality={100}
              fill
              sizes="(max-width: 768px) 243px, 343px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
