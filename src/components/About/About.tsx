import Image from "next/image";

import getPageInfo from "@/utils/getPageInfo";

import s from "./About.module.scss";
import { sanityImageUrlBuilder } from "../../../sanity";

export default async function About() {
  const { aboutParagraph1, aboutParagraph2, aboutParagraph3, aboutImageNew } =
    await getPageInfo();
  const aboutImageUrl = sanityImageUrlBuilder(aboutImageNew);

  return (
    <section id="about" className={s.about}>
      <div className="container">
        <h2 className="section-title">about us</h2>
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
            />
          </div>
        </div>
      </div>
    </section>
  );
}
