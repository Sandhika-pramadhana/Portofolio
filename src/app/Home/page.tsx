'use client'
import dynamic from "next/dynamic";

// Dynamically import WebPortofolio component with no SSR
const WebPortofolioNoSSR = dynamic(() => import("@/src/features/page/WebPortofolio/home"), {
  ssr: false,
});

// Component wrapper
const WebPortofolioPage = () => <WebPortofolioNoSSR />;

// Optional display name
WebPortofolioPage.displayName = "WebPortofolioPage";

export default WebPortofolioPage;