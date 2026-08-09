import PageMeta from "../../components/PageMeta";
import WhatIsSih from "./components/WhatIsSih";
import HistoryAndEvolution from "./components/HistoryAndEvolution";
import HowItWorks from "./components/HowItWorks";
import ImpactOfSih from "./components/ImpactOfSih";

/**
 * AboutPage
 * Assembles every About Page section with PageMeta SEO metadata.
 */
const AboutPage = () => {
  return (
    <>
      <PageMeta
        title="About"
        description="Learn about Smart India Hackathon, its history, mechanics, and national impact."
      />

      <WhatIsSih />
      <HistoryAndEvolution />
      <HowItWorks />
      <ImpactOfSih />
    </>
  );
};

export default AboutPage;
