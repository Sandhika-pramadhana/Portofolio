'use client'
import dynamic from "next/dynamic";

// Dynamically import Company component with no SSR
const CompanyNoSSR = dynamic(() => import("@/src/features/page/WebPortofolio/projects/company"), {
  ssr: false,
});

// Component wrapper
const CompanyPage = () => <CompanyNoSSR />;

// Optional display name
CompanyPage.displayName = "CompanyPage";

export default CompanyPage;