// src/pages/About/About.jsx
import React from "react";
import PageIntro from "./PageIntro.jsx";
import MissionSection from "./MissionSection.jsx";
import WhyChooseUs from "./WhyChooseUs.jsx";
import HistoryTimeline from "./HistoryTimeline.jsx";
import TeamIntro from "./TeamIntro.jsx";
import TestimonialsPreview from "./TestimonialsPreview.jsx";
import CallToAction from "./CallToAction.jsx";

const About = () => {
  return (
    <div className="space-y-16 px-4 md:px-10 py-10">
      <PageIntro />
      <MissionSection />
      <WhyChooseUs />
      <HistoryTimeline />
      <TeamIntro />
      <TestimonialsPreview />
      <CallToAction />
    </div>
  );
};

export default About;
