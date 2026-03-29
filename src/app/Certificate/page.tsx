'use client'
import dynamic from "next/dynamic";

// Dynamically import Certificate component with no SSR
const CertificateNoSSR = dynamic(() => import("@/src/features/page/WebPortofolio/certificate"), {
  ssr: false,
});

// Component wrapper
const CertificatePage = () => <CertificateNoSSR />;

// Optional display name
CertificatePage.displayName = "CertificatePage";

export default CertificatePage;