import { useState } from "react";
import { Users, Code, Palette, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageMeta from "../../components/PageMeta";
import studentCoordinatorsData from "../../data/coordinators.data";
import CoordinatorCard from "./components/CoordinatorCard";

const CATEGORY_ICONS = {
  Developer: Code,
  "Design & Graphics": Palette,
  "Social Media & Publicity": Share2,
};

export default function CoordinatorsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const totalMembers = studentCoordinatorsData.reduce(
    (acc, sec) => acc + sec.members.length,
    0
  );

  const filterOptions = [
    {
      label: "All",
      count: totalMembers,
      Icon: Users,
    },
    ...studentCoordinatorsData.map((sec) => ({
      label: sec.category,
      count: sec.members.length,
      Icon: CATEGORY_ICONS[sec.category] || Users,
    })),
  ];

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

      <div className="min-h-screen bg-[#f8fafc] text-slate-900 pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Scroll Reveal Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-2xl mx-auto pt-6 pb-2 sm:pt-12 sm:pb-4"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-brand border border-blue-100 shadow-2xs">
              SIH 2026 · GEC Vaishali
            </span>
            <h1 className="mt-3 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Student Coordinators
            </h1>
           
          </motion.div>

          {/* Sticky Responsive Category Filter Bar (with smooth scroll on mobile) */}
          <div className="sticky top-[58px] sm:top-[68px] z-20 -mx-4 px-4 sm:mx-0 sm:px-0 py-2.5 sm:py-4 bg-[#f8fafc]/90 backdrop-blur-md transition-all">
            <div className="flex justify-start sm:justify-center overflow-x-auto no-scrollbar py-1">
              <div className="inline-flex items-center p-1 bg-slate-200/70 rounded-2xl border border-slate-200/90 gap-1 sm:gap-1.5 shadow-2xs shrink-0">
                {filterOptions.map(({ label, count, Icon }) => {
                  const isActive = activeTab === label;
                  return (
                    <button
                      key={label}
                      onClick={() => setActiveTab(label)}
                      className={`relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand active:scale-97 ${
                        isActive
                          ? "bg-white text-slate-900 font-bold shadow-xs border border-slate-200/80"
                          : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                      }`}
                    >
                      <Icon size={14} className={isActive ? "text-brand" : "text-slate-500"} />
                      <span>{label}</span>
                      <span
                        className={`text-[10px] sm:text-[11px] font-semibold px-1.5 py-0.2 sm:py-0.5 rounded-md ${
                          isActive
                            ? "bg-blue-50 text-brand"
                            : "bg-slate-200/80 text-slate-500"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section Groups with Scroll Triggers */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-6 sm:mt-10 space-y-12 sm:space-y-16"
            >
              {filteredData.map((section) => {
                return (
                  <motion.div
                    key={section.category}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                          staggerChildren: 0.08,
                        },
                      },
                    }}
                    className="space-y-4 sm:space-y-6"
                  >
                    {/* Section Header */}
                    <div className="border-b border-slate-200/80 pb-3 sm:pb-4 text-center">
                      <h2 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight">
                        {section.title}
                      </h2>
                      {section.description && (
                        <p className="text-xs sm:text-sm text-slate-500 mt-0.5 sm:mt-1 leading-normal max-w-xl mx-auto">
                          {section.description}
                        </p>
                      )}
                    </div>

                    {/* Cards Grid with Staggered Entrance */}
                    <motion.div
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.08,
                          },
                        },
                      }}
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                    >
                      {section.members.map((member) => (
                        <CoordinatorCard key={member.id} member={member} />
                      ))}
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}


