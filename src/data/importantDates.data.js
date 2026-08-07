/**
 * importantDates.data.js
 * Powers the <ImportantDates /> section on the Landing Page — a compact
 * list of key deadlines, distinct from the narrative <Timeline />
 * (this one is meant to be scanned fast, e.g. as a table or badge list).
 *
 * Shape: { label, date }
 *  - label: short deadline name
 *  - date: ISO string ("YYYY-MM-DD") for consistent formatting/sorting
 *          via utils/formatDate.js
 *
 * ⚠️ Placeholder dates — sync with the real SIH schedule once confirmed.
 * Keep in chronological order; also keep this in sync with
 * timeline.data.js so the two sections never contradict each other.
 */

const importantDatesData = [
  { label: "Registration Opens", date: "2026-08-01" },
  { label: "Team Formation Deadline", date: "2026-08-20" },
  { label: "Problem Statement Selection Ends", date: "2026-09-05" },
  { label: "PPT Submission Deadline", date: "2026-09-25" },
  { label: "Internal Shortlisting Results", date: "2026-10-10" },
  { label: "Institute-Level Hackathon", date: "2026-10-25" },
  { label: "Grand Finale (National Round)", date: "2026-11-15" },
];

export default importantDatesData;
