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
