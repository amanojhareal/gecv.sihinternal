

function getEnvUrl(key, fallback = "") {
  const value = import.meta.env[key];

  if (!value) {
    
    console.warn(`[links.js] Missing env variable: ${key}. Using fallback.`);
    return fallback;
  }

  return value;
}


export const SIH_PORTAL_URL = getEnvUrl("VITE_SIH_PORTAL_URL", "https://sih.gov.in");


export const REGISTER_FORM_URL = getEnvUrl("VITE_REGISTER_FORM_URL", "");


export const UPLOAD_PPT_FORM_URL = getEnvUrl("VITE_UPLOAD_PPT_FORM_URL", "");

export const LINKS = {
  SIH_PORTAL_URL,
  REGISTER_FORM_URL,
  UPLOAD_PPT_FORM_URL,
};
export const SOCIAL_LINKS = [
  { platform: "Instagram", url: "https://instagram.com/sih_internalhackathon_gecv/", icon: "FaInstagram" },
  { platform: "Twitter", url: "https://x.com/gec_vaishali", icon: "FaTwitter" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/gec-vaishali/", icon: "FaLinkedin" },
  { platform: "YouTube", url: "https://youtube.com/@GECVaishali", icon: "FaYoutube" },
  { platform: "Facebook", url: "https://facebook.com/gec.vaishali/", icon: "FaFacebook" },
];

export default LINKS;
