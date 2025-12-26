'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter, ChevronRight, FolderOpen } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { PageTransition } from '@/components/page-transition';

const projects = [
  {
    title: 'CRM System',
    description: 'Full-stack e-commerce with dynamic CMS, payment processing, and order management.',
    link: 'https://github.com/SathwikCreates/crm-system',
    tech: ['Next.js', 'React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Quantum Scraper',
    description: 'High-performance web scraping system achieving 95%+ accuracy with 3× throughput improvement.',
    link: 'https://qfind.vercel.app/',
    tech: ['TypeScript', 'Puppeteer', 'Node.js', 'Express'],
  },
  {
    title: 'Pet Cart',
    description: 'Modern e-commerce platform for pet products with real-time features and seamless UX.',
    link: 'https://pet-cart.vercel.app/',
    tech: ['Next.js', 'React', 'Supabase', 'Tailwind'],
  },
];

const skills = [
  { name: 'React.js', level: 95 },
  { name: 'Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Node.js', level: 85 },
];

export default function HomePage() {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              >
                <Badge variant="secondary" className="mb-6">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                  Available for new projects
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="text-7xl md:text-9xl font-bold mb-4 tracking-tight"
              >
                <span className="text-primary">Sathwik</span>{' '}
                <span className="text-foreground">Giddi</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl font-light"
              >
                Building exceptional web experiences with clean, minimal, and scalable code.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                className="flex flex-wrap items-center gap-4 mb-12"
              >
                <Button asChild size="lg" className="h-14 text-base group">
                  <Link href="/projects">
                    <FolderOpen className="mr-2 w-5 h-5" />
                    View Projects
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 text-base border-2">
                  <Link href="/contact">
                    <Twitter className="mr-2 w-5 h-5" />
                    Contact
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                className="flex items-center gap-6"
              >
                <a href="https://github.com/SathwikCreates" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/sathwik-g-aa29682a7/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { value: '2+', label: 'Years' },
                { value: '15+', label: 'Projects' },
                { value: '95%', label: 'On-time' },
                { value: '3×', label: 'Performance' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="text-center p-6 rounded-2xl bg-card hover:shadow-lg transition-all"
                >
                  <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-foreground mb-4">Featured Work</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Showcasing my best work</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                    <Card className="h-full hover:shadow-2xl transition-all duration-300 group">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-6">
                          <CardTitle className="text-3xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                          <div className="flex gap-2">
                            {project.tech.slice(0, 3).map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                            ))}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-lg leading-relaxed line-clamp-3">{project.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-foreground mb-4">Core Skills</h2>
              <p className="text-xl text-muted-foreground">Technologies I specialize in</p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="mb-4"
                >
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-lg font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm font-semibold text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.1 + 0.2 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-primary text-primary-foreground border-0 shadow-2xl">
                <CardContent className="p-16 text-center">
                  <Github className="w-20 h-20 mx-auto mb-8" />
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Create Together</h2>
                  <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10 font-light">Ready to bring your vision to life?</p>
                  <Button asChild size="lg" variant="secondary" className="h-16 px-12 text-base">
                    <Link href="/contact">Start a Project <ChevronRight className="ml-2 w-6 h-6" /></Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}
