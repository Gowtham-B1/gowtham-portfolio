import React from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { experienceTimeline } from '../data/portfolioData';
import TiltCard from './TiltCard';
import SectionWrapper from './SectionWrapper';
import { mechanicalHeader, mechanicalLeft } from '../utils/motionVariants';

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Mechanical Drop-In */}
        <motion.div 
          variants={mechanicalHeader}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#DDD8CB] dark:border-[#24293D]"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#D65A31] dark:text-[#FF5E3A] uppercase tracking-wider mb-2 font-bold">
              <span className="w-2 h-2 rounded-xs bg-[#D65A31] dark:bg-[#FF5E3A] animate-ping"></span>
              04 // PROFESSIONAL EXPERIENCE
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#12141A] dark:text-[#F8FAFC]">
              Experience & Incubation
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono-code text-xs text-[#4E5463] dark:text-[#94A3B8] max-w-sm text-left md:text-right font-medium">
            Applied technical roles spanning research incubation and software development internships.
          </p>
        </motion.div>

        {/* Timeline Container - Mechanical Left Assembly */}
        <div className="relative border-l-2 border-[#DDD8CB] dark:border-[#24293D] ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-12 text-left">
          {experienceTimeline.map((item, index) => (
            <motion.div 
              key={index}
              variants={mechanicalLeft}
              className="relative group"
            >
              {/* Timeline Indicator Dot with pulsing beacon */}
              <div className="absolute -left-[32px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#FFFFFF] dark:bg-[#12141F] border-2 border-[#D65A31] dark:border-[#FF5E3A] group-hover:bg-[#D65A31] dark:group-hover:bg-[#FF5E3A] transition-colors shadow-sm" />

              {/* Experience Card */}
              <TiltCard
                className="bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-sm p-6 sm:p-8 hover:border-[#D65A31] dark:hover:border-[#FF5E3A] hover:shadow-lg dark:hover:shadow-[0_0_25px_rgba(255,94,58,0.12)] transition-all shadow-sm group"
              >
                {/* Card Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 pb-4 mb-4 border-b border-[#E8E4DA] dark:border-[#24293D]">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-xs bg-[#FAF8F5] dark:bg-[#181C2B] border border-[#DDD8CB] dark:border-[#24293D] text-[11px] font-mono-code text-[#D65A31] dark:text-[#FF5E3A] font-bold mb-2">
                      {item.tag}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-[#12141A] dark:text-[#F8FAFC]">
                      {item.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono-code text-[#4E5463] dark:text-[#94A3B8] mt-1">
                      <span className="font-bold text-[#12141A] dark:text-[#F8FAFC]">{item.organization}</span>
                      <span>•</span>
                      <span>{item.institution}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 bg-[#FAF8F5] dark:bg-[#181C2B] border border-[#DDD8CB] dark:border-[#24293D] rounded-xs text-xs font-mono-code text-[#12141A] dark:text-[#F8FAFC] font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#D65A31] dark:text-[#FF5E3A]" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#12141A] dark:text-[#F8FAFC] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#4E5463] dark:text-[#94A3B8]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#546E2A] dark:text-[#10B981] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}
