import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { achievements } from '../data/portfolioData';
import TiltCard from './TiltCard';
import SectionWrapper from './SectionWrapper';
import { 
  mechanicalHeader, 
  mechanicalCard, 
  mechanicalItem 
} from '../utils/motionVariants';

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
      return 'bg-[#D65A31]/15 text-[#D65A31] border-[#D65A31]/30 dark:bg-[#FF5E3A]/15 dark:text-[#FF5E3A] dark:border-[#FF5E3A]/30';
    }
    if (badge.includes('International') || badge.includes('State')) {
      return 'bg-[#546E2A]/15 text-[#546E2A] border-[#546E2A]/30 dark:bg-[#10B981]/15 dark:text-[#10B981] dark:border-[#10B981]/30';
    }
    return 'bg-[#FAF8F5] dark:bg-[#181C2B] text-[#12141A] dark:text-[#F8FAFC] border-[#DDD8CB] dark:border-[#24293D]';
  };

  return (
    <SectionWrapper id="achievements">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Mechanical Drop-In */}
        <motion.div 
          variants={mechanicalHeader}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#DDD8CB] dark:border-[#24293D]"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#D65A31] dark:text-[#FF5E3A] uppercase tracking-wider mb-2 font-bold">
              <span className="w-2 h-2 rounded-xs bg-[#D65A31] dark:bg-[#FF5E3A] animate-ping"></span>
              06 // HONORS & RECOGNITIONS
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#12141A] dark:text-[#F8FAFC]">
              Achievements & Leadership
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono-code text-xs text-[#4E5463] dark:text-[#94A3B8] max-w-sm text-left md:text-right font-medium">
            Competitive hackathons, technical paper accolades, project leadership, and event coordination.
          </p>
        </motion.div>

        {/* Filter Navigation */}
        <motion.div 
          variants={mechanicalItem}
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-mono-code scrollbar-none"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-3.5 py-1.5 rounded-xs transition-all whitespace-nowrap cursor-pointer border ${
                filter === cat.key
                  ? 'bg-[#12141A] text-[#FFFFFF] dark:bg-[#FF5E3A] dark:text-[#08090D] border-[#12141A] dark:border-[#FF5E3A] font-bold shadow-sm'
                  : 'bg-[#FFFFFF] dark:bg-[#12141F] text-[#4E5463] dark:text-[#94A3B8] border-[#DDD8CB] dark:border-[#24293D] hover:border-[#D65A31] dark:hover:border-[#FF5E3A] hover:text-[#12141A] dark:hover:text-[#F8FAFC]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Achievements Grid - Mechanical Card Docking */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          <AnimatePresence mode="popLayout">
            {filteredAchievements.map((item, index) => (
              <motion.div
                key={item.title + index}
                variants={mechanicalCard}
              >
                <TiltCard
                  className="bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-sm p-6 hover:border-[#D65A31] dark:hover:border-[#FF5E3A] hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,94,58,0.12)] transition-all flex flex-col justify-between shadow-2xs group h-full"
                >
                  <div>
                    {/* Header with Badge & Year */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E8E4DA] dark:border-[#24293D]">
                      <span className={`px-2 py-0.5 rounded-xs border font-mono-code text-[11px] font-bold ${getBadgeStyle(item.badge)}`}>
                        {item.badge}
                      </span>
                      <span className="font-mono-code text-xs text-[#4E5463] dark:text-[#94A3B8]">
                        {item.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-base text-[#12141A] dark:text-[#F8FAFC] group-hover:text-[#D65A31] dark:group-hover:text-[#FF5E3A] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {/* Organization */}
                    <div className="text-xs font-mono-code text-[#546E2A] dark:text-[#10B981] mt-1.5 font-bold">
                      {item.organization}
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#4E5463] dark:text-[#94A3B8] mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Category Footer */}
                  <div className="mt-4 pt-3 border-t border-[#E8E4DA] dark:border-[#24293D] flex items-center justify-between text-[11px] font-mono-code text-[#4E5463] dark:text-[#94A3B8]">
                    <span>{item.category}</span>
                    <span className="text-[#12141A] dark:text-[#F8FAFC] font-bold">Verified</span>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </SectionWrapper>
  );
}
