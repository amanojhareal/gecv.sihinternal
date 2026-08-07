import importantDatesData from "../../../data/importantDates.data";
import SectionHeading from "../../../components/ui/SectionHeading";
import { formatDate } from "../../../utils/formatDate";
import styles from "./ImportantDates.module.css";

/**
 * ImportantDates
 * Maps over data/importantDates.data.js — the fast-scan version of the
 * schedule (contrast with Timeline.jsx, which tells the fuller story).
 * Rendered as a simple label/date list, not a narrative.
 */
const ImportantDates = () => {
  return (
    <section className={styles.wrapper} aria-labelledby="important-dates-heading">
      <SectionHeading id="important-dates-heading" title="Important Dates" />

      <dl className={styles.list}>
        {importantDatesData.map((item) => (
          <div key={`${item.label}-${item.date}`} className={styles.row}>
            <dt className={styles.label}>{item.label}</dt>
            <dd className={styles.date}>
              <time dateTime={item.date}>{formatDate(item.date)}</time>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default ImportantDates;
