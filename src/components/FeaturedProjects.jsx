import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

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
    <section id="projects" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E7E4DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E7E4DD]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#D65A31] uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-xs bg-[#D65A31]"></span>
              03 // FEATURED WORK
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717]">
              Engineered Systems & Applied AI
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono-code text-xs text-[#6B6B65] max-w-sm text-left md:text-right">
            Full-stack web applications, native mobile architectures, and multimodal computer vision pipelines.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 text-xs font-mono-code scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`px-3.5 py-1.5 rounded-xs transition-all whitespace-nowrap cursor-pointer border ${
                activeFilter === tab.key
                  ? 'bg-[#171717] text-[#FAFAF7] border-[#171717] font-semibold'
                  : 'bg-[#FAF9F5] text-[#6B6B65] border-[#E7E4DD] hover:border-[#171717] hover:text-[#171717]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="space-y-12 lg:space-y-16">
          {filteredProjects.map((project) => {
            return (
              <article
                key={project.id}
                className="bg-[#FFFFFF] border border-[#E7E4DD] rounded-sm p-6 sm:p-8 lg:p-10 hover:border-[#171717] transition-all shadow-xs text-left"
              >
                {/* Project Header Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#EFECE6]">
                  <div className="flex items-center gap-4">
                    <span className="font-mono-code text-3xl sm:text-4xl font-bold text-[#D65A31]">
                      {project.number}
                    </span>
                    <div className="h-8 w-[1px] bg-[#E7E4DD]"></div>
                    <div>
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#171717] uppercase tracking-wide">
                        {project.name}
                      </h3>
                      <span className="text-xs sm:text-sm font-mono-code text-[#6B6B65]">
                        {project.tagline}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-1 rounded-xs bg-[#FAF9F5] border border-[#E7E4DD] font-mono-code text-xs text-[#171717] font-medium">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-xs bg-[#8A9A5B]/15 text-[#8A9A5B] font-mono-code text-xs font-semibold">
                      {project.badge}
                    </span>
                  </div>
                </div>

                {/* Primary Description */}
                <p className="text-sm sm:text-base text-[#171717] leading-relaxed mb-6">
                  {project.shortDescription}
                </p>

                {/* Problem & Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-[#FAF9F5] border-l-3 border-[#D65A31] rounded-r-xs">
                    <div className="flex items-center gap-1.5 text-xs font-mono-code uppercase font-bold text-[#D65A31] mb-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-[#D65A31]" />
                      Problem Solved
                    </div>
                    <p className="text-xs sm:text-sm text-[#6B6B65] leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF9F5] border-l-3 border-[#8A9A5B] rounded-r-xs">
                    <div className="flex items-center gap-1.5 text-xs font-mono-code uppercase font-bold text-[#8A9A5B] mb-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8A9A5B]" />
                      Engineered Solution
                    </div>
                    <p className="text-xs sm:text-sm text-[#6B6B65] leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Architectural Highlights / Key Capabilities */}
                <div className="mb-6">
                  <div className="text-xs font-mono-code uppercase tracking-wider text-[#6B6B65] mb-3">
                    Architectural Modules & Key Capabilities
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.features.map((feat, fIdx) => (
                      <div 
                        key={fIdx} 
                        className="p-3 bg-[#FAF9F5] border border-[#E7E4DD] rounded-xs flex items-start gap-2.5 text-xs text-[#171717]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#8A9A5B] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Role & Contribution Callout */}
                <div className="p-4 bg-[#FFFFFF] border border-[#E7E4DD] rounded-xs mb-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2 mb-2 border-b border-[#EFECE6]">
                    <span className="text-xs font-mono-code uppercase tracking-wider text-[#6B6B65]">
                      Engineering Role & Contribution
                    </span>
                    <span className="px-2.5 py-0.5 rounded-xs bg-[#D65A31]/10 text-[#D65A31] font-mono-code text-xs font-bold">
                      {project.role}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#171717] leading-relaxed">
                    {project.contribution}
                  </p>
                </div>

                {/* Footer Bar: Technology Chips & Action Button */}
                <div className="pt-4 border-t border-[#EFECE6] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-mono-code text-[#6B6B65] mr-1">Stack:</span>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-xs bg-[#FAF9F5] border border-[#E7E4DD] text-xs font-mono-code text-[#171717] hover:border-[#171717] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-mono-code font-semibold text-[#FAFAF7] bg-[#171717] hover:bg-[#D65A31] rounded-xs transition-colors shadow-2xs cursor-pointer group shrink-0"
                  >
                    <span>View System Architecture & Breakdown</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* In-Depth Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
