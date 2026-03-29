'use client';

import Link from 'next/link';
import { Badge } from '@/src/features/core/components/ui/badge';

const fullstackSkills = [
  { name: 'JavaScript', icon: '📦' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'React.js', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Node.js', icon: '💚' },
  { name: 'Python', icon: '🐍' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MySQL', icon: '🐬' },
  { name: 'Google Cloud', icon: '☁️' },
  { name: 'Tailwind', icon: '🎨' },
  { name: 'Docker', icon: '🐳' },
  { name: 'DBeaver', icon: '🗄️' },
];

const securitySkills = [
  { name: 'Burp Suite', icon: '🛡️' },
  { name: 'OWASP ZAP', icon: '⚡' },
  { name: 'SonarQube', icon: '🔍' },
  { name: 'Nessus', icon: '🧠' },
  { name: 'OpenVAS', icon: '🧪' },
];

const projects = [
  {
    title: 'Financial Dashboard (SAP-based)',
    description:
      'Dashboard for monitoring revenue & COGS across agent and B2B channels.',
    href: '/Projects/sap',
  },
  {
    title: 'Company Profile Website & CMS',
    description:
      'Company website integrated with CMS for dynamic content management.',
    href: '/Projects/company-website',
  },
];

export default function Project() {
  return (
    <section className="mb-24">
      {/* TECH SKILLS */}
      <h3 className="text-2xl md:text-3xl font-bold mb-10 text-black">
        Tech Skills
      </h3>

      {/* FULLSTACK */}
      <div className="mb-14">
        <h4 className="text-lg font-semibold text-neutral-800 mb-4">
          Fullstack
        </h4>

        <div className="flex flex-wrap gap-3">
          {fullstackSkills.map((skill) => (
            <Badge
              key={skill.name}
              variant="outline"
              className="px-4 py-2 text-sm font-medium border-neutral-300 hover:border-black hover:bg-neutral-50 transition-colors"
            >
              <span className="mr-2">{skill.icon}</span>
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>

      {/* SECURITY */}
      <div className="mb-20">
        <h4 className="text-lg font-semibold text-neutral-800 mb-4">
          Security
        </h4>

        <div className="flex flex-wrap gap-3">
          {securitySkills.map((skill) => (
            <Badge
              key={skill.name}
              variant="outline"
              className="px-4 py-2 text-sm font-medium border-neutral-300 hover:border-black hover:bg-neutral-50 transition-colors"
            >
              <span className="mr-2">{skill.icon}</span>
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>

      {/* PROJECTS */}
      <h3 className="text-2xl md:text-3xl font-bold mb-8 text-black">
        Projects
      </h3>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-neutral-200 rounded-xl p-6 hover:shadow-md transition"
          >
            <h5 className="text-xl font-semibold text-neutral-950">
              {project.title}
            </h5>

            <p className="mt-2 text-neutral-700">
              {project.description}
            </p>

            <Link
              href={project.href}
              className="mt-4 inline-flex text-sm font-semibold text-neutral-900 underline underline-offset-4"
            >
              View details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}