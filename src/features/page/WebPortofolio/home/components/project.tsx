'use client';

import { Badge } from '@/src/features/core/components/ui/badge';

const developmentSkills = [
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'React.js' },
  { name: 'Next.js' },
  { name: 'Python' },
  { name: 'PostgreSQL' },
  { name: 'MySQL' },
  { name: 'Tailwind' },
  { name: 'Docker' },
  { name: 'DBeaver' },
];

const securitySkills = [
  { name: 'Burp Suite' },
  { name: 'OWASP ZAP' },
  { name: 'SonarQube' },
  { name: 'Nessus' },
  { name: 'OpenVAS' },
  { name: 'OWASP Top 10' },
  { name: 'API Security' },
  { name: 'Network Security' },
  { name: 'Web Application Security' },
  { name: 'Mobile Security' },
];

export default function Project() {
  return (
    <section className="mb-24">
      <h3 className="mb-10 text-2xl font-bold text-foreground md:text-3xl">
        Tech Skills
      </h3>

      <div className="mb-14">
        <h4 className="mb-4 text-lg font-semibold text-foreground">
          Web Development
        </h4>

        <div className="flex flex-wrap gap-3">
          {developmentSkills.map((skill) => (
            <Badge
              key={skill.name}
              variant="outline"
              className="px-4 py-2 text-sm font-medium border-border hover:border-foreground hover:bg-muted transition-colors"
            >
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-4 text-lg font-semibold text-foreground">
          Security
        </h4>

        <div className="flex flex-wrap gap-3">
          {securitySkills.map((skill) => (
            <Badge
              key={skill.name}
              variant="outline"
              className="px-4 py-2 text-sm font-medium border-border hover:border-foreground hover:bg-muted transition-colors"
            >
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}