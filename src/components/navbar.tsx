'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Github, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navClass = isScrolled
    ? 'bg-background/90 backdrop-blur-md border-b border-border/50'
    : 'bg-transparent';

  return (
    <>
      <motion.nav className={'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ' + navClass} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 400 }}>
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
                <span className="text-lg font-semibold tracking-wide text-foreground">Sathwik</span>
              </motion.div>
            </Link>

            <div className="hidden md:flex items-center gap-4">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <motion.div className={'relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ' + (pathname === item.href ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted')} whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
                    {item.name}
                  </motion.div>
                </Link>
              ))}
              <ThemeToggle />
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <ThemeToggle />
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="fixed top-16 left-0 right-0 z-40 bg-background border-b border-border md:hidden">
            <div className="px-4 py-6 max-w-7xl mx-auto">
              <div className="grid grid-cols-2 gap-3">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <motion.div className={'flex items-center gap-3 px-5 py-4 rounded-lg text-sm font-medium ' + (pathname === item.href ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-muted')} whileHover={{ x: 4 }} onClick={() => setIsMenuOpen(false)}>
                      {item.name}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
