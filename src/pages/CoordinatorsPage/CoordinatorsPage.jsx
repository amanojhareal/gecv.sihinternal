import { useState } from "react";
import { Users, Code, Palette, Share2, Sparkles } from "lucide-react";
import PageMeta from "../../components/PageMeta";
import studentCoordinatorsData from "../../data/coordinators.data";
import CoordinatorCard from "./components/CoordinatorCard";

const CATEGORY_ICONS = {
  Developer: Code,
  "Design & Graphics": Palette,
  "Social Media & Publicity": Share2,
};

const CATEGORY_COLOR = {
  Developer: "from-blue-500 to-indigo-600",
  "Design & Graphics": "from-purple-500 to-pink-600",
  "Social Media & Publicity": "from-amber-500 to-orange-600",
};

export default function CoordinatorsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", ...studentCoordinatorsData.map((sec) => sec.category)];

  const filteredData =
    activeTab === "All"
      ? studentCoordinatorsData
      : studentCoordinatorsData.filter((sec) => sec.category === activeTab);

  return (
    <>
      <PageMeta
        title="Student Coordinators"
        description="Meet the student coordinators behind GECV Smart India Hackathon internal event managing development, design, and publicity."
      />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Hero Banner Header */}
        {/* <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 px-6 py-12 text-center text-white shadow-2xl sm:px-12 sm:py-16">
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-300 backdrop-blur-md">
              <Sparkles size={14} className="text-blue-400" />
              Student Leadership Team
            </span>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Student Coordinators
            </h1>

            <p className="mt-4 text-base text-slate-300 sm:text-lg">
              The driving force behind GECV SIH Internal Hackathon. Meet the dedicated student teams in Technical Development, Creative Design, and Event Publicity.
            </p>
          </div>
        </div> */}

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            const Icon = cat !== "All" ? CATEGORY_ICONS[cat] : Users;

            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  isActive
                    ? "bg-brand text-white shadow-md shadow-blue-500/20 scale-105"
                    : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {Icon && <Icon size={16} />}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Section Groups */}
        <div className="mt-12 space-y-16">
          {filteredData.map((section) => {
            const SectionIcon = CATEGORY_ICONS[section.category] || Users;
            const gradientBg = CATEGORY_COLOR[section.category] || "from-blue-500 to-indigo-600";

            return (
              <div key={section.category} className="space-y-6">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200/80 pb-4 gap-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${gradientBg} text-white shadow-md`}
                    >
                      <SectionIcon size={22} strokeWidth={2.2} />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                        {section.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 font-medium">
                        {section.description}
                      </p>
                    </div>
                  </div>
                  <span className="self-start sm:self-auto rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                    {section.members.length} Members
                  </span>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {section.members.map((member) => (
                    <CoordinatorCard key={member.id} member={member} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
