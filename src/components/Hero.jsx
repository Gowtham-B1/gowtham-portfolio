import React from 'react';
import { 
  ArrowDown, 
  Download, 
  ExternalLink, 
  Mail, 
  Phone, 
  FileText, 
  ArrowUpRight,
  Sparkles,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import TiltCard from './TiltCard';
import { 
  mechanicalContainer, 
  mechanicalHeader, 
  mechanicalLeft, 
  mechanicalRight, 
  mechanicalCard, 
  mechanicalItem 
} from '../utils/motionVariants';

export default function Hero({ onOpenResume }) {
  return (
    <motion.section 
      id="hero" 
      initial="hidden"
      animate="visible"
      variants={mechanicalContainer}
      className="relative min-h-[calc(100vh-80px)] pt-28 pb-16 lg:pt-36 lg:pb-24 bg-transparent flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Editorial Eyebrow with Staggered Entrance */}
        <motion.div 
          variants={mechanicalHeader}
          className="flex flex-wrap items-center gap-2 mb-6"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] text-xs font-mono-code font-medium text-[#12141A] dark:text-[#F8FAFC] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#546E2A] dark:bg-[#10B981] animate-pulse"></span>
            {personalInfo.college}
          </span>
          <span className="inline-flex items-center px-2.5 py-1.5 rounded-xs bg-[#E8E4DA] dark:bg-[#181C2B] text-xs font-mono-code text-[#4E5463] dark:text-[#94A3B8]">
            B.E. Computer Science ({personalInfo.gradYear})
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xs bg-[#D65A31]/10 dark:bg-[#FF5E3A]/15 text-xs font-mono-code font-bold text-[#D65A31] dark:text-[#FF5E3A] border border-[#D65A31]/20 dark:border-[#FF5E3A]/30">
            <Zap className="w-3 h-3 text-[#D65A31] dark:text-[#FF5E3A]" />
            CGPA: 8.79 / 10
          </span>
        </motion.div>

        {/* Main Grid: Left Column (Typography & Action), Right Column (Developer Dossier) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column (Mechanical Left Assembly) */}
          <motion.div 
            variants={mechanicalLeft}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            <h1 className="font-heading text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#12141A] dark:text-[#F8FAFC] leading-[1.08] mb-4">
              GOWTHAM B
            </h1>
            
            <div className="inline-block mb-6">
              <p className="font-mono-code text-sm sm:text-base font-bold text-[#D65A31] dark:text-[#FF5E3A] uppercase tracking-wider flex items-center gap-2">
                <span>Computer Science Engineering Student</span>
              </p>
              <p className="text-base sm:text-lg font-medium text-[#4E5463] dark:text-[#94A3B8] mt-1">
                Full-Stack Developer • AI Enthusiast • Problem Solver
              </p>
            </div>

            {/* Core statement */}
            <blockquote className="border-l-3 border-[#D65A31] dark:border-[#FF5E3A] pl-4 py-2.5 my-2 text-lg sm:text-xl text-[#12141A] dark:text-[#F8FAFC] font-normal leading-relaxed max-w-2xl bg-[#FFFFFF] dark:bg-[#12141F] rounded-r-sm shadow-sm dark:shadow-xl border-y border-r border-[#DDD8CB] dark:border-[#24293D]">
              "{personalInfo.tagline}"
            </blockquote>

            <p className="text-sm sm:text-base text-[#4E5463] dark:text-[#94A3B8] mt-4 leading-relaxed max-w-2xl">
              Specializing in robust MERN stack applications, responsive React Native mobile platforms, and practical computer vision pipelines with YOLOv11 and Gemini AI.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-mono-code font-bold text-[#FFFFFF] bg-[#12141A] hover:bg-[#D65A31] dark:bg-[#FF5E3A] dark:text-[#08090D] dark:hover:bg-[#FF7A5C] rounded-sm transition-all shadow-md group cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </motion.a>

              {/* Download Resume Button with dark mode matching colors */}
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="/Gowtham_Resume_Current.pdf"
                download="Gowtham_Resume_Current.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-mono-code font-bold text-[#12141A] dark:text-[#F8FAFC] bg-[#FFFFFF] dark:bg-[#12141F] hover:bg-[#FAF8F5] dark:hover:bg-[#181C2B] border border-[#DDD8CB] dark:border-[#24293D] hover:border-[#12141A] dark:hover:border-[#FF5E3A] rounded-sm transition-all shadow-sm group cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#D65A31] dark:text-[#FF5E3A] group-hover:translate-y-1 transition-transform" />
                <span>Download Resume</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs font-mono-code text-[#4E5463] dark:text-[#94A3B8] hover:text-[#12141A] dark:hover:text-[#F8FAFC] bg-[#FFFFFF] dark:bg-[#12141F] hover:bg-[#E8E4DA] dark:hover:bg-[#181C2B] border border-[#DDD8CB] dark:border-[#24293D] rounded-sm transition-colors cursor-pointer"
                title="Open resume preview modal"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Quick View</span>
              </motion.button>
            </div>

            {/* Contact & Social Links Bar */}
            <div className="mt-10 pt-6 border-t border-[#DDD8CB] dark:border-[#24293D] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs font-mono-code text-[#4E5463] dark:text-[#94A3B8]">
              {/* LinkedIn */}
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#D65A31] dark:hover:text-[#FF5E3A] transition-colors group"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-[#12141A] dark:text-[#F8FAFC] group-hover:text-[#D65A31] dark:group-hover:text-[#FF5E3A] transition-colors" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
              </a>

              {/* GitHub */}
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#D65A31] dark:hover:text-[#FF5E3A] transition-colors group"
                title="GitHub Profile (@Gowtham-B1)"
              >
                <GithubIcon className="w-4 h-4 text-[#12141A] dark:text-[#F8FAFC] group-hover:text-[#D65A31] dark:group-hover:text-[#FF5E3A] transition-colors" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
              </a>

              {/* Email */}
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 hover:text-[#D65A31] dark:hover:text-[#FF5E3A] transition-colors group"
                title="Send Email"
              >
                <Mail className="w-4 h-4 text-[#12141A] dark:text-[#F8FAFC] group-hover:text-[#D65A31] dark:group-hover:text-[#FF5E3A] transition-colors" />
                <span className="truncate max-w-[200px] sm:max-w-none">{personalInfo.email}</span>
              </a>

              {/* Phone */}
              <a 
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-1.5 hover:text-[#D65A31] dark:hover:text-[#FF5E3A] transition-colors group"
                title="Call phone"
              >
                <Phone className="w-4 h-4 text-[#12141A] dark:text-[#F8FAFC] group-hover:text-[#D65A31] dark:group-hover:text-[#FF5E3A] transition-colors" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>

            {/* Quick Metrics Bar with Directional 3D Tilt Cards */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <motion.div variants={mechanicalCard}>
                <TiltCard className="p-3 bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-sm group hover:border-[#D65A31] dark:hover:border-[#FF5E3A] transition-colors shadow-2xs">
                  <div className="text-[11px] font-mono-code text-[#4E5463] dark:text-[#94A3B8] uppercase font-bold">Academics</div>
                  <div className="font-heading font-extrabold text-lg text-[#12141A] dark:text-[#F8FAFC] mt-0.5">8.79 CGPA</div>
                  <div className="text-[11px] text-[#546E2A] dark:text-[#10B981] font-mono-code font-bold">Top Tier (6th Sem)</div>
                </TiltCard>
              </motion.div>

              <motion.div variants={mechanicalCard}>
                <TiltCard className="p-3 bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-sm group hover:border-[#D65A31] dark:hover:border-[#FF5E3A] transition-colors shadow-2xs">
                  <div className="text-[11px] font-mono-code text-[#4E5463] dark:text-[#94A3B8] uppercase font-bold">Featured Work</div>
                  <div className="font-heading font-extrabold text-lg text-[#12141A] dark:text-[#F8FAFC] mt-0.5">4 Systems</div>
                  <div className="text-[11px] text-[#4E5463] dark:text-[#94A3B8] font-mono-code font-medium">AI • Mobile • Web</div>
                </TiltCard>
              </motion.div>

              <motion.div variants={mechanicalCard}>
                <TiltCard className="p-3 bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-sm group hover:border-[#D65A31] dark:hover:border-[#FF5E3A] transition-colors shadow-2xs">
                  <div className="text-[11px] font-mono-code text-[#4E5463] dark:text-[#94A3B8] uppercase font-bold">Incubation</div>
                  <div className="font-heading font-extrabold text-lg text-[#12141A] dark:text-[#F8FAFC] mt-0.5">KLN.IRP</div>
                  <div className="text-[11px] text-[#D65A31] dark:text-[#FF5E3A] font-mono-code font-bold">IRP Aspirant '26</div>
                </TiltCard>
              </motion.div>

              <motion.div variants={mechanicalCard}>
                <TiltCard className="p-3 bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-sm group hover:border-[#D65A31] dark:hover:border-[#FF5E3A] transition-colors shadow-2xs">
                  <div className="text-[11px] font-mono-code text-[#4E5463] dark:text-[#94A3B8] uppercase font-bold">Certifications</div>
                  <div className="font-heading font-extrabold text-lg text-[#12141A] dark:text-[#F8FAFC] mt-0.5">9 Verified</div>
                  <div className="text-[11px] text-[#4E5463] dark:text-[#94A3B8] font-mono-code font-medium">NPTEL • MERN • AI</div>
                </TiltCard>
              </motion.div>
            </div>

          </motion.div>

          {/* Right Column: Interactive 3D Directional Dossier (Mechanical Right Assembly) */}
          <motion.div 
            variants={mechanicalRight}
            className="lg:col-span-5 w-full"
          >
            <TiltCard 
              className="bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-sm shadow-xl dark:shadow-2xl overflow-hidden text-left transition-colors group hover:border-[#D65A31] dark:hover:border-[#FF5E3A]"
            >
              {/* Card Header */}
              <div className="bg-[#FAF8F5] dark:bg-[#181C2B] px-5 py-3.5 border-b border-[#DDD8CB] dark:border-[#24293D] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#546E2A] dark:bg-[#10B981] animate-pulse"></span>
                  <span className="font-mono-code text-xs font-extrabold text-[#12141A] dark:text-[#F8FAFC] tracking-wider uppercase flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#D65A31] dark:text-[#FF5E3A]" />
                    ENGINEERING DOSSIER
                  </span>
                </div>
                <span className="text-[11px] font-mono-code text-[#546E2A] dark:text-[#10B981] bg-[#546E2A]/10 dark:bg-[#10B981]/15 px-2 py-0.5 rounded-xs font-bold">
                  Active Aspirant
                </span>
              </div>

              {/* Dossier Content */}
              <div className="p-5 space-y-4">
                
                {/* Academic Anchor */}
                <div className="p-3.5 bg-[#FAF8F5] dark:bg-[#181C2B] border border-[#DDD8CB] dark:border-[#24293D] rounded-xs space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono-code">
                    <span className="text-[#4E5463] dark:text-[#94A3B8] uppercase font-bold">Institution</span>
                    <span className="font-extrabold text-[#D65A31] dark:text-[#FF5E3A]">8.79 CGPA</span>
                  </div>
                  <div className="font-heading font-extrabold text-sm text-[#12141A] dark:text-[#F8FAFC]">
                    K.L.N. College of Engineering
                  </div>
                  <div className="text-xs text-[#4E5463] dark:text-[#94A3B8]">
                    B.E. Computer Science & Engineering (2023–2027)
                  </div>
                </div>

                {/* Research Incubation */}
                <div className="p-3.5 bg-[#FAF8F5] dark:bg-[#181C2B] border border-[#DDD8CB] dark:border-[#24293D] rounded-xs space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono-code">
                    <span className="text-[#4E5463] dark:text-[#94A3B8] uppercase font-bold">Research & Incubation</span>
                    <span className="text-[#546E2A] dark:text-[#10B981] font-bold">2026 Cohort</span>
                  </div>
                  <div className="font-heading font-extrabold text-sm text-[#12141A] dark:text-[#F8FAFC]">
                    K.L.N. Innovation & Research Park (KLN.IRP)
                  </div>
                  <div className="text-xs text-[#4E5463] dark:text-[#94A3B8]">
                    Role: IRP Aspirant • Data-Driven Systems & Optimization
                  </div>
                </div>

                {/* Four Deployed Projects Quick Reference */}
                <div className="space-y-2 pt-1">
                  <div className="text-[11px] font-mono-code uppercase tracking-wider text-[#4E5463] dark:text-[#94A3B8] font-bold">
                    Featured Production Systems
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono-code">
                    <div className="p-2.5 bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-xs hover:border-[#D65A31] dark:hover:border-[#FF5E3A] transition-colors shadow-2xs">
                      <div className="font-bold text-[#12141A] dark:text-[#F8FAFC] flex items-center justify-between">
                        <span>01 Hospireo</span>
                        <span className="text-[10px] text-[#D65A31] dark:text-[#FF5E3A] font-bold">Team Lead</span>
                      </div>
                      <div className="text-[11px] text-[#4E5463] dark:text-[#94A3B8] mt-0.5">Healthcare Booking Web</div>
                    </div>

                    <div className="p-2.5 bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-xs hover:border-[#546E2A] dark:hover:border-[#10B981] transition-colors shadow-2xs">
                      <div className="font-bold text-[#12141A] dark:text-[#F8FAFC] flex items-center justify-between">
                        <span>02 e-MBook</span>
                        <span className="text-[10px] text-[#546E2A] dark:text-[#10B981] font-bold">GovTech</span>
                      </div>
                      <div className="text-[11px] text-[#4E5463] dark:text-[#94A3B8] mt-0.5">Digital Measurement RBAC</div>
                    </div>

                    <div className="p-2.5 bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-xs hover:border-[#D65A31] dark:hover:border-[#FF5E3A] transition-colors shadow-2xs">
                      <div className="font-bold text-[#12141A] dark:text-[#F8FAFC] flex items-center justify-between">
                        <span>03 HSDE</span>
                        <span className="text-[10px] text-[#D65A31] dark:text-[#FF5E3A] font-bold">AI + Mobile</span>
                      </div>
                      <div className="text-[11px] text-[#4E5463] dark:text-[#94A3B8] mt-0.5">React Native + YOLOv11</div>
                    </div>

                    <div className="p-2.5 bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-xs hover:border-[#546E2A] dark:hover:border-[#10B981] transition-colors shadow-2xs">
                      <div className="font-bold text-[#12141A] dark:text-[#F8FAFC] flex items-center justify-between">
                        <span>04 Museart</span>
                        <span className="text-[10px] text-[#546E2A] dark:text-[#10B981] font-bold">Multimodal</span>
                      </div>
                      <div className="text-[11px] text-[#4E5463] dark:text-[#94A3B8] mt-0.5">Gemini AI + gTTS Speech</div>
                    </div>
                  </div>
                </div>

                {/* Core Focus Badges */}
                <div className="pt-2 border-t border-[#E8E4DA] dark:border-[#24293D] flex flex-wrap gap-1.5 text-[11px] font-mono-code">
                  <span className="px-2 py-0.5 rounded-xs bg-[#FAF8F5] dark:bg-[#181C2B] border border-[#DDD8CB] dark:border-[#24293D] text-[#12141A] dark:text-[#F8FAFC] font-medium">
                    Full-Stack MERN
                  </span>
                  <span className="px-2 py-0.5 rounded-xs bg-[#FAF8F5] dark:bg-[#181C2B] border border-[#DDD8CB] dark:border-[#24293D] text-[#12141A] dark:text-[#F8FAFC] font-medium">
                    FastAPI
                  </span>
                  <span className="px-2 py-0.5 rounded-xs bg-[#FAF8F5] dark:bg-[#181C2B] border border-[#DDD8CB] dark:border-[#24293D] text-[#12141A] dark:text-[#F8FAFC] font-medium">
                    React Native
                  </span>
                  <span className="px-2 py-0.5 rounded-xs bg-[#FAF8F5] dark:bg-[#181C2B] border border-[#DDD8CB] dark:border-[#24293D] text-[#12141A] dark:text-[#F8FAFC] font-medium">
                    Computer Vision
                  </span>
                </div>

              </div>

              {/* Dossier Footer */}
              <div className="bg-[#FAF8F5] dark:bg-[#181C2B] border-t border-[#DDD8CB] dark:border-[#24293D] px-5 py-2.5 flex items-center justify-between text-xs font-mono-code">
                <span className="text-[#4E5463] dark:text-[#94A3B8]">Location: Tamil Nadu, India</span>
                <a 
                  href="#contact" 
                  className="text-[#D65A31] dark:text-[#FF5E3A] hover:underline font-bold flex items-center gap-1"
                >
                  <span>Connect</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </TiltCard>
          </motion.div>

        </div>

      </div>
    </motion.section>
  );
}
