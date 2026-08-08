/**
 * src/pages/RegisterPage/components/RegisterProcessSteps.jsx
 *
 * Enhanced: each step gets its own icon (not just a number) inside a
 * filled brand circle, connected by a vertical line — a proper visual
 * timeline instead of a plain numbered list. Steps fade/slide in as
 * they scroll into view (framer-motion whileInView), staggered.
 *
 * The "Start Registration" CTA is REMOVED per the new design — this
 * page no longer scrolls to an embedded form; RegisterFormCta.jsx and
 * UploadPptEmbed.jsx (further down the page) are now the two places
 * that actually send someone to the forms, so a third CTA here was
 * redundant.
 */
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Target,
  FileEdit,
  ClipboardList,
  UploadCloud,
} from "lucide-react";

const STEPS = [
  {
    title: "Check Eligibility",
    description:
      "Make sure your team meets SIH's eligibility rules for team size and composition before you start.",
    icon: CheckCircle2,
  },
  {
    title: "Pick a Problem Statement",
    description:
      "Browse the official problem statements and agree on one as a team before registering.",
    icon: Target,
  },
  {
    title: "Download & Fill the PPT Template",
    description:
      "Use the template above to prepare your idea presentation — this is what you'll upload after registering.",
    icon: FileEdit,
  },
  {
    title: "Fill the Registration Form",
    description:
      "Complete the registration form to submit your team and problem statement details.",
    icon: ClipboardList,
  },
  {
    title: "Upload Your PPT",
    description:
      "Submit your completed presentation to enter internal shortlisting.",
    icon: UploadCloud,
  },
];

const RegisterProcessSteps = () => {
  return (
    <div className="mx-auto max-w-[44rem] px-4 py-10 sm:py-12">
      <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">
        Register in 5 Steps
      </h2>
      <p className="mt-2 text-sm text-ink-muted">
        Follow these in order — each step builds on the last.
      </p>

      <ol className="relative mt-9 flex flex-col gap-8">
        {/* connecting line, sits behind the icon circles */}
        <span
          className="absolute left-5 top-3 bottom-3 w-px bg-slate-200"
          aria-hidden="true"
        />

        {STEPS.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
              className="relative flex gap-4"
            >
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-sm ring-4 ring-white">
                <Icon size={18} strokeWidth={2.25} aria-hidden="true" />
              </span>
              <div className="pt-1.5">
                <h3 className="text-base font-bold text-ink">{step.title}</h3>
                <p className="mt-1 max-w-md text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
};

export default RegisterProcessSteps;
