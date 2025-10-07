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
