'use client'
import dynamic from "next/dynamic";

// Dynamically import Wedding component with no SSR
const WeddingNoSSR = dynamic(() => import("@/src/features/page/WebPortofolio/projects/wedding-invitation"), {
  ssr: false,
});

// Component wrapper
const WeddingPage = () => <WeddingNoSSR />;

// Optional display name
WeddingPage.displayName = "WeddingPage";

export default WeddingPage;