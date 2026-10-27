'use client';

import Navbar from '@/src/features/core/components/navbar';
import Footer from '@/src/features/core/components/footer';
import PosDigitalIndonesia from '@/src/features/page/WebPortofolio/experience/components/pos-digital-indonesia';
import TelusInternational from '@/src/features/page/WebPortofolio/experience/components/telus-international';
import SecurityTester from '@/src/features/page/WebPortofolio/experience/components/security-tester';

export default function ExperiencePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-16 md:py-24">
        <section className="mx-auto max-w-4xl">
          <h1 className="mb-12 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Experiences
          </h1>

          <div className="flex flex-col gap-8">
            <div className="rounded-lg border border-border p-6 md:p-8 [&>article]:my-0 [&>article]:py-0">
              <SecurityTester />
            </div>

            <div className="rounded-lg border border-border p-6 md:p-8 [&>article]:my-0 [&>article]:py-0">
              <PosDigitalIndonesia />
            </div>

            <div className="rounded-lg border border-border p-6 md:p-8 [&>article]:my-0 [&>article]:py-0">
              <TelusInternational />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}