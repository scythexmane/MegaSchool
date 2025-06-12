import React from "react";
import Hero from "./Hero.jsx";
import CoursesSection from "./CoursesSection.jsx";
import MarqueeSection from "./MarqueeSection.jsx";
import StatsSection from "./StatsSection.jsx";
import TestimonialsSection from "./Feedback.jsx";
import CTASection from "./CTA.jsx";
import PartnersSection from "./PartnersSection.jsx";

const Home = () => {
  return (
    <div className="space-y-20">
      <Hero />
      <CoursesSection />
      <MarqueeSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <PartnersSection />
    </div>
  );
};

export default Home;
