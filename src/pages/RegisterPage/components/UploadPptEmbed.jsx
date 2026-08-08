/**
 * src/pages/RegisterPage/components/UploadPptEmbed.jsx
 *
 * Redesigned to match reference: white card, icon in a light
 * accent-tinted square, small accent underline under the heading,
 * SOLID accent-orange pill button. Mirrors RegisterFormCta.jsx's
 * structure exactly, just swapped to the accent color, so the two
 * cards read as a matched pair.
 */
import { motion } from "framer-motion";
import { UploadCloud, ArrowUpRight } from "lucide-react";
import { UPLOAD_PPT_FORM_URL } from "../../../config/links";

const UploadPptEmbed = () => {
  return (
    <div id="upload-ppt-form" className="mx-auto max-w-[44rem] scroll-mt-24 px-4 pb-16 pt-4">
      <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-md transition-shadow duration-300 hover:shadow-lg sm:p-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
          <UploadCloud size={26} strokeWidth={2} aria-hidden="true" />
        </div>

        <h2 className="mt-5 text-xl font-extrabold text-ink sm:text-2xl">
          Upload Your PPT
        </h2>
        <span className="mt-2 block h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

        <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted">
          Once you&apos;ve registered and prepared your presentation using
          the official template, submit it here. Opens in a new tab.
        </p>

        <motion.a
          href={UPLOAD_PPT_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="group mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-shadow duration-200 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          Open Upload PPT Form
          <ArrowUpRight
            size={17}
            strokeWidth={2.5}
            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default UploadPptEmbed;
