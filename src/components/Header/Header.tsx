import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import s from "./Header.module.scss";

export default function Header() {
  const t = useTranslations("Index");

  return (
    <header className={s.header}>
      <div className="container">
        <nav className={s.nav}>
          <Link className={s.logoLink} href="/">
            <Image
              className={s.logoImage}
              src="/logo.svg"
              alt="GAMISONIA"
              quality={100}
              priority
              fill
              sizes="28px"
            />
          </Link>

          <ul className={s.navList}>
            <li className={s.navItem}>
              <Link className={s.navLink} href="/#projects">
                {t("projects")}
              </Link>
            </li>
            <li className={s.navItem}>
              <Link className={s.navLink} href="/#about">
                {t("about")}
              </Link>
            </li>
            <li className={s.navItem}>
              <Link className={s.navLink} href="/#contact">
                {t("contact")}
              </Link>
            </li>
          </ul>

          <div className={s.flags}>
            <Link className={s.flagLink} href="#">
              <Image
                className={s.flagImage}
                src="/flag-usa.svg"
                alt="Flag of United States"
                quality={100}
                priority
                fill
                sizes="32px"
              />
            </Link>
            <Link className={s.flagLink} href="#">
              <Image
                className={s.flagImage}
                src="/flag-geo.svg"
                alt="Flag of Georgia"
                quality={100}
                priority
                fill
                sizes="32px"
              />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
