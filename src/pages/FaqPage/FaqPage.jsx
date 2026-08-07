import { Link } from "react-router-dom";
import FaqAccordion from "./components/FaqAccordion";
import styles from "./FaqPage.module.css";

/**
 * FaqPage
 * Assembles the full FAQ page. Simple by design — a page heading plus
 * the accordion; FaqAccordion already owns all the interactive
 * behavior and data mapping, so this file is just the composition root
 * and page-level <h1>.
 */
const FaqPage = () => {
  return (
    <section className={styles.wrapper} aria-labelledby="faq-page-heading">
      <h1 id="faq-page-heading" className={styles.pageHeading}>
        Frequently Asked Questions
      </h1>
      <p className={styles.intro}>
        Can&apos;t find what you&apos;re looking for?{" "}
        <Link to="/contact" className={styles.contactLink}>
          Reach out on the Contact page
        </Link>{" "}
        and we&apos;ll get back to you.
      </p>

      <FaqAccordion />
    </section>
  );
};

export default FaqPage;
