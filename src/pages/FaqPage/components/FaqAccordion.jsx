import { useState } from "react";
import faqData from "../../../data/faq.data";
import FaqItem from "./FaqItem";
import styles from "./FaqAccordion.module.css";

/**
 * FaqAccordion
 * Maps data/faq.data.js into FaqItems and owns the actual open/close
 * behavior, since FaqItem itself is a controlled/dumb component.
 *
 * Behavior decision: only ONE question can be open at a time (classic
 * accordion) rather than allowing multiple simultaneously-open answers.
 * Reasoning: keeps the page shorter/less overwhelming to scan, and
 * matches the most common FAQ UX pattern people already expect.
 * To allow multiple open at once instead, swap `openIndex` (a single
 * value) for a Set of open indices and toggle membership in it.
 */
const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.wrapper}>
      {faqData.map((item, index) => (
        <FaqItem
          key={item.question}
          id={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default FaqAccordion;
