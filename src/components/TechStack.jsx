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
import { techStackCategories } from '../data/portfolioData';

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
    <section id="tech-stack" className="py-20 lg:py-28 bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E7E4DD]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#D65A31] uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-xs bg-[#D65A31]"></span>
              02 // TECHNICAL CAPABILITIES
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717]">
              Technical Stack & Tooling
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono-code text-xs text-[#6B6B65] max-w-sm text-left md:text-right">
            Practical competencies validated through full-stack projects, AI pipelines, and research.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-mono-code scrollbar-none">
          <div className="flex items-center gap-1.5 text-[#6B6B65] pr-2 shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#D65A31]" />
            <span className="hidden sm:inline">Filter:</span>
          </div>
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setSelectedFilter(opt.key)}
              className={`px-3 py-1.5 rounded-xs transition-all whitespace-nowrap cursor-pointer border ${
                selectedFilter === opt.key
                  ? 'bg-[#171717] text-[#FAFAF7] border-[#171717] font-semibold'
                  : 'bg-[#FFFFFF] text-[#6B6B65] border-[#E7E4DD] hover:border-[#171717] hover:text-[#171717]'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const Icon = getCategoryIcon(cat.key);
            return (
              <div
                key={cat.category}
                className="bg-[#FFFFFF] border border-[#E7E4DD] rounded-sm p-6 hover:shadow-sm hover:border-[#D65A31]/50 transition-all text-left group"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#EFECE6]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xs bg-[#FAF9F5] border border-[#E7E4DD] flex items-center justify-center text-[#D65A31] group-hover:bg-[#D65A31] group-hover:text-[#FAFAF7] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono-code text-xs font-bold text-[#171717] tracking-wider uppercase">
                      {cat.category}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono-code text-[#6B6B65] bg-[#FAF9F5] px-2 py-0.5 rounded-xs border border-[#E7E4DD]">
                    {cat.skills.length} tools
                  </span>
                </div>

                {/* Skills List with Contextual Application */}
                <div className="space-y-3.5">
                  {cat.skills.map((skill) => (
                    <div 
                      key={skill.name} 
                      className="p-2.5 rounded-xs bg-[#FAF9F5] border border-[#E7E4DD]/60 hover:border-[#D65A31]/40 hover:bg-[#FFFFFF] transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-semibold text-sm text-[#171717]">
                          {skill.name}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8A9A5B]"></span>
                      </div>
                      <p className="text-[11px] text-[#6B6B65] font-sans mt-1 leading-relaxed">
                        {skill.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Philosophy Note */}
        <div className="mt-12 p-4 bg-[#FFFFFF] border border-[#E7E4DD] rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#8A9A5B]"></div>
            <span className="font-mono-code text-xs text-[#171717]">
              <strong>Engineering Principle:</strong> Proficiency is demonstrated through deployable architectures and measurable problem-solving, not arbitrary percentage bars.
            </span>
          </div>
          <span className="text-xs font-mono-code text-[#D65A31] shrink-0 font-medium">
            Verified via Project Implementations →
          </span>
        </div>

      </div>
    </section>
  );
}
