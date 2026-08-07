/**
 * formatDate.js
 * Shared date formatting used across Timeline.jsx, ImportantDates.jsx,
 * and anywhere else a date from the data/ layer needs to be displayed.
 *
 * Centralizing this means every date on the site is formatted
 * consistently — if you want to change "Nov 15, 2026" to a different
 * style later, you change it in exactly one place.
 */

/**
 * Formats an ISO date string (or anything `new Date()` accepts) into a
 * short, readable label, e.g. "Nov 15, 2026".
 *
 * @param {string | number | Date} date
 * @param {object} [options] - overrides passed straight to Intl.DateTimeFormat
 * @returns {string} formatted date, or "" if the input is invalid
 */
export function formatDate(date, options = {}) {
  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    // Fail soft — a bad/missing date shouldn't crash the page, just
    // render nothing where the date would have gone.
    return "";
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    ...options,
  }).format(parsed);
}

/**
 * Formats an ISO date string into a longer form, e.g.
 * "Sunday, November 15, 2026" — handy for detail views where more
 * context is useful than the compact Timeline/ImportantDates list.
 *
 * @param {string | number | Date} date
 * @returns {string}
 */
export function formatDateLong(date) {
  return formatDate(date, { weekday: "long", month: "long" });
}

export default formatDate;
