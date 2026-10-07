import React, { useState } from 'react';
import { CheckCircle2, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { certifications } from '../data/portfolioData';
import TiltCard from './TiltCard';
import SectionWrapper from './SectionWrapper';
import { 
  mechanicalHeader, 
  mechanicalCard, 
  mechanicalItem 
} from '../utils/motionVariants';

export default function Certifications() {
  const [activeTab, setActiveTab] = useState('all');

  const filterTabs = [
    { label: 'All Certifications (9)', key: 'all' },
    { label: 'NPTEL Academic', key: 'nptel' },
    { label: 'Industry Internships', key: 'internship' },
    { label: 'Full-Stack & GenAI', key: 'tech' }
  ];

  const filteredCerts = certifications.filter((cert) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'nptel') return cert.issuer.includes('NPTEL');
    if (activeTab === 'internship') return cert.type.includes('Internship');
    if (activeTab === 'tech') return cert.title.includes('Full Stack') || cert.title.includes('AI') || cert.title.includes('Front-End');
    return true;
  });

  return (
    <SectionWrapper id="certifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Mechanical Drop-In */}
        <motion.div 
          variants={mechanicalHeader}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#DDD8CB] dark:border-[#24293D]"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#D65A31] dark:text-[#FF5E3A] uppercase tracking-wider mb-2 font-bold">
              <span className="w-2 h-2 rounded-xs bg-[#D65A31] dark:bg-[#FF5E3A] animate-ping"></span>
              07 // CREDENTIALS & CERTIFICATIONS
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#12141A] dark:text-[#F8FAFC]">
              Verified Technical Credentials
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono-code text-xs text-[#4E5463] dark:text-[#94A3B8] max-w-sm text-left md:text-right font-medium">
            Curriculum from NPTEL IIT initiatives, professional industry bootcamps, and technical development programs.
          </p>
        </motion.div>

        {/* Filter Navigation */}
        <motion.div 
          variants={mechanicalItem}
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-mono-code scrollbar-none"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-3.5 py-1.5 rounded-xs transition-all whitespace-nowrap cursor-pointer border ${
                activeTab === tab.key
                  ? 'bg-[#12141A] text-[#FFFFFF] dark:bg-[#FF5E3A] dark:text-[#08090D] border-[#12141A] dark:border-[#FF5E3A] font-bold shadow-sm'
                  : 'bg-[#FFFFFF] dark:bg-[#12141F] text-[#4E5463] dark:text-[#94A3B8] border-[#DDD8CB] dark:border-[#24293D] hover:border-[#D65A31] dark:hover:border-[#FF5E3A] hover:text-[#12141A] dark:hover:text-[#F8FAFC]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Certifications Grid - Mechanical Card Docking */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert, index) => (
              <motion.div
                key={cert.title + index}
                variants={mechanicalCard}
              >
                <TiltCard
                  className="bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-sm p-6 hover:border-[#D65A31] dark:hover:border-[#FF5E3A] hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,94,58,0.12)] transition-all flex flex-col justify-between shadow-2xs group h-full"
                >
                  <div>
                    {/* Header with Issuer & Period */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E8E4DA] dark:border-[#24293D]">
                      <span className="px-2 py-0.5 rounded-xs bg-[#FAF8F5] dark:bg-[#181C2B] border border-[#DDD8CB] dark:border-[#24293D] font-mono-code text-[11px] font-bold text-[#12141A] dark:text-[#F8FAFC]">
                        {cert.issuer}
                      </span>
                      <div className="flex items-center gap-1 font-mono-code text-xs text-[#4E5463] dark:text-[#94A3B8]">
                        <Calendar className="w-3 h-3 text-[#D65A31] dark:text-[#FF5E3A]" />
                        <span>{cert.period}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-base text-[#12141A] dark:text-[#F8FAFC] group-hover:text-[#D65A31] dark:group-hover:text-[#FF5E3A] transition-colors leading-snug">
                      {cert.title}
                    </h3>

                    {/* Type Badge */}
                    <div className="mt-2 text-xs font-mono-code text-[#546E2A] dark:text-[#10B981] font-bold">
                      {cert.type}
                    </div>

                    {/* Associated Skills */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 bg-[#FAF8F5] dark:bg-[#181C2B] border border-[#DDD8CB] dark:border-[#24293D] text-[10px] font-mono-code text-[#4E5463] dark:text-[#94A3B8] rounded-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-5 pt-3 border-t border-[#E8E4DA] dark:border-[#24293D] flex items-center justify-between text-[11px] font-mono-code text-[#4E5463] dark:text-[#94A3B8]">
                    <span className="flex items-center gap-1 text-[#546E2A] dark:text-[#10B981] font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified Credential
                    </span>
                    <span>ID // Verified</span>
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
