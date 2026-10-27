import Image from 'next/image';

export default function PosDigitalIndonesia() {
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
        <div className="relative h-[120px] w-[160px] overflow-hidden rounded-md border border-border bg-muted">
          <Image
            src="/dokumentasi/Posdigi.JPEG"
            alt="Dokumentasi kegiatan di Pos Digital Indonesia"
            fill
            sizes="160px"
            className="object-contain"
          />
        </div>

        <div className="relative h-[120px] w-[160px] overflow-hidden rounded-md border border-border bg-muted">
          <Image
            src="/dokumentasi/Posdigi2.JPEG"
            alt="Dokumentasi tambahan kegiatan di Pos Digital Indonesia"
            fill
            sizes="160px"
            className="object-contain"
          />
        </div>
      </div>
    </article>
  );
}