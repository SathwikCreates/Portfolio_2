'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building, TrendingUp, Github, Linkedin, Mail, Send, ArrowRight, Layout, Code, Database, Cpu, Layers, Terminal, Zap, Globe } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { PageTransition } from '@/components/custom-cursor';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Freelance',
    period: 'Dec 2023 – March 2024',
    type: 'Freelance',
    achievements: ['15+ REST APIs', '95% On-time Delivery', 'Full-stack Solutions'],
  },
  {
    title: 'AI & Sustainability Intern',
    company: '1M1B',
    period: 'May 2025 – Jun 2025',
    type: 'Internship',
    achievements: ['Eco Chat AI Bot', 'Renewable Energy', 'Dialogflow Integration'],
  },
];

const skills = [
  { name: 'React.js', level: 95 },
  { name: 'Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Node.js', level: 85 },
];

const timeline = [
  { year: '2025', event: 'AI Intern • 1M1B', badge: 'Internship' },
  { year: '2025', event: 'DROMAN • Hackathon', badge: 'Achievement' },
  { year: '2024', event: 'Freelance Complete', badge: 'Work' },
  { year: '2023', event: 'B.Tech Started', badge: 'Education' },
];

export default function ExperiencePage() {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 pt-20">
          {/* Hero */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-center"
              >
                <div className="inline-flex items-center gap-3 mb-6">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h1 className="text-6xl md:text-8xl font-bold">
                  My <span className="text-primary">Experience</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Professional journey showcasing growth and expertise
                </p>
              </motion.div>
            </div>
          </section>

          {/* Experience Cards */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-2xl transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-2xl mb-2">{exp.title}</CardTitle>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                              <Badge variant="secondary">{exp.type}</Badge>
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-3">
                          {exp.achievements.map((achievement) => (
                            <div key={achievement} className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              <span className="text-sm font-medium">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Timeline */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <Calendar className="w-6 h-6 text-primary mb-4" />
                <h2 className="text-4xl font-bold">Timeline Journey</h2>
              </motion.div>

              <div className="grid md:grid-cols-4 gap-6">
                {timeline.map((year, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-xl">
                      <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary">{year.year.charAt(2)}</span>
                        </div>
                        <Badge variant="secondary" className="mb-2">{year.year}</Badge>
                        <div className="text-sm font-medium">{year.event}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <Code className="w-6 h-6 text-primary mb-4" />
                <h2 className="text-4xl font-bold">Key Skills</h2>
              </motion.div>

              <div className="max-w-4xl mx-auto space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="mb-3">
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold">{skill.name}</span>
                        <span className="text-2xl font-bold text-primary">{skill.level}%</span>
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

          {/* CTA */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-primary text-primary-foreground border-0 shadow-2xl">
                  <CardContent className="p-16 text-center">
                    <TrendingUp className="w-16 h-16 mx-auto mb-6" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                      Ready for New Challenges?
                    </h2>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
                      I'm excited to bring my expertise to your next project.
                      Let's create something exceptional.
                    </p>
                    <a href="/contact" className="inline-flex items-center gap-2 bg-background text-primary hover:bg-background/90 px-8 py-4 rounded-xl font-semibold">
                      <Briefcase className="w-5 h-5" />
                      Get in Touch
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
