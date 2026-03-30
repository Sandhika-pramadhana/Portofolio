'use client';

import Link from 'next/link';
import Navbar from '@/src/features/core/components/navbar';
import Footer from '@/src/features/core/components/footer';

type ExperienceItem = {
  period: string;
  company: string;
  role: string;
  website?: string;
  description?: string;
  bullets?: string[];
};

const experiences: ExperienceItem[] = [
  {
    period: 'FEB 2025 - FEB 2026',
    company: 'Pos Digital Indonesia',
    role: 'Fullstack Engineer',
    website: 'https://posdigi.co.id/id',
    description:
      'Developed the company profile website and built a CMS to help non-technical users manage website content more easily through CRUD operations without directly modifying the codebase. Also contributed to system quality improvements, security testing, and code maintenance.',
    bullets: [
      'Developed and maintained the company profile website.',
      'Built a CMS to help non-technical users perform CRUD operations on website content more easily.',
      'Improved content management workflow for internal teams.',
      'Performed static code analysis using SonarQube to identify code quality and security issues.',
      'Conducted basic penetration testing on internal web applications.',
      'Improved and secured codebase to mitigate vulnerabilities (e.g., input validation, secure coding practices).',
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="page-transition mx-auto max-w-7xl px-6 py-16 md:py-24">
        <section className="mx-auto max-w-4xl">
          <div className="mb-8">
            <Link
              href="/Projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              ← Back to projects
            </Link>
          </div>

          <h1
            style={{ animationDelay: '0ms', opacity: 0 }}
            className="mb-12 text-2xl font-semibold tracking-tight text-foreground md:text-3xl fade-up"
          >
            Experiences
          </h1>

          <div className="space-y-12">
            {experiences.map((item, index) => (
              <article
                key={`${item.company}-${index}`}
                style={{ animationDelay: `${(index + 1) * 150}ms`, opacity: 0 }}
                className={`pb-12 fade-up ${
                  index !== experiences.length - 1
                    ? 'border-b border-border'
                    : ''
                }`}
              >
                <div className="mb-5 flex items-center gap-3">
                  <p className="text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    {item.period}
                  </p>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    Website Project
                  </span>
                </div>

                <h2 className="text-xl font-bold text-foreground">
                  {item.company}
                </h2>

                <p className="mt-1 text-base font-semibold text-foreground">
                  {item.role}
                </p>

                {item.website && (
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.website}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}

                {item.description && (
                  <p className="mt-3 max-w-3xl text-[15px] leading-8 text-muted-foreground">
                    {item.description}
                  </p>
                )}

                {item.bullets && item.bullets.length > 0 && (
                  <ul className="mt-6 list-disc space-y-4 pl-5 text-[15px] leading-8 text-muted-foreground marker:text-muted-foreground">
                    {item.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}