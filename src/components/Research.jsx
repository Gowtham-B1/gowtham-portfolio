import React from 'react';
import { BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { researchPapers } from '../data/portfolioData';
import TiltCard from './TiltCard';
import SectionWrapper from './SectionWrapper';
import { 
  mechanicalHeader, 
  mechanicalLeft, 
  mechanicalRight, 
  mechanicalItem 
} from '../utils/motionVariants';

export default function Research() {
  return (
    <SectionWrapper id="research">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Mechanical Drop-In */}
        <motion.div 
          variants={mechanicalHeader}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#DDD8CB] dark:border-[#24293D]"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#D65A31] dark:text-[#FF5E3A] uppercase tracking-wider mb-2 font-bold">
              <span className="w-2 h-2 rounded-xs bg-[#D65A31] dark:bg-[#FF5E3A] animate-ping"></span>
              05 // RESEARCH & TECHNICAL PAPERS
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#12141A] dark:text-[#F8FAFC]">
              Academic Inquiry & Publications
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono-code text-xs text-[#4E5463] dark:text-[#94A3B8] max-w-sm text-left md:text-right font-medium">
            Peer-reviewed conference research and advanced computational presentations.
          </p>
        </motion.div>

        {/* Research Papers Grid - Mechanical Left/Right Assembly */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {researchPapers.map((paper, index) => (
            <motion.div
              key={paper.id}
              variants={index % 2 === 0 ? mechanicalLeft : mechanicalRight}
            >
              <TiltCard
                className="bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-sm p-6 sm:p-8 hover:border-[#D65A31] dark:hover:border-[#FF5E3A] hover:shadow-xl dark:hover:shadow-[0_0_25px_rgba(255,94,58,0.12)] transition-all flex flex-col justify-between shadow-sm group h-full"
              >
                <div>
                  {/* Paper Header */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E8E4DA] dark:border-[#24293D]">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono-code text-[#D65A31] dark:text-[#FF5E3A] font-bold">
                      <BookOpen className="w-4 h-4" />
                      PAPER 0{index + 1}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-xs bg-[#546E2A]/15 dark:bg-[#10B981]/15 text-[#546E2A] dark:text-[#10B981] font-mono-code text-xs font-bold">
                      {paper.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#12141A] dark:text-[#F8FAFC] group-hover:text-[#D65A31] dark:group-hover:text-[#FF5E3A] transition-colors leading-snug">
                    "{paper.title}"
                  </h3>

                  {/* Venue & Institution */}
                  <div className="mt-3 p-3 bg-[#FAF8F5] dark:bg-[#181C2B] border border-[#DDD8CB] dark:border-[#24293D] rounded-xs text-xs font-mono-code space-y-1">
                    <div className="text-[#12141A] dark:text-[#F8FAFC] font-bold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D65A31] dark:bg-[#FF5E3A]"></span>
                      {paper.venue}
                    </div>
                    <div className="text-[#4E5463] dark:text-[#94A3B8]">
                      Affiliation: {paper.institution}
                    </div>
                  </div>

                  {/* Abstract */}
                  <div className="mt-4 space-y-1.5">
                    <span className="text-[11px] font-mono-code uppercase tracking-wider text-[#4E5463] dark:text-[#94A3B8] font-bold">
                      Abstract Synopsis
                    </span>
                    <p className="text-xs sm:text-sm text-[#12141A] dark:text-[#F8FAFC] leading-relaxed">
                      {paper.abstract}
                    </p>
                  </div>
                </div>

                {/* Topics / Keywords */}
                <div className="mt-6 pt-4 border-t border-[#E8E4DA] dark:border-[#24293D]">
                  <div className="text-[11px] font-mono-code text-[#4E5463] dark:text-[#94A3B8] mb-2 font-medium">Key Thematic Vectors:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {paper.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-0.5 bg-[#FAF8F5] dark:bg-[#181C2B] border border-[#DDD8CB] dark:border-[#24293D] text-[11px] font-mono-code text-[#12141A] dark:text-[#F8FAFC] rounded-xs"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Academic Collaboration Note */}
        <motion.div 
          variants={mechanicalItem}
          className="mt-10 p-5 bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-sm text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm hover:border-[#D65A31] dark:hover:border-[#FF5E3A] transition-colors"
        >
          <div className="space-y-1">
            <span className="font-mono-code text-xs font-bold text-[#12141A] dark:text-[#F8FAFC] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#546E2A] dark:bg-[#10B981] animate-ping"></span>
              Research & Innovation Ecosystem
            </span>
            <p className="text-xs sm:text-sm text-[#4E5463] dark:text-[#94A3B8]">
              Ongoing exploration at K.L.N. Innovation & Research Park focused on cyber-physical data models, edge AI, and optimization frameworks.
            </p>
          </div>
          <span className="px-3 py-1 bg-[#FAF8F5] dark:bg-[#181C2B] border border-[#DDD8CB] dark:border-[#24293D] text-xs font-mono-code text-[#546E2A] dark:text-[#10B981] font-bold rounded-xs shrink-0">
            KLN.IRP Active
          </span>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
