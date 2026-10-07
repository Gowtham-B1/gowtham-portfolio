import React from 'react';
import { GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { educationHistory } from '../data/portfolioData';
import TiltCard from './TiltCard';
import SectionWrapper from './SectionWrapper';
import { mechanicalHeader, mechanicalLeft } from '../utils/motionVariants';

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Mechanical Drop-In */}
        <motion.div 
          variants={mechanicalHeader}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#DDD8CB] dark:border-[#24293D]"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#D65A31] dark:text-[#FF5E3A] uppercase tracking-wider mb-2 font-bold">
              <span className="w-2 h-2 rounded-xs bg-[#D65A31] dark:bg-[#FF5E3A] animate-ping"></span>
              08 // ACADEMIC FOUNDATION
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#12141A] dark:text-[#F8FAFC]">
              Education & Coursework
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono-code text-xs text-[#4E5463] dark:text-[#94A3B8] max-w-sm text-left md:text-right font-medium">
            Rigorous undergraduate training in Computer Science Engineering fundamentals.
          </p>
        </motion.div>

        {/* Education Timeline - Mechanical Left Assembly */}
        <div className="relative border-l-2 border-[#DDD8CB] dark:border-[#24293D] ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-12 text-left">
          {educationHistory.map((item, index) => (
            <motion.div 
              key={index}
              variants={mechanicalLeft}
              className="relative group"
            >
              {/* Dot with pulse */}
              <div className="absolute -left-[32px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#FFFFFF] dark:bg-[#12141F] border-2 border-[#D65A31] dark:border-[#FF5E3A] group-hover:bg-[#D65A31] dark:group-hover:bg-[#FF5E3A] transition-colors shadow-sm" />

              {/* Education Card */}
              <TiltCard
                className="bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-sm p-6 sm:p-8 hover:border-[#D65A31] dark:hover:border-[#FF5E3A] hover:shadow-lg dark:hover:shadow-[0_0_25px_rgba(255,94,58,0.12)] transition-all shadow-sm group"
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 pb-4 mb-4 border-b border-[#E8E4DA] dark:border-[#24293D]">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <GraduationCap className="w-4 h-4 text-[#D65A31] dark:text-[#FF5E3A]" />
                      <span className="text-xs font-mono-code uppercase tracking-wider text-[#4E5463] dark:text-[#94A3B8] font-bold">
                        {item.status}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-[#12141A] dark:text-[#F8FAFC]">
                      {item.degree}
                    </h3>
                    <div className="text-sm font-bold text-[#546E2A] dark:text-[#10B981] mt-0.5">
                      {item.institution}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 font-mono-code">
                    <span className="px-3 py-1 bg-[#546E2A]/15 dark:bg-[#10B981]/15 text-[#546E2A] dark:text-[#10B981] text-xs font-extrabold rounded-xs border border-[#546E2A]/30 dark:border-[#10B981]/30">
                      {item.score}
                    </span>
                    <span className="text-xs text-[#4E5463] dark:text-[#94A3B8] mt-1 flex items-center gap-1 font-medium">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <p className="text-sm text-[#12141A] dark:text-[#F8FAFC] leading-relaxed mb-4">
                  {item.details}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#E8E4DA] dark:border-[#24293D]">
                  {item.highlights.map((hl, hIdx) => (
                    <span
                      key={hIdx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-[#FAF8F5] dark:bg-[#181C2B] border border-[#DDD8CB] dark:border-[#24293D] text-xs font-mono-code text-[#12141A] dark:text-[#F8FAFC]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#546E2A] dark:text-[#10B981]" />
                      {hl}
                    </span>
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
