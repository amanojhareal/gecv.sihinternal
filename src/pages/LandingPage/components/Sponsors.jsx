import sponsorsData from "../../../data/sponsors.data";
import SectionHeading from "../../../components/ui/SectionHeading";
import styles from "./Sponsors.module.css";

/**
 * Sponsors
 * Renders sponsors from data/sponsors.data.js grouped by tier (Title,
 * Platinum, Gold, Silver, Partner — see the ⚠️ note in that data file
 * for the fixed tier set). Higher tiers render larger logos.
 *
 * Went with a static grouped grid rather than a carousel for this basic
 * version — simpler to build/maintain and works fine for a handful of
 * sponsors. If the sponsor list grows large (a full row+ per tier),
 * swap the Gold/Silver/Partner tiers to a carousel (e.g. a small
 * scroll-snap track) without touching the data layer or this grouping
 * logic.
 */

// Fixed display order — must match the tier values used in
// data/sponsors.data.js. A tier not in this list simply won't render;
// add it here if a new tier is introduced in the data.
const TIER_ORDER = ["Title", "Platinum", "Gold", "Silver", "Partner"];

function groupByTier(sponsors) {
  return TIER_ORDER.map((tier) => ({
    tier,
    sponsors: sponsors.filter((s) => s.tier === tier),
  })).filter((group) => group.sponsors.length > 0);
}

const Sponsors = () => {
  const groups = groupByTier(sponsorsData);

  if (groups.length === 0) {
    return null;
  }

  return (
    <section className={styles.wrapper} aria-labelledby="sponsors-heading">
      <SectionHeading id="sponsors-heading" title="Our Sponsors" />

      {groups.map(({ tier, sponsors }) => (
        <div key={tier} className={styles.tierGroup}>
          <h3 className={styles.tierLabel}>{tier}</h3>
          <ul className={`${styles.grid} ${styles[`tier${tier}`] ?? ""}`}>
            {sponsors.map((sponsor) => (
              <li key={sponsor.name} className={styles.item}>
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className={styles.logo}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Sponsors;
