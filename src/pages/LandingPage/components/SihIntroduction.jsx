/**
 * SihIntroduction
 * Hero tagline blurb describing Smart India Hackathon.
 */
const SihIntroduction = () => {
  return (
    <div className="mt-10 sm:mt-12 text-center max-w-2xl mx-auto px-2 sm:px-4" aria-labelledby="sih-intro-heading">
      {/* Eyebrow flanked by orange lines */}
      <div className="flex items-center justify-center gap-2">
        <span className="h-px w-6 sm:w-10 bg-amber-500/70" aria-hidden="true" />
        <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#ea580c]">
          SIH
        </span>
        <span className="h-px w-6 sm:w-10 bg-amber-500/70" aria-hidden="true" />
      </div>

      {/* Headline */}
      <h1
        id="sih-intro-heading"
        className="mt-3 text-2xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight sm:leading-snug"
      >
        India's Biggest Open Innovation Model
      </h1>

      {/* Blue accent underline */}
      <div className="w-12 h-1 bg-[#2563eb] rounded-full mx-auto my-3.5" aria-hidden="true" />

      {/* Blurb */}
      <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
        Smart India Hackathon brings together students from across the country to solve real, pressing problems faced by government ministries, departments, and industry turning bold ideas into working solutions over one intense, collaborative sprint.
      </p>
    </div>
  );
};

export default SihIntroduction;
