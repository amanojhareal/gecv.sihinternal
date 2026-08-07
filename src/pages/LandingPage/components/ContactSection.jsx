import { Link } from "react-router-dom";
import SectionHeading from "../../../components/ui/SectionHeading";
import Button from "../../../components/ui/Button";
import styles from "./ContactSection.module.css";

/**
 * ContactSection
 * Short contact strip for the Landing Page — just enough to answer
 * "how do I reach someone" in a glance, with a CTA to the full
 * ContactPage (which owns the authoritative contact details via
 * ContactInfo.jsx in Phase 8).
 *
 * Deliberately does NOT duplicate ContactInfo.jsx's full detail list
 * (address, all socials, etc.) — that would create two sources of
 * truth that can drift out of sync. Keep this section light.
 */
const ContactSection = () => {
  return (
    <section className={styles.wrapper} aria-labelledby="contact-section-heading">
      <SectionHeading id="contact-section-heading" title="Still Have Questions?" />

      <p className={styles.blurb}>
        Reach out to the organizing team — we're happy to help with anything
        about registration, teams, or problem statements.
      </p>

      <div className={styles.ctaRow}>
        <Button as={Link} to="/contact">
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
