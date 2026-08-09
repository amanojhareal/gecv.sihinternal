import { Link } from "react-router-dom";
import PageMeta from "../../components/PageMeta";
import FaqAccordion from "./components/FaqAccordion";
import styles from "./FaqPage.module.css";

/**
 * FaqPage
 * Assembles the full FAQ page with PageMeta SEO metadata.
 */
const FaqPage = () => {
  return (
    <>
      <PageMeta
        title="FAQ"
        description="Frequently Asked Questions about Smart India Hackathon registration, teams, and rules."
      />

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
    </>
  );
};

export default FaqPage;
