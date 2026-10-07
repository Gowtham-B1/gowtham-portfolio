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
    <footer className="bg-[#FAF9F5] border-t border-[#E7E4DD] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#E7E4DD]">
          
          {/* Brand & Identity */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-lg text-[#171717] tracking-tight">
                GOWTHAM B
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#6B6B65] max-w-md leading-relaxed">
              Computer Science Engineering Student at K.L.N. College of Engineering. Building full-stack web platforms, cross-platform mobile applications, and applied AI systems.
            </p>
            <div className="text-xs font-mono-code text-[#8A9A5B] flex items-center gap-1.5 pt-1">
              <span className="w-2 h-2 rounded-full bg-[#8A9A5B]"></span>
              <span>Available for Technical Internships & Collaborations</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-mono-code uppercase font-semibold text-[#171717] tracking-wider mb-3">
              Navigation
            </div>
            <div className="flex flex-col space-y-2 text-xs font-mono-code text-[#6B6B65]">
              <a href="#about" className="hover:text-[#D65A31] transition-colors">01 // About</a>
              <a href="#tech-stack" className="hover:text-[#D65A31] transition-colors">02 // Tech Stack</a>
              <a href="#projects" className="hover:text-[#D65A31] transition-colors">03 // Featured Projects</a>
              <a href="#experience" className="hover:text-[#D65A31] transition-colors">04 // Experience</a>
              <a href="#research" className="hover:text-[#D65A31] transition-colors">05 // Research & Papers</a>
              <a href="#achievements" className="hover:text-[#D65A31] transition-colors">06 // Achievements</a>
              <a href="#certifications" className="hover:text-[#D65A31] transition-colors">07 // Certifications</a>
              <a href="#contact" className="hover:text-[#D65A31] transition-colors">08 // Contact</a>
            </div>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-mono-code uppercase font-semibold text-[#171717] tracking-wider mb-3">
              Direct Channels
            </div>
            <div className="flex flex-col space-y-2 text-xs font-mono-code text-[#6B6B65]">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1.5 hover:text-[#D65A31] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#171717]" />
                <span>GitHub (@Gowtham-B1)</span>
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1.5 hover:text-[#D65A31] transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#171717]" />
                <span>LinkedIn Profile</span>
              </a>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="flex items-center gap-1.5 hover:text-[#D65A31] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#171717]" />
                <span className="truncate">{personalInfo.email}</span>
              </a>
              <a 
                href={`tel:${personalInfo.phone}`} 
                className="flex items-center gap-1.5 hover:text-[#D65A31] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#171717]" />
                <span>{personalInfo.phone}</span>
              </a>
              <a 
                href="/Gowtham_Resume_Current.pdf" 
                download="Gowtham_Resume_Current.pdf"
                className="flex items-center gap-1.5 text-[#D65A31] hover:underline font-semibold pt-1"
              >
                <span>Download Resume (PDF) →</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-[#6B6B65]">
          <div className="flex items-center gap-2">
            <span>© 2026 Gowtham B.</span>
            <span>•</span>
            <span>All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FFFFFF] border border-[#E7E4DD] rounded-xs text-[#171717] hover:border-[#171717] hover:text-[#D65A31] transition-all cursor-pointer shadow-2xs"
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
