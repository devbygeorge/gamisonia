import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import s from "./Hero.module.scss";
import { sanityImageUrlBuilder } from "../../../sanity";
import { PageInfo } from "../../../typings";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const { heroImage } = pageInfo;
  const heroImageUrl = sanityImageUrlBuilder(heroImage);

  const t = useTranslations("Index");

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
        <h1 className={s.headline}>GAMISONIA</h1>
        <h2 className={s.subHeadline}>Architecture . Interior . Furniture</h2>
      </div>
    </section>
  );
}
