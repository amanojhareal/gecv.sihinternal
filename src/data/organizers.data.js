/**
 * organizers.data.js
 * Powers the <Organizers /> logo grid on the Landing Page — the
 * institutions/bodies running or hosting this SIH edition.
 *
 * Shape: { name, logo, role }
 *  - name: organizer/institution name
 *  - logo: path to the logo file. Since these are static brand assets
 *          (not imported/processed by the bundler), place actual files in
 *          public/assets/logos/ and reference them with a root-relative
 *          path, e.g. "/assets/logos/aicte.svg" — this matches the
 *          public/assets/logos/ folder already in the project structure.
 *  - role: what this organizer does for the event, e.g. "Organizer",
 *          "Host Institute", "Government Partner", "Nodal Center"
 *
 * ⚠️ Placeholder entries — replace names/logos/roles with your actual
 * organizing bodies, and drop the corresponding logo files into
 * public/assets/logos/.
 */

const organizersData = [
  {
    name: "Ministry of Education, Government of India",
    logo: "/assets/logos/moe.svg",
    role: "Organizer",
  },
  {
    name: "AICTE",
    logo: "/assets/logos/aicte.svg",
    role: "Organizer",
  },
  {
    name: "Smart India Hackathon",
    logo: "/assets/logos/sih-logo.svg",
    role: "National Program",
  },
  {
    name: "Host Institute",
    logo: "/assets/logos/org-logo.svg",
    role: "Host Institute / Nodal Center",
  },
];

export default organizersData;
