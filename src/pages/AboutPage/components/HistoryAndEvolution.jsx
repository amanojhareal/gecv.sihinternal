import styles from "./HistoryAndEvolution.module.css";

/**
 * HistoryAndEvolution
 * Second section of the About Page — the origin story and how SIH has
 * grown over the years. Static content, no data file (a timeline-style
 * list of years could later move into a data file if this grows large
 * enough to warrant mapping over an array, but for a basic version this
 * is short enough to keep as plain copy).
 *
 * ⚠️ Verify specific years/figures (launch year, participant counts)
 * against the official SIH portal before publishing — the numbers below
 * are illustrative placeholders following the general shape of SIH's
 * real growth, not sourced facts.
 */
const HistoryAndEvolution = () => {
  return (
    <section className={styles.wrapper} aria-labelledby="history-heading">
      <h2 id="history-heading" className={styles.heading}>
        History &amp; Evolution
      </h2>

      <p className={styles.paragraph}>
        Smart India Hackathon was launched by the Ministry of Education
        (formerly the Ministry of Human Resource Development) alongside
        AICTE, with the goal of connecting India&apos;s student talent
        directly with problems faced by government and public
        organizations. What started as a single national event has since
        grown into one of the world&apos;s largest open innovation
        platforms.
      </p>

      <p className={styles.paragraph}>
        Each edition has broadened in scope — more participating
        institutes, a wider range of ministries and departments
        contributing problem statements, and an expanding set of themes
        covering everything from healthcare to clean energy. Along the
        way, SIH introduced a dedicated software and hardware track,
        recognizing that not every real-world problem is solved with code
        alone.
      </p>

      <p className={styles.paragraph}>
        Today, SIH is recognized as a flagship initiative that has
        directly influenced how government departments approach
        innovation — with several winning solutions going on to be piloted
        or adopted by the organizations that proposed the original problem.
      </p>
    </section>
  );
};

export default HistoryAndEvolution;
