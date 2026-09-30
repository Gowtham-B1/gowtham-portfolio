import React from 'react';
import { 
  CheckCircle2, 
  Code2, 
  Cpu, 
  Smartphone, 
  Users, 
  GraduationCap
} from 'lucide-react';
import { personalInfo, softSkills } from '../data/portfolioData';

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
    <section id="about" className="py-20 lg:py-28 bg-[#FFFFFF] border-y border-[#E7E4DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E7E4DD]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#D65A31] uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-xs bg-[#D65A31]"></span>
              01 // PROFILE & BACKGROUND
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717]">
              Engineering scalable systems with real-world purpose.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono-code text-xs text-[#6B6B65] max-w-xs text-left md:text-right">
            KLN College of Engineering • B.E. CSE '27
          </p>
        </div>

        {/* Narrative & Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Detailed Narrative & Statement */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="p-6 bg-[#FAF9F5] border border-[#E7E4DD] rounded-sm">
              <span className="text-xs font-mono-code uppercase tracking-wider text-[#6B6B65] block mb-2">
                Professional Summary
              </span>
              <p className="text-base sm:text-lg text-[#171717] leading-relaxed font-normal">
                "{personalInfo.summary}"
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#6B6B65] leading-relaxed">
              <p>
                My engineering focus centers on bridging theoretical Computer Science with tangible software systems. Rather than building superficial clones, I focus on solving operational bottlenecks—whether that means digitizing paper ledgers for government public works in <strong className="text-[#171717] font-medium">e-MBook</strong>, streamlining medical clinic queues in <strong className="text-[#171717] font-medium">Hospireo</strong>, or designing multimodal AI donation validation in <strong className="text-[#171717] font-medium">HSDE</strong>.
              </p>
              <p>
                Currently serving as an <strong className="text-[#171717] font-medium">IRP Aspirant</strong> at the K.L.N. Innovation & Research Park (KLN.IRP), I explore applied technical research and data-driven frameworks. My work on <strong className="text-[#171717] font-medium">Digital Twin Technology</strong> was recently presented and published at the International Conference on Sustainable Development in Engineering and Technology (ICSDET'26).
              </p>
            </div>

            {/* Soft Skills Badges */}
            <div className="pt-4">
              <div className="text-xs font-mono-code uppercase tracking-wider text-[#6B6B65] mb-3">
                Core Professional Competencies
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#FFFFFF] border border-[#E7E4DD] text-xs font-mono-code text-[#171717] shadow-2xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8A9A5B]" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Academic Anchor & Four Core Pillars */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Academic Snapshot Card */}
            <div className="p-6 bg-[#FFFFFF] border border-[#E7E4DD] rounded-sm shadow-xs text-left">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E7E4DD]">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#D65A31]" />
                  <span className="font-heading font-bold text-sm text-[#171717] uppercase tracking-wide">
                    Academic Foundation
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-xs bg-[#8A9A5B]/15 text-[#8A9A5B] font-mono-code text-xs font-semibold">
                  8.79 CGPA
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="font-heading font-semibold text-base text-[#171717]">
                    K.L.N. College of Engineering
                  </div>
                  <div className="text-xs font-mono-code text-[#6B6B65] mt-0.5">
                    Bachelor of Engineering in Computer Science • 2023–2027
                  </div>
                  <div className="text-xs text-[#6B6B65] mt-1.5">
                    Top academic performance up to 6th semester with active involvement in innovation research.
                  </div>
                </div>

                <div className="pt-3 border-t border-[#EFECE6]">
                  <div className="font-heading font-semibold text-sm text-[#171717]">
                    Oxford Matriculation Higher Secondary School
                  </div>
                  <div className="text-xs font-mono-code text-[#6B6B65] mt-0.5 flex items-center justify-between">
                    <span>Higher Secondary Certificate</span>
                    <span className="font-semibold text-[#171717]">82.5%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Focus Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div 
                    key={pillar.title}
                    className="p-4 bg-[#FAF9F5] border border-[#E7E4DD] rounded-sm hover:border-[#171717] transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Icon className="w-4 h-4 text-[#D65A31]" />
                      <span className="text-[10px] font-mono-code px-1.5 py-0.5 bg-[#FFFFFF] border border-[#E7E4DD] rounded-xs text-[#6B6B65]">
                        {pillar.tag}
                      </span>
                    </div>
                    <div className="font-heading font-bold text-xs text-[#171717]">
                      {pillar.title}
                    </div>
                    <div className="text-[11px] text-[#6B6B65] mt-1 leading-normal line-clamp-3">
                      {pillar.description}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
