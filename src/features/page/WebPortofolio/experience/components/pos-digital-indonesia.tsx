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
    <article className="pb-12 fade-up">
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

      <ul className="mt-6 space-y-4 pl-5 text-[15px] leading-8 text-muted-foreground marker:text-muted-foreground list-disc">
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
            className="relative h-[120px] w-[160px] cursor-zoom-in overflow-hidden rounded-md border border-border bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="160px"
              className="object-contain"
            />
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
        <div className="flex h-full w-full items-center justify-center pointer-events-none">
          <div className="pointer-events-auto flex w-full max-w-5xl flex-col overflow-hidden rounded-lg bg-background text-foreground">
            <div className="flex justify-end border-b border-border px-4 py-3">
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