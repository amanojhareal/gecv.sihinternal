import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import { SOCIAL_LINKS } from "../../../config/links";
import styles from "./SocialLinks.module.css";

/**
 * SocialLinks
 * Renders icon links from config/links.js SOCIAL_LINKS. Same
 * string-to-component icon resolution pattern as Themes.jsx.
 */
const ICON_MAP = {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
};

const SocialLinks = () => {
  if (SOCIAL_LINKS.length === 0) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Follow Us</h2>
      <ul className={styles.list}>
        {SOCIAL_LINKS.map(({ platform, url, icon }) => {
          const Icon = ICON_MAP[icon];
          if (!Icon) return null;

          return (
            <li key={platform}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label={platform}
              >
                <Icon className={styles.icon} aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
