import PageMeta from "../../components/PageMeta";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import SocialLinks from "./components/SocialLinks";
import styles from "./ContactPage.module.css";

/**
 * ContactPage
 * Assembles the Contact Page with PageMeta SEO tags and a clean 2-column layout.
 */
const ContactPage = () => {
  return (
    <>
      <PageMeta
        title="Contact Us"
        description="Get in touch with the Smart India Hackathon team for queries and support."
      />

      <section className={styles.wrapper} aria-labelledby="contact-page-heading">
        <h1 id="contact-page-heading" className={styles.pageHeading}>
          Contact Us
        </h1>

        <div className={styles.grid}>
          <div className={styles.formColumn}>
            <ContactForm />
          </div>

          <div className={styles.infoColumn}>
            <ContactInfo />
            <SocialLinks />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
