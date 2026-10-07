import React from 'react';
import { 
  CheckCircle2, 
  Code2, 
  Cpu, 
  Smartphone, 
  Users, 
  GraduationCap
} from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo, softSkills } from '../data/portfolioData';
import TiltCard from './TiltCard';
import SectionWrapper from './SectionWrapper';
import { 
  mechanicalHeader, 
  mechanicalLeft, 
  mechanicalRight, 
  mechanicalCard, 
  mechanicalItem 
} from '../utils/motionVariants';

export default function About() {
  const pillars = [
    {
      icon: Code2,
      title: "Full-Stack Web Engineering",
      description:
        "Architecting production-ready web platforms with Express.js REST APIs, MongoDB schema modeling, and modular React frontends with role-based security layers.",
      tag: "MERN Stack"
    },
    {
      icon: Cpu,
      title: "Applied AI & Computer Vision",
      description:
        "Integrating deep learning models including YOLOv11n for real-time object detection, EasyOCR for document text analysis, and Gemini AI for multimodal contextual reasoning.",
      tag: "Vision & ML"
    },
    {
      icon: Smartphone,
      title: "Mobile App Architecture",
      description:
        "Developing cross-platform mobile solutions using React Native CLI and TypeScript, handling camera streams, media caching, and real-time backend synchronization.",
      tag: "React Native CLI"
    },
    {
      icon: Users,
      title: "Leadership & Collaboration",
      description:
        "Led engineering teams for the Hospireo healthcare platform, coordinated college-wide technical symposiums (Techgenio & Technozare), and collaborated in statewide hackathons.",
      tag: "Team Lead & Coordinator"
    }
  ];

  return (
    <SectionWrapper id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Mechanical Drop-In */}
        <motion.div 
          variants={mechanicalHeader}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#DDD8CB] dark:border-[#24293D]"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#D65A31] dark:text-[#FF5E3A] uppercase tracking-wider mb-2 font-bold">
              <span className="w-2 h-2 rounded-xs bg-[#D65A31] dark:bg-[#FF5E3A] animate-ping"></span>
              01 // PROFILE & BACKGROUND
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#12141A] dark:text-[#F8FAFC]">
              Engineering scalable systems with real-world purpose.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono-code text-xs text-[#4E5463] dark:text-[#94A3B8] max-w-xs text-left md:text-right font-medium">
            KLN College of Engineering • B.E. CSE '27
          </p>
        </motion.div>

        {/* Narrative & Profile Grid - Assembles from Left & Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Detailed Narrative & Statement (Mechanical Left Assembly) */}
          <motion.div 
            variants={mechanicalLeft}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="p-6 bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-sm shadow-sm dark:shadow-xl">
              <span className="text-xs font-mono-code uppercase tracking-wider text-[#4E5463] dark:text-[#94A3B8] block mb-2 font-bold">
                Professional Summary
              </span>
              <p className="text-base sm:text-lg text-[#12141A] dark:text-[#F8FAFC] leading-relaxed font-normal">
                "{personalInfo.summary}"
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#4E5463] dark:text-[#94A3B8] leading-relaxed">
              <p>
                My engineering focus centers on bridging theoretical Computer Science with tangible software systems. Rather than building superficial clones, I focus on solving operational bottlenecks—whether that means digitizing paper ledgers for government public works in <strong className="text-[#12141A] dark:text-[#F8FAFC] font-bold">e-MBook</strong>, streamlining medical clinic queues in <strong className="text-[#12141A] dark:text-[#F8FAFC] font-bold">Hospireo</strong>, or designing multimodal AI donation validation in <strong className="text-[#12141A] dark:text-[#F8FAFC] font-bold">HSDE</strong>.
              </p>
              <p>
                Currently serving as an <strong className="text-[#12141A] dark:text-[#F8FAFC] font-bold">IRP Aspirant</strong> at the K.L.N. Innovation & Research Park (KLN.IRP), I explore applied technical research and data-driven frameworks. My work on <strong className="text-[#12141A] dark:text-[#F8FAFC] font-bold">Digital Twin Technology</strong> was recently presented and published at the International Conference on Sustainable Development in Engineering and Technology (ICSDET'26).
              </p>
            </div>

            {/* Soft Skills Badges */}
            <div className="pt-4">
              <div className="text-xs font-mono-code uppercase tracking-wider text-[#4E5463] dark:text-[#94A3B8] mb-3 font-bold">
                Core Professional Competencies
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <motion.span
                    variants={mechanicalItem}
                    whileHover={{ scale: 1.05, y: -2 }}
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] text-xs font-mono-code text-[#12141A] dark:text-[#F8FAFC] shadow-2xs hover:border-[#D65A31] dark:hover:border-[#FF5E3A] transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#546E2A] dark:text-[#10B981]" />
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Academic Anchor & Four Core Pillars (Mechanical Right Assembly) */}
          <motion.div 
            variants={mechanicalRight}
            className="lg:col-span-5 space-y-6"
          >
            {/* Academic Snapshot Card */}
            <TiltCard 
              className="p-6 bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-sm shadow-sm dark:shadow-xl text-left group hover:border-[#D65A31] dark:hover:border-[#FF5E3A]"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#DDD8CB] dark:border-[#24293D]">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#D65A31] dark:text-[#FF5E3A]" />
                  <span className="font-heading font-extrabold text-sm text-[#12141A] dark:text-[#F8FAFC] uppercase tracking-wide">
                    Academic Foundation
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-xs bg-[#546E2A]/15 dark:bg-[#10B981]/15 text-[#546E2A] dark:text-[#10B981] font-mono-code text-xs font-extrabold">
                  8.79 CGPA
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="font-heading font-extrabold text-base text-[#12141A] dark:text-[#F8FAFC]">
                    K.L.N. College of Engineering
                  </div>
                  <div className="text-xs font-mono-code text-[#4E5463] dark:text-[#94A3B8] mt-0.5">
                    Bachelor of Engineering in Computer Science • 2023–2027
                  </div>
                  <div className="text-xs text-[#4E5463] dark:text-[#94A3B8] mt-1.5">
                    Top academic performance up to 6th semester with active involvement in innovation research.
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E8E4DA] dark:border-[#24293D]">
                  <div className="font-heading font-extrabold text-sm text-[#12141A] dark:text-[#F8FAFC]">
                    Oxford Matriculation Higher Secondary School
                  </div>
                  <div className="text-xs font-mono-code text-[#4E5463] dark:text-[#94A3B8] mt-0.5 flex items-center justify-between">
                    <span>Higher Secondary Certificate</span>
                    <span className="font-extrabold text-[#12141A] dark:text-[#F8FAFC]">82.5%</span>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Core Focus Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <motion.div key={pillar.title} variants={mechanicalCard}>
                    <TiltCard 
                      className="p-4 bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-sm hover:border-[#D65A31] dark:hover:border-[#FF5E3A] transition-all group shadow-2xs h-full"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Icon className="w-4 h-4 text-[#D65A31] dark:text-[#FF5E3A]" />
                        <span className="text-[10px] font-mono-code px-1.5 py-0.5 bg-[#FAF8F5] dark:bg-[#181C2B] border border-[#DDD8CB] dark:border-[#24293D] rounded-xs text-[#4E5463] dark:text-[#94A3B8]">
                          {pillar.tag}
                        </span>
                      </div>
                      <div className="font-heading font-bold text-xs text-[#12141A] dark:text-[#F8FAFC]">
                        {pillar.title}
                      </div>
                      <div className="text-[11px] text-[#4E5463] dark:text-[#94A3B8] mt-1 leading-normal line-clamp-3">
                        {pillar.description}
                      </div>
                    </TiltCard>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>

        </div>

      </div>
    </SectionWrapper>
  );
}
