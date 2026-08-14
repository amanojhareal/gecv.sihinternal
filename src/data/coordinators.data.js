/**
 * coordinators.data.js
 * Stores team member details for Student Coordinators across different departments.
 * Images are imported directly from src/assets/cordinator_images/ for Vite asset bundling.
 */

import amanOjhaImg from "../assets/cordinator_images/AmanOjha.jpg.jpeg";
import amitImg from "../assets/cordinator_images/4m1t.jpeg";
import sanskritiImg from "../assets/cordinator_images/Sanskriti.jpg";
import tivraImg from "../assets/cordinator_images/Tivra.jpg.jpeg";
import amanImg from "../assets/cordinator_images/Aman.jpeg";
import kinIro from "../assets/cordinator_images/sonali.jpeg";
import chauhan from "../assets/cordinator_images/SonaliChauhan.jpeg";
import saurav from "../assets/cordinator_images/Saurav.jpeg";

const studentCoordinatorsData = [
  {
    category: "Developer",
    title: "Developer Team",
    badgeColor: "blue",
    members: [
      {
        id: "dev-1",
        name: "Aman Kumar",
        role: "Lead Developer",
        department: "Computer Science & Engineering",
        year: "2nd Year",
        image: amanOjhaImg,
        email: "amanojhareal@gmail.com",
        phone: "+91 7739692820",
        linkedin: "https://linkedin.com/in/realaman",
        variant: "blue",
        instagram: "https://instagram.com/_aman.ojha_",
      },
      {
        id: "dev-2",
        name: "Aman Kumar",
        role: "Frontend Developer",
        department: "Computer Science & Engineering",
        year: "2nd Year",
        image: amanImg,
        email: "kumar12aman007@gmail.com",
        phone: "+91 70336 22795",
        linkedin: "https://linkedin.com/in/aman-kumar-00b7703b5",
        variant: "blue",
        instagram: "https://instagram.com/aman_kumar_007_/",
      },
    ],
  },
  {
    category: "Design & Graphics",
    title: "Design & Graphics Team",
    badgeColor: "purple",
    members: [
      {
        id: "des-1",
        name: "Amit Lal",
        role: "Design Lead",
        department: "Department of Electronics & Comm.",
        year: "2nd Year",
        image: amitImg,
        email: "amit2020lal@gmail.com",
        phone: "+91 94720 68370",
        linkedin: "https://linkedin.com/in/adavanilal",
        variant: "purple",
        instagram: "https://instagram.com/adavanilal/",
      },
      {
        id: "des-2",
        name: "Sonali Kumari",
        role: "UI/UX Designer",
        department: "Computer Science & Engineering",
        year: "2nd Year",
        image: kinIro,
        email: "sonali.05441@gmail.com",
        linkedin: "https://linkedin.com/in/sonali-kumari-864996383/",
        variant: "purple",
      },
      {
        id: "des-3",
        name: "Sonali Kumari",
        role: "Graphics & Poster Specialist",
        department: "Computer Science & Engineering",
        year: "2nd Year",
        image: chauhan,
        email: "chauhansonali051@gmail.com",
        linkedin: "https://linkedin.com/in/",
        variant: "purple",
      },
    ],
  },
  {
    category: "Social Media & Publicity",
    title: "Social Media & Publicity Team",
    badgeColor: "amber",
    members: [
      {
        id: "sm-1",
        name: "Sanskriti",
        role: "Publicity Lead",
        department: "Electronics and Communication Engineering",
        year: "2nd Year",
        image: sanskritiImg,
        email: "sanskritimbhatt@gmail.com",
        linkedin: "https://linkedin.com",
        variant: "amber",
      },
      {
        id: "sm-2",
        name: "Tivra",
        role: "Social Media Manager",
        department: "Electronics and Communication Engineering",
        year: "2nd Year",
        image: tivraImg,
        email: "tivrachatterjee@gmail.com",
        linkedin: "https://www.linkedin.com/in/tivra-chatterjee-7535a5416",
        variant: "amber",
      },
      {
        id: "sm-3",
        name: "Saurav Prakash",
        role: "Photography & Video Editing",
        department: "Mechanical Engineering",
        year: "2nd Year",
        image: saurav,
        email: "publicity3@example.com",
        phone: "+91 88638 56084",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com/saurabhkush__/",
        variant: "amber",
      },
    ],
  },
];

export default studentCoordinatorsData;
