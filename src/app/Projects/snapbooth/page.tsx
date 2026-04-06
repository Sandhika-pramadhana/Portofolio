'use client'
import dynamic from "next/dynamic";

// Dynamically import Snapbooth component with no SSR
const SnapboothNoSSR = dynamic(() => import("@/src/features/page/WebPortofolio/projects/snapbooth"), {
  ssr: false,
});

// Component wrapper
const SnapboothPage = () => <SnapboothNoSSR />;

// Optional display name
SnapboothPage.displayName = "SnapboothPage";

export default SnapboothPage;