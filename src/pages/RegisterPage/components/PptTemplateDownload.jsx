import Button from "../../../components/ui/Button";
import styles from "./PptTemplateDownload.module.css";

/**
 * PptTemplateDownload
 * Download button for the official idea-submission PPT template.
 *
 * Hosting choice: the template is a static file placed in
 * public/assets/ (NOT src/assets/, which is for bundler-imported
 * images/icons) so it can be linked with a plain root-relative URL and
 * downloaded directly, with no import/bundling needed. This matches how
 * organizers.data.js and sponsors.data.js reference their logos.
 *
 * Action needed: add the actual template file at
 *   public/assets/templates/SIH_PPT_Template.pptx
 * (create the templates/ subfolder — it doesn't exist yet in the
 * current public/assets/ structure, which only has logos/ and images/).
 */
const TEMPLATE_URL = "/assets/templates/SIH_PPT_Template.pptx";
const TEMPLATE_FILENAME = "SIH_PPT_Template.pptx";

const PptTemplateDownload = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <h3 className={styles.title}>Idea Submission Template</h3>
        <p className={styles.description}>
          Use this official PPT template to structure your idea submission.
          Submissions that don&apos;t follow the template format may be
          rejected during shortlisting.
        </p>
      </div>

      <a
        as="a"
        href={TEMPLATE_URL}
        download={TEMPLATE_FILENAME}
        className={styles.downloadButton}
      >
        Download PPT Template
      </a>
    </div>
  );
};

export default PptTemplateDownload;
