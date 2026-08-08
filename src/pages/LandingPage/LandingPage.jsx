import CountdownTimer from "./components/CountdownTimer";
import SihIntroduction from "./components/SihIntroduction";
import Timeline from "./components/Timeline";
import Themes from "./components/Themes";
import ImportantDates from "./components/ImportantDates";
import FaqPreview from "./components/FaqPreview";
import Organizers from "./components/Organizers";
import Sponsors from "./components/Sponsors";
import ContactSection from "./components/ContactSection";
import PageMeta from "../../components/PageMeta";
// pages/LandingPage/LandingPage.jsx


/**
 * LandingPage
 * Assembles every Landing Page section in the order defined by the build
 * spec (Phase 5, steps 2–10). This page has one job: let a visitor
 * understand what SIH is, when it happens, and how to get involved,
 * scannable top-to-bottom in under 30 seconds.
 *
 * Section order is intentional:
 *  1. Countdown  — immediate urgency/hook
 *  2. Intro      — what this is, in one breath
 *  3. Timeline    — the full journey, chronologically
 *  4. Themes      — what problems you could work on
 *  5. Important Dates — fast-scan deadlines (reinforces Timeline)
 *  6. FAQ preview — answers likely objections before they become drop-off
 *  7. Organizers  — who's running this (credibility)
 *  8. Sponsors    — who's backing this (credibility)
 *  9. Contact     — final CTA if questions remain
 *
 * No wrapping <section> here — each child component already renders its
 * own <section> with its own aria-labelledby heading, so LandingPage
 * itself stays a plain composition root.
 */
const LandingPage = () => {
  return (
    <>
      
      <PageMeta
          title="Home"
          description="Smart India Hackathon — register your team, explore themes, and track key dates."
        />
      <CountdownTimer />
      <SihIntroduction />
      <Timeline />
      {/* <Themes /> */}
      <ImportantDates />
      <FaqPreview />
      {/* <Organizers /> */}
      {/* <Sponsors /> */}
      <ContactSection />
    </>
  );
};

export default LandingPage;
