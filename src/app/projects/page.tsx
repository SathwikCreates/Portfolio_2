"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const projects = [
  { title: 'CRM System', description: 'Full-stack e-commerce.', link: 'https://github.com/SathwikCreates/crm-system', tech: ['Next.js', 'Node.js'], category: 'Full Stack' },
  { title: 'Pet Cart', description: 'Pet products e-commerce.', link: 'https://pet-cart.vercel.app/', tech: ['Next.js', 'React'], category: 'Frontend' },
  { title: 'Quantum Scraper', description: 'Web scraping.', link: 'https://qfind.vercel.app/', tech: ['TypeScript', 'Node.js'], category: 'AI/ML' },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl font-bold mb-12">Projects</h1>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link key={project.title} href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <Card className="h-full hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                    <Badge variant="secondary">{project.category}</Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{project.description}</CardDescription>
                    <div className="flex gap-2 mt-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
