import useCountdown from "../../../hooks/useCountdown";
import { EVENT_TARGET_DATE, EVENT_NAME } from "../../../config/constants";
import styles from "./CountdownTimer.module.css";

/**
 * CountdownTimer
 * Purely presentational — all timing logic lives in useCountdown.
 * Reads its target date from config/constants.js so it never has an
 * out-of-sync date hardcoded in a component.
 */

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

// Zero-pad to 2 digits for a stable, non-jumpy layout ("07" not "7").
const pad = (n) => String(n).padStart(2, "0");

const CountdownTimer = () => {
  const timeLeft = useCountdown(EVENT_TARGET_DATE);

  if (timeLeft.isComplete) {
    return (
      <div className={styles.wrapper}>
        <p className={styles.completeMessage}>{EVENT_NAME} has begun! 🎉</p>
      </div>
    );
  }

  return (
    <div className={styles.wrapper} role="timer" aria-live="off">
      <div className={styles.units}>
        {UNITS.map(({ key, label }) => (
          <div key={key} className={styles.unit}>
            <span className={styles.value}>{pad(timeLeft[key])}</span>
            <span className={styles.label}>{label}</span>
          </div>
        ))}
      </div>
      {/* Screen-reader-only live summary, updated less chattily than the
          visual digits so it doesn't announce every single second. */}
      <span className={styles.srOnly} aria-live="polite">
        {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes
        remaining until {EVENT_NAME}
      </span>
    </div>
  );
};

export default CountdownTimer;
