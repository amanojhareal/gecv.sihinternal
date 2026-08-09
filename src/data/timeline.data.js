/**
 * timeline.data.js
 * Powers the <Timeline /> section on the Landing Page — a chronological
 * view of the SIH journey from registration to grand finale.
 *
 * Shape: { date, title, description }
 *  - date: ISO string ("YYYY-MM-DD") so it sorts/formats predictably via
 *          utils/formatDate.js. Use the first day of a range if the step
 *          spans multiple days.
 *  - title: short label shown as the timeline milestone heading
 *  - description: 1–2 sentence explanation of what happens at this stage
 *
 * ⚠️ Replace the placeholder dates below with the real SIH schedule once
 * it's confirmed — keep entries in chronological order.
 */

const timelineData = [
  {
    date: "2026-08-01",
    title: "Registration Opens",
    description:
      "Teams register on the SIH portal and on this site, form their squad, and pick a problem statement track.",
    iconType: "calendar",
    variant: "blue",
    status: "active",
  },
  {
    date: "2026-08-20",
    title: "Registration Closes",
    description:
      "Last date to complete registration and finalize your team and problem statement.",
    iconType: "calendar",
    variant: "orange",
    status: "upcoming",
  },
  {
    date: "2026-09-01",
    title: "Idea Submission Begins",
    description:
      "Submit your ideas using the official template presentation and initial architectural outline.",
    iconType: "file",
    variant: "green",
    status: "upcoming",
  },
  {
    date: "2026-09-25",
    title: "Idea Submission (PPT Round)",
    description:
      "Teams submit their proposed solution as a presentation through the Upload PPT form for internal shortlisting.",
    iconType: "file",
    variant: "purple",
    status: "upcoming",
  },
  {
    date: "2026-10-10",
    title: "Internal Shortlisting Results",
    description:
      "Shortlisted teams are announced and given access to mentorship sessions ahead of the institute-level round.",
    iconType: "award",
    variant: "teal",
    status: "upcoming",
  },
  {
    date: "2026-10-25",
    title: "Institute-Level Hackathon",
    description:
      "Shortlisted teams build and present a working prototype on-site to compete for a spot in the national round.",
    iconType: "calendar",
    variant: "blue",
    status: "upcoming",
  },
  {
    date: "2026-11-15",
    title: "Grand Finale (National Round)",
    description:
      "Top teams from across institutes compete in the 36-hour national hackathon, judged by industry and government experts.",
    iconType: "award",
    variant: "indigo",
    status: "upcoming",
  },
];

export default timelineData;
