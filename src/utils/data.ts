import {
  FaBrain,
  FaHeart,
  FaUsers,
  FaMedkit,
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
import { Certificate } from "./types";
import { BlogPost } from "./types";

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
  name: "Psychologist Mona Chahla",
  subtitle:
    "Licensed Clinical Psychologist dedicated to helping you achieve lasting positive change",
  image: "/therapy-about.jpg",
  aboutParagraphs: [
    "I am a licensed clinical psychologist, currently pursuing advanced training in Freudian and Lacanian psychoanalysis, with 10 years of experience in child protection and positive parenting.",
    "I specialize in working with children, adolescents, and adults, providing support through trauma and emotional challenges while helping individuals explore their inner world.",
    "Through comprehensive assessment, therapeutic intervention, and evidence-based practices, she promotes mental health, fosters resilience, and guides individuals toward healing and personal growth.",
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
    image: "/individual-therapy.jpg",
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
    image: "/couples-counseling.png",
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
    image: "/positive-parenting.webp",
    icon: MdFamilyRestroom,
    title: "Positive parenting",
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
      "A safe, compassionate space allows open communication the foundation of effective psychological support.",
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
      "The final step is cultivating self-acceptance, peace of mind, and mental strength achieving your healthiest self.",
  },
];

export const contacts: ContactInfo[] = [
  {
    type: "Email",
    value: "chahlamona@gmail.com",
    href: "mailto:chahlamona@gmail.com",
    icon: FaEnvelope,
  },
  {
    type: "Phone",
    value: "+961 70 541 019",
    href: "https://wa.me/96170541019?text=Hello%20Dr.%20I%20would%20like%20to%20book%20an%20appointment",
    icon: FaPhoneAlt,
  },
  {
    type: "LinkedIn",
    value: "Mona Chahla",
    href: "http://linkedin.com/in/chahla-mona-50938b1ab",
    icon: FaLinkedin,
  },

  {
    type: "Instagram",
    value: "Mona Chahla",
    href: "https://www.instagram.com/mona_chahla?igsh=MXZnNjYzNGl6cjEyYg==",
    icon: FaInstagram,
  },
];

export const certificates: Certificate[] = [
  {
    id: 1,
    image: "/certificate1.jpg",
    title: "Psychology Practice License - Lebanon",
    description:
      "Official authorization to practice psychology, issued by the Lebanese Ministry of Public Health.",
    institution: "Ministry of Public Health – Republic of Lebanon",
    year: "2021",
    icon: FaBrain,
  },
  // {
  //   id: 2,
  //   image: "/certificate2.jpg",
  //   title: "Family Therapy Certification",
  //   description:
  //     "Specialized training in systemic family therapy and relationship counseling techniques.",
  //   institution: "Institute of Family Therapy",
  //   year: "2019",
  //   icon: FaHeart,
  // },
  // {
  //   id: 3,
  //   image: "/certificate3.jpg",
  //   title: "Mindfulness-Based Therapy",
  //   description:
  //     "Certified practitioner in mindfulness-based stress reduction and meditation therapy.",
  //   institution: "Center for Mindfulness Studies",
  //   year: "2020",
  //   icon: GiMeditation,
  // },
  // {
  //   id: 4,
  //   image: "/certificate4.jpg",
  //   title: "Trauma & PTSD Specialist",
  //   description:
  //     "Advanced certification in trauma treatment, EMDR therapy, and post-traumatic stress disorder management.",
  //   institution: "International Society for Traumatic Stress Studies",
  //   year: "2021",
  //   icon: FaLeaf,
  // },
  // {
  //   id: 5,
  //   image: "/certificate5.jpg",
  //   title: "Holistic Wellness Psychology",
  //   description:
  //     "Integrative approach combining traditional psychology with holistic wellness practices.",
  //   institution: "Holistic Psychology Institute",
  //   year: "2022",
  //   icon: GiLotusFlower,
  // },
  // {
  //   id: 6,
  //   image: "/certificate6.jpg",
  //   title: "Neuropsychology Certification",
  //   description:
  //     "Specialized training in brain-behavior relationships and cognitive assessment techniques.",
  //   institution: "Academy of Clinical Neuropsychology",
  //   year: "2023",
  //   icon: MdPsychology,
  // },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title:
      "Awareness of our children's stress is where support and comfort begin.",
    date: "2025-04-19",
    author: "Psychologist Mona Chahla",
    summary:
      "This session focused on understanding the stress children face today and how parents can respond with empathy and support. Practical tips were shared to help children feel heard, understood, and guided toward healthy coping strategies.",
    image: "/awarness-of-our-children.jpg",
    category: "Parents",
  },
  {
    id: 2,
    title: "Healthy Minds, Healthy Homes: Supporting Parents’ Well-Being",
    date: "2025-10-19",
    author: "Psychologist Mona Chahla",
    summary:
      "A healthy home starts with healthy parents. Practical tips were offered to help parents care for their mental and emotional health, ensuring they can support their children with balance and calm.",
    image: "/municipality.jpg",
    category: "Municipality",
  },
  {
    id: 3,
    title:
      "Integration of mental health into PHC with Who and National mental health programs",
    date: "2025-09-08",
    author: "Psychologist Mona Chahla",
    summary:
      "Hands-on training on integrating mental health into primary healthcare, following WHO and national guidelines, enhanced her skills in supporting patients early and effectively, reflecting her dedication to mental well-being.",
    image: "/ngo1.jpg",
    category: "Ngo staff",
  },
  {
    id: 4,
    title: "Child protection, safe identification and referal, child behavior",
    date: "2025-01-05",
    author: "Psychologist Mona Chahla",
    summary:
      "Focused on recognizing children's needs, understanding behavior, and ensuring safe referral, highlighting her dedication to creating supportive and protective environments.",
    image: "/ngo2.jpg",
    category: "Teachers ngo staff",
  },
];
