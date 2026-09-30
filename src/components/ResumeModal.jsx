import React, { useEffect, useState } from 'react';
import { 
  X, 
  Download, 
  FileText
} from 'lucide-react';
import { 
  personalInfo, 
  projects, 
  experienceTimeline
} from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [viewMode, setViewMode] = useState('pdf'); // 'pdf' or 'summary'

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#171717]/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="bg-[#FFFFFF] border border-[#E7E4DD] rounded-sm shadow-2xl max-w-5xl w-full max-h-[92vh] flex flex-col overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#FAF9F5] px-6 py-4 border-b border-[#E7E4DD] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xs bg-[#171717] text-[#FAFAF7] flex items-center justify-center font-mono-code font-bold text-xs">
              PDF
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-[#171717]">
                Gowtham B — Official Resume
              </h3>
              <p className="text-xs font-mono-code text-[#6B6B65]">
                Source File: Gowtham_Resume_Current.pdf
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center bg-[#EFECE6] p-0.5 rounded-xs text-xs font-mono-code">
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-3 py-1 rounded-2xs cursor-pointer transition-colors ${
                  viewMode === 'pdf' ? 'bg-[#FFFFFF] text-[#171717] font-semibold shadow-2xs' : 'text-[#6B6B65]'
                }`}
              >
                PDF View
              </button>
              <button
                onClick={() => setViewMode('summary')}
                className={`px-3 py-1 rounded-2xs cursor-pointer transition-colors ${
                  viewMode === 'summary' ? 'bg-[#FFFFFF] text-[#171717] font-semibold shadow-2xs' : 'text-[#6B6B65]'
                }`}
              >
                Text Spec
              </button>
            </div>

            {/* Direct Download Button */}
            <a
              href="/Gowtham_Resume_Current.pdf"
              download="Gowtham_Resume_Current.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono-code font-semibold text-[#FAFAF7] bg-[#171717] hover:bg-[#D65A31] rounded-xs transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-[#6B6B65] hover:text-[#171717] hover:bg-[#EFECE6] rounded-xs transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto bg-[#F7F6F2] p-4 sm:p-6">
          {viewMode === 'pdf' ? (
            <div className="w-full h-[70vh] bg-[#FFFFFF] border border-[#E7E4DD] rounded-xs overflow-hidden shadow-xs flex flex-col">
              <object
                data="/Gowtham_Resume_Current.pdf"
                type="application/pdf"
                className="w-full h-full"
              >
                <div className="p-8 text-center flex flex-col items-center justify-center h-full">
                  <FileText className="w-12 h-12 text-[#D65A31] mb-3" />
                  <p className="font-heading font-semibold text-lg text-[#171717]">
                    PDF Preview
                  </p>
                  <p className="text-xs font-mono-code text-[#6B6B65] mt-1 max-w-md">
                    Your browser does not support inline PDF embedding. You can download the complete resume directly below.
                  </p>
                  <a
                    href="/Gowtham_Resume_Current.pdf"
                    download="Gowtham_Resume_Current.pdf"
                    className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono-code font-semibold text-[#FAFAF7] bg-[#171717] hover:bg-[#D65A31] rounded-xs transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Gowtham_Resume_Current.pdf</span>
                  </a>
                </div>
              </object>
            </div>
          ) : (
            <div className="bg-[#FFFFFF] border border-[#E7E4DD] rounded-sm p-6 sm:p-8 space-y-6 text-[#171717]">
              {/* Header */}
              <div className="pb-4 border-b border-[#E7E4DD]">
                <h2 className="font-heading text-2xl font-bold">{personalInfo.name}</h2>
                <div className="font-mono-code text-xs text-[#D65A31] font-semibold mt-0.5">
                  {personalInfo.title}
                </div>
                <div className="flex flex-wrap gap-4 text-xs font-mono-code text-[#6B6B65] mt-2">
                  <span>Phone: {personalInfo.phone}</span>
                  <span>•</span>
                  <span>Email: {personalInfo.email}</span>
                  <span>•</span>
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-[#171717] underline">
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h4 className="font-mono-code text-xs font-bold uppercase text-[#6B6B65] mb-2">
                  Professional Summary
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-[#171717]">
                  {personalInfo.summary}
                </p>
              </div>

              {/* Education */}
              <div>
                <h4 className="font-mono-code text-xs font-bold uppercase text-[#6B6B65] mb-2">
                  Education
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-[#FAF9F5] border border-[#E7E4DD] rounded-xs">
                    <div className="font-bold text-[#171717]">{personalInfo.degree}</div>
                    <div className="text-[#6B6B65]">{personalInfo.college} • {personalInfo.gradYear}</div>
                    <div className="text-[#8A9A5B] font-semibold font-mono-code mt-0.5">CGPA: {personalInfo.cgpa}</div>
                  </div>
                  <div className="p-3 bg-[#FAF9F5] border border-[#E7E4DD] rounded-xs">
                    <div className="font-bold text-[#171717]">{personalInfo.school}</div>
                    <div className="text-[#6B6B65]">Higher Secondary Schooling • Score: {personalInfo.schoolScore}</div>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h4 className="font-mono-code text-xs font-bold uppercase text-[#6B6B65] mb-2">
                  Experience
                </h4>
                <div className="space-y-2 text-xs">
                  {experienceTimeline.map((item, idx) => (
                    <div key={idx} className="p-3 bg-[#FAF9F5] border border-[#E7E4DD] rounded-xs">
                      <div className="flex justify-between font-bold text-[#171717]">
                        <span>{item.role} — {item.organization}</span>
                        <span className="font-mono-code text-[#6B6B65]">{item.period}</span>
                      </div>
                      <p className="text-[#6B6B65] mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Projects */}
              <div>
                <h4 className="font-mono-code text-xs font-bold uppercase text-[#6B6B65] mb-2">
                  Projects
                </h4>
                <div className="space-y-2 text-xs">
                  {projects.map((p) => (
                    <div key={p.id} className="p-3 bg-[#FAF9F5] border border-[#E7E4DD] rounded-xs">
                      <div className="font-bold text-[#171717]">{p.number} // {p.name} — {p.tagline}</div>
                      <div className="font-mono-code text-[11px] text-[#D65A31] mt-0.5">
                        Tech: {p.technologies.join(', ')}
                      </div>
                      <p className="text-[#6B6B65] mt-1">{p.shortDescription}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#FAF9F5] px-6 py-3 border-t border-[#E7E4DD] flex items-center justify-between text-xs font-mono-code text-[#6B6B65]">
          <span>Path: /Gowtham_Resume_Current.pdf</span>
          <a
            href="/Gowtham_Resume_Current.pdf"
            download="Gowtham_Resume_Current.pdf"
            className="inline-flex items-center gap-1.5 text-[#D65A31] hover:underline font-semibold cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF File</span>
          </a>
        </div>
      </div>
    </div>
  );
}
