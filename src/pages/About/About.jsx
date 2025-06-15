// src/pages/AboutPage.jsx
import React from 'react';
import PageIntro from './PageIntro';
import MissionSection from './MissionSection';
import WhyChooseUs from './WhyChooseUs';
import HistoryTimeline from './HistoryTimeline';
import TeamIntro from './TeamIntro';
import CallToAction from './CallToAction';

const AboutPage = () => {
  return (
    <div className="overflow-hidden relative">
      {/* Background Blobs */}
      <div className="gradient-blob-1"></div>
      <div className="gradient-blob-2"></div>
      <div className="absolute inset-0 z-0 blur-3xl opacity-30">
        <div className="absolute top-[-20%] left-[-15%] w-[400px] h-[400px] bg-blue-500 rounded-full mix-blend-screen filter animate-blob-pulse-slow" />
        <div className="absolute bottom-[-20%] right-[-15%] w-[500px] h-[500px] bg-purple-500 rounded-full mix-blend-screen filter animate-blob-pulse-slow delay-500" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PageIntro />
        <MissionSection />
        <WhyChooseUs />
        <HistoryTimeline />
        <TeamIntro />
        <CallToAction />
      </div>
    </div>
  );
};

export default AboutPage;