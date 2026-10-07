import { ArrowUp, Mail, Phone } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#FAF9F5]/90 dark:bg-[#08090D]/90 backdrop-blur-md border-t border-[#E2DFD7] dark:border-[#24293D] text-left transition-colors relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#E2DFD7] dark:border-[#24293D]">
          
          {/* Brand & Identity */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-xl text-[#0F1117] dark:text-[#F8FAFC] tracking-tight">
                GOWTHAM B
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#525866] dark:text-[#94A3B8] max-w-md leading-relaxed">
              Computer Science Engineering Student at K.L.N. College of Engineering. Building full-stack web platforms, cross-platform mobile applications, and applied AI systems.
            </p>
            <div className="text-xs font-mono-code text-[#607936] dark:text-[#10B981] flex items-center gap-1.5 pt-1">
              <span className="w-2 h-2 rounded-full bg-[#607936] dark:bg-[#10B981] animate-pulse"></span>
              <span>Available for Technical Internships & Collaborations</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-mono-code uppercase font-bold text-[#0F1117] dark:text-[#F8FAFC] tracking-wider mb-3">
              Navigation
            </div>
            <div className="flex flex-col space-y-2 text-xs font-mono-code text-[#525866] dark:text-[#94A3B8]">
              <a href="#about" className="hover:text-[#D65A31] dark:hover:text-[#FF5E3A] transition-colors">01 // About</a>
              <a href="#tech-stack" className="hover:text-[#D65A31] dark:hover:text-[#FF5E3A] transition-colors">02 // Tech Stack</a>
              <a href="#projects" className="hover:text-[#D65A31] dark:hover:text-[#FF5E3A] transition-colors">03 // Featured Projects</a>
              <a href="#experience" className="hover:text-[#D65A31] dark:hover:text-[#FF5E3A] transition-colors">04 // Experience</a>
              <a href="#research" className="hover:text-[#D65A31] dark:hover:text-[#FF5E3A] transition-colors">05 // Research & Papers</a>
              <a href="#achievements" className="hover:text-[#D65A31] dark:hover:text-[#FF5E3A] transition-colors">06 // Achievements</a>
              <a href="#certifications" className="hover:text-[#D65A31] dark:hover:text-[#FF5E3A] transition-colors">07 // Certifications</a>
              <a href="#contact" className="hover:text-[#D65A31] dark:hover:text-[#FF5E3A] transition-colors">08 // Contact</a>
            </div>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-mono-code uppercase font-bold text-[#0F1117] dark:text-[#F8FAFC] tracking-wider mb-3">
              Direct Channels
            </div>
            <div className="flex flex-col space-y-2 text-xs font-mono-code text-[#525866] dark:text-[#94A3B8]">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1.5 hover:text-[#D65A31] dark:hover:text-[#FF5E3A] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#0F1117] dark:text-[#F8FAFC]" />
                <span>GitHub (@Gowtham-B1)</span>
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1.5 hover:text-[#D65A31] dark:hover:text-[#FF5E3A] transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#0F1117] dark:text-[#F8FAFC]" />
                <span>LinkedIn Profile</span>
              </a>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="flex items-center gap-1.5 hover:text-[#D65A31] dark:hover:text-[#FF5E3A] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#0F1117] dark:text-[#F8FAFC]" />
                <span className="truncate">{personalInfo.email}</span>
              </a>
              <a 
                href={`tel:${personalInfo.phone}`} 
                className="flex items-center gap-1.5 hover:text-[#D65A31] dark:hover:text-[#FF5E3A] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#0F1117] dark:text-[#F8FAFC]" />
                <span>{personalInfo.phone}</span>
              </a>
              <a 
                href="/Gowtham_Resume_Current.pdf" 
                download="Gowtham_Resume_Current.pdf"
                className="flex items-center gap-1.5 text-[#D65A31] dark:text-[#FF5E3A] hover:underline font-bold pt-1"
              >
                <span>Download Resume (PDF) →</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-[#525866] dark:text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <span>© 2026 Gowtham B.</span>
            <span>•</span>
            <span>All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#FFFFFF] dark:bg-[#12141F] border border-[#E2DFD7] dark:border-[#24293D] rounded-xs text-[#0F1117] dark:text-[#F8FAFC] hover:border-[#0F1117] dark:hover:border-[#FF5E3A] hover:text-[#D65A31] dark:hover:text-[#FF5E3A] transition-all cursor-pointer shadow-2xs font-medium"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
