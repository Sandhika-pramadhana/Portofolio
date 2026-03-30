'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/src/features/core/components/navbar';
import Footer from '@/src/features/core/components/footer';

type ProjectItem = {
  title: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
  slug: string;
};

const projects: ProjectItem[] = [
  {
    title: 'Financial Dashboard (SAP-based)',
    role: 'Fullstack Developer',
    period: '2025',
    description:
      'Developed a financial dashboard integrated with SAP to monitor revenue and COGS across agent and B2B channels, generating monthly reports for business analysis.',
    tech: ['Next.js', 'TypeScript', 'SAP', 'PHP'],
    slug: 'sap',
  },
  {
    title: 'Company Profile Website & CMS',
    role: 'Fullstack Developer',
    period: '2025',
    description:
      'Built a company profile website along with a CMS to manage content dynamically, enabling non-technical users to update pages and information efficiently.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'CMS'],
    slug: 'company-website',
  },
];

const ITEMS_PER_PAGE = 5;

export default function ProjectsPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const currentProjects = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return projects.slice(start, end);
  }, [page]);

  const startItem = (page - 1) * ITEMS_PER_PAGE + 1;
  const endItem = Math.min(page * ITEMS_PER_PAGE, projects.length);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <section className="mx-auto max-w-4xl">
          {/* Title */}
          <div className="mb-12 fade-up">
            <h1 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Projects
            </h1>
          </div>

          {/* List */}
          <div className="space-y-12">
            {currentProjects.map((project, index) => (
              <article
                key={`${project.slug}-${index}`}
                className={`fade-up pb-12 ${
                  index !== currentProjects.length - 1
                    ? 'border-b border-border'
                    : ''
                }`}
              >
                <p className="mb-5 text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">
                  {project.period}
                </p>
                <h2 className="text-xl font-bold text-foreground">
                  {project.title}
                </h2>
                <p className="mt-1 text-base font-semibold text-foreground">
                  {project.role}
                </p>
                <p className="mt-3 max-w-3xl text-[15px] leading-8 text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* View Detail */}
                <Link
                  href={`/Projects/${project.slug}`}
                  className="mt-5 inline-flex text-sm font-semibold text-foreground underline underline-offset-4"
                >
                  View details
                </Link>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 md:flex-row md:items-center md:justify-between fade-up">
            <div className="text-sm text-muted-foreground">
              Showing {startItem}-{endItem} of {projects.length}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
                className="rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground disabled:opacity-40"
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => setPage(pageNumber)}
                    className={`h-10 min-w-10 rounded-full px-3 text-sm font-semibold ${
                      page === pageNumber
                        ? 'bg-foreground text-background'
                        : 'border border-border text-muted-foreground'
                    }`}
                  >
                    {pageNumber}
                  </button>
                )
              )}
              <button
                onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={page === totalPages}
                className="rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}