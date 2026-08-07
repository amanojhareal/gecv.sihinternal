import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import SocialLinks from "./components/SocialLinks";
import styles from "./ContactPage.module.css";

/**
 * ContactPage
 * Assembles the Contact Page. Laid out as two columns on wider screens
 * (form on the left, info + socials stacked on the right) since these
 * are complementary, not sequential — a visitor either wants to fill
 * out the form OR grab an email/phone directly, not read both in
 * order. Stacks to a single column on mobile.
 */
const ContactPage = () => {
  return (
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
  );
};

export default ContactPage;
