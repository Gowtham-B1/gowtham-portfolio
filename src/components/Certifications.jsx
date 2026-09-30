import React, { useState } from 'react';
import { CheckCircle2, Calendar } from 'lucide-react';
import { certifications } from '../data/portfolioData';

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
    <section id="certifications" className="py-20 lg:py-28 bg-[#FFFFFF] border-y border-[#E7E4DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E7E4DD]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#D65A31] uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-xs bg-[#D65A31]"></span>
              07 // CREDENTIALS & CERTIFICATIONS
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717]">
              Verified Technical Credentials
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono-code text-xs text-[#6B6B65] max-w-sm text-left md:text-right">
            Curriculum from NPTEL IIT initiatives, professional industry bootcamps, and technical development programs.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-mono-code scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-3.5 py-1.5 rounded-xs transition-all whitespace-nowrap cursor-pointer border ${
                activeTab === tab.key
                  ? 'bg-[#171717] text-[#FAFAF7] border-[#171717] font-semibold'
                  : 'bg-[#FAF9F5] text-[#6B6B65] border-[#E7E4DD] hover:border-[#171717] hover:text-[#171717]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {filteredCerts.map((cert, index) => (
            <div
              key={index}
              className="bg-[#FAF9F5] border border-[#E7E4DD] rounded-sm p-6 hover:border-[#171717] transition-all flex flex-col justify-between shadow-2xs group"
            >
              <div>
                {/* Header with Issuer & Period */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EFECE6]">
                  <span className="px-2 py-0.5 rounded-xs bg-[#FFFFFF] border border-[#E7E4DD] font-mono-code text-[11px] font-semibold text-[#171717]">
                    {cert.issuer}
                  </span>
                  <div className="flex items-center gap-1 font-mono-code text-xs text-[#6B6B65]">
                    <Calendar className="w-3 h-3 text-[#D65A31]" />
                    <span>{cert.period}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-base text-[#171717] group-hover:text-[#D65A31] transition-colors leading-snug">
                  {cert.title}
                </h3>

                {/* Type Badge */}
                <div className="mt-2 text-xs font-mono-code text-[#8A9A5B] font-medium">
                  {cert.type}
                </div>

                {/* Associated Skills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 bg-[#FFFFFF] border border-[#E7E4DD] text-[10px] font-mono-code text-[#6B6B65] rounded-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-5 pt-3 border-t border-[#EFECE6] flex items-center justify-between text-[11px] font-mono-code text-[#6B6B65]">
                <span className="flex items-center gap-1 text-[#8A9A5B]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Credential
                </span>
                <span>ID // Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
