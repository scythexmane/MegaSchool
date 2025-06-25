import React, { Suspense, lazy, Component } from "react";

const Hero = lazy(() => import("./Hero.jsx"));
const CoursesSection = lazy(() => import("./CoursesSection.jsx"));
const MarqueeSection = lazy(() => import("./MarqueeSection.jsx"));
const StatsSection = lazy(() => import("./StatsSection.jsx"));
// const TestimonialsSection = lazy(() => import("./Feedback.jsx"));
const CTASection = lazy(() => import("./CTA.jsx"));
const PartnersSection = lazy(() => import("./PartnersSection.jsx"));

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return <div className="flex justify-center items-center h-screen text-red-500">Something went wrong. Please try again later.</div>;
    }
    return this.props.children;
  }
}

const Home = () => {
  return (
    <div className="space-y-20 bg-[var(--bg-from)] dark:bg-[var(--bg-to)]">
      <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
        <ErrorBoundary>
          <Hero />
          <CoursesSection />
          <MarqueeSection />
          <StatsSection />
          {/* <TestimonialsSection /> */}
          <CTASection />
          <PartnersSection />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};

export default React.memo(Home);