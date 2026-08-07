import styles from "./WhatIsSih.module.css";

/**
 * WhatIsSih
 * First section of the About Page — a fuller explanation of what SIH is
 * than the Landing Page's SihIntroduction. That one is a 2-sentence
 * hook; this one can actually explain the format, scale, and purpose,
 * since a visitor on /about has already opted into reading more.
 *
 * Static content — no data file, this is fixed copy.
 */
const WhatIsSih = () => {
  return (
    <section className={styles.wrapper} aria-labelledby="what-is-sih-heading">
      <h2 id="what-is-sih-heading" className={styles.heading}>
        What is Smart India Hackathon?
      </h2>

      <p className={styles.paragraph}>
        Smart India Hackathon (SIH) is a nationwide initiative that brings
        together students, government ministries, and industry to solve
        some of the country&apos;s toughest real-world problems. Instead of
        theoretical assignments, participants work on live problem
        statements submitted by actual government departments, PSUs, and
        organizations — meaning the solutions built during the hackathon
        can genuinely go on to be adopted.
      </p>

      <p className={styles.paragraph}>
        Teams of students from colleges and universities across India
        compete in a multi-stage format: institute-level shortlisting
        followed by a national grand finale, where the strongest solutions
        are built, refined, and presented to expert judges over an intense
        hands-on hackathon.
      </p>

      <p className={styles.paragraph}>
        It&apos;s designed to give students hands-on experience solving
        problems that matter, while giving government and industry access
        to fresh, innovative thinking from the country&apos;s next
        generation of engineers and technologists.
      </p>
    </section>
  );
};

export default WhatIsSih;
