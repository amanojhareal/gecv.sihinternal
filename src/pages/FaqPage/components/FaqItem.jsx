import styles from "./FaqItem.module.css";

/**
 * FaqItem
 * A single collapsible question/answer. Deliberately CONTROLLED (isOpen
 * + onToggle passed in) rather than managing its own open/closed state
 * internally — this lets the parent FaqAccordion decide the behavior
 * (e.g. only one item open at a time vs. multiple), without FaqItem
 * needing to know or care which mode it's in.
 *
 * Props:
 *  - question: string
 *  - answer: string
 *  - isOpen: boolean — whether this item is currently expanded
 *  - onToggle: () => void — called when the question is clicked
 *  - id: string — unique id for this item, used to wire up
 *        aria-controls/aria-labelledby between the button and panel
 */
const FaqItem = ({ question, answer, isOpen, onToggle, id }) => {
  const buttonId = `faq-question-${id}`;
  const panelId = `faq-answer-${id}`;

  return (
    <div className={styles.item}>
      <h3 className={styles.questionWrapper}>
        <button
          id={buttonId}
          type="button"
          className={styles.questionButton}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <span>{question}</span>
          <span className={styles.icon} aria-hidden="true">
            {isOpen ? "−" : "+"}
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
        hidden={!isOpen}
      >
        <p className={styles.answer}>{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
