'use client';

import Navbar from '@/src/features/core/components/navbar';
import Footer from '@/src/features/core/components/footer';

type ExperienceItem = {
  period: string;
  company: string;
  role: string;
  description?: string;
  bullets?: string[];
};

const experiences: ExperienceItem[] = [
  {
    period: 'FEB 2025 - FEB 2026',
    company: 'Pos Digital Indonesia',
    role: 'Fullstack Engineer',
    description:
      'Maintained and enhanced SAP-based systems by integrating legacy PHP applications into a modern Next.js financial dashboard for revenue and COGS tracking across agent and B2B channels, generating monthly business reports. Also contributed to the development of the company profile website and CMS, including performing security testing and code improvements.',
    bullets: [
      'Migrated and modernized legacy PHP system into Next.js.',
      'Built ERP-based financial dashboard to monitor revenue and COGS (Agen vs B2B).',
      'Generated monthly financial reports for business analysis.',
      'Developed company website and CMS system.',
      'Performed static code analysis using SonarQube to identify code quality and security issues.',
      'Conducted basic penetration testing on internal web applications.',
      'Improved and secured codebase to mitigate vulnerabilities (e.g., input validation, secure coding practices).',
    ],
  },
  {
    period: 'APR 2023 - JUL 2023',
    company: 'Telus International',
    role: 'AI Community Surfer (Freelance)',
    bullets: [
      'Assisted Microsoft in improving machine learning models through data analysis and feedback.',
      'Evaluated search engine results for relevance and accuracy based on user queries.',
      'Performed data labeling, tagging, and categorization to enhance ML model performance.',
      'Collaborated remotely to support continuous model improvement and meet project deadlines.',
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <section className="mx-auto max-w-4xl">
          
          {/* TITLE */}
          <h1 className="mb-12 text-2xl font-semibold tracking-tight text-neutral-950 md:text-3xl fade-up">
            Experiences
          </h1>

          {/* LIST */}
          <div className="space-y-12">
            {experiences.map((item, index) => (
              <article
                key={`${item.company}-${index}`}
                className={`pb-12 fade-up [animation-delay:${index * 150}ms] ${
                  index !== experiences.length - 1
                    ? 'border-b border-neutral-200'
                    : ''
                }`}
              >
                <p className="mb-5 text-sm font-medium uppercase tracking-[0.12em] text-neutral-500">
                  {item.period}
                </p>

                <h2 className="text-xl font-bold text-neutral-950">
                  {item.company}
                </h2>

                <p className="mt-1 text-base font-semibold text-neutral-900">
                  {item.role}
                </p>

                {item.description && (
                  <p className="mt-3 max-w-3xl text-[15px] leading-8 text-neutral-700">
                    {item.description}
                  </p>
                )}

                {item.bullets && item.bullets.length > 0 && (
                  <ul className="mt-6 space-y-4 pl-5 text-[15px] leading-8 text-neutral-700 marker:text-neutral-300 list-disc">
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

      < Footer />
    </div>
  );
}