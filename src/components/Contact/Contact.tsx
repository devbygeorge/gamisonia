"use client";

import Image from "next/image";
import { FaFacebookMessenger } from "react-icons/fa";

import s from "./Contact.module.scss";
import { PageInfo } from "../../../typings";

type Props = {
  pageInfo: PageInfo;
};

export default function Contact({ pageInfo }: Props) {
  const { contactText } = pageInfo;

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
          Contact Us
        </h2>
        <p className={s.paragraph}>{contactText}</p>

        <form className={s.form} onSubmit={handleSubmit}>
          <div className={s.formControl}>
            <label className={s.formLabel} htmlFor="name">
              full name
            </label>
            <input
              className={s.formInput}
              type="text"
              placeholder="Your Full Name"
              name="name"
            />
          </div>
          <div className={s.formControl}>
            <label className={s.formLabel} htmlFor="email">
              email address
            </label>
            <input
              className={s.formInput}
              type="text"
              placeholder="Your Email Address"
              name="email"
            />
          </div>
          <div className={s.formControl}>
            <label className={s.formLabel} htmlFor="phone">
              phone number
            </label>
            <input
              className={s.formInput}
              type="text"
              placeholder="Your Phone Number"
              name="phone"
            />
          </div>
          <div className={s.formControl}>
            <label className={s.formLabel} htmlFor="message">
              message
            </label>
            <textarea
              className={s.formInput}
              placeholder="Your Message"
              name="message"
            />
          </div>
          <button className={`${s.formSubmit} button`} data-color="dark">
            Submit
            <FaFacebookMessenger />
          </button>
        </form>
      </div>
    </section>
  );
}
