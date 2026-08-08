/**
 * src/pages/RegisterPage/RegisterPage.jsx
 *
 * Simplified — no more CSS Module import, no more GoogleFormEmbed
 * import/usage. Every child component is self-styled with Tailwind now.
 *
 * Page order (unchanged conceptually, just no inline form anymore):
 *  1. PptTemplateDownload  — get the template first
 *  2. RegisterProcessSteps — explains the process (no CTA button now)
 *  3. RegisterFormCta      — link out to the real registration form
 *  4. UploadPptEmbed       — link out to the real upload-PPT form
 */
import PageMeta from "../../components/PageMeta";
import PptTemplateDownload from "./components/PptTemplateDownload";
import RegisterProcessSteps from "./components/RegisterProcessSteps";
import RegisterFormCta from "./components/RegisterFormCta";
import UploadPptEmbed from "./components/UploadPptEmbed";

const RegisterPage = () => {
  return (
    <>
      <PageMeta
        title="Register"
        description="Register your team for Smart India Hackathon and submit your PPT."
      />

      <PptTemplateDownload />
      <RegisterProcessSteps />
      <RegisterFormCta />
      <UploadPptEmbed />
    </>
  );
};

export default RegisterPage;
