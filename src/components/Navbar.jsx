import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Menu, 
  X, 
  ArrowUpRight, 
  Download
} from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(progress);

      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check current active section
      const sections = ['hero', 'about', 'tech-stack', 'projects', 'experience', 'research', 'achievements', 'certifications', 'education', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
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
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#E7E4DD] z-50 pointer-events-none"
        aria-hidden="true"
      >
        <div 
          className="h-full bg-[#D65A31] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled 
            ? 'bg-[#F7F6F2]/90 backdrop-blur-md border-b border-[#E7E4DD] shadow-xs' 
            : 'bg-[#F7F6F2] border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Name */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex flex-col text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D65A31] rounded-sm"
          >
            <span className="font-heading font-bold text-lg tracking-tight text-[#171717] group-hover:text-[#D65A31] transition-colors">
              GOWTHAM B
            </span>
            <span className="font-mono-code text-[11px] text-[#6B6B65] tracking-tight flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#8A9A5B] animate-pulse"></span>
              CS Engineering • Full-Stack / AI
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 text-xs font-mono-code uppercase tracking-wider rounded-sm transition-all duration-150 ${
                    isActive
                      ? 'text-[#D65A31] font-semibold bg-[#D65A31]/10'
                      : 'text-[#6B6B65] hover:text-[#171717] hover:bg-[#EFECE6]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* View / Download Resume */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono-code font-medium text-[#171717] bg-[#FFFFFF] border border-[#E7E4DD] rounded-sm hover:border-[#171717] hover:bg-[#FAF9F5] transition-all shadow-2xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D65A31]"
              title="Preview or Download Resume"
            >
              <FileText className="w-3.5 h-3.5 text-[#D65A31]" />
              <span>Resume</span>
            </button>

            {/* Direct Download Button */}
            <a
              href="/Gowtham_Resume_Current.pdf"
              download="Gowtham_Resume_Current.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono-code text-[#6B6B65] hover:text-[#171717] hover:bg-[#EFECE6] border border-[#E7E4DD] rounded-sm transition-colors cursor-pointer"
              title="Direct PDF Download"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">PDF</span>
            </a>

            {/* Let's Connect CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono-code font-medium text-[#FAFAF7] bg-[#171717] hover:bg-[#D65A31] rounded-sm transition-colors shadow-xs"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 text-[#171717] border border-[#E7E4DD] rounded-sm bg-[#FFFFFF]"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4 text-[#D65A31]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#171717] border border-[#E7E4DD] rounded-sm hover:bg-[#EFECE6] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-b border-[#E7E4DD] bg-[#F7F6F2] px-4 pt-3 pb-6 space-y-2">
            <div className="pb-2 border-b border-[#E7E4DD]/60 flex items-center justify-between text-xs font-mono-code text-[#6B6B65]">
              <span>NAVIGATION</span>
              <span className="text-[#8A9A5B] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8A9A5B]"></span>
                Ready to collaborate
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-2 text-sm font-mono-code tracking-wide rounded-sm text-[#171717] hover:bg-[#EFECE6] hover:text-[#D65A31]"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-[#E7E4DD] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono-code font-semibold text-[#171717] bg-[#FFFFFF] border border-[#E7E4DD] rounded-sm"
              >
                <FileText className="w-4 h-4 text-[#D65A31]" />
                Preview & Download Resume
              </button>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono-code font-semibold text-[#FAFAF7] bg-[#171717] rounded-sm"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
