import WhatIsSih from "./components/WhatIsSih";
import HistoryAndEvolution from "./components/HistoryAndEvolution";
import HowItWorks from "./components/HowItWorks";
import ImpactOfSih from "./components/ImpactOfSih";

/**
 * AboutPage
 * Assembles every About Page section in spec order. Unlike LandingPage
 * (which needs to answer everything in 30 seconds), this page is for
 * visitors who've opted into more depth, so sections read like a
 * connected narrative:
 *
 *  1. What Is SIH   — the concept
 *  2. History        — where it came from
 *  3. How It Works    — the mechanics of participating
 *  4. Impact          — why it matters / the payoff
 *
 * No wrapping <section> here — each child already renders its own
 * <section aria-labelledby="..."> with an <h2>, so AboutPage stays a
 * plain composition root.
 */
const AboutPage = () => {
  return (
    <>
      <WhatIsSih />
      <HistoryAndEvolution />
      <HowItWorks />
      <ImpactOfSih />
    </>
  );
};

export default AboutPage;
