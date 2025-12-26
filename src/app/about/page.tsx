'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Zap, Github, Linkedin, Send, Briefcase, Star, Calendar, Layout, Code, Database, Cpu, Layers, Terminal, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { PageTransition } from '@/components/custom-cursor';
import BackgroundEffects from '@/components/background-effects';

const skills = {
  frontend: {
    name: 'Frontend',
    icon: <Layout className="w-4 h-4" />,
    skills: [
      { name: 'React.js', level: 95, desc: 'Building SPAs' },
      { name: 'Next.js', level: 95, desc: 'SSR & SSG' },
      { name: 'TypeScript', level: 90, desc: 'Type-safe' },
      { name: 'Tailwind', level: 92, desc: 'Utility-first' },
    ],
  },
  backend: {
    name: 'Backend',
    icon: <Database className="w-4 h-4" />,
    skills: [
      { name: 'Node.js', level: 88, desc: 'Server-side' },
      { name: 'Express', level: 85, desc: 'REST APIs' },
      { name: 'MongoDB', level: 80, desc: 'NoSQL' },
      { name: 'PostgreSQL', level: 78, desc: 'SQL' },
    ],
  },
  advanced: {
    name: 'Advanced',
    icon: <Zap className="w-4 h-4" />,
    skills: [
      { name: 'AI/LLM', level: 85, desc: 'Large models' },
      { name: 'Scraping', level: 90, desc: 'Data extraction' },
      { name: 'DevOps', level: 70, desc: 'CI/CD' },
      { name: 'Testing', level: 72, desc: 'QA' },
    ],
  },
};

const certifications = [
  {
    title: 'AI Foundations Associate',
    issuer: 'Oracle',
    date: '2025',
    code: '1Z0-1122-25',
  },
  {
    title: 'Agentforce Specialist',
    issuer: 'Salesforce',
    date: '2025',
  },
];

const timeline = [
  { year: '2025', event: 'AI Intern • 1M1B', badge: 'Internship' },
  { year: '2025', event: 'DROMAN • Hackathon', badge: 'Achievement' },
  { year: '2024', event: 'Freelance Complete', badge: 'Work' },
  { year: '2023', event: 'B.Tech Started', badge: 'Education' },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-background">
        <BackgroundEffects />
        <Navbar />
        <main className="flex-1 pt-20">
          {/* Hero */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-center max-w-3xl mx-auto">
                <Badge variant="secondary" className="mb-6 px-4 py-2">
                  <Users className="w-4 h-4 mr-2" />
                  About Me
                </Badge>
                <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
                  <span className="text-primary">Building</span> Future with{' '}
                  <span className="text-foreground">Clean Code</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I'm a frontend developer passionate about creating exceptional user experiences
                  with modern technologies and clean, minimal code.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Stats */}
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
                  { value: '95%', label: 'Success' },
                  { value: '3×', label: 'Growth' },
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
                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
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
                <Badge variant="secondary" className="mb-4">
                  <Zap className="w-4 h-4 mr-2" />
                  Expertise
                </Badge>
                <h2 className="text-4xl font-bold">My Skills</h2>
              </motion.div>

              <Tabs defaultValue="frontend" className="w-full">
                <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-8">
                  <TabsTrigger value="frontend">Frontend</TabsTrigger>
                  <TabsTrigger value="backend">Backend</TabsTrigger>
                  <TabsTrigger value="advanced">Advanced</TabsTrigger>
                </TabsList>

                {Object.entries(skills).map(([category, data], idx) => (
                  <TabsContent key={category} value={category} className="mt-8">
                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                      {data.skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="p-6 rounded-2xl bg-card hover:shadow-lg transition-all"
                        >
                          <div className="mb-3">
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-semibold">{skill.name}</span>
                              <Badge variant="secondary">{skill.level}%</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{skill.desc}</p>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* Certifications */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <Badge variant="secondary" className="mb-4">
                  <Award className="w-4 h-4 mr-2" />
                  Certifications
                </Badge>
                <h2 className="text-4xl font-bold">Professional Certifications</h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="p-8 rounded-2xl bg-card hover:shadow-xl transition-all"
                  >
                    <CardHeader className="pb-4">
                      <CardTitle className="mb-2">{cert.title}</CardTitle>
                      <CardDescription>{cert.issuer}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Badge variant="outline">{cert.date}</Badge>
                        {cert.code && <Badge variant="outline">{cert.code}</Badge>}
                      </div>
                    </CardContent>
                  </motion.div>
                ))}
              </div>
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
                <Badge variant="secondary" className="mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  Journey
                </Badge>
                <h2 className="text-4xl font-bold">My Timeline</h2>
              </motion.div>

              <div className="grid md:grid-cols-4 gap-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-2xl bg-card hover:shadow-lg transition-all text-center"
                  >
                    <div className="text-5xl font-bold text-primary mb-2">{item.year.charAt(2)}</div>
                    <Badge variant="secondary" className="mb-2">{item.year}</Badge>
                    <div className="space-y-1">
                      {item.event.split(' • ').map((event) => (
                        <div key={event} className="text-sm font-medium">{event}</div>
                      ))}
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
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-primary text-primary-foreground border-0 shadow-2xl">
                  <CardContent className="p-16 text-center">
                    <Users className="w-16 h-16 mx-auto mb-6 opacity-90" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                      Let's Work Together
                    </h2>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
                      I'm always excited to collaborate on new projects and ideas.
                      Let's create something exceptional together.
                    </p>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-background text-primary px-8 py-4 rounded-xl font-semibold hover:bg-background/90 transition-all"
                    >
                      Get in Touch
                      <Send className="w-5 h-5" />
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
