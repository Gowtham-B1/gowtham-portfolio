import React from 'react';
import { GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import { educationHistory } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E7E4DD]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#D65A31] uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-xs bg-[#D65A31]"></span>
              08 // ACADEMIC FOUNDATION
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717]">
              Education & Coursework
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono-code text-xs text-[#6B6B65] max-w-sm text-left md:text-right">
            Rigorous undergraduate training in Computer Science Engineering fundamentals.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative border-l border-[#E7E4DD] ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-12 text-left">
          {educationHistory.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#FFFFFF] border-2 border-[#D65A31] group-hover:bg-[#D65A31] transition-colors" />

              {/* Education Card */}
              <div className="bg-[#FFFFFF] border border-[#E7E4DD] rounded-sm p-6 sm:p-8 hover:border-[#171717] transition-all shadow-2xs">
                
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 pb-4 mb-4 border-b border-[#EFECE6]">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <GraduationCap className="w-4 h-4 text-[#D65A31]" />
                      <span className="text-xs font-mono-code uppercase tracking-wider text-[#6B6B65]">
                        {item.status}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#171717]">
                      {item.degree}
                    </h3>
                    <div className="text-sm font-semibold text-[#8A9A5B] mt-0.5">
                      {item.institution}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 font-mono-code">
                    <span className="px-3 py-1 bg-[#8A9A5B]/15 text-[#8A9A5B] text-xs font-bold rounded-xs border border-[#8A9A5B]/30">
                      {item.score}
                    </span>
                    <span className="text-xs text-[#6B6B65] mt-1 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <p className="text-sm text-[#171717] leading-relaxed mb-4">
                  {item.details}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#EFECE6]">
                  {item.highlights.map((hl, hIdx) => (
                    <span
                      key={hIdx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-[#FAF9F5] border border-[#E7E4DD] text-xs font-mono-code text-[#171717]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8A9A5B]" />
                      {hl}
                    </span>
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
