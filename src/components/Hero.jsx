import React from 'react';
import { 
  ArrowDown, 
  Download, 
  ExternalLink, 
  Mail, 
  Phone, 
  FileText, 
  ArrowUpRight
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section 
      id="hero" 
      className="relative min-h-[calc(100vh-80px)] pt-28 pb-16 lg:pt-36 lg:pb-24 bg-tech-grid flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Editorial Eyebrow */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-[#FFFFFF] border border-[#E7E4DD] text-xs font-mono-code font-medium text-[#171717] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#8A9A5B] animate-pulse"></span>
            {personalInfo.college}
          </span>
          <span className="inline-flex items-center px-2.5 py-1 rounded-xs bg-[#EFECE6] text-xs font-mono-code text-[#6B6B65]">
            B.E. Computer Science ({personalInfo.gradYear})
          </span>
          <span className="inline-flex items-center px-2.5 py-1 rounded-xs bg-[#D65A31]/10 text-xs font-mono-code font-semibold text-[#D65A31] border border-[#D65A31]/20">
            CGPA: 8.79 / 10
          </span>
        </div>

        {/* Main Grid: Left Column (Typography & Action), Right Column (Developer Dossier) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <h1 className="font-heading text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#171717] leading-[1.08] mb-4">
              GOWTHAM B
            </h1>
            
            <div className="inline-block mb-6">
              <p className="font-mono-code text-sm sm:text-base font-semibold text-[#D65A31] uppercase tracking-wider">
                Computer Science Engineering Student
              </p>
              <p className="text-base sm:text-lg font-medium text-[#6B6B65] mt-1">
                Full-Stack Developer • AI Enthusiast • Problem Solver
              </p>
            </div>

            {/* Core statement */}
            <blockquote className="border-l-2 border-[#D65A31] pl-4 py-1 my-2 text-lg sm:text-xl text-[#171717] font-normal leading-relaxed max-w-2xl bg-[#FFFFFF]/60 rounded-r-sm">
              "{personalInfo.tagline}"
            </blockquote>

            <p className="text-sm sm:text-base text-[#6B6B65] mt-4 leading-relaxed max-w-2xl">
              Specializing in robust MERN stack applications, responsive React Native mobile platforms, and practical computer vision pipelines with YOLOv11 and Gemini AI.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-mono-code font-semibold text-[#FAFAF7] bg-[#171717] hover:bg-[#D65A31] rounded-sm transition-all shadow-xs group"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="/Gowtham_Resume_Current.pdf"
                download="Gowtham_Resume_Current.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-mono-code font-semibold text-[#171717] bg-[#FFFFFF] hover:bg-[#FAF9F5] border border-[#E7E4DD] hover:border-[#171717] rounded-sm transition-all shadow-2xs group"
              >
                <Download className="w-4 h-4 text-[#D65A31] group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs font-mono-code text-[#6B6B65] hover:text-[#171717] hover:bg-[#EFECE6] border border-[#E7E4DD] rounded-sm transition-colors cursor-pointer"
                title="Open resume preview modal"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Quick View</span>
              </button>
            </div>

            {/* Contact & Social Links Bar */}
            <div className="mt-10 pt-6 border-t border-[#E7E4DD] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs font-mono-code text-[#6B6B65]">
              {/* LinkedIn */}
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#D65A31] transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-[#171717]" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-[#6B6B65]" />
              </a>

              {/* GitHub Placeholder */}
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#D65A31] transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-[#171717]" />
                <span>GitHub</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-[#EFECE6] rounded-xs text-[#6B6B65]">dev</span>
              </a>

              {/* Email */}
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 hover:text-[#D65A31] transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4 text-[#171717]" />
                <span className="truncate max-w-[200px] sm:max-w-none">{personalInfo.email}</span>
              </a>

              {/* Phone */}
              <a 
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-1.5 hover:text-[#D65A31] transition-colors"
                title="Call phone"
              >
                <Phone className="w-4 h-4 text-[#171717]" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="p-3 bg-[#FFFFFF] border border-[#E7E4DD] rounded-sm">
                <div className="text-[11px] font-mono-code text-[#6B6B65] uppercase">Academics</div>
                <div className="font-heading font-bold text-lg text-[#171717] mt-0.5">8.79 CGPA</div>
                <div className="text-[11px] text-[#8A9A5B] font-mono-code font-medium">Top Tier (6th Sem)</div>
              </div>

              <div className="p-3 bg-[#FFFFFF] border border-[#E7E4DD] rounded-sm">
                <div className="text-[11px] font-mono-code text-[#6B6B65] uppercase">Featured Work</div>
                <div className="font-heading font-bold text-lg text-[#171717] mt-0.5">4 Systems</div>
                <div className="text-[11px] text-[#6B6B65] font-mono-code">AI • Mobile • Web</div>
              </div>

              <div className="p-3 bg-[#FFFFFF] border border-[#E7E4DD] rounded-sm">
                <div className="text-[11px] font-mono-code text-[#6B6B65] uppercase">Incubation</div>
                <div className="font-heading font-bold text-lg text-[#171717] mt-0.5">KLN.IRP</div>
                <div className="text-[11px] text-[#D65A31] font-mono-code font-medium">IRP Aspirant '26</div>
              </div>

              <div className="p-3 bg-[#FFFFFF] border border-[#E7E4DD] rounded-sm">
                <div className="text-[11px] font-mono-code text-[#6B6B65] uppercase">Certifications</div>
                <div className="font-heading font-bold text-lg text-[#171717] mt-0.5">9 Verified</div>
                <div className="text-[11px] text-[#6B6B65] font-mono-code">NPTEL • MERN • AI</div>
              </div>
            </div>

          </div>

          {/* Right Column: Engineering Profile Dossier */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#FFFFFF] border border-[#E7E4DD] rounded-sm shadow-xs overflow-hidden text-left">
              {/* Card Header */}
              <div className="bg-[#FAF9F5] px-5 py-3.5 border-b border-[#E7E4DD] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#8A9A5B] animate-pulse"></span>
                  <span className="font-mono-code text-xs font-bold text-[#171717] tracking-wider uppercase">
                    ENGINEERING DOSSIER
                  </span>
                </div>
                <span className="text-[11px] font-mono-code text-[#8A9A5B] bg-[#8A9A5B]/10 px-2 py-0.5 rounded-xs font-medium">
                  Active Aspirant
                </span>
              </div>

              {/* Dossier Content */}
              <div className="p-5 space-y-4">
                
                {/* Academic Anchor */}
                <div className="p-3.5 bg-[#FAF9F5] border border-[#E7E4DD] rounded-xs space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono-code">
                    <span className="text-[#6B6B65] uppercase">Institution</span>
                    <span className="font-bold text-[#D65A31]">8.79 CGPA</span>
                  </div>
                  <div className="font-heading font-semibold text-sm text-[#171717]">
                    K.L.N. College of Engineering
                  </div>
                  <div className="text-xs text-[#6B6B65]">
                    B.E. Computer Science & Engineering (2023–2027)
                  </div>
                </div>

                {/* Research Incubation */}
                <div className="p-3.5 bg-[#FAF9F5] border border-[#E7E4DD] rounded-xs space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono-code">
                    <span className="text-[#6B6B65] uppercase">Research & Incubation</span>
                    <span className="text-[#8A9A5B] font-semibold">2026 Cohort</span>
                  </div>
                  <div className="font-heading font-semibold text-sm text-[#171717]">
                    K.L.N. Innovation & Research Park (KLN.IRP)
                  </div>
                  <div className="text-xs text-[#6B6B65]">
                    Role: IRP Aspirant • Data-Driven Systems & Optimization
                  </div>
                </div>

                {/* Four Deployed Projects Quick Reference */}
                <div className="space-y-2 pt-1">
                  <div className="text-[11px] font-mono-code uppercase tracking-wider text-[#6B6B65]">
                    Featured Production Systems
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono-code">
                    <div className="p-2.5 bg-[#FFFFFF] border border-[#E7E4DD] rounded-xs">
                      <div className="font-bold text-[#171717] flex items-center justify-between">
                        <span>01 Hospireo</span>
                        <span className="text-[10px] text-[#D65A31] font-normal">Team Lead</span>
                      </div>
                      <div className="text-[11px] text-[#6B6B65] mt-0.5">Healthcare Booking Web</div>
                    </div>

                    <div className="p-2.5 bg-[#FFFFFF] border border-[#E7E4DD] rounded-xs">
                      <div className="font-bold text-[#171717] flex items-center justify-between">
                        <span>02 e-MBook</span>
                        <span className="text-[10px] text-[#8A9A5B] font-normal">GovTech</span>
                      </div>
                      <div className="text-[11px] text-[#6B6B65] mt-0.5">Digital Measurement RBAC</div>
                    </div>

                    <div className="p-2.5 bg-[#FFFFFF] border border-[#E7E4DD] rounded-xs">
                      <div className="font-bold text-[#171717] flex items-center justify-between">
                        <span>03 HSDE</span>
                        <span className="text-[10px] text-[#D65A31] font-normal">AI + Mobile</span>
                      </div>
                      <div className="text-[11px] text-[#6B6B65] mt-0.5">React Native + YOLOv11</div>
                    </div>

                    <div className="p-2.5 bg-[#FFFFFF] border border-[#E7E4DD] rounded-xs">
                      <div className="font-bold text-[#171717] flex items-center justify-between">
                        <span>04 Museart</span>
                        <span className="text-[10px] text-[#8A9A5B] font-normal">Multimodal</span>
                      </div>
                      <div className="text-[11px] text-[#6B6B65] mt-0.5">Gemini AI + gTTS Speech</div>
                    </div>
                  </div>
                </div>

                {/* Core Focus Badges */}
                <div className="pt-2 border-t border-[#EFECE6] flex flex-wrap gap-1.5 text-[11px] font-mono-code">
                  <span className="px-2 py-0.5 rounded-xs bg-[#FAF9F5] border border-[#E7E4DD] text-[#171717]">
                    Full-Stack MERN
                  </span>
                  <span className="px-2 py-0.5 rounded-xs bg-[#FAF9F5] border border-[#E7E4DD] text-[#171717]">
                    FastAPI
                  </span>
                  <span className="px-2 py-0.5 rounded-xs bg-[#FAF9F5] border border-[#E7E4DD] text-[#171717]">
                    React Native
                  </span>
                  <span className="px-2 py-0.5 rounded-xs bg-[#FAF9F5] border border-[#E7E4DD] text-[#171717]">
                    Computer Vision
                  </span>
                </div>

              </div>

              {/* Dossier Footer */}
              <div className="bg-[#FAF9F5] border-t border-[#E7E4DD] px-5 py-2.5 flex items-center justify-between text-xs font-mono-code">
                <span className="text-[#6B6B65]">Location: Tamil Nadu, India</span>
                <a 
                  href="#contact" 
                  className="text-[#D65A31] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Connect</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
