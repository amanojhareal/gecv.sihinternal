/**
 * constants.js
 * App-wide constants that aren't secrets/URLs (those live in config/links.js).
 *
 * EVENT_TARGET_DATE feeds hooks/useCountdown.js for the <CountdownTimer />
 * on the Landing Page.
 */

/**
 * The datetime the countdown counts down to — the Grand Finale start,
 * matching the last entry in data/timeline.data.js and
 * data/importantDates.data.js. Keep all three in sync.
 *
 * ⚠️ Placeholder — replace with the real, confirmed Grand Finale
 * date/time once announced. Using an ISO string WITH an explicit
 * timezone offset (not just "YYYY-MM-DD") avoids the classic bug where
 * the countdown is off by several hours for users in different
 * timezones, since a bare date string is parsed as UTC midnight while
 * "new Date(y, m, d)" is parsed in the browser's local time.
 */
export const EVENT_TARGET_DATE = "2026-09-10T09:00:00+05:30"; // IST

// Human-readable label for the event, useful in <title>, meta tags, and
// anywhere the countdown target needs a caption.
export const EVENT_NAME = "Smart India Hackathon — Grand Finale";

// Site-wide short name, handy for page titles / footer copyright line.
export const SITE_NAME = "SIH";

// Shared contact email — used by both ContactForm.jsx (mailto: target)
// and ContactInfo.jsx (displayed address), so it only needs updating here.
// ⚠️ Placeholder — replace with the real organizing team's email.
export const CONTACT_EMAIL = "amanojhareal@gmail.com";
export const CONTACT_PHONE = "+91 77396 92820";
export const CONTACT_ADDRESS =
  "Government Engineering College Vaishali, CSE Department, Phulpura, Bihar — 844503";
 
export const CURRENT_YEAR = new Date().getFullYear();