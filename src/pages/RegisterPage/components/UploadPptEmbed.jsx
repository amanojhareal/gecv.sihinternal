import GoogleFormEmbed from "../../../components/GoogleFormEmbed";
import { UPLOAD_PPT_FORM_URL } from "../../../config/links";
import styles from "./UploadPptEmbed.module.css";

/**
 * UploadPptEmbed
 * Thin wrapper around the shared GoogleFormEmbed, wired to the Upload
 * PPT form specifically. Kept as its own component (rather than using
 * GoogleFormEmbed directly inline in RegisterPage.jsx) so this section
 * can carry its own heading/copy/id, matching the pattern the spec sets
 * up for the register-form embed too.
 *
 * Assumes GoogleFormEmbed (built in Phase 3) accepts a `formUrl` prop —
 * adjust the prop name below if yours differs.
 */
const UploadPptEmbed = () => {
  return (
    <div className={styles.wrapper} id="upload-ppt-form">
      <h2 className={styles.heading}>Upload Your PPT</h2>
      <p className={styles.description}>
        Once you&apos;ve registered and prepared your presentation using the
        official template, submit it here.
      </p>

      <GoogleFormEmbed formUrl={UPLOAD_PPT_FORM_URL} />
    </div>
  );
};

export default UploadPptEmbed;
