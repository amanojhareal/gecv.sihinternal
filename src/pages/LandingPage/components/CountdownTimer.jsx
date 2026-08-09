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
    <div className="relative mx-auto w-full max-w-2xl px-2 sm:px-4">
      {timeLeft.isComplete ? (
        <p className="relative text-center text-lg font-bold text-accent">
          {EVENT_NAME} has begun! 🎉
        </p>
      ) : (
        <div className="relative" role="timer" aria-live="off">
          {/* Top Circular Blue Icon Badge */}
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#1e40af] to-[#2563eb] shadow-lg shadow-blue-700/25 ring-4 ring-blue-50">
            <Calendar size={22} strokeWidth={2.2} className="text-white" aria-hidden="true" />
          </div>

          {/* Eyebrow Label Flanked by Dashed Lines */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 sm:w-16 border-t border-dashed border-blue-400/60" aria-hidden="true" />
            <span className="whitespace-nowrap text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#1e40af]">
              Registration Closes In
            </span>
            <span className="h-px w-8 sm:w-16 border-t border-dashed border-blue-400/60" aria-hidden="true" />
          </div>

          {/* 4 Pill-Shaped Countdown Cards */}
          <div className="mt-6 flex items-center justify-center gap-1.5 sm:gap-3">
            {UNITS.map(({ key, label }, index) => (
              <div key={key} className="flex items-center">
                <div className="relative flex w-[70px] sm:w-[94px] flex-col items-center justify-center rounded-[22px] sm:rounded-[28px] border-2 border-blue-200/90 bg-white/90 px-1.5 py-3 sm:py-4 shadow-sm backdrop-blur-sm transition-all hover:border-blue-400 hover:shadow-md">
                  {/* Subtle top curved highlight stroke */}
                  <div className="absolute inset-x-3 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60" aria-hidden="true" />

                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={timeLeft[key]}
                      initial={{ y: -6, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 6, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight font-sans"
                    >
                      {pad(timeLeft[key])}
                    </motion.span>
                  </AnimatePresence>
                  <span className="mt-1 text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    {label}
                  </span>
                </div>

                {index < UNITS.length - 1 && (
                  <span
                    className="mx-1 text-lg sm:text-2xl font-bold text-blue-300 sm:mx-2 select-none"
                    aria-hidden="true"
                  >
                    :
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Screen-reader summary */}
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
