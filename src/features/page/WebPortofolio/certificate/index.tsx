'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/src/features/core/components/navbar';
import Footer from '@/src/features/core/components/footer';
import { Card, CardContent } from '@/src/features/core/components/ui/card';

const certificates = [
  {
    title: 'Vulnerability Disclosure Program',
    issuer: 'NASA',
    date: '2026',
    image: '/certifacate/VDP_NASA.png',
  },
  {
    title: 'Responsible Disclosure',
    issuer: 'BMKG Institution',
    date: '2026',
    image: '/certifacate/BMKG.jpg',
  },
  {
    title: 'Certified Ethical Hacker (CEH)',
    issuer: 'Course Net',
    date: '2025',
    image: '/certifacate/CEH.png',
  },
  {
    title: 'Responsible Disclosure',
    issuer: 'Institut Teknologi Bandung (ITB)',
    date: '2025',
    image: '/certifacate/ITB.jpeg',
  },
  {
    title: 'Responsible Disclosure',
    issuer: 'Magelang Institution',
    date: '2025',
    image: '/certifacate/MAGELANG.png',
  },
  {
    title: 'Programming',
    issuer: 'Binus Center',
    date: '2024',
    image: '/certifacate/Binus.png',
  },
];

export default function CertificatePage() {
  const [selectedCert, setSelectedCert] = useState<
    (typeof certificates)[number] | null
  >(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <section className="space-y-10 md:space-y-14">
          <div className="max-w-3xl space-y-4 fade-up">
            <span className="inline-flex rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Certifications
            </span>

            <div className="space-y-3">
              <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                Certificate
              </h1>

              <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                A selection of certifications, technical training, and learning
                milestones that support my work in cybersecurity and web
                development.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {certificates.map((cert, index) => (
              <Card
                key={`${cert.title}-${cert.issuer}`}
                className={`group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg fade-up [animation-delay:${index * 150}ms]`}
                onClick={() => setSelectedCert(cert)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                    <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-black">
                      View Certificate
                    </span>
                  </div>
                </div>

                <CardContent className="space-y-4 p-5">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                        {cert.date}
                      </span>

                      <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                        Verified
                      </span>
                    </div>

                    <h2 className="text-lg font-semibold leading-snug text-foreground md:text-xl">
                      {cert.title}
                    </h2>

                    <p className="text-sm leading-6 text-muted-foreground">
                      Issued by {cert.issuer}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-background shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
              aria-label="Close certificate"
            >
              ✕
            </button>

            <div className="relative aspect-[4/3] w-full bg-muted">
              <Image
                src={selectedCert.image}
                alt={selectedCert.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="space-y-1 p-5">
              <h2 className="text-lg font-semibold text-foreground md:text-xl">
                {selectedCert.title}
              </h2>

              <p className="text-sm text-muted-foreground">
                Issued by {selectedCert.issuer} · {selectedCert.date}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}