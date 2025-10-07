import { IconType } from "react-icons"; // ✅ import the type

export type Value = {
  title: string;
  description: string;
  icon: IconType;
};

export type PersonalInfo = {
  name: string;
  subtitle: string;
  image: string;
  aboutParagraphs: string[];
  missionParagraphs: string[];
};

export type Values = {
  icon: IconType; // ✅ correct
  title: string;
  description: string;
};

export type MainService = {
  id: number;
  image: string;
  icon: IconType;
  title: string;
  description: string;
  features: string[];
};

export type AdditionalService = {
  icon: IconType;
  title: string;
  description: string;
};

export interface Step {
  number: number;
  title: string;
  icon: IconType;
  description: string;
}

export type ContactInfo = {
  type: string;
  value: string;
  href: string;
  icon: IconType;
};

export interface Certificate {
  id: number;
  image: string;
  title: string;
  description: string;
  institution: string;
  year: string;
  icon: IconType;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  summary: string;
  image: string;
  category: string;
}
