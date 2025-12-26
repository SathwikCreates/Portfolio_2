'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, ArrowRight, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageTransition } from '@/components/custom-cursor';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const contactMethods = [
  { icon: <Mail className="w-5 h-5" />, title: 'Email', value: 'sathwikgiddi01@gmail.com', link: 'mailto:sathwikgiddi01@gmail.com' },
  { icon: <Phone className="w-5 h-5" />, title: 'Phone', value: '+91 6302989942', link: 'tel:+916302989942' },
  { icon: <MapPin className="w-5 h-5" />, title: 'Location', value: 'Surampalem, India', link: null },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/SathwikCreates', icon: <Github className="w-5 h-5" /> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sathwik-g-aa29682a7/', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'Twitter', href: 'https://twitter.com', icon: <Twitter className="w-5 h-5" /> },
];

const faq = [
  { q: 'Are you available for freelace work?', a: 'Yes! I\'m available for new projects and freelace work.' },
  { q: 'What is your typical response time?', a: 'I typically respond to all inquiries within 24-48 hours.' },
  { q: 'Do you work with startups?', a: 'Absolutely! I love working with startups to build their MVPs and products.' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold">
                  Let's <span className="text-primary">Connect</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Have a project in mind? Let's work together to create something exceptional.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Contact Content */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl font-bold mb-8 text-foreground">
                    Get in Touch
                  </h2>

                  <div className="space-y-4 mb-12">
                    {contactMethods.map((method, index) => (
                      <motion.a
                        key={index}
                        href={method.link || undefined}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="block"
                      >
                        <Card className="hover:shadow-xl">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-4">
                              <div className="text-primary">
                                {method.icon}
                              </div>
                              <div className="flex-1">
                                <p className="text-sm text-muted-foreground mb-1">
                                  {method.title}
                                </p>
                                <p className="text-lg font-semibold text-foreground">
                                  {method.value}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.a>
                    ))}
                  </div>

                  {/* Social Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h3 className="text-xl font-semibold mb-6 text-foreground">
                      Also Find Me On
                    </h3>
                    <div className="flex gap-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 rounded-xl bg-card hover:shadow-lg transition-all"
                        >
                          <span className="text-sm font-medium">{social.name}</span>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <Card className="sticky top-8 hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <CardTitle>Send a Message</CardTitle>
                      <CardDescription>
                        Fill out the form below and I'll get back to you as soon as possible.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {submitted ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-center py-16"
                        >
                          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                            <Send className="w-8 h-8 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            Message Sent!
                          </h3>
                          <p className="text-muted-foreground">
                            Thank you for reaching out. I'll get back to you soon.
                          </p>
                        </motion.div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div>
                            <Label htmlFor="name" className="text-foreground">Name</Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Your name"
                              required
                              className="h-12"
                            />
                          </div>

                          <div>
                            <Label htmlFor="email" className="text-foreground">Email</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="your.email@example.com"
                              required
                              className="h-12"
                            />
                          </div>

                          <div>
                            <Label htmlFor="subject" className="text-foreground">Subject</Label>
                            <Input
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              placeholder="What's this about?"
                              required
                              className="h-12"
                            />
                          </div>

                          <div>
                            <Label htmlFor="message" className="text-foreground">Message</Label>
                            <Textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Tell me about your project or idea..."
                              required
                              rows={6}
                              className="resize-none"
                            />
                          </div>

                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full h-14 text-lg group"
                          >
                            {isSubmitting ? (
                              <>
                                <motion.div
                                  className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary rounded-full mr-2"
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                />
                                Sending...
                              </>
                            ) : (
                              <>
                                Send Message
                                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                              </>
                            )}
                          </Button>
                        </form>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-24 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
              </motion.div>

              <div className="max-w-3xl mx-auto space-y-6">
                {faq.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {item.q}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.a}
                        </p>
                      </CardContent>
                    </Card>
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
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-primary text-primary-foreground border-0 shadow-2xl">
                  <CardContent className="p-16 text-center">
                    <Mail className="w-20 h-20 mx-auto mb-8" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                      Prefer to Send an Email?
                    </h2>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
                      No problem! Send me a direct email and I'll get back to you as soon as possible.
                    </p>
                    <a href="mailto:sathwikgiddi01@gmail.com">
                      <Button
                        size="lg"
                        variant="secondary"
                        className="h-16 text-base"
                      >
                        <Send className="mr-2 h-6 w-6" />
                        Send Email
                        <ArrowRight className="ml-2 h-6 w-6" />
                      </Button>
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
