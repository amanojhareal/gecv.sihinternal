import styles from "./ImpactOfSih.module.css";

/**
 * ImpactOfSih
 * Fourth and final section of the About Page — the "so what" section,
 * showing SIH's real-world impact through a few headline stats plus a
 * short closing paragraph.
 *
 * ⚠️ STATS ARE PLACEHOLDERS. These numbers are illustrative only and
 * MUST be replaced with verified, current figures from the official SIH
 * portal/press releases before this ships — impact stats are exactly
 * the kind of specific, checkable claim that damages credibility if
 * wrong. Do not publish as-is.
 */
const STATS = [
  { value: "1M+", label: "Students Participated" },
  { value: "15,000+", label: "Problem Statements Solved" },
  { value: "50+", label: "Government Ministries & Departments Involved" },
  { value: "2,500+", label: "Institutes Represented" },
];

const ImpactOfSih = () => {
  return (
    <section className={styles.wrapper} aria-labelledby="impact-heading">
      <h2 id="impact-heading" className={styles.heading}>
        Impact of SIH
      </h2>

      <dl className={styles.statsGrid}>
        {STATS.map((stat) => (
          <div key={stat.label} className={styles.statCard}>
            <dt className={styles.statValue}>{stat.value}</dt>
            <dd className={styles.statLabel}>{stat.label}</dd>
          </div>
        ))}
      </dl>

      <p className={styles.paragraph}>
        Beyond the numbers, SIH&apos;s real impact shows up in the solutions
        that outlive the hackathon itself — prototypes that get refined
        into pilots, and pilots that get adopted into the systems
        government departments actually use. For participating students,
        it's often their first experience solving a problem that has a
        real stakeholder, a real deadline, and a real chance of shipping.
      </p>
    </section>
  );
};

export default ImpactOfSih;
