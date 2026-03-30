'use client';

import Link from 'next/link';
import Navbar from '@/src/features/core/components/navbar';
import Footer from '@/src/features/core/components/footer';

export default function SapProjectPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        {/* BACK */}
        <Link
          href="/Projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          ← Back to projects
        </Link>

        {/* HEADER */}
        <div
          style={{ animationDelay: '0ms', opacity: 0 }}
          className="mb-10 space-y-4 fade-up"
        >
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>2025</span>
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
              Website Project
            </span>
          </div>

          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            SAP Financial Dashboard (Agen & B2B)
          </h1>

          <p className="max-w-3xl text-base leading-7 text-muted-foreground">
            A web-based financial dashboard integrated with SAP to monitor
            revenue and COGS across agent and B2B channels. The system provides
            monthly reporting and supports business analysis through a modern
            and scalable interface built with Next.js.
          </p>
        </div>

        {/* LATAR BELAKANG */}
        <section
          style={{ animationDelay: '150ms', opacity: 0 }}
          className="mb-10 fade-up"
        >
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Background
          </h2>
          <p className="leading-7 text-muted-foreground">
            The system was developed to support financial monitoring within an
            enterprise environment where revenue streams come from multiple
            channels, including agent-based services and B2B partnerships.
            Previously, reporting was handled manually, making it inefficient
            and prone to errors.
          </p>
        </section>

        {/* FITUR */}
        <section
          style={{ animationDelay: '300ms', opacity: 0 }}
          className="mb-10 fade-up"
        >
          <h2 className="mb-5 text-xl font-semibold text-foreground">
            Key Features
          </h2>

          <div className="space-y-6 text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground">
                1. Revenue & COGS Tracking
              </h3>
              <p>
                Monitor financial performance across agent and B2B channels in a
                centralized dashboard.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground">
                2. Monthly Financial Reporting
              </h3>
              <p>
                Generate structured monthly reports to support business
                decision-making.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground">
                3. SAP Integration
              </h3>
              <p>
                Integrated with SAP-based systems to retrieve and process
                financial data efficiently.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground">
                4. Secure Code & Testing
              </h3>
              <p>
                Performed static analysis using SonarQube and basic penetration
                testing to improve code quality and security.
              </p>
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section
          style={{ animationDelay: '450ms', opacity: 0 }}
          className="mb-10 fade-up"
        >
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-2">
            {['Next.js', 'TypeScript', 'SAP', 'PHP', 'SonarQube'].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}