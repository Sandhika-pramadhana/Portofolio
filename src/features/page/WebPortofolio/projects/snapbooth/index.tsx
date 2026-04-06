'use client';

import Link from 'next/link';
import Navbar from '@/src/features/core/components/navbar';
import Footer from '@/src/features/core/components/footer';

export default function SnapboothProjectPage() {
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
            Snapbooth
          </h1>

          <p className="max-w-3xl text-base leading-7 text-muted-foreground">
            A web-based snapbooth application for capturing and sharing photos
            with fun filters and frames. The system provides an interactive
            photo-taking experience and supports instant sharing through a
            modern and responsive interface built with Next.js.
          </p>
        </div>

        {/* LIVE DEMO */}
        <div className="mb-10">
          <a
            href="https://snapbooth-nine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold underline hover:opacity-70"
          >
            View Live Demo → https://snapbooth-nine.vercel.app/
          </a>
        </div>

        {/* BACKGROUND */}
        <section
          style={{ animationDelay: '150ms', opacity: 0 }}
          className="mb-10 fade-up"
        >
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Background
          </h2>
          <p className="leading-7 text-muted-foreground">
            The application was developed as a personal project to explore
            browser-based camera interactions and real-time image processing.
            Previously, snapbooth experiences were limited to dedicated hardware,
            making them inaccessible for casual events. This project brings that
            experience to the web in a lightweight and shareable format.
          </p>
        </section>

        {/* FEATURES */}
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
                1. Camera Capture
              </h3>
              <p>
                Access the device camera directly from the browser to take
                photos in real time without any additional software.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground">
                2. Filters & Frames
              </h3>
              <p>
                Apply various fun filters and decorative frames to captured
                photos to enhance the snapbooth experience.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground">
                3. Photo Strip Layout
              </h3>
              <p>
                Automatically arrange multiple captured photos into a classic
                photo strip layout ready for download or sharing.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground">
                4. Instant Download
              </h3>
              <p>
                Download the final photo strip directly from the browser with a
                single click, no account or login required.
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
            {['Next.js', 'Tailwind CSS'].map((tech) => (
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