import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import TiltCard from './TiltCard';
import SectionWrapper from './SectionWrapper';
import { 
  mechanicalHeader, 
  mechanicalLeft, 
  mechanicalRight, 
  mechanicalItem 
} from '../utils/motionVariants';

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { label: 'All Projects (4)', key: 'all' },
    { label: 'AI & Computer Vision', key: 'ai' },
    { label: 'Enterprise & GovTech', key: 'enterprise' },
    { label: 'Healthcare & Mobile', key: 'web_mobile' },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ai') return project.id === 'hsde' || project.id === 'museart';
    if (activeFilter === 'enterprise') return project.id === 'embook';
    if (activeFilter === 'web_mobile') return project.id === 'hospireo' || project.id === 'hsde';
    return true;
  });

  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Mechanical Drop-In */}
        <motion.div 
          variants={mechanicalHeader}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#DDD8CB] dark:border-[#24293D]"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#D65A31] dark:text-[#FF5E3A] uppercase tracking-wider mb-2 font-bold">
              <span className="w-2 h-2 rounded-xs bg-[#D65A31] dark:bg-[#FF5E3A] animate-ping"></span>
              03 // FEATURED WORK
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#12141A] dark:text-[#F8FAFC]">
              Engineered Systems & Applied AI
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono-code text-xs text-[#4E5463] dark:text-[#94A3B8] max-w-sm text-left md:text-right font-medium">
            Full-stack web applications, native mobile architectures, and multimodal computer vision pipelines.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          variants={mechanicalItem}
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 text-xs font-mono-code scrollbar-none"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`px-3.5 py-1.5 rounded-xs transition-all whitespace-nowrap cursor-pointer border ${
                activeFilter === tab.key
                  ? 'bg-[#12141A] text-[#FFFFFF] dark:bg-[#FF5E3A] dark:text-[#08090D] border-[#12141A] dark:border-[#FF5E3A] font-bold shadow-sm'
                  : 'bg-[#FFFFFF] dark:bg-[#12141F] text-[#4E5463] dark:text-[#94A3B8] border-[#DDD8CB] dark:border-[#24293D] hover:border-[#D65A31] dark:hover:border-[#FF5E3A] hover:text-[#12141A] dark:hover:text-[#F8FAFC]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Projects List - Alternating Physical Assembly (Left / Right docking) */}
        <div className="space-y-12 lg:space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={project.id}
                  variants={isEven ? mechanicalLeft : mechanicalRight}
                >
                  <TiltCard
                    className="bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-sm p-6 sm:p-8 lg:p-10 hover:border-[#D65A31] dark:hover:border-[#FF5E3A] hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(255,94,58,0.14)] transition-all shadow-sm text-left group"
                  >
                    {/* Project Header Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#E8E4DA] dark:border-[#24293D]">
                      <div className="flex items-center gap-4">
                        <span className="font-mono-code text-3xl sm:text-4xl font-extrabold text-[#D65A31] dark:text-[#FF5E3A]">
                          {project.number}
                        </span>
                        <div className="h-8 w-[1px] bg-[#DDD8CB] dark:bg-[#24293D]"></div>
                        <div>
                          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#12141A] dark:text-[#F8FAFC] uppercase tracking-wide group-hover:text-[#D65A31] dark:group-hover:text-[#FF5E3A] transition-colors">
                            {project.name}
                          </h3>
                          <span className="text-xs sm:text-sm font-mono-code text-[#4E5463] dark:text-[#94A3B8]">
                            {project.tagline}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-1 rounded-xs bg-[#FAF8F5] dark:bg-[#181C2B] border border-[#DDD8CB] dark:border-[#24293D] font-mono-code text-xs text-[#12141A] dark:text-[#F8FAFC] font-medium">
                          {project.category}
                        </span>
                        <span className="px-2.5 py-1 rounded-xs bg-[#546E2A]/15 dark:bg-[#10B981]/15 text-[#546E2A] dark:text-[#10B981] font-mono-code text-xs font-bold">
                          {project.badge}
                        </span>
                      </div>
                    </div>

                    {/* Primary Description */}
                    <p className="text-sm sm:text-base text-[#12141A] dark:text-[#F8FAFC] leading-relaxed mb-6">
                      {project.shortDescription}
                    </p>

                    {/* Problem & Solution Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="p-4 bg-[#FAF8F5] dark:bg-[#181C2B] border-l-3 border-[#D65A31] dark:border-[#FF5E3A] rounded-r-xs">
                        <div className="flex items-center gap-1.5 text-xs font-mono-code uppercase font-bold text-[#D65A31] dark:text-[#FF5E3A] mb-1.5">
                          <AlertCircle className="w-3.5 h-3.5 text-[#D65A31] dark:text-[#FF5E3A]" />
                          Problem Solved
                        </div>
                        <p className="text-xs sm:text-sm text-[#4E5463] dark:text-[#94A3B8] leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      <div className="p-4 bg-[#FAF8F5] dark:bg-[#181C2B] border-l-3 border-[#546E2A] dark:border-[#10B981] rounded-r-xs">
                        <div className="flex items-center gap-1.5 text-xs font-mono-code uppercase font-bold text-[#546E2A] dark:text-[#10B981] mb-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#546E2A] dark:text-[#10B981]" />
                          Engineered Solution
                        </div>
                        <p className="text-xs sm:text-sm text-[#4E5463] dark:text-[#94A3B8] leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Architectural Highlights / Key Capabilities */}
                    <div className="mb-6">
                      <div className="text-xs font-mono-code uppercase tracking-wider text-[#4E5463] dark:text-[#94A3B8] mb-3 font-bold">
                        Architectural Modules & Key Capabilities
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {project.features.map((feat, fIdx) => (
                          <div 
                            key={fIdx} 
                            className="p-3 bg-[#FAF8F5] dark:bg-[#181C2B] border border-[#DDD8CB] dark:border-[#24293D] rounded-xs flex items-start gap-2.5 text-xs text-[#12141A] dark:text-[#F8FAFC]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#546E2A] dark:text-[#10B981] shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Role & Contribution Callout */}
                    <div className="p-4 bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-xs mb-6 shadow-2xs">
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 mb-2 border-b border-[#E8E4DA] dark:border-[#24293D]">
                        <span className="text-xs font-mono-code uppercase tracking-wider text-[#4E5463] dark:text-[#94A3B8] font-bold">
                          Engineering Role & Contribution
                        </span>
                        <span className="px-2.5 py-0.5 rounded-xs bg-[#D65A31]/10 dark:bg-[#FF5E3A]/15 text-[#D65A31] dark:text-[#FF5E3A] font-mono-code text-xs font-bold">
                          {project.role}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#12141A] dark:text-[#F8FAFC] leading-relaxed">
                        {project.contribution}
                      </p>
                    </div>

                    {/* Footer Bar: Technology Chips & Action Button */}
                    <div className="pt-4 border-t border-[#E8E4DA] dark:border-[#24293D] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-xs font-mono-code text-[#4E5463] dark:text-[#94A3B8] mr-1 font-medium">Stack:</span>
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-xs bg-[#FAF8F5] dark:bg-[#181C2B] border border-[#DDD8CB] dark:border-[#24293D] text-xs font-mono-code text-[#12141A] dark:text-[#F8FAFC] hover:border-[#D65A31] dark:hover:border-[#FF5E3A] transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.03, y: -1 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-mono-code font-bold text-[#FFFFFF] bg-[#12141A] hover:bg-[#D65A31] dark:bg-[#FF5E3A] dark:text-[#08090D] dark:hover:bg-[#FF7A5C] rounded-xs transition-all shadow-sm cursor-pointer group shrink-0"
                      >
                        <span>View System Architecture & Breakdown</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </motion.button>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* In-Depth Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </SectionWrapper>
  );
}
