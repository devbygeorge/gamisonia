import { SocialIcon } from "react-social-icons";

import getSocials from "@/utils/getSocials";

import s from "./Footer.module.scss";
import { Social } from "../../../typings";

export default async function Footer() {
  const socials: Social[] = await getSocials();

  const renderSocialIcon = (url: string) => {
    return (
      <SocialIcon
        url={url}
        target="_blank"
        rel="noreferrer"
        fgColor="rgb(230,230,230)"
        bgColor="transparent"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    );
  };

  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.content}>
          <span>
            &copy; 2022 - {new Date().getFullYear()} Anushka Gamisonia
          </span>
          <ul className={s.socials}>
            {socials.map((social) => (
              <li className={s.socialItem} key={social["_id"]}>
                {renderSocialIcon(social["url"])}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
