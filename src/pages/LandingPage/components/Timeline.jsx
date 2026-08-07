import timelineData from "../../../data/timeline.data";
import SectionHeading from "../../../components/ui/SectionHeading";
import { formatDate } from "../../../utils/formatDate";
import styles from "./Timeline.module.css";

/**
 * Timeline
 * Maps over data/timeline.data.js to render the SIH journey as a
 * vertical step-by-step timeline (registration → grand finale).
 */
const Timeline = () => {
  return (
    <section className={styles.wrapper} aria-labelledby="timeline-heading">
      <SectionHeading id="timeline-heading" title="Journey" />

      <ol className={styles.list}>
        {timelineData.map((item, index) => (
          <li key={`${item.title}-${item.date}`} className={styles.item}>
            <div className={styles.marker} aria-hidden="true">
              <span className={styles.dot} />
              {index < timelineData.length - 1 && (
                <span className={styles.connector} />
              )}
            </div>

            <div className={styles.content}>
              <time className={styles.date} dateTime={item.date}>
                {formatDate(item.date)}
              </time>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Timeline;
