import styles from "./RegisterProcessSteps.module.css";
import Button from "../../../components/ui/Button";

/**
 * RegisterProcessSteps
 * Numbered steps specific to REGISTERING on this site — narrower in
 * scope than AboutPage's HowItWorks.jsx (which covers the whole SIH
 * journey through the grand finale). This only covers what a visitor
 * needs to do right now, on this page, to get registered.
 *
 * Decision (per the build note on this page): the actual registration
 * form is embedded further down this same page, NOT on a separate
 * step/page. So the CTA here scrolls down to that embedded form
 * (#register-form) rather than navigating away. Plain anchor + CSS
 * smooth scroll is used instead of the useScrollToSection hook, since
 * that hook isn't built yet and a same-page anchor doesn't need
 * anything more than that.
 */
const STEPS = [
  {
    title: "Check Eligibility",
    description:
      "Make sure your team meets SIH's eligibility rules for team size and composition before you start.",
  },
  {
    title: "Pick a Problem Statement",
    description:
      "Browse the official problem statements and agree on one as a team before registering.",
  },
  {
    title: "Download & Fill the PPT Template",
    description:
      "Use the template above to prepare your idea presentation — this is what you'll upload after registering.",
  },
  {
    title: "Fill the Registration Form",
    description:
      "Complete the registration form below with your team and problem statement details.",
  },
  {
    title: "Upload Your PPT",
    description:
      "Submit your completed presentation through the Upload PPT form to enter internal shortlisting.",
  },
];

const RegisterProcessSteps = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Register in 5 Steps</h2>

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

      <div className={styles.ctaRow}>
        <Button as="a" href="#register-form">
          Start Registration
        </Button>
      </div>
    </div>
  );
};

export default RegisterProcessSteps;
