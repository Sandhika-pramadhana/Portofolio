'use client';

import { useRouter } from 'next/navigation';
import Navbar from '@/src/features/core/components/navbar';
import Footer from '@/src/features/core/components/footer';
import HomeSection from './components/home';
import ProjectSection from './components/project';
import ExperienceSection from './components/experience';

export default function Index() {
  const router = useRouter();

  const openCv = () => {
    window.open(
      '/cv/Sandhika%20Pramadhana%20_%20CV.pdf',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col transition-colors duration-300">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="page-transition mx-auto max-w-7xl px-6 pb-16 flex-1">
        {/* HOME */}
        <div className="fade-up [animation-delay:0ms] mb-12">
          <HomeSection
            onViewProjects={() => router.push('/Projects')}
            onViewWork={() => router.push('/Experience')}
            onViewCv={openCv}
            onViewCertificate={() => router.push('/Certificate')}
          />
        </div>

        {/* PROJECT */}
        <div
          id="projects"
          className="scroll-mt-24 fade-up [animation-delay:200ms] mb-12"
        >
          <ProjectSection />
        </div>

        {/* EXPERIENCE */}
        <div
          id="experience"
          className="scroll-mt-24 fade-up [animation-delay:400ms] mb-12"
        >
          <ExperienceSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}