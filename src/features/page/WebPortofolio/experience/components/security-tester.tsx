export default function SecurityTester() {
    return (
      <article className="fade-up">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">
          AUG 2026 - PRESENT
        </p>
  
        <h2 className="text-xl font-bold text-foreground">Security Tester</h2>
  
        <p className="mt-1 text-base font-semibold text-foreground">Independent</p>
  
        <ul className="mt-6 space-y-4 pl-5 text-[15px] leading-8 text-muted-foreground marker:text-muted-foreground list-disc">
          <li>
            Discovered and reported 10 vulnerabilities through bug bounty
            platforms and self-hosted programs across OWASP Top 10 categories,
            including Broken Access Control, Injection, Security
            Misconfiguration, and Authentication Failures.
          </li>
          <li>
            Wrote reports with reproduction steps, impact analysis, and
            remediation referencing the OWASP Top 10.
          </li>
        </ul>
      </article>
    );
  }