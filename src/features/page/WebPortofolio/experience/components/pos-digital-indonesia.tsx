'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

const photos = [
  {
    src: '/dokumentasi/Posdigi.JPEG',
    alt: 'Dokumentasi kegiatan di Pos Digital Indonesia',
  },
  {
    src: '/dokumentasi/Posdigi2.JPEG',
    alt: 'Dokumentasi tambahan kegiatan di Pos Digital Indonesia',
  },
];

export default function PosDigitalIndonesia() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedPhoto, setSelectedPhoto] = useState(photos[0]);

  const openPhoto = (photo: (typeof photos)[number]) => {
    setSelectedPhoto(photo);
    dialogRef.current?.showModal();
  };

  const closePhoto = () => {
    dialogRef.current?.close();
  };

  return (
    <article className="fade-up pb-12">
      <p className="mb-5 text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">
        FEB 2025 - FEB 2026
      </p>

      <h2 className="text-xl font-bold text-foreground">
        Pos Digital Indonesia
      </h2>

      <p className="mt-1 text-base font-semibold text-foreground">
        Web Developer
      </p>

      <p className="mt-3 max-w-3xl text-[15px] leading-8 text-muted-foreground">
        Worked on SAP-based financial systems, dashboard modernization, data
        reconciliation, and company website development.
      </p>

      <ul className="mt-6 list-disc space-y-4 pl-5 text-[15px] leading-8 text-muted-foreground marker:text-muted-foreground">
        <li>
          Developed a system to extract, validate, and classify transaction data
          (revenue and COGS) from the company database and upload it directly to
          SAP ERP, eliminating manual data entry for the accounting team.
        </li>

        <li>
          Conducted monthly reconciliation with the accounting team to compare
          system-generated figures against accounting records, ensuring data
          accuracy and resolving discrepancies.
        </li>

        <li>
          Worked on migrating the SAP system from PHP to Next.js by rebuilding
          the dashboard, making it easier for users to review financial data
          without relying on direct database queries.
        </li>

        <li>
          Helped with static analysis to identify code issues and improve web
          application security.
        </li>

        <li>Assisted in developing and maintaining company websites.</li>
      </ul>

      <div className="mt-6 flex flex-wrap gap-3">
        {photos.map((photo) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => openPhoto(photo)}
            aria-label={`Buka foto: ${photo.alt}`}
            aria-haspopup="dialog"
            className="group relative h-[120px] w-[160px] cursor-zoom-in overflow-hidden rounded-md border border-border bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="160px"
              className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
              <span className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>

                View Image
              </span>
            </div>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Preview dokumentasi Pos Digital Indonesia"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closePhoto();
          }
        }}
        className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none border-0 bg-transparent p-4 backdrop:bg-black/80 md:p-8"
      >
        <div className="pointer-events-none flex h-full w-full items-center justify-center">
          <div className="pointer-events-auto flex w-full max-w-5xl flex-col overflow-hidden rounded-lg bg-background text-foreground">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <p className="truncate text-sm font-medium text-muted-foreground">
                {selectedPhoto.alt}
              </p>

              <button
                type="button"
                onClick={closePhoto}
                className="rounded-sm px-3 py-2 text-sm font-medium hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
              >
                Tutup
              </button>
            </div>

            <div className="relative h-[65dvh] w-full md:h-[75dvh]">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </dialog>
    </article>
  );
}