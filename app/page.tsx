'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Briefcase, Award, FolderGit2 } from 'lucide-react';

const techSkills = [
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
];

const projects = [
  {
    date: 'MAR 26, 2026',
    title: 'E-Commerce Platform with Advanced Analytics',
    description: 'Full-stack e-commerce solution with real-time analytics dashboard and inventory management system.',
  },
  {
    date: 'FEB 15, 2026',
    title: 'AI-Powered Content Management System',
    description: 'Intelligent CMS with machine learning capabilities for content personalization and audience analysis.',
  },
  {
    date: 'JAN 10, 2026',
    title: 'Data Pipeline & ETL Framework',
    description: 'Scalable data pipeline built with modern cloud technologies for processing large-scale datasets.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm">
                P
              </div>
              <span className="font-semibold text-lg">Portfolio</span>
            </div>
            <nav className="hidden md:flex items-center gap-1">
              <Button variant="default" className="rounded-full">
                Home
              </Button>
              <Button variant="ghost" className="rounded-full">
                Experience
              </Button>
              <Button variant="ghost" className="rounded-full">
                Projects
              </Button>
              <Button variant="ghost" className="rounded-full">
                Certificate
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <section className="mb-24">
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-neutral-600 text-xl md:text-2xl font-medium">
              Your Name Here
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
              FULLSTACK & DATA PLATFORM
              <br />
              ENGINEER
            </h2>
            <p className="text-neutral-600 text-lg md:text-xl">
              Specialist in creating digital products
            </p>
            <p className="text-neutral-700 leading-relaxed max-w-3xl text-base md:text-lg">
              Full-stack engineer with additional expertise in data management and analysis.
              Experienced in using Google Cloud Platform (BigQuery, Dataflow, Pub/Sub),
              Next.js, and TypeScript to build and maintain end-to-end digital platforms,
              including data pipeline components and analytics dashboards. Strong interest
              in applying machine learning to content management, personalization, or
              audience analysis. Dedicated to bridging the gap between software
              development and actionable data insights.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button variant="outline" size="lg" className="rounded-full">
              <FolderGit2 className="mr-2 h-4 w-4" />
              View my Projects
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              <Briefcase className="mr-2 h-4 w-4" />
              View my work
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              <FileText className="mr-2 h-4 w-4" />
              View my CV
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              <Award className="mr-2 h-4 w-4" />
              View my certificate
            </Button>
          </div>
        </section>

        <section className="mb-24">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-black">
            Tech Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {techSkills.map((skill) => (
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
        </section>

        <section className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-black">
            Check my work experiences
          </h3>

          <div className="flex items-center justify-between mb-8">
            <h4 className="text-xl font-semibold text-black">Recent projects</h4>
            <Button variant="link" className="text-black">
              All projects →
            </Button>
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-neutral-200 hover:shadow-lg transition-all duration-300 hover:border-neutral-400"
              >
                <CardHeader>
                  <div className="text-sm text-neutral-500 mb-2">
                    {project.date}
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-bold text-black">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-700 leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-black mb-4">About</h4>
              <p className="text-neutral-600 text-sm">
                Full-stack engineer passionate about building scalable digital platforms
                and data solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Certificate
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Contact</h4>
              <p className="text-neutral-600 text-sm">
                Get in touch for collaborations or opportunities.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-neutral-200 text-center text-sm text-neutral-500">
            © 2026 Portfolio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
