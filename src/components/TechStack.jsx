import React, { useState } from 'react';
import { 
  Code, 
  Terminal, 
  Layers, 
  Database, 
  Cpu, 
  Wrench, 
  Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { techStackCategories } from '../data/portfolioData';
import TiltCard from './TiltCard';
import SectionWrapper from './SectionWrapper';
import { 
  mechanicalHeader, 
  mechanicalCard, 
  mechanicalItem 
} from '../utils/motionVariants';

export default function TechStack() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterOptions = [
    { label: 'All Technologies', key: 'all' },
    { label: 'Languages', key: 'languages' },
    { label: 'Frontend', key: 'frontend' },
    { label: 'Backend & APIs', key: 'backend' },
    { label: 'Databases & Cloud', key: 'database' },
    { label: 'AI & Computer Vision', key: 'ai' },
    { label: 'Tools', key: 'tools' }
  ];

  const getCategoryIcon = (key) => {
    switch (key) {
      case 'languages': return Terminal;
      case 'frontend': return Code;
      case 'backend': return Layers;
      case 'database': return Database;
      case 'ai': return Cpu;
      default: return Wrench;
    }
  };

  const filteredCategories = selectedFilter === 'all' 
    ? techStackCategories 
    : techStackCategories.filter(cat => cat.key === selectedFilter);

  return (
    <SectionWrapper id="tech-stack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Mechanical Drop-In */}
        <motion.div 
          variants={mechanicalHeader}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#DDD8CB] dark:border-[#24293D]"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#D65A31] dark:text-[#FF5E3A] uppercase tracking-wider mb-2 font-bold">
              <span className="w-2 h-2 rounded-xs bg-[#D65A31] dark:bg-[#FF5E3A] animate-ping"></span>
              02 // TECHNICAL CAPABILITIES
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#12141A] dark:text-[#F8FAFC]">
              Technical Stack & Tooling
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono-code text-xs text-[#4E5463] dark:text-[#94A3B8] max-w-sm text-left md:text-right font-medium">
            Practical competencies validated through full-stack projects, AI pipelines, and research.
          </p>
        </motion.div>

        {/* Filter Navigation */}
        <motion.div 
          variants={mechanicalItem}
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-mono-code scrollbar-none"
        >
          <div className="flex items-center gap-1.5 text-[#4E5463] dark:text-[#94A3B8] pr-2 shrink-0 font-medium">
            <Filter className="w-3.5 h-3.5 text-[#D65A31] dark:text-[#FF5E3A]" />
            <span className="hidden sm:inline">Filter:</span>
          </div>
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setSelectedFilter(opt.key)}
              className={`px-3.5 py-1.5 rounded-xs transition-all whitespace-nowrap cursor-pointer border ${
                selectedFilter === opt.key
                  ? 'bg-[#12141A] text-[#FFFFFF] dark:bg-[#FF5E3A] dark:text-[#08090D] border-[#12141A] dark:border-[#FF5E3A] font-bold shadow-sm'
                  : 'bg-[#FFFFFF] dark:bg-[#12141F] text-[#4E5463] dark:text-[#94A3B8] border-[#DDD8CB] dark:border-[#24293D] hover:border-[#D65A31] dark:hover:border-[#FF5E3A] hover:text-[#12141A] dark:hover:text-[#F8FAFC]'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </motion.div>

        {/* Categories Grid - Mechanical Component Assembly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat, index) => {
              const Icon = getCategoryIcon(cat.key);
              return (
                <motion.div 
                  key={cat.category}
                  variants={mechanicalCard}
                  custom={index}
                >
                  <TiltCard
                    className="bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-sm p-6 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,94,58,0.12)] hover:border-[#D65A31] dark:hover:border-[#FF5E3A] transition-all text-left group h-full flex flex-col justify-between shadow-2xs"
                  >
                    <div>
                      {/* Category Header */}
                      <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E8E4DA] dark:border-[#24293D]">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-xs bg-[#FAF8F5] dark:bg-[#181C2B] border border-[#DDD8CB] dark:border-[#24293D] flex items-center justify-center text-[#D65A31] dark:text-[#FF5E3A] group-hover:bg-[#D65A31] group-hover:text-[#FFFFFF] dark:group-hover:bg-[#FF5E3A] dark:group-hover:text-[#08090D] transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="font-mono-code text-xs font-bold text-[#12141A] dark:text-[#F8FAFC] tracking-wider uppercase">
                            {cat.category}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono-code text-[#4E5463] dark:text-[#94A3B8] bg-[#FAF8F5] dark:bg-[#181C2B] px-2 py-0.5 rounded-xs border border-[#DDD8CB] dark:border-[#24293D]">
                          {cat.skills.length} tools
                        </span>
                      </div>

                      {/* Skills List with Contextual Application */}
                      <div className="space-y-3">
                        {cat.skills.map((skill) => (
                          <div 
                            key={skill.name} 
                            className="p-2.5 rounded-xs bg-[#FAF8F5] dark:bg-[#181C2B] border border-[#DDD8CB]/60 dark:border-[#24293D] hover:border-[#D65A31]/50 dark:hover:border-[#FF5E3A]/50 hover:bg-[#FFFFFF] dark:hover:bg-[#12141F] transition-all"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-heading font-bold text-sm text-[#12141A] dark:text-[#F8FAFC]">
                                {skill.name}
                              </span>
                              <span className="w-1.5 h-1.5 rounded-full bg-[#546E2A] dark:bg-[#10B981]"></span>
                            </div>
                            <p className="text-[11px] text-[#4E5463] dark:text-[#94A3B8] font-sans mt-1 leading-relaxed">
                              {skill.context}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Technical Philosophy Note */}
        <motion.div 
          variants={mechanicalItem}
          className="mt-12 p-4 bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left shadow-sm hover:border-[#D65A31] dark:hover:border-[#FF5E3A] transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#546E2A] dark:bg-[#10B981] animate-ping"></div>
            <span className="font-mono-code text-xs text-[#12141A] dark:text-[#F8FAFC]">
              <strong>Engineering Principle:</strong> Proficiency is demonstrated through deployable architectures and measurable problem-solving, not arbitrary percentage bars.
            </span>
          </div>
          <span className="text-xs font-mono-code text-[#D65A31] dark:text-[#FF5E3A] shrink-0 font-bold">
            Verified via Project Implementations →
          </span>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
