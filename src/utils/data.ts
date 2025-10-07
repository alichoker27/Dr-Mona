import {
  FaBrain,
  FaHeart,
  FaUsers,
  FaLeaf,
  FaSpa,
  FaHandHoldingHeart,
  FaHandsHelping,
  FaLightbulb,
  FaBalanceScale,
  FaComments,
  FaSearch,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Value, PersonalInfo } from "./types";
import { GiMeditation, GiLotusFlower } from "react-icons/gi";
import { MdPsychology, MdFamilyRestroom } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { MainService, AdditionalService } from "./types";
import { Step } from "./types";
import { ContactInfo } from "./types";

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

export const mainServices: MainService[] = [
  {
    id: 1,
    image: "/service1.jpg",
    icon: FaBrain,
    title: "Individual Therapy",
    description:
      "One-on-one sessions focused on your personal growth, mental wellness, and overcoming life challenges through evidence-based therapeutic approaches.",
    features: [
      "Cognitive Behavioral Therapy (CBT)",
      "Anxiety & Depression Treatment",
      "Stress Management",
      "Personal Development",
    ],
  },
  {
    id: 2,
    image: "/service2.jpg",
    icon: FaHeart,
    title: "Couples Counseling",
    description:
      "Strengthen your relationship through guided communication, conflict resolution, and rebuilding emotional connection with your partner.",
    features: [
      "Communication Skills",
      "Conflict Resolution",
      "Trust Rebuilding",
      "Intimacy Enhancement",
    ],
  },
  {
    id: 3,
    image: "/service3.jpg",
    icon: MdFamilyRestroom,
    title: "Family Therapy",
    description:
      "Create harmony within your family system by addressing conflicts, improving communication, and fostering healthy relationships among all members.",
    features: [
      "Family Dynamics",
      "Parent-Child Relations",
      "Sibling Conflicts",
      "Blended Family Support",
    ],
  },
];

export const additionalServices: AdditionalService[] = [
  {
    icon: GiMeditation,
    title: "Mindfulness-Based Therapy",
    description:
      "Learn mindfulness techniques to reduce stress, increase self-awareness, and cultivate inner peace.",
  },
  {
    icon: FaLeaf,
    title: "Trauma & PTSD Treatment",
    description:
      "Specialized care for healing from traumatic experiences using evidence-based trauma therapy approaches.",
  },
  {
    icon: BiSupport,
    title: "Grief Counseling",
    description:
      "Compassionate support through the grieving process, helping you navigate loss and find healing.",
  },
  {
    icon: FaSpa,
    title: "Stress & Burnout Recovery",
    description:
      "Develop healthy coping strategies and restore balance in your personal and professional life.",
  },
  {
    icon: MdPsychology,
    title: "Life Transitions Support",
    description:
      "Navigate major life changes with guidance, whether career shifts, relocation, or personal transformations.",
  },
  {
    icon: FaHandHoldingHeart,
    title: "Self-Esteem Building",
    description:
      "Develop confidence, self-worth, and a positive self-image through targeted therapeutic interventions.",
  },
];

export const labSteps: Step[] = [
  {
    number: 1,
    title: "Understanding the Mind",
    icon: FaBrain,
    description:
      "Every healing journey begins with understanding. We listen deeply to identify emotional patterns and core challenges.",
  },
  {
    number: 2,
    title: "Building Trust & Connection",
    icon: FaComments,
    description:
      "A safe, compassionate space allows open communication — the foundation of effective psychological support.",
  },
  {
    number: 3,
    title: "Exploring the Root Cause",
    icon: FaSearch,
    description:
      "We explore experiences and thoughts shaping your current emotional state, focusing on awareness and clarity.",
  },
  {
    number: 4,
    title: "Guided Healing Process",
    icon: FaHandsHelping,
    description:
      "Through personalized therapy sessions, we reshape negative beliefs, develop resilience, and nurture growth.",
  },
  {
    number: 5,
    title: "Achieving Balance & Wellbeing",
    icon: FaHeart,
    description:
      "The final step is cultivating self-acceptance, peace of mind, and mental strength — achieving your healthiest self.",
  },
];

export const contacts: ContactInfo[] = [
  {
    type: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
    icon: FaEnvelope,
  },
  {
    type: "Phone",
    value: "+123 456 7890",
    href: "tel:+1234567890",
    icon: FaPhoneAlt,
  },
  {
    type: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    href: "https://linkedin.com/in/yourprofile",
    icon: FaLinkedin,
  },
  {
    type: "Twitter",
    value: "@yourhandle",
    href: "https://twitter.com/yourhandle",
    icon: FaTwitter,
  },
  {
    type: "Instagram",
    value: "@yourhandle",
    href: "https://instagram.com/yourhandle",
    icon: FaInstagram,
  },
];
