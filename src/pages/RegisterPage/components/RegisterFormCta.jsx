/**
 * src/pages/RegisterPage/components/RegisterFormCta.jsx
 *
 * Redesigned to match reference: white card (not a dark gradient),
 * icon sits in a light brand-tinted square, small accent underline
 * beneath the heading, and a SOLID brand-colored pill button (rather
 * than a white button on a colored card).
 */
import { motion } from "framer-motion";
import { ClipboardEdit, ArrowUpRight } from "lucide-react";
import { REGISTER_FORM_URL } from "../../../config/links";

const RegisterFormCta = () => {
  return (
    <div id="register-form" className="mx-auto max-w-[44rem] scroll-mt-24 px-4 py-4">
      <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-md transition-shadow duration-300 hover:shadow-lg sm:p-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
          <ClipboardEdit size={26} strokeWidth={2} aria-hidden="true" />
        </div>

        <h2 className="mt-5 text-xl font-extrabold text-ink sm:text-2xl">
          Registration Form
        </h2>
        <span className="mt-2 block h-0.5 w-10 rounded-full bg-brand" aria-hidden="true" />

        <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted">
          Fill out the official registration form with your team and
          problem statement details. It opens in a new tab — this page
          will still be here when you're done.
        </p>

        <motion.a
          href={REGISTER_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="group mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-shadow duration-200 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          Open Registration Form
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

export default RegisterFormCta;
