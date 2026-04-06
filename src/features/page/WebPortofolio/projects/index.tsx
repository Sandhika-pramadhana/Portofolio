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
  category: 'personal' | 'professional';
};

type FilterType = 'all' | 'personal' | 'professional';

const projects: ProjectItem[] = [
  {
    title: 'Financial Dashboard (SAP-based)',
    role: 'Fullstack Developer',
    period: '2025',
    description:
      'Developed a financial dashboard integrated with SAP to monitor revenue and COGS across agent and B2B channels.',
    tech: ['Next.js', 'TypeScript', 'SAP', 'PHP'],
    slug: 'sap',
    category: 'professional',
  },
  {
    title: 'Company Profile Website & CMS',
    role: 'Fullstack Developer',
    period: '2025',
    description:
      'Built a company profile website with CMS for dynamic content management.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'CMS'],
    slug: 'company-website',
    category: 'professional',
  },
  {
    title: 'Snapbooth',
    role: 'Frontend Developer',
    period: '2024',
    description:
      'Built a snapbooth web application for capturing and sharing photos with fun filters and frames.',
    tech: ['Next.js', 'Tailwind CSS'],
    slug: 'snapbooth',
    category: 'personal',
  },
  {
    title: 'Wedding Invitation',
    role: 'Frontend Developer',
    period: '2024',
    description:
      'Developed a digital wedding invitation with elegant animations and RSVP functionality.',
    tech: ['Next.js', 'Tailwind CSS'],
    slug: 'wedding-invitation',
    category: 'personal',
  },
];

const ITEMS_PER_PAGE: number = 5;

const filterOptions: { label: string; value: FilterType }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Personal Projects', value: 'personal' },
  { label: 'Professional Projects', value: 'professional' },
];

export default function ProjectsPage() {
  const [page, setPage] = useState<number>(1);
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  const currentProjects = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return filteredProjects.slice(start, end);
  }, [page, filteredProjects]);

  const startItem =
    filteredProjects.length === 0 ? 0 : (page - 1) * ITEMS_PER_PAGE + 1;
  const endItem = Math.min(page * ITEMS_PER_PAGE, filteredProjects.length);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <section className="mx-auto max-w-6xl">
          {/* Layout: Sidebar + Content */}
          <div className="flex flex-col gap-10 md:flex-row">
            {/* Sidebar Filter */}
            <div className="w-full md:w-60 md:mt-[85px]">
            <p className="mb-4 text-sm font-semibold">Filter Projects</p>
              <div className="flex flex-col gap-3 text-sm">
                {filterOptions.map((item) => (
                  <label
                    key={item.value}
                    className="flex cursor-pointer items-center gap-2"
                  >
                    <input
                      type="radio"
                      checked={filter === item.value}
                      onChange={() => {
                        setFilter(item.value);
                        setPage(1);
                      }}
                    />
                    {item.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Title */}
              <div className="mb-12">
                <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Projects
                </h1>
              </div>

              {/* List */}
              <div className="space-y-12">
                {currentProjects.map((project, index) => (
                  <article
                    key={`${project.slug}-${index}`}
                    className={`pb-12 ${
                      index !== currentProjects.length - 1
                        ? 'border-b border-border'
                        : ''
                    }`}
                  >
                    <p className="mb-3 text-sm uppercase text-muted-foreground">
                      {project.period}
                    </p>
                    <h2 className="text-xl font-bold">{project.title}</h2>
                    <p className="mt-1 font-semibold">{project.role}</p>
                    <p className="mt-3 text-[15px] leading-7 text-muted-foreground">
                      {project.description}
                    </p>
                    {/* Tech */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border px-3 py-1 text-xs"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    {/* Detail */}
                    <Link
                      href={`/Projects/${project.slug}`}
                      className="mt-4 inline-flex text-sm font-semibold underline"
                    >
                      View details
                    </Link>
                  </article>
                ))}
              </div>

              {/* Empty State */}
              {currentProjects.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  No projects found.
                </p>
              )}

              {/* Pagination */}
              {filteredProjects.length > 0 && (
                <div className="mt-14 flex flex-col gap-4 border-t pt-6 md:flex-row md:items-center md:justify-between">
                  <div className="text-sm text-muted-foreground">
                    Showing {startItem}-{endItem} of {filteredProjects.length}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                      disabled={page === 1}
                      className="border px-4 py-2 text-sm disabled:opacity-40"
                    >
                      Prev
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (pageNumber) => (
                        <button
                          key={pageNumber}
                          onClick={() => setPage(pageNumber)}
                          className={`px-3 py-2 text-sm ${
                            page === pageNumber
                              ? 'bg-black text-white'
                              : 'border'
                          }`}
                        >
                          {pageNumber}
                        </button>
                      )
                    )}
                    <button
                      onClick={() =>
                        setPage((prev) => Math.min(prev + 1, totalPages))
                      }
                      disabled={page === totalPages}
                      className="border px-4 py-2 text-sm disabled:opacity-40"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}