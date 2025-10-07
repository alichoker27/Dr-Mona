//Server side page

import type { Metadata } from "next";
import AboutContent from "./AboutContent";
import styles from "./AboutPage.module.css";

export const metadata: Metadata = {
  title: "About | Dr. Mona Chahla",
  description:
    "Learn more about Dr. Mona Chahla, a licensed clinical psychologist dedicated to helping people grow and heal.",
};

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      <AboutContent />
    </main>
  );
}
