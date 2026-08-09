import CountdownTimer from "./components/CountdownTimer";
import SihIntroduction from "./components/SihIntroduction";
import QuickActions from "./components/QuickActions";
import Timeline from "./components/Timeline";
import Organizers from "./components/Organizers";
import ImportantDates from "./components/ImportantDates";
import FaqPreview from "./components/FaqPreview";
import ContactSection from "./components/ContactSection";
import PageMeta from "../../components/PageMeta";

/**
 * Reusable dot pattern style for background depth
 */
const dotPatternStyle = {
  backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
  backgroundSize: "16px 16px",
};

/**
 * LandingPage
 * Modern Smart India Hackathon landing page designed with rich aesthetics:
 *  1. Hero Countdown & Introduction Card
 *  2. Standalone Quick Actions & Resources Section
 *  3. Journey Timeline Card
 *  4. Organizing Committee (Patron, SPOC, Faculty Coordinator)
 *  5. Important Dates, FAQ Preview, and Contact Strip
 */
const LandingPage = () => {
  return (
    <>
      <PageMeta
        title="GECV-SIH Internal Hackathon"
        description="Smart India Hackathon — register your team, explore problem statements, download templates, and track key dates."
      />

      <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] pb-16 sm:pb-24">
        {/* Main Hero Container Card */}
        <section className="relative mx-auto max-w-4xl px-3 sm:px-6 pt-6 sm:pt-10">
          <div className="relative overflow-hidden rounded-[28px] sm:rounded-[40px] border border-blue-100/80 bg-gradient-to-b from-[#f0f4fc] via-[#f7f9fe] to-white px-3 py-8 sm:px-8 sm:py-12 shadow-sm">
            {/* Background Dot Matrix Texture (Top-Left & Bottom-Right) */}
            <div
              className="pointer-events-none absolute -top-4 -left-4 h-32 w-32 text-blue-500/10"
              style={dotPatternStyle}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-4 -right-4 h-32 w-32 text-blue-500/10"
              style={dotPatternStyle}
              aria-hidden="true"
            />

            {/* Countdown Timer Component */}
            <CountdownTimer />

            {/* SIH Title & Intro Blurb Component */}
            <SihIntroduction />
          </div>
        </section>

        {/* Standalone Quick Actions Section */}
        <QuickActions />

        {/* Journey Timeline Section Card */}
        <Timeline />

        {/* Supporting Sections Container */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 space-y-10 sm:space-y-14">
          <ImportantDates />
          <Organizers />
          <FaqPreview />
          <ContactSection />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
