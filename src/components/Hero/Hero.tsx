import Image from "next/image";
import Link from "next/link";

import getPageInfo from "@/utils/getPageInfo";

import s from "./Hero.module.scss";
import { sanityImageUrlBuilder } from "../../../sanity";

export default async function Hero() {
  const { heroImage } = await getPageInfo();
  const heroImageUrl = sanityImageUrlBuilder(heroImage);

  return (
    <section className={s.hero}>
      <Image
        className={s.backgroundImage}
        src={heroImageUrl}
        alt={heroImage["description"]}
        quality={100}
        priority
        fill
        sizes="100vw"
      />

      <div className={s.backgroundOverlay}></div>

      <div className={s.textWrapper}>
        <h1 className={s.headline}>
          <Image
            src="/headline.svg"
            alt="GAMISONIA"
            quality={100}
            priority
            fill
            sizes="(max-width: 768px) 220px, 442px"
          />
        </h1>
        <span className={s.subHeadline}>design studio</span>
        <Link className="button" href="/#projects">
          projects
        </Link>
      </div>
    </section>
  );
}
