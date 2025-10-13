// src/app/services/page.tsx
import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services | Psychologist Mona Chahla",
  description:
    "Explore therapeutic services by Dr. Mona Chahla including individual therapy, couples counseling, family therapy, and mindfulness-based practices.",
};

const ServicesPage = () => {
  return <ServicesContent />;
};

export default ServicesPage;
