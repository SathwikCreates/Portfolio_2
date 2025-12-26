'use client';

import { motion } from 'framer-motion';
import { Code, Database, Zap, Layers, Terminal, Globe, ArrowRight, Mail, Github, Linkedin, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { PageTransition } from '@/components/custom-cursor';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const skillCategories = {
  frontend: {
    name: 'Frontend',
    icon: <Code className="w-5 h-5" />,
    skills: [
      { name: 'React.js', level: 95, desc: 'Building SPAs' },
      { name: 'Next.js', level: 95, desc: 'SSR & SSG' },
      { name: 'TypeScript', level: 90, desc: 'Type-safe' },
      { name: 'Tailwind', level: 92, desc: 'Styling' },
    ],
  },
  backend: {
    name: 'Backend',
    icon: <Database className="w-5 h-5" />,
    skills: [
      { name: 'Node.js', level: 88, desc: 'Server-side' },
      { name: 'Express', level: 85, desc: 'REST APIs' },
      { name: 'MongoDB', level: 80, desc: 'NoSQL' },
      { name: 'PostgreSQL', level: 78, desc: 'SQL' },
    ],
  },
  advanced: {
    name: 'Advanced',
    icon: <Zap className="w-5 h-5" />,
    skills: [
      { name: 'AI/LLM', level: 85, desc: 'Large models' },
      { name: 'Scraping', level: 90, desc: 'Data extraction' },
      { name: 'DevOps', level: 70, desc: 'CI/CD' },
      { name: 'Testing', level: 72, desc: 'QA' },
    ],
  },
  tools: {
    name: 'Tools',
    icon: <Layers className="w-5 h-5" />,
    skills: [
      { name: 'Git', level: 95, desc: 'Version control' },
      { name: 'Docker', level: 65, desc: 'Containers' },
      { name: 'Python', level: 75, desc: 'Scripting' },
      { name: 'FastAPI', level: 70, desc: 'Python web' },
    ],
  },
};

const additionalTools = [
  { name: 'Python', icon: <Terminal className="w-4 h-4" /> },
  { name: 'FastAPI', icon: <Globe className="w-4 h-4" /> },
  { name: 'GraphQL', icon: <Code className="w-4 h-4" /> },
  { name: 'Redis', icon: <Database className="w-4 h-4" /> },
  { name: 'React Native', icon: <Layers className="w-4 h-4" /> },
  { name: 'Docker', icon: <Zap className="w-4 h-4" /> },
];

export default function SkillsPage() {
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
                className="text-center max-w-3xl mx-auto"
              >
                <div className="inline-flex items-center gap-3 mb-8">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-6xl md:text-8xl font-bold">
                  <span className="text-primary">My</span> Skills
                </h1>
                <p className="text-xl text-muted-foreground">
                  Technologies I use to build exceptional products
                </p>
              </motion.div>
            </div>
          </section>

          {/* Skills Categories */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {Object.values(skillCategories).map((category, idx) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="mb-24"
                >
                  <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      {category.icon}
                    </div>
                    <h2 className="text-4xl font-bold">{category.name}</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="p-8 rounded-2xl bg-card hover:shadow-xl transition-all"
                      >
                        <div className="mb-4">
                          <div className="flex justify-between items-center mb-3">
                            <h3 className="text-xl font-bold">{skill.name}</h3>
                            <Badge variant="secondary">{skill.level}%</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{skill.desc}</p>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Additional Tools */}
          <section className="py-24 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-4">Additional Tools</h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
              >
                {additionalTools.map((skill) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="p-6 rounded-2xl bg-card hover:shadow-xl transition-all text-center"
                  >
                    <div className="text-primary mb-3">{skill.icon}</div>
                    <h3 className="font-bold">{skill.name}</h3>
                  </motion.div>
                ))}
              </motion.div>
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
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <MessageCircle className="w-20 h-20 mx-auto mb-8" />
                      <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Want to Collaborate?
                      </h2>
                      <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
                        I'm always ready for new challenges and opportunities.
                        Let's build something amazing together.
                      </p>
                      <a href="/contact" className="inline-flex items-center gap-2 bg-background text-primary hover:bg-background/90 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all">
                        Get in touch
                        <Mail className="w-5 h-5" />
                      </a>
                    </motion.div>
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
