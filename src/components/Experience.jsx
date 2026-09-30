import React from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E7E4DD]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#D65A31] uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-xs bg-[#D65A31]"></span>
              04 // PROFESSIONAL EXPERIENCE
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717]">
              Experience & Incubation
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono-code text-xs text-[#6B6B65] max-w-sm text-left md:text-right">
            Applied technical roles spanning research incubation and software development internships.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-[#E7E4DD] ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-12 text-left">
          {experienceTimeline.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#FFFFFF] border-2 border-[#D65A31] group-hover:bg-[#D65A31] transition-colors" />

              {/* Experience Card */}
              <div className="bg-[#FFFFFF] border border-[#E7E4DD] rounded-sm p-6 sm:p-8 hover:border-[#171717] transition-all shadow-2xs">
                
                {/* Card Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 pb-4 mb-4 border-b border-[#EFECE6]">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-xs bg-[#FAF9F5] border border-[#E7E4DD] text-[11px] font-mono-code text-[#D65A31] font-semibold mb-2">
                      {item.tag}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#171717]">
                      {item.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono-code text-[#6B6B65] mt-1">
                      <span className="font-semibold text-[#171717]">{item.organization}</span>
                      <span>•</span>
                      <span>{item.institution}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 bg-[#FAF9F5] border border-[#E7E4DD] rounded-xs text-xs font-mono-code text-[#171717]">
                    <Calendar className="w-3.5 h-3.5 text-[#D65A31]" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#171717] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#6B6B65]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8A9A5B] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
