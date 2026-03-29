'use client'
import dynamic from "next/dynamic";

// Dynamically import Projects component with no SSR
const ProjectsNoSSR = dynamic(() => import("@/src/features/page/WebPortofolio/projects"), {
  ssr: false,
});

// Component wrapper
const ProjectsPage = () => <ProjectsNoSSR />;

// Optional display name
ProjectsPage.displayName = "ProjectsPage";

export default ProjectsPage;