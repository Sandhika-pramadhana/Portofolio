'use client';

import Link from 'next/link';
import Navbar from '@/src/features/core/components/navbar';
import Footer from '@/src/features/core/components/footer';

export default function WeddingInvitationProjectPage() {
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
            Wedding Invitation
          </h1>

          <p className="max-w-3xl text-base leading-7 text-muted-foreground">
            A web-based digital wedding invitation with elegant animations and
            RSVP functionality. The system provides a beautiful and interactive
            experience for guests, replacing traditional printed invitations
            with a modern and shareable web interface built with Next.js.
          </p>
        </div>

        {/* Live Demo Button */}
        <div className="mb-10">
          <a
            href="https://invitation-wedding-jet.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold underline hover:opacity-70"
          >
            View Live Demo → https://invitation-wedding-jet.vercel.app/
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
            The application was developed as a personal project to create a more
            meaningful and eco-friendly alternative to printed wedding
            invitations. Digital invitations are easier to distribute, more
            cost-effective, and allow for interactive features such as RSVP
            forms and countdown timers that traditional paper invitations cannot
            offer.
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
                1. Elegant Animations
              </h3>
              <p>
                Smooth and elegant entrance animations to create a memorable
                first impression when guests open the invitation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground">
                2. RSVP Form
              </h3>
              <p>
                An integrated RSVP form that allows guests to confirm their
                attendance directly from the invitation page without any
                third-party service.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground">
                3. Countdown Timer
              </h3>
              <p>
                A live countdown timer displaying the days, hours, and minutes
                remaining until the wedding day to build excitement for guests.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground">
                4. Google Maps Integration
              </h3>
              <p>
                Embedded map with the venue location to help guests easily find
                and navigate to the wedding venue.
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