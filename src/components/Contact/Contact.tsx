"use client";

import { useState } from "react";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const [isSubmitSuccess, setSubmitSuccess] = useState<null | boolean>(null);

  const t = useTranslations("Index");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");

    setSubmitting(true);

    const res = await fetch("/api/mails", {
      method: "post",
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });

    if (res.status === 201) {
      setSubmitSuccess(true);
    } else {
      setSubmitSuccess(false);
    }

    setSubmitting(false);

    setTimeout(() => {
      setSubmitSuccess(null);
    }, 2000);
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={s.formControl}>
            <label className={s.formLabel} htmlFor="email">
              {t("email-address")}
            </label>
            <input
              className={s.formInput}
              type="email"
              placeholder={t("your-email-address")}
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={s.formControl}>
            <label className={s.formLabel} htmlFor="phone">
              {t("phone-number")}
            </label>
            <input
              className={s.formInput}
              type="tel"
              placeholder={t("your-phone-number")}
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          {isSubmitSuccess == true ? (
            <p>{t("thank-you-for-getting-in-touch")}</p>
          ) : isSubmitSuccess == false ? (
            <p>{t("unable-to-send-message")}</p>
          ) : null}

          <button
            className={`${s.formSubmit} button`}
            data-color="dark"
            data-disabled={isSubmitting}
          >
            {t("submit")}
            <FaFacebookMessenger />
          </button>
        </form>
      </div>
    </section>
  );
}
