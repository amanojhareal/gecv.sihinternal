/**
 * themes.data.js
 * Powers the <Themes /> section on the Landing Page — the broad problem
 * statement categories teams can choose from.
 *
 * Shape: { title, description, icon? }
 *  - title: theme/category name
 *  - description: 1–2 sentence explanation of what falls under this theme
 *  - icon: optional — a react-icons component name (string) or an import
 *          key you resolve in Themes.jsx, e.g. via react-icons/fa or
 *          your assets/icons/ folder. Left as a string identifier here so
 *          the data file stays framework-agnostic; map it to an actual
 *          icon component inside Themes.jsx.
 *
 * ⚠️ These are the standard SIH theme categories — verify against the
 * official SIH portal for the current edition and adjust titles/wording
 * if the organizers have renamed or added tracks.
 */

const themesData = [
  {
    title: "Smart Automation",
    description:
      "Solutions that use robotics, IoT, or process automation to reduce manual effort and improve efficiency.",
    icon: "FaRobot",
  },
  {
    title: "Healthcare & Biotech",
    description:
      "Tools and platforms that improve diagnosis, treatment, patient care, or access to medical services.",
    icon: "FaHeartbeat",
  },
  {
    title: "Agriculture, FoodTech & Rural Development",
    description:
      "Technology that boosts farm productivity, reduces post-harvest loss, or strengthens rural supply chains.",
    icon: "FaSeedling",
  },
  {
    title: "Fintech",
    description:
      "Solutions that make financial services more accessible, secure, or efficient for individuals and businesses.",
    icon: "FaCoins",
  },
  {
    title: "Education & Skill Development",
    description:
      "Platforms and tools that improve learning outcomes, accessibility, or skill-building for students and workers.",
    icon: "FaGraduationCap",
  },
  {
    title: "Smart Vehicles & Transportation",
    description:
      "Innovations in mobility, logistics, and transportation infrastructure for safer and more efficient travel.",
    icon: "FaCarSide",
  },
  {
    title: "Clean & Green Technology",
    description:
      "Solutions focused on sustainability, renewable energy, waste management, and environmental conservation.",
    icon: "FaLeaf",
  },
  {
    title: "Disaster Management",
    description:
      "Systems that help predict, prevent, or respond to natural and man-made disasters more effectively.",
    icon: "FaExclamationTriangle",
  },
  {
    title: "Toys & Games",
    description:
      "Creative and educational toy or gaming concepts that entertain while building skills or awareness.",
    icon: "FaGamepad",
  },
  {
    title: "Miscellaneous",
    description:
      "Problem statements that don't fit neatly into the categories above but address a real-world need.",
    icon: "FaLightbulb",
  },
];

export default themesData;
