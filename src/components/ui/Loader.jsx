import styles from "./Loader.module.css";

/**
 * Loader
 * Basic spinner shown while async content (data, forms, images) is loading.
 * Usage: <Loader /> or <Loader label="Loading themes..." fullScreen />
 *
 * Props:
 *  - label: visible/aria text under the spinner (default: "Loading...")
 *  - fullScreen: covers the viewport (use for route-level suspense/loading)
 *  - size: "sm" | "md" | "lg" (default: "md")
 */
const Loader = ({ label = "Loading...", fullScreen = false, size = "md" }) => {
  return (
    <div
      className={`${styles.wrapper} ${fullScreen ? styles.fullScreen : ""}`}
      role="status"
      aria-live="polite"
    >
      <span className={`${styles.spinner} ${styles[size]}`} aria-hidden="true" />
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
};

export default Loader;