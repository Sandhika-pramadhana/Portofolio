'use client';

import Link from 'next/link';

export default function Experience() {
  return (
    <section className="mb-24">
      <div className="mb-8 flex items-center justify-between gap-4">
        <h3 className="text-2xl font-bold text-foreground md:text-3xl">
          Experiences
        </h3>

        <Link
          href="/Experience"
          className="shrink-0 text-sm font-semibold text-foreground underline underline-offset-4"
        >
          View all experiences
        </Link>
      </div>

      <div className="space-y-4">
        <div className="rounded-xl border border-border p-6">
          <h4 className="text-lg font-semibold text-foreground">
            Security Tester
          </h4>

          <p className="mt-1 text-sm text-muted-foreground">
            Independent · Aug 2026 – Present
          </p>

          <p className="mt-3 text-muted-foreground">
            Discovered and reported 10 vulnerabilities through bug bounty
            platforms and self-hosted programs, and wrote reports with
            reproduction steps, impact analysis, and remediation referencing
            the OWASP Top 10.
          </p>

          <Link
            href="/Experience"
            className="mt-4 inline-flex text-sm font-semibold text-foreground underline underline-offset-4"
          >
            View details
          </Link>
        </div>

        <div className="rounded-xl border border-border p-6">
          <h4 className="text-lg font-semibold text-foreground">
            Web Developer
          </h4>

          <p className="mt-1 text-sm text-muted-foreground">
            Pos Digital Indonesia · Feb 2025 – Feb 2026
          </p>

          <p className="mt-3 text-muted-foreground">
            Worked on SAP-based financial systems, dashboard modernization,
            data reconciliation, and company website development.
          </p>

          <Link
            href="/Experience"
            className="mt-4 inline-flex text-sm font-semibold text-foreground underline underline-offset-4"
          >
            View details
          </Link>
        </div>
      </div>
    </section>
  );
}