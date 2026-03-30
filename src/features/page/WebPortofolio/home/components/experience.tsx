'use client';
import Link from 'next/link';

export default function Experience() {
  return (
    <section className="mb-24">
      <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
        Experiences
      </h3>
      <div className="space-y-4">
        {/* POS DIGI */}
        <div className="border border-border rounded-xl p-6">
          <h4 className="text-lg font-semibold text-foreground">
            Fullstack Engineer
          </h4>
          <p className="text-muted-foreground text-sm mt-1">
            Pos Digital Indonesia • 2025 - 2026
          </p>
          <p className="text-muted-foreground mt-3">
            Developed ERP-based financial dashboard integrated with SAP to monitor
            revenue and COGS (Agen & B2B), while also contributing to company website,
            CMS, and improving application security through testing and code hardening.
          </p>
          <Link
            href="/Experience"
            className="mt-4 inline-flex text-sm font-semibold text-foreground underline underline-offset-4"
          >
            View details
          </Link>
        </div>
        {/* TELUS */}
        <div className="border border-border rounded-xl p-6">
          <h4 className="text-lg font-semibold text-foreground">
            AI Community Surfer
          </h4>
          <p className="text-muted-foreground text-sm mt-1">
            Telus International • 2023
          </p>
          <p className="text-muted-foreground mt-3">
            Supported machine learning improvement by evaluating search results,
            performing data labeling, and ensuring relevance and accuracy of AI models.
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