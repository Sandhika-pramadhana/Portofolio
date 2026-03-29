'use client';

import Image from 'next/image';
import Navbar from '@/src/features/core/components/navbar';
import Footer from '@/src/features/core/components/footer';
import { Card, CardContent } from '@/src/features/core/components/ui/card';

const certificates = [
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
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <section className="space-y-10 md:space-y-14">

          {/* HEADER */}
          <div className="max-w-3xl space-y-4 fade-up">
            <span className="inline-flex rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
              Certifications
            </span>

            <div className="space-y-3">
              <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
                Certificate
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-neutral-600 md:text-base">
                A selection of certifications, technical training, and learning milestones
                that support my work in cybersecurity and web development.
              </p>
            </div>
          </div>

          {/* GRID */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {certificates.map((cert, index) => (
              <Card
                key={index}
                className={`group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg fade-up [animation-delay:${index * 150}ms]`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <CardContent className="space-y-4 p-5">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
                        {cert.date}
                      </span>
                      <span className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
                        Verified
                      </span>
                    </div>

                    <h2 className="text-lg font-semibold leading-snug text-neutral-950 md:text-xl">
                      {cert.title}
                    </h2>

                    <p className="text-sm leading-6 text-neutral-600">
                      Issued by {cert.issuer}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      < Footer />
    </div>
  );
}