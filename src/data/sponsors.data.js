/**
 * sponsors.data.js
 * Powers the <Sponsors /> logo grid/carousel on the Landing Page.
 * Per the build spec, Sponsors.jsx groups these by tier — so keep
 * `tier` values consistent (exact string match) across entries.
 *
 * Shape: { name, logo, tier }
 *  - name: sponsor/company name
 *  - logo: path to the logo file, root-relative into public/assets/logos/
 *          (same convention as organizers.data.js), e.g.
 *          "/assets/logos/sponsor-acme.svg"
 *  - tier: sponsorship tier — keep to a small fixed set so Sponsors.jsx
 *          can group/sort reliably. Suggested order (highest first):
 *          "Title", "Platinum", "Gold", "Silver", "Partner"
 *
 * ⚠️ Placeholder entries — this site has no sponsors confirmed yet.
 * Replace with real sponsor names/logos as they're signed, and add their
 * logo files to public/assets/logos/. Remove this file's use in
 * Sponsors.jsx (or render an empty state) until at least one real
 * sponsor exists — don't ship placeholder company names to production.
 */

const sponsorsData = [
  {
    name: "Title Sponsor (TBD)",
    logo: "/assets/logos/sponsor-title-placeholder.svg",
    tier: "Title",
  },
  {
    name: "Platinum Sponsor (TBD)",
    logo: "/assets/logos/sponsor-platinum-placeholder.svg",
    tier: "Platinum",
  },
  {
    name: "Gold Sponsor A (TBD)",
    logo: "/assets/logos/sponsor-gold-a-placeholder.svg",
    tier: "Gold",
  },
  {
    name: "Gold Sponsor B (TBD)",
    logo: "/assets/logos/sponsor-gold-b-placeholder.svg",
    tier: "Gold",
  },
  {
    name: "Silver Sponsor A (TBD)",
    logo: "/assets/logos/sponsor-silver-a-placeholder.svg",
    tier: "Silver",
  },
  {
    name: "Silver Sponsor B (TBD)",
    logo: "/assets/logos/sponsor-silver-b-placeholder.svg",
    tier: "Silver",
  },
  {
    name: "Community Partner (TBD)",
    logo: "/assets/logos/sponsor-partner-placeholder.svg",
    tier: "Partner",
  },
];

export default sponsorsData;
