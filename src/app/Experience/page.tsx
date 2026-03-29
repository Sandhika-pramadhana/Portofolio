'use client'
import dynamic from "next/dynamic";

// Dynamically import Experience component with no SSR
const ExperienceNoSSR = dynamic(() => import("@/src/features/page/WebPortofolio/experience"), {
  ssr: false,
});

// Component wrapper
const ExperiencePage = () => <ExperienceNoSSR />;

// Optional display name
ExperiencePage.displayName = "ExperiencePage";

export default ExperiencePage;