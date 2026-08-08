/**
 * src/pages/LandingPage/components/CountdownTimer.jsx
 *
 * Redesigned to match reference: soft gradient card, a circular
 * calendar-icon badge, a dashed-line-flanked eyebrow label
 * ("REGISTRATION OPENS IN"), and pill-shaped bordered number cards
 * with colons between them. Subtle dot-pattern texture in the
 * corners for depth, all in Tailwind — CSS Module removed.
 *
 * Still purely presentational — all timing logic stays in
 * useCountdown; this file only changed visually.
 */
import { AnimatePresence, motion } from "framer-motion";
import { Calendar } from "lucide-react";
import useCountdown from "../../../hooks/useCountdown";
import { EVENT_TARGET_DATE, EVENT_NAME } from "../../../config/constants";

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

// Zero-pad to 2 digits for a stable, non-jumpy layout ("07" not "7").
const pad = (n) => String(n).padStart(2, "0");

// Reused for the decorative dot-grid texture in the corners.
const dotPatternStyle = {
  backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
  backgroundSize: "14px 14px",
};

const CountdownTimer = () => {
  const timeLeft = useCountdown(EVENT_TARGET_DATE);

  return (
    <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl bg-gradient-to-b from-brand/[0.06] via-white to-white px-6 py-10 sm:py-12">
      {/* decorative dot-grid texture, corners only, purely visual */}
      <div
        className="pointer-events-none absolute -top-4 -left-4 h-24 w-24 text-brand/10"
        style={dotPatternStyle}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-4 -right-4 h-24 w-24 text-brand/10"
        style={dotPatternStyle}
        aria-hidden="true"
      />

      {timeLeft.isComplete ? (
        <p className="relative text-center text-lg font-bold text-accent">
          {EVENT_NAME} has begun! 🎉
        </p>
      ) : (
        <div className="relative" role="timer" aria-live="off">
          {/* icon badge */}
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand/70 shadow-md shadow-brand/20">
            <Calendar size={19} strokeWidth={2.25} className="text-white" aria-hidden="true" />
          </div>

          {/* eyebrow label, flanked by dashed lines */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 border-t border-dashed border-brand/40 sm:w-16" aria-hidden="true" />
            <span className="whitespace-nowrap text-xs font-bold uppercase tracking-widest text-brand">
              Registration Closes In
            </span>
            <span className="h-px w-10 border-t border-dashed border-brand/40 sm:w-16" aria-hidden="true" />
          </div>

          {/* countdown units */}
          <div className="mt-6 flex items-start justify-center gap-2 sm:gap-3">
            {UNITS.map(({ key, label }, index) => (
              <div key={key} className="flex items-start">
                <div className="flex w-16 flex-col items-center rounded-[1.5rem] border border-brand/25 bg-white px-2 py-3 shadow-sm sm:w-20 sm:py-4">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={timeLeft[key]}
                      initial={{ y: -8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 8, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="text-2xl font-extrabold text-brand sm:text-3xl"
                    >
                      {pad(timeLeft[key])}
                    </motion.span>
                  </AnimatePresence>
                  <span className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-ink-muted">
                    {label}
                  </span>
                </div>

                {index < UNITS.length - 1 && (
                  <span
                    className="mx-1 pt-3 text-xl font-bold text-slate-300 sm:mx-1.5 sm:pt-4"
                    aria-hidden="true"
                  >
                    :
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Screen-reader-only live summary, updated less chattily than
              the visual digits so it doesn't announce every second. */}
          <span className="sr-only" aria-live="polite">
            {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes}{" "}
            minutes remaining until {EVENT_NAME}
          </span>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
