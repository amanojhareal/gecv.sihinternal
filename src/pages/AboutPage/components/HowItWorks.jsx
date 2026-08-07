import styles from "./HowItWorks.module.css";

/**
 * HowItWorks
 * Third section of the About Page — breaks the SIH process into
 * numbered steps. This is conceptually different from
 * data/timeline.data.js (which has specific dates): these are the
 * *mechanics* of participating, not a dated schedule. Kept as a local
 * array rather than a data/ file since it's specific to this one
 * section and unlikely to be reused elsewhere — if that changes, this
 * is a straightforward extraction into data/howItWorks.data.js later.
 */
const STEPS = [
  {
    title: "Form a Team",
    description:
      "Gather your team and a mentor. Team composition and size must follow the official SIH eligibility rules.",
  },
  {
    title: "Register",
    description:
      "Register your team on the SIH portal and on this site, using the Register page.",
  },
  {
    title: "Choose a Problem Statement",
    description:
      "Browse the official list of problem statements across various themes and pick the one your team wants to solve.",
  },
  {
    title: "Submit Your Idea",
    description:
      "Prepare and submit a presentation outlining your proposed solution through the Upload PPT form.",
  },
  {
    title: "Internal Shortlisting",
    description:
      "Submitted ideas are reviewed, and shortlisted teams move forward to the institute-level round.",
  },
  {
    title: "Build & Present",
    description:
      "Shortlisted teams build a working prototype and present it at the institute-level hackathon, competing for a spot in the grand finale.",
  },
  {
    title: "Grand Finale",
    description:
      "Top teams compete nationally in an intensive hackathon, presenting their solution to expert judges from government and industry.",
  },
];

const HowItWorks = () => {
  return (
    <section className={styles.wrapper} aria-labelledby="how-it-works-heading">
      <h2 id="how-it-works-heading" className={styles.heading}>
        How It Works
      </h2>

      <ol className={styles.list}>
        {STEPS.map((step, index) => (
          <li key={step.title} className={styles.step}>
            <span className={styles.number} aria-hidden="true">
              {index + 1}
            </span>
            <div className={styles.content}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default HowItWorks;
