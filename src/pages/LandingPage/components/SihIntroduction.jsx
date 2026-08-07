import { SITE_NAME } from "../../../config/constants";
import styles from "./SihIntroduction.module.css";

/**
 * SihIntroduction
 * Static intro blurb + tagline shown near the top of the Landing Page,
 * right under the hero/CountdownTimer. No data file needed — this is
 * fixed copy, not a list to map over.
 *
 * Content is deliberately short: this section exists to hook a visitor
 * in a few seconds, not explain everything (that's AboutPage's job).
 */
const SihIntroduction = () => {
  return (
    <section className={styles.wrapper} aria-labelledby="sih-intro-heading">
      <p className={styles.eyebrow}>{SITE_NAME}</p>
      <h1 id="sih-intro-heading" className={styles.tagline}>
        India's Biggest Open Innovation Model
      </h1>
      <p className={styles.blurb}>
        Smart India Hackathon brings together students from across the
        country to solve real, pressing problems faced by government
        ministries, departments, and industry — turning bold ideas into
        working solutions over one intense, collaborative sprint.
      </p>
    </section>
  );
};

export default SihIntroduction;
