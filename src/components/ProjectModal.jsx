import React, { useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  AlertCircle
} from 'lucide-react';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#171717]/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="bg-[#FFFFFF] border border-[#E7E4DD] rounded-sm shadow-xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#FAF9F5] px-6 py-4 border-b border-[#E7E4DD] flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="font-mono-code text-xs font-bold text-[#D65A31]">
                PROJECT {project.number}
              </span>
              <span className="text-[#6B6B65]">•</span>
              <span className="px-2 py-0.5 rounded-xs bg-[#EFECE6] text-[#171717] font-mono-code text-[11px]">
                {project.category}
              </span>
              <span className="px-2 py-0.5 rounded-xs bg-[#8A9A5B]/15 text-[#8A9A5B] font-mono-code text-[11px] font-semibold">
                {project.badge}
              </span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#171717]">
              {project.name}
            </h3>
            <p className="text-sm font-medium text-[#6B6B65] mt-0.5">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#6B6B65] hover:text-[#171717] hover:bg-[#EFECE6] rounded-xs transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 divide-y divide-[#EFECE6]">
          
          {/* Executive Overview */}
          <div className="space-y-2">
            <span className="text-xs font-mono-code uppercase tracking-wider text-[#6B6B65] block">
              System Overview & Architecture
            </span>
            <p className="text-sm sm:text-base text-[#171717] leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Problem vs Solution Grid */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-[#FAF9F5] border border-[#E7E4DD] rounded-xs">
              <div className="flex items-center gap-2 text-xs font-mono-code font-bold text-[#D65A31] uppercase tracking-wider mb-2">
                <AlertCircle className="w-4 h-4 text-[#D65A31]" />
                The Problem Solved
              </div>
              <p className="text-sm text-[#171717] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 bg-[#FAF9F5] border border-[#E7E4DD] rounded-xs">
              <div className="flex items-center gap-2 text-xs font-mono-code font-bold text-[#8A9A5B] uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4 text-[#8A9A5B]" />
                The Engineered Solution
              </div>
              <p className="text-sm text-[#171717] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features Breakdown */}
          <div className="pt-6 space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#171717] uppercase tracking-wider font-mono-code">
              Key System Capabilities & Modules
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, index) => (
                <div 
                  key={index}
                  className="p-3 bg-[#FFFFFF] border border-[#E7E4DD] rounded-xs flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#8A9A5B] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#171717] leading-relaxed">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture & Data Flow */}
          <div className="pt-6 space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#171717] uppercase tracking-wider font-mono-code">
              System Architecture & Data Flow
            </h4>
            <div className="p-4 bg-[#FAF9F6] border border-[#E7E4DD] rounded-xs space-y-2.5 font-mono-code text-xs">
              {project.architecture.map((arch, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="px-1.5 py-0.5 rounded-2xs bg-[#171717] text-[#FAFAF7] text-[10px] shrink-0">
                    STAGE 0{index + 1}
                  </span>
                  <span className="text-[#171717] leading-relaxed">
                    {arch}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* My Role & Technical Contribution */}
          <div className="pt-6 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-heading font-bold text-sm text-[#171717] uppercase tracking-wider font-mono-code">
                Gowtham's Role & Engineering Contribution
              </h4>
              <span className="px-2.5 py-0.5 bg-[#D65A31]/10 text-[#D65A31] font-mono-code text-xs font-semibold rounded-xs">
                {project.role}
              </span>
            </div>
            <p className="text-sm text-[#171717] leading-relaxed p-4 bg-[#FAF9F5] border border-[#E7E4DD] rounded-xs">
              {project.contribution}
            </p>
          </div>

          {/* Key Technical Challenges */}
          <div className="pt-6 space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#171717] uppercase tracking-wider font-mono-code">
              Technical Challenges Overcome
            </h4>
            <div className="space-y-2">
              {project.challenges.map((challenge, idx) => (
                <div 
                  key={idx}
                  className="p-3 bg-[#FFFFFF] border border-[#E7E4DD] rounded-xs flex items-start gap-2.5 text-xs text-[#6B6B65]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D65A31] shrink-0 mt-1.5"></span>
                  <span className="leading-relaxed text-[#171717]">{challenge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="pt-6 space-y-3">
            <h4 className="font-heading font-bold text-xs text-[#6B6B65] uppercase tracking-wider font-mono-code">
              Technologies & Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="px-2.5 py-1 rounded-xs bg-[#FFFFFF] border border-[#E7E4DD] text-xs font-mono-code text-[#171717] font-medium shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#FAF9F5] px-6 py-3 border-t border-[#E7E4DD] flex items-center justify-between text-xs font-mono-code text-[#6B6B65]">
          <span>Gowtham B • Portfolio Technical Specification</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#171717] text-[#FAFAF7] hover:bg-[#D65A31] rounded-xs transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
