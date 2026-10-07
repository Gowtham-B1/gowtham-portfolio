import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Menu, 
  X, 
  ArrowUpRight, 
  Download,
  Sun,
  Moon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/useTheme';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(progress);

      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['hero', 'about', 'tech-stack', 'projects', 'experience', 'research', 'achievements', 'certifications', 'education', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Tech Stack', href: '#tech-stack', id: 'tech-stack' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Research & Awards', href: '#research', id: 'research' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar at the very top */}
      <div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#DDD8CB] dark:bg-[#24293D] z-50 pointer-events-none"
        aria-hidden="true"
      >
        <div 
          className="h-full bg-gradient-to-r from-[#D65A31] via-[#FF5E3A] to-[#546E2A] dark:from-[#FF5E3A] dark:via-[#FF8264] dark:to-[#10B981] transition-all duration-150 ease-out shadow-[0_0_10px_rgba(255,94,58,0.5)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#F0ECE1]/95 dark:bg-[#08090D]/95 backdrop-blur-md border-b border-[#DDD8CB] dark:border-[#24293D] shadow-sm dark:shadow-2xl' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Brand Name - Clean Single Line Layout */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex flex-col text-left shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D65A31] rounded-sm"
          >
            <span className="font-heading font-extrabold text-lg tracking-tight text-[#12141A] dark:text-[#F8FAFC] group-hover:text-[#D65A31] dark:group-hover:text-[#FF5E3A] transition-colors whitespace-nowrap">
              GOWTHAM B
            </span>
            <span className="font-mono-code text-[11px] text-[#4E5463] dark:text-[#94A3B8] tracking-tight flex items-center gap-1.5 whitespace-nowrap">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#546E2A] dark:bg-[#10B981] animate-pulse"></span>
              CS Engineering • Full-Stack & AI
            </span>
          </a>

          {/* Desktop Navigation Links - Strict Single Line with Whitespace-Nowrap */}
          <nav className="hidden xl:flex items-center space-x-1.5 shrink-0" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-2 text-xs font-mono-code uppercase tracking-wider rounded-sm transition-all duration-200 whitespace-nowrap inline-flex items-center ${
                    isActive
                      ? 'text-[#D65A31] dark:text-[#FF5E3A] font-bold bg-[#D65A31]/10 dark:bg-[#FF5E3A]/15 shadow-2xs'
                      : 'text-[#4E5463] dark:text-[#94A3B8] hover:text-[#12141A] dark:hover:text-[#F8FAFC] hover:bg-[#E8E4DA] dark:hover:bg-[#181C2B]'
                  }`}
                >
                  <span className="whitespace-nowrap">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#D65A31] dark:bg-[#FF5E3A] rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs - All Single-Line With No Text Wrapping */}
          <div className="hidden md:flex items-center space-x-2.5 shrink-0">
            {/* Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              onClick={toggleTheme}
              className="p-2 text-[#12141A] dark:text-[#F8FAFC] bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-sm hover:border-[#D65A31] dark:hover:border-[#FF5E3A] transition-all cursor-pointer shadow-2xs shrink-0"
              title={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
              aria-label="Toggle light and dark theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-4 h-4 text-[#FF5E3A]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-4 h-4 text-[#4E5463]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* View / Download Resume Button */}
            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono-code font-bold text-[#12141A] dark:text-[#F8FAFC] bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-sm hover:border-[#12141A] dark:hover:border-[#FF5E3A] hover:bg-[#FAF8F5] dark:hover:bg-[#181C2B] transition-all shadow-2xs cursor-pointer focus:outline-none whitespace-nowrap shrink-0"
              title="Preview or Download Resume"
            >
              <FileText className="w-3.5 h-3.5 text-[#D65A31] dark:text-[#FF5E3A] shrink-0" />
              <span className="whitespace-nowrap">Resume</span>
            </motion.button>

            {/* Direct Download Button */}
            <a
              href="/Gowtham_Resume_Current.pdf"
              download="Gowtham_Resume_Current.pdf"
              className="inline-flex items-center gap-1 px-3 py-2 text-xs font-mono-code text-[#4E5463] dark:text-[#94A3B8] hover:text-[#12141A] dark:hover:text-[#F8FAFC] hover:bg-[#E8E4DA] dark:hover:bg-[#181C2B] border border-[#DDD8CB] dark:border-[#24293D] rounded-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
              title="Direct PDF Download"
            >
              <Download className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">PDF</span>
            </a>

            {/* Let's Connect CTA */}
            <motion.a
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono-code font-bold text-[#FFFFFF] bg-[#12141A] dark:bg-[#FF5E3A] dark:text-[#08090D] hover:bg-[#D65A31] dark:hover:bg-[#FF7A5C] rounded-sm transition-all shadow-sm whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </motion.a>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-[#12141A] dark:text-[#F8FAFC] border border-[#DDD8CB] dark:border-[#24293D] rounded-sm bg-[#FFFFFF] dark:bg-[#12141F]"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-[#FF5E3A]" /> : <Moon className="w-4 h-4 text-[#4E5463]" />}
            </button>
            <button
              onClick={onOpenResume}
              className="p-2 text-[#12141A] dark:text-[#F8FAFC] border border-[#DDD8CB] dark:border-[#24293D] rounded-sm bg-[#FFFFFF] dark:bg-[#12141F]"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4 text-[#D65A31] dark:text-[#FF5E3A]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#12141A] dark:text-[#F8FAFC] border border-[#DDD8CB] dark:border-[#24293D] rounded-sm hover:bg-[#E8E4DA] dark:hover:bg-[#181C2B] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden border-b border-[#DDD8CB] dark:border-[#24293D] bg-[#F0ECE1] dark:bg-[#08090D] px-4 pt-3 pb-6 space-y-2 overflow-hidden shadow-xl"
            >
              <div className="pb-2 border-b border-[#DDD8CB]/60 dark:border-[#24293D] flex items-center justify-between text-xs font-mono-code text-[#4E5463] dark:text-[#94A3B8]">
                <span>NAVIGATION</span>
                <span className="text-[#546E2A] dark:text-[#10B981] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#546E2A] dark:bg-[#10B981] animate-pulse"></span>
                  Ready to collaborate
                </span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-3 py-2 text-sm font-mono-code tracking-wide rounded-sm text-[#12141A] dark:text-[#F8FAFC] hover:bg-[#E8E4DA] dark:hover:bg-[#181C2B] hover:text-[#D65A31] dark:hover:text-[#FF5E3A] whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-[#DDD8CB] dark:border-[#24293D] flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono-code font-semibold text-[#12141A] dark:text-[#F8FAFC] bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-sm"
                >
                  <FileText className="w-4 h-4 text-[#D65A31] dark:text-[#FF5E3A]" />
                  Preview & Download Resume
                </button>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono-code font-semibold text-[#FFFFFF] bg-[#12141A] dark:bg-[#FF5E3A] dark:text-[#08090D] rounded-sm"
                >
                  <span>Let's Connect</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
