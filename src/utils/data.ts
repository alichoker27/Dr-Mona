import {
  FaHandsHelping,
  FaLightbulb,
  FaHeart,
  FaBalanceScale,
} from "react-icons/fa";
import { Value, PersonalInfo } from "./types";

export const values: Value[] = [
  {
    title: "Empathy",
    description:
      "Understanding and compassion are at the core of every session.",
    icon: FaHeart,
  },
  {
    title: "Integrity",
    description:
      "Confidentiality and professionalism guide every decision I make.",
    icon: FaBalanceScale,
  },
  {
    title: "Empowerment",
    description:
      "Encouraging clients to discover their own strength and potential.",
    icon: FaHandsHelping,
  },
  {
    title: "Growth",
    description:
      "Promoting lifelong learning, healing, and personal development.",
    icon: FaLightbulb,
  },
];

export const personalInfo: PersonalInfo = {
  name: "Dr. Mona Chahla",
  subtitle:
    "Licensed Clinical Psychologist dedicated to helping you achieve lasting positive change",
  image: "/moni2.jpg",
  aboutParagraphs: [
    "With over a decade of experience in clinical psychology, I've dedicated my career to helping individuals, couples, and families navigate life's challenges and achieve meaningful personal growth.",
    "I believe that everyone has the capacity for healing and transformation. My role is to provide a safe, supportive environment where you can explore your thoughts and feelings.",
    "Through our work together, you'll gain insights into patterns that may be holding you back and develop healthier ways of thinking and relating.",
  ],
  missionParagraphs: [
    "I believe not just in helping people overcome challenges, but in empowering them to thrive.",
    "My mission is to create a therapeutic space where healing happens naturally, and every individual feels heard, valued, and supported.",
    "Together, we'll work towards sustainable change that honors your unique experiences and aspirations.",
  ],
};
