/**
 * src/pages/RegisterPage/components/PptTemplateDownload.jsx
 *
 * Redesigned as a single "box" card: left = icon + title + description,
 * right = a pill-shaped outlined download button (fills solid on hover).
 * Subtle brand/accent-tinted gradient background so it doesn't read as
 * a plain gray box, without competing with the CTA sections below.
 */
import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

const TEMPLATE_URL = "/assets/templates/SIH_PPT_Template.pptx";
const TEMPLATE_FILENAME = "SIH_PPT_Template.pptx";

const PptTemplateDownload = () => {
  return (
    <div className="mx-auto max-w-[44rem] px-4 py-6 sm:py-8">
      <div className="flex flex-col items-start gap-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-brand/[0.05] via-white to-accent/[0.05] p-6 shadow-sm transition-shadow duration-300 hover:shadow-premium sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
            <FileText size={22} strokeWidth={2} aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-ink">Idea Submission Template</h3>
            <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-ink-muted">
              Use this official PPT template to structure your idea
              submission. Submissions that don&apos;t follow the template
              format may be rejected during shortlisting.
            </p>
          </div>
        </div>

        <motion.a
          href={TEMPLATE_URL}
          download={TEMPLATE_FILENAME}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="group inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-brand px-6 py-3 text-sm font-semibold text-brand transition-colors duration-200 hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          <Download
            size={17}
            strokeWidth={2.25}
            className="transition-transform duration-200 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
          Download PPT Template
        </motion.a>
      </div>
    </div>
  );
};

export default PptTemplateDownload;
