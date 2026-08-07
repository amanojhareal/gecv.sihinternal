import { useEffect, useMemo, useState } from "react";

/**
 * useCountdown
 * Ticks down to a target date and returns the remaining time broken into
 * days/hours/minutes/seconds, plus an `isComplete` flag.
 *
 * Usage:
 *   import { EVENT_TARGET_DATE } from "../config/constants";
 *   const { days, hours, minutes, seconds, isComplete } = useCountdown(EVENT_TARGET_DATE);
 *
 * @param {string | number | Date} targetDate - anything `new Date()` accepts.
 *        Prefer an ISO string WITH a timezone offset (see config/constants.js)
 *        to avoid local-time parsing bugs.
 * @param {object} [options]
 * @param {number} [options.intervalMs=1000] - tick frequency in ms.
 * @returns {{ days: number, hours: number, minutes: number, seconds: number,
 *             totalMs: number, isComplete: boolean }}
 */
function getTimeRemaining(targetTime) {
  const totalMs = Math.max(targetTime - Date.now(), 0);

  const days = Math.floor(totalMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalMs / (1000 * 60)) % 60);
  const seconds = Math.floor((totalMs / 1000) % 60);

  return { days, hours, minutes, seconds, totalMs, isComplete: totalMs <= 0 };
}

export function useCountdown(targetDate, { intervalMs = 1000 } = {}) {
  // Memoize the parsed target time so effect deps stay stable even if the
  // caller passes a fresh Date object / string on every render.
  const targetTime = useMemo(() => new Date(targetDate).getTime(), [targetDate]);

  const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining(targetTime));

  useEffect(() => {
    // Guard against an invalid date (NaN) so we don't spin a broken interval.
    if (Number.isNaN(targetTime)) {
      return undefined;
    }

    // Sync immediately in case `targetTime` changed since initial render.
    setTimeLeft(getTimeRemaining(targetTime));

    const id = setInterval(() => {
      const next = getTimeRemaining(targetTime);
      setTimeLeft(next);
      if (next.isComplete) {
        clearInterval(id);
      }
    }, intervalMs);

    return () => clearInterval(id);
  }, [targetTime, intervalMs]);

  return timeLeft;
}

export default useCountdown;
