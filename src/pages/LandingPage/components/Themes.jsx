import {
  FaRobot,
  FaHeartbeat,
  FaSeedling,
  FaCoins,
  FaGraduationCap,
  FaCarSide,
  FaLeaf,
  FaExclamationTriangle,
  FaGamepad,
  FaLightbulb,
} from "react-icons/fa";
import themesData from "../../../data/themes.data";
import Card from "../../../components/ui/Card";
import SectionHeading from "../../../components/ui/SectionHeading";
import styles from "./Themes.module.css";

/**
 * Themes
 * Maps over data/themes.data.js and renders each as a Card.
 *
 * Each theme's `icon` field is a string identifier (e.g. "FaRobot") kept
 * framework-agnostic in the data file — this lookup map is where it gets
 * resolved to an actual react-icons component. Add new mappings here
 * whenever a new icon string is introduced in themes.data.js.
 */
const ICON_MAP = {
  FaRobot,
  FaHeartbeat,
  FaSeedling,
  FaCoins,
  FaGraduationCap,
  FaCarSide,
  FaLeaf,
  FaExclamationTriangle,
  FaGamepad,
  FaLightbulb,
};

const Themes = () => {
  return (
    <section className={styles.wrapper} aria-labelledby="themes-heading">
      <SectionHeading id="themes-heading" title="Themes" />

      <div className={styles.grid}>
        {themesData.map((theme) => {
          const Icon = ICON_MAP[theme.icon] ?? FaLightbulb;

          return (
            <Card key={theme.title} className={styles.card}>
              <Icon className={styles.icon} aria-hidden="true" />
              <h3 className={styles.title}>{theme.title}</h3>
              <p className={styles.description}>{theme.description}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Themes;
