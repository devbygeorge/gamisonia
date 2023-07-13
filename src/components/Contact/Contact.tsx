"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaFacebookMessenger } from "react-icons/fa";

import s from "./Contact.module.scss";
import { PageInfo } from "../../../typings";

type Props = {
  pageInfo: PageInfo;
};

export default function Contact({ pageInfo }: Props) {
  const { contactText } = pageInfo;

  const t = useTranslations("Index");

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className={s.contact}>
      <div className={s.imageContainer}>
        <Image
          src="/architecture.jpg"
          alt="Contact Image"
          quality={100}
          fill
          sizes="50vw"
        />
      </div>
      <div className={s.content}>
        <h2 className="section-title" data-color="dark">
          {t("contact-us")}
        </h2>
        <p className={s.paragraph}>{contactText}</p>

        <form className={s.form} onSubmit={handleSubmit}>
          <div className={s.formControl}>
            <label className={s.formLabel} htmlFor="name">
              {t("full-name")}
            </label>
            <input
              className={s.formInput}
              type="text"
              placeholder={t("your-full-name")}
              name="name"
            />
          </div>
          <div className={s.formControl}>
            <label className={s.formLabel} htmlFor="email">
              {t("email-address")}
            </label>
            <input
              className={s.formInput}
              type="text"
              placeholder={t("your-email-address")}
              name="email"
            />
          </div>
          <div className={s.formControl}>
            <label className={s.formLabel} htmlFor="phone">
              {t("phone-number")}
            </label>
            <input
              className={s.formInput}
              type="text"
              placeholder={t("your-phone-number")}
              name="phone"
            />
          </div>
          <div className={s.formControl}>
            <label className={s.formLabel} htmlFor="message">
              {t("message")}
            </label>
            <textarea
              className={s.formInput}
              placeholder={t("enter-message")}
              name="message"
            />
          </div>
          <button className={`${s.formSubmit} button`} data-color="dark">
            {t("submit")}
            <FaFacebookMessenger />
          </button>
        </form>
      </div>
    </section>
  );
}
