import React, { useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  AlertCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#000000]/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="bg-[#FFFFFF] dark:bg-[#12141F] border border-[#E2DFD7] dark:border-[#24293D] rounded-sm shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#FAF9F5] dark:bg-[#181C2B] px-6 py-4 border-b border-[#E2DFD7] dark:border-[#24293D] flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="font-mono-code text-xs font-bold text-[#D65A31] dark:text-[#FF5E3A]">
                PROJECT {project.number}
              </span>
              <span className="text-[#525866] dark:text-[#94A3B8]">•</span>
              <span className="px-2 py-0.5 rounded-xs bg-[#ECEAE3] dark:bg-[#24293D] text-[#0F1117] dark:text-[#F8FAFC] font-mono-code text-[11px] font-semibold">
                {project.category}
              </span>
              <span className="px-2 py-0.5 rounded-xs bg-[#607936]/15 dark:bg-[#10B981]/15 text-[#607936] dark:text-[#10B981] font-mono-code text-[11px] font-bold">
                {project.badge}
              </span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F1117] dark:text-[#F8FAFC]">
              {project.name}
            </h3>
            <p className="text-sm font-medium text-[#525866] dark:text-[#94A3B8] mt-0.5">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#525866] dark:text-[#94A3B8] hover:text-[#0F1117] dark:hover:text-[#F8FAFC] hover:bg-[#ECEAE3] dark:hover:bg-[#24293D] rounded-xs transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 divide-y divide-[#ECEAE3] dark:divide-[#24293D]">
          
          {/* Executive Overview */}
          <div className="space-y-2">
            <span className="text-xs font-mono-code uppercase tracking-wider text-[#525866] dark:text-[#94A3B8] block font-bold">
              System Overview & Architecture
            </span>
            <p className="text-sm sm:text-base text-[#0F1117] dark:text-[#F8FAFC] leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Problem vs Solution Grid */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-[#F5F4EE] dark:bg-[#181C2B] border border-[#E2DFD7] dark:border-[#24293D] rounded-xs">
              <div className="flex items-center gap-2 text-xs font-mono-code font-bold text-[#D65A31] dark:text-[#FF5E3A] uppercase tracking-wider mb-2">
                <AlertCircle className="w-4 h-4 text-[#D65A31] dark:text-[#FF5E3A]" />
                The Problem Solved
              </div>
              <p className="text-sm text-[#0F1117] dark:text-[#F8FAFC] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 bg-[#F5F4EE] dark:bg-[#181C2B] border border-[#E2DFD7] dark:border-[#24293D] rounded-xs">
              <div className="flex items-center gap-2 text-xs font-mono-code font-bold text-[#607936] dark:text-[#10B981] uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4 text-[#607936] dark:text-[#10B981]" />
                The Engineered Solution
              </div>
              <p className="text-sm text-[#0F1117] dark:text-[#F8FAFC] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features Breakdown */}
          <div className="pt-6 space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#0F1117] dark:text-[#F8FAFC] uppercase tracking-wider font-mono-code">
              Key System Capabilities & Modules
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, index) => (
                <div 
                  key={index}
                  className="p-3 bg-[#FFFFFF] dark:bg-[#12141F] border border-[#E2DFD7] dark:border-[#24293D] rounded-xs flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#607936] dark:text-[#10B981] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#0F1117] dark:text-[#F8FAFC] leading-relaxed">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture & Data Flow */}
          <div className="pt-6 space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#0F1117] dark:text-[#F8FAFC] uppercase tracking-wider font-mono-code">
              System Architecture & Data Flow
            </h4>
            <div className="p-4 bg-[#F5F4EE] dark:bg-[#181C2B] border border-[#E2DFD7] dark:border-[#24293D] rounded-xs space-y-2.5 font-mono-code text-xs">
              {project.architecture.map((arch, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="px-1.5 py-0.5 rounded-2xs bg-[#0F1117] text-[#FAF9F5] dark:bg-[#FF5E3A] dark:text-[#08090D] text-[10px] shrink-0 font-bold">
                    STAGE 0{index + 1}
                  </span>
                  <span className="text-[#0F1117] dark:text-[#F8FAFC] leading-relaxed">
                    {arch}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* My Role & Technical Contribution */}
          <div className="pt-6 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-heading font-bold text-sm text-[#0F1117] dark:text-[#F8FAFC] uppercase tracking-wider font-mono-code">
                Gowtham's Role & Engineering Contribution
              </h4>
              <span className="px-2.5 py-0.5 bg-[#D65A31]/10 dark:bg-[#FF5E3A]/15 text-[#D65A31] dark:text-[#FF5E3A] font-mono-code text-xs font-bold rounded-xs">
                {project.role}
              </span>
            </div>
            <p className="text-sm text-[#0F1117] dark:text-[#F8FAFC] leading-relaxed p-4 bg-[#F5F4EE] dark:bg-[#181C2B] border border-[#E2DFD7] dark:border-[#24293D] rounded-xs">
              {project.contribution}
            </p>
          </div>

          {/* Key Technical Challenges */}
          <div className="pt-6 space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#0F1117] dark:text-[#F8FAFC] uppercase tracking-wider font-mono-code">
              Technical Challenges Overcome
            </h4>
            <div className="space-y-2">
              {project.challenges.map((challenge, idx) => (
                <div 
                  key={idx}
                  className="p-3 bg-[#FFFFFF] dark:bg-[#12141F] border border-[#E2DFD7] dark:border-[#24293D] rounded-xs flex items-start gap-2.5 text-xs text-[#525866] dark:text-[#94A3B8]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D65A31] dark:bg-[#FF5E3A] shrink-0 mt-1.5"></span>
                  <span className="leading-relaxed text-[#0F1117] dark:text-[#F8FAFC]">{challenge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="pt-6 space-y-3">
            <h4 className="font-heading font-bold text-xs text-[#525866] dark:text-[#94A3B8] uppercase tracking-wider font-mono-code">
              Technologies & Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="px-2.5 py-1 rounded-xs bg-[#FFFFFF] dark:bg-[#12141F] border border-[#E2DFD7] dark:border-[#24293D] text-xs font-mono-code text-[#0F1117] dark:text-[#F8FAFC] font-bold shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#FAF9F5] dark:bg-[#181C2B] px-6 py-3 border-t border-[#E2DFD7] dark:border-[#24293D] flex items-center justify-between text-xs font-mono-code text-[#525866] dark:text-[#94A3B8]">
          <span>Gowtham B • Portfolio Technical Specification</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#0F1117] dark:bg-[#FF5E3A] text-[#FAF9F5] dark:text-[#08090D] dark:font-bold hover:bg-[#D65A31] dark:hover:bg-[#FF7A5C] rounded-xs transition-colors cursor-pointer font-bold"
          >
            Close Details
          </button>
        </div>
      </motion.div>
    </div>
  );
}
