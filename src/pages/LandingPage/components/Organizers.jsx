import organizersData from "../../../data/organizers.data";
import SectionHeading from "../../../components/ui/SectionHeading";
import styles from "./Organizers.module.css";

/**
 * Organizers
 * Renders a logo grid from data/organizers.data.js. Unlike Sponsors.jsx,
 * this is NOT grouped by tier — organizers are shown as a flat, equal-
 * weight grid since role here is informational (e.g. "Host Institute"),
 * not a ranking.
 */
const Organizers = () => {
  return (
    <section className={styles.wrapper} aria-labelledby="organizers-heading">
      <SectionHeading id="organizers-heading" title="Organized By" />

      <ul className={styles.grid}>
        {organizersData.map((org) => (
          <li key={org.name} className={styles.item}>
            <img
              src={org.logo}
              alt={org.name}
              className={styles.logo}
              loading="lazy"
            />
            <span className={styles.role}>{org.role}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Organizers;
