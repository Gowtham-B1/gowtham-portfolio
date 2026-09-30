import React from 'react';
import { BookOpen } from 'lucide-react';
import { researchPapers } from '../data/portfolioData';

export default function Research() {
  return (
    <section id="research" className="py-20 lg:py-28 bg-[#FFFFFF] border-y border-[#E7E4DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E7E4DD]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#D65A31] uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-xs bg-[#D65A31]"></span>
              05 // RESEARCH & TECHNICAL PAPERS
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717]">
              Academic Inquiry & Publications
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono-code text-xs text-[#6B6B65] max-w-sm text-left md:text-right">
            Peer-reviewed conference research and advanced computational presentations.
          </p>
        </div>

        {/* Research Papers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {researchPapers.map((paper, index) => (
            <article
              key={paper.id}
              className="bg-[#FAF9F5] border border-[#E7E4DD] rounded-sm p-6 sm:p-8 hover:border-[#171717] transition-all flex flex-col justify-between shadow-2xs group"
            >
              <div>
                {/* Paper Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EFECE6]">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono-code text-[#D65A31] font-semibold">
                    <BookOpen className="w-4 h-4" />
                    PAPER 0{index + 1}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-xs bg-[#8A9A5B]/15 text-[#8A9A5B] font-mono-code text-xs font-semibold">
                    {paper.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#171717] group-hover:text-[#D65A31] transition-colors leading-snug">
                  "{paper.title}"
                </h3>

                {/* Venue & Institution */}
                <div className="mt-3 p-3 bg-[#FFFFFF] border border-[#E7E4DD] rounded-xs text-xs font-mono-code space-y-1">
                  <div className="text-[#171717] font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D65A31]"></span>
                    {paper.venue}
                  </div>
                  <div className="text-[#6B6B65]">
                    Affiliation: {paper.institution}
                  </div>
                </div>

                {/* Abstract */}
                <div className="mt-4 space-y-1.5">
                  <span className="text-[11px] font-mono-code uppercase tracking-wider text-[#6B6B65] font-semibold">
                    Abstract Synopsis
                  </span>
                  <p className="text-xs sm:text-sm text-[#171717] leading-relaxed">
                    {paper.abstract}
                  </p>
                </div>
              </div>

              {/* Topics / Keywords */}
              <div className="mt-6 pt-4 border-t border-[#EFECE6]">
                <div className="text-[11px] font-mono-code text-[#6B6B65] mb-2">Key Thematic Vectors:</div>
                <div className="flex flex-wrap gap-1.5">
                  {paper.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 bg-[#FFFFFF] border border-[#E7E4DD] text-[11px] font-mono-code text-[#171717] rounded-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Academic Collaboration Note */}
        <div className="mt-10 p-5 bg-[#FAF9F5] border border-[#E7E4DD] rounded-sm text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="font-mono-code text-xs font-bold text-[#171717] uppercase tracking-wider">
              Research & Innovation Ecosystem
            </span>
            <p className="text-xs sm:text-sm text-[#6B6B65]">
              Ongoing exploration at K.L.N. Innovation & Research Park focused on cyber-physical data models, edge AI, and optimization frameworks.
            </p>
          </div>
          <span className="px-3 py-1 bg-[#FFFFFF] border border-[#E7E4DD] text-xs font-mono-code text-[#8A9A5B] font-semibold rounded-xs shrink-0">
            KLN.IRP Active
          </span>
        </div>

      </div>
    </section>
  );
}
