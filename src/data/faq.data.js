/**
 * faq.data.js
 * Powers two places:
 *  - <FaqPreview /> on the Landing Page (shows top 3–4 of these)
 *  - <FaqAccordion /> on the full FAQ Page (shows all of these)
 *
 * Shape: { question, answer }
 *  - question: the question text
 *  - answer: plain-text answer (keep it short; link out to the SIH
 *            portal for anything official/authoritative rather than
 *            restating rules that might change)
 *
 * Order matters — FaqPreview slices the first N entries, so put the
 * most commonly asked questions first.
 *
 * ⚠️ Placeholder answers — verify eligibility rules, team size, and fees
 * against the official SIH guidelines before publishing.
 */

const faqData = [
  {
    question: "Who is eligible to participate in SIH?",
    answer:
      "Any student currently enrolled in a recognized college or university (undergraduate, postgraduate, or diploma) is eligible to participate, as per the official SIH guidelines.",
  },
  {
    question: "How many members can be in a team?",
    answer:
      "Each team must have exactly 6 members, including at least one female member, along with a designated mentor as per SIH rules.",
  },
  {
    question: "Is there a participation fee?",
    answer:
      "SIH itself does not charge a participation fee, though your institute may have its own internal registration or nomination process — check with your college's SIH coordinator.",
  },
  {
    question: "How do I register for SIH through this website?",
    answer:
      "Head to the Register page and fill out the registration form linked there. You'll also need to submit your idea presentation using the Upload PPT form once your team and problem statement are finalized.",
  },
  {
    question: "Can I choose any problem statement I want?",
    answer:
      "You can choose from the official list of problem statements published on the SIH portal, linked from our Problem Statement page. Availability may be limited per team/track depending on the current edition's rules.",
  },
  {
    question: "Can I change my team members after registering?",
    answer:
      "Team changes are generally only allowed before the team formation deadline. After that, changes may require approval from your institute's SIH coordinator.",
  },
  {
    question: "What happens after I submit my idea (PPT)?",
    answer:
      "Submitted ideas go through internal shortlisting. Shortlisted teams are notified and move on to build a working prototype for the institute-level hackathon.",
  },
  {
    question: "Do I need a working prototype to register?",
    answer:
      "No — at the registration and idea submission stage, a presentation of your proposed solution is enough. A working prototype is required later, for the hackathon rounds.",
  },
  {
    question: "Who can I contact if I have more questions?",
    answer:
      "Reach out through the Contact page — you'll find our email, phone, and social links there for any questions not covered here.",
  },
];

export default faqData;
