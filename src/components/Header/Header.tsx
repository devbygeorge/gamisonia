"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import IntlLink from "next-intl/link";

import s from "./Header.module.scss";

export default function Header() {
  const [isNavbarActive, setNavbarActive] = useState(false);
  const mobileNavRef = useRef<any>(null);
  const t = useTranslations("Index");

  const handleNavbarToggle = () => {
    setNavbarActive((state) => !state);
  };

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (
        isNavbarActive &&
        mobileNavRef.current &&
        !mobileNavRef.current.contains(e.target)
      ) {
        handleNavbarToggle();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isNavbarActive]);

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
            <IntlLink className={s.flagLink} href="/" locale="en">
              <Image
                className={s.flagImage}
                src="/flag-usa.svg"
                alt="Flag of United States"
                quality={100}
                priority
                fill
                sizes="32px"
              />
            </IntlLink>
            <IntlLink className={s.flagLink} href="/" locale="ge">
              <Image
                className={s.flagImage}
                src="/flag-geo.svg"
                alt="Flag of Georgia"
                quality={100}
                priority
                fill
                sizes="32px"
              />
            </IntlLink>
          </div>

          <button
            className={s.toggle}
            onClick={handleNavbarToggle}
            aria-expanded={isNavbarActive}
            aria-label="Menu Toggle"
          >
            <span className={s.bar}></span>
            <span className={s.bar}></span>
            <span className={s.bar}></span>
          </button>

          <div
            ref={mobileNavRef}
            className={s.mobileNavContainer}
            data-visible={isNavbarActive}
          >
            <button
              className={s.toggle}
              onClick={handleNavbarToggle}
              aria-expanded={isNavbarActive}
              aria-label="Menu Toggle"
            >
              <span className={s.bar}></span>
              <span className={s.bar}></span>
              <span className={s.bar}></span>
            </button>

            <ul className={s.mobileNavList}>
              <li className={s.mobileNavItem}>
                <Link
                  className={s.mobileNavLink}
                  href="/#"
                  onClick={handleNavbarToggle}
                >
                  {t("home")}
                </Link>
              </li>
              <li className={s.mobileNavItem}>
                <Link
                  className={s.mobileNavLink}
                  href="/#projects"
                  onClick={handleNavbarToggle}
                >
                  {t("projects")}
                </Link>
              </li>
              <li className={s.mobileNavItem}>
                <Link
                  className={s.mobileNavLink}
                  href="/#about"
                  onClick={handleNavbarToggle}
                >
                  {t("about")}
                </Link>
              </li>
              <li className={s.mobileNavItem}>
                <Link
                  className={s.mobileNavLink}
                  href="/#contact"
                  onClick={handleNavbarToggle}
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>

            <div className={s.mobileFlags}>
              <IntlLink className={s.flagLink} href="/" locale="en">
                <Image
                  className={s.flagImage}
                  src="/flag-usa.svg"
                  alt="Flag of United States"
                  quality={100}
                  priority
                  fill
                  sizes="32px"
                />
              </IntlLink>
              <IntlLink className={s.flagLink} href="/" locale="ge">
                <Image
                  className={s.flagImage}
                  src="/flag-geo.svg"
                  alt="Flag of Georgia"
                  quality={100}
                  priority
                  fill
                  sizes="32px"
                />
              </IntlLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
