import { Link } from "react-router-dom";
import faqData from "../../../data/faq.data";
import SectionHeading from "../../../components/ui/SectionHeading";
import Button from "../../../components/ui/Button";
import styles from "./FaqPreview.module.css";

/**
 * FaqPreview
 * Shows the first few entries from data/faq.data.js (order in that file
 * matters — most common questions should be first) with a "See all" link
 * to the full FAQ page.
 *
 * Deliberately NOT collapsible/interactive here — that's FaqAccordion's
 * job on the full FaqPage (Phase 8). This is a quick-scan teaser only.
 */
const PREVIEW_COUNT = 4;

const FaqPreview = () => {
  const previewItems = faqData.slice(0, PREVIEW_COUNT);

  return (
    <section className={styles.wrapper} aria-labelledby="faq-preview-heading">
      <SectionHeading id="faq-preview-heading" title="Frequently Asked Questions" />

      <div className={styles.list}>
        {previewItems.map((item) => (
          <div key={item.question} className={styles.item}>
            <h3 className={styles.question}>{item.question}</h3>
            <p className={styles.answer}>{item.answer}</p>
          </div>
        ))}
      </div>

      <div className={styles.ctaRow}>
        <Button as={Link} to="/faq">
          See all FAQs
        </Button>
      </div>
    </section>
  );
};

export default FaqPreview;
