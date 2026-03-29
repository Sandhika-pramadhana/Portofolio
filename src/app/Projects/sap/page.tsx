'use client'
import dynamic from "next/dynamic";

// Dynamically import Sap component with no SSR
const SapNoSSR = dynamic(() => import("@/src/features/page/WebPortofolio/projects/sap"), {
  ssr: false,
});

// Component wrapper
const SapPage = () => <SapNoSSR />;

// Optional display name
SapPage.displayName = "SapPage";

export default SapPage;