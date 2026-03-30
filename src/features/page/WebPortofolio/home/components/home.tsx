'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/src/features/core/components/ui/button';
import { FileText, Briefcase, Award, FolderGit2 } from 'lucide-react';
import Footer from '@/src/features/core/components/lanyard';

type HomeProps = {
  onViewProjects?: () => void;
  onViewWork?: () => void;
  onViewCv?: () => void;
  onViewCertificate?: () => void;
};

export default function Home({
  onViewProjects,
  onViewWork,
  onViewCv,
  onViewCertificate,
}: HomeProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1028);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="mb-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Kolom kiri: konten teks */}
        <div className="max-w-4xl space-y-6">
          <h1 className="text-xl font-medium text-neutral-600 md:text-2xl">
            Sandhika Pramadhana
          </h1>
          <h2 className="text-4xl font-bold leading-tight text-black md:text-6xl lg:text-7xl">
            FULLSTACK & CYBER SECURITY
            <br />
            ENGINEER
          </h2>
          <p className="text-lg text-neutral-600 md:text-xl">
            Full-stack developer and pentester
          </p>
          <p className="max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg">
            Full-stack developer and penetration tester focused on building secure digital
            products, assessing web application security, and identifying vulnerabilities
            before they can be exploited.
          </p>

          {/* Lanyard hanya tampil di mobile */}
          {isMobile && (
            <div className="w-full h-[400px] mt-8">
              <Footer />
            </div>
          )}

          <div className="mt-12 flex flex-wrap gap-4">
            <Button variant="outline" size="lg" className="rounded-full" onClick={onViewProjects}>
              <FolderGit2 className="mr-2 h-4 w-4" />
              View my Projects
            </Button>
            <Button variant="outline" size="lg" className="rounded-full" onClick={onViewWork}>
              <Briefcase className="mr-2 h-4 w-4" />
              View my work
            </Button>
            <Button variant="outline" size="lg" className="rounded-full" onClick={onViewCv}>
              <FileText className="mr-2 h-4 w-4" />
              View my CV
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full"
              onClick={onViewCertificate}
            >
              <Award className="mr-2 h-4 w-4" />
              View my certificate
            </Button>
          </div>
        </div>

        {/* Kolom kanan hanya tampil di desktop */}
        <div className="hidden lg:flex justify-center lg:justify-end h-[600px]">
          <Footer />
        </div>
      </div>
    </section>
  );
}