import React from "react";
import Hero from "../../components/home/Hero.jsx";
import CoursesSection from "../../components/home/CoursesSection.jsx";
import MarqueeSection from "../../components/home/MarqueeSection.jsx";
import StatsSection from "../../components/home/StatsSection.jsx";
import TestimonialsSection from "../../components/home/Feedback.jsx";
import CTASection from "../../components/home/CTA.jsx";
import PartnersSection from "../../components/home/PartnersSection.jsx";

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
