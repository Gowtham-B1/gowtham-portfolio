import React, { useState } from 'react';

import { achievements } from '../data/portfolioData';

export default function Achievements() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { label: 'All Honors (8)', key: 'all' },
    { label: 'Hackathons & Contests', key: 'contest' },
    { label: 'Research & Papers', key: 'research' },
    { label: 'Leadership & Events', key: 'leadership' }
  ];

  const filteredAchievements = achievements.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'contest') return item.category.includes('Hackathon') || item.category.includes('Contest') || item.category.includes('Competitions');
    if (filter === 'research') return item.category.includes('Research') || item.category.includes('Technical Paper');
    if (filter === 'leadership') return item.category.includes('Leadership') || item.category.includes('Event');
    return true;
  });

  const getBadgeStyle = (badge) => {
    if (badge.includes('Winner') || badge.includes('Prize')) {
      return 'bg-[#D65A31]/15 text-[#D65A31] border-[#D65A31]/30';
    }
    if (badge.includes('International') || badge.includes('State')) {
      return 'bg-[#8A9A5B]/15 text-[#8A9A5B] border-[#8A9A5B]/30';
    }
    return 'bg-[#FAF9F5] text-[#171717] border-[#E7E4DD]';
  };

  return (
    <section id="achievements" className="py-20 lg:py-28 bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E7E4DD]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#D65A31] uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-xs bg-[#D65A31]"></span>
              06 // HONORS & RECOGNITIONS
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717]">
              Achievements & Leadership
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono-code text-xs text-[#6B6B65] max-w-sm text-left md:text-right">
            Competitive hackathons, technical paper accolades, project leadership, and event coordination.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-mono-code scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-3.5 py-1.5 rounded-xs transition-all whitespace-nowrap cursor-pointer border ${
                filter === cat.key
                  ? 'bg-[#171717] text-[#FAFAF7] border-[#171717] font-semibold'
                  : 'bg-[#FFFFFF] text-[#6B6B65] border-[#E7E4DD] hover:border-[#171717] hover:text-[#171717]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {filteredAchievements.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] border border-[#E7E4DD] rounded-sm p-6 hover:border-[#171717] transition-all flex flex-col justify-between shadow-2xs group"
            >
              <div>
                {/* Header with Badge & Year */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EFECE6]">
                  <span className={`px-2 py-0.5 rounded-xs border font-mono-code text-[11px] font-semibold ${getBadgeStyle(item.badge)}`}>
                    {item.badge}
                  </span>
                  <span className="font-mono-code text-xs text-[#6B6B65]">
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-base text-[#171717] group-hover:text-[#D65A31] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Organization */}
                <div className="text-xs font-mono-code text-[#8A9A5B] mt-1.5 font-medium">
                  {item.organization}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#6B6B65] mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Category Footer */}
              <div className="mt-4 pt-3 border-t border-[#EFECE6] flex items-center justify-between text-[11px] font-mono-code text-[#6B6B65]">
                <span>{item.category}</span>
                <span className="text-[#171717] font-semibold">Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
