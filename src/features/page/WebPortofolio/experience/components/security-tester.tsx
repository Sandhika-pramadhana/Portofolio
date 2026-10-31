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
          Identified and validated 10 vulnerabilities across web applications through bug bounty platforms and self-hosted programs, covering OWASP Top 10 categories including Broken Access Control, Injection, Security Misconfiguration, and Authentication Failures.
          </li>
          <li>
          Performed end-to-end testing workflow: scope analysis, reconnaissance and attack surface mapping, vulnerability validation, and controlled exploitation to confirm real-world impact. Rated each finding’s severity using CVSS v3.1 to prioritize remediation
          </li>
          <li>
          Retested remediated vulnerabilities using the original PoC steps to confirm the issues were fully resolved.
          </li>
          <li>
          Authored technical reports with step-by-step reproduction, evidence (PoC/screenshots), impact analysis, and remediation recommendations aligned with the OWASP Top 10.
          </li>
        </ul>
      </article>
    );
  }