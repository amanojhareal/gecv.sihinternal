import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_ADDRESS,
} from "../../../config/constants";
import styles from "./ContactInfo.module.css";

/**
 * ContactInfo
 * Displays email, phone, and address. Pulls all three from
 * config/constants.js — the same source ContactForm.jsx uses for
 * CONTACT_EMAIL — so this is the single place contact details live;
 * update them once there and every component using them stays in sync.
 *
 * Email and phone are rendered as tappable/clickable links (mailto:/
 * tel:) since on mobile especially, that turns a static detail into a
 * one-tap action.
 */
const ContactInfo = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Get in Touch</h2>

      <dl className={styles.list}>
        <div className={styles.row}>
          <dt className={styles.label}>Email</dt>
          <dd className={styles.value}>
            <a href={`mailto:${CONTACT_EMAIL}`} className={styles.link}>
              {CONTACT_EMAIL}
            </a>
          </dd>
        </div>

        <div className={styles.row}>
          <dt className={styles.label}>Phone</dt>
          <dd className={styles.value}>
            <a
              href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}
              className={styles.link}
            >
              {CONTACT_PHONE}
            </a>
          </dd>
        </div>

        <div className={styles.row}>
          <dt className={styles.label}>Address</dt>
          <dd className={styles.value}>{CONTACT_ADDRESS}</dd>
        </div>
      </dl>
    </div>
  );
};

export default ContactInfo;
