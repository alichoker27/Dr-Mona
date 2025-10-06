"use client";

import { useRef } from "react";
import Hero from "./components/home/Hero";
import Testimonials from "./components/home/Testimonials";

export default function HomePage() {
  const testimonialsRef = useRef<HTMLDivElement | null>(null);

  const scrollToTestimonials = () => {
    testimonialsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Hero onDiscoverClick={scrollToTestimonials} />
      <div ref={testimonialsRef}>
        <Testimonials />
      </div>
    </>
  );
}
