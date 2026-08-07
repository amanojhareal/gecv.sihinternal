import GoogleFormEmbed from "../../components/GoogleFormEmbed";
import SectionHeading from "../../components/ui/SectionHeading";
import { REGISTER_FORM_URL } from "../../config/links";
import PptTemplateDownload from "./components/PptTemplateDownload";
import RegisterProcessSteps from "./components/RegisterProcessSteps";
import UploadPptEmbed from "./components/UploadPptEmbed";
import styles from "./RegisterPage.module.css";
import PageMeta from "../../components/PageMeta";

/**
 * RegisterPage
 *
 * Decision (per build spec step 4): the registration Google Form embeds
 * INLINE on this page rather than RegisterProcessSteps linking out to an
 * external form page. Reasoning:
 *   - Fewer clicks/context switches for the person actually registering
 *   - RegisterProcessSteps' CTA ("Start Registration") already scrolls
 *     down to `#register-form` below — that anchor only makes sense if
 *     the form genuinely lives on this page, not on another route
 *   - Keeps template download, process explanation, registration, and
 *     PPT upload all in one linear flow instead of splitting the
 *     register journey across pages
 *
 * The register form embed lives directly in this page file (not its own
 * components/ file) since it's a two-line usage of the already-generic
 * GoogleFormEmbed — creating a dedicated wrapper component for it would
 * just be indirection. UploadPptEmbed got its own file because it also
 * carries meaningfully different heading/copy; this one doesn't need
 * that same wrapping.
 *
 * Page order:
 *  1. PptTemplateDownload   — get the template first
 *  2. RegisterProcessSteps  — explain the process, CTA scrolls down
 *  3. Register form (embedded here, #register-form)
 *  4. UploadPptEmbed        — submit the completed presentation
 */
const RegisterPage = () => {
  return (
    <>
     
      <PageMeta
          title="Register"
          description="Register your team for Smart India Hackathon and submit your PPT."
        />
      <PptTemplateDownload />
      <RegisterProcessSteps />

      <div className={styles.formSection} id="register-form">
        <SectionHeading title="Registration Form" />
        <p className={styles.formDescription}>
          Fill out this form to register your team for SIH.
        </p>
        <GoogleFormEmbed formUrl={REGISTER_FORM_URL} />
      </div>

      <UploadPptEmbed />
    </>
  );
};

export default RegisterPage;
