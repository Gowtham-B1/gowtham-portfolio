import React, { useEffect, useState } from 'react';
import { 
  X, 
  Download, 
  FileText
} from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  personalInfo, 
  projects, 
  experienceTimeline
} from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [viewMode, setViewMode] = useState('pdf');

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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#000000]/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="bg-[#FFFFFF] dark:bg-[#12141F] border border-[#E2DFD7] dark:border-[#24293D] rounded-sm shadow-2xl max-w-5xl w-full max-h-[92vh] flex flex-col overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#FAF9F5] dark:bg-[#181C2B] px-6 py-4 border-b border-[#E2DFD7] dark:border-[#24293D] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xs bg-[#0F1117] dark:bg-[#FF5E3A] text-[#FAF9F5] dark:text-[#08090D] flex items-center justify-center font-mono-code font-bold text-xs">
              PDF
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-lg text-[#0F1117] dark:text-[#F8FAFC]">
                Gowtham B — Official Resume
              </h3>
              <p className="text-xs font-mono-code text-[#525866] dark:text-[#94A3B8]">
                Source File: Gowtham_Resume_Current.pdf
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center bg-[#ECEAE3] dark:bg-[#24293D] p-0.5 rounded-xs text-xs font-mono-code">
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-3 py-1 rounded-2xs cursor-pointer transition-colors ${
                  viewMode === 'pdf' ? 'bg-[#FFFFFF] dark:bg-[#12141F] text-[#0F1117] dark:text-[#F8FAFC] font-bold shadow-2xs' : 'text-[#525866] dark:text-[#94A3B8]'
                }`}
              >
                PDF View
              </button>
              <button
                onClick={() => setViewMode('summary')}
                className={`px-3 py-1 rounded-2xs cursor-pointer transition-colors ${
                  viewMode === 'summary' ? 'bg-[#FFFFFF] dark:bg-[#12141F] text-[#0F1117] dark:text-[#F8FAFC] font-bold shadow-2xs' : 'text-[#525866] dark:text-[#94A3B8]'
                }`}
              >
                Text Spec
              </button>
            </div>

            {/* Direct Download Button */}
            <a
              href="/Gowtham_Resume_Current.pdf"
              download="Gowtham_Resume_Current.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono-code font-bold text-[#FAF9F5] bg-[#0F1117] hover:bg-[#D65A31] dark:bg-[#FF5E3A] dark:text-[#08090D] dark:hover:bg-[#FF7A5C] rounded-xs transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-[#525866] dark:text-[#94A3B8] hover:text-[#0F1117] dark:hover:text-[#F8FAFC] hover:bg-[#ECEAE3] dark:hover:bg-[#24293D] rounded-xs transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto bg-[#FAF9F5] dark:bg-[#08090D] p-4 sm:p-6">
          {viewMode === 'pdf' ? (
            <div className="w-full h-[70vh] bg-[#FFFFFF] dark:bg-[#12141F] border border-[#E2DFD7] dark:border-[#24293D] rounded-xs overflow-hidden shadow-xs flex flex-col">
              <object
                data="/Gowtham_Resume_Current.pdf"
                type="application/pdf"
                className="w-full h-full"
              >
                <div className="p-8 text-center flex flex-col items-center justify-center h-full">
                  <FileText className="w-12 h-12 text-[#D65A31] dark:text-[#FF5E3A] mb-3" />
                  <p className="font-heading font-bold text-lg text-[#0F1117] dark:text-[#F8FAFC]">
                    PDF Preview
                  </p>
                  <p className="text-xs font-mono-code text-[#525866] dark:text-[#94A3B8] mt-1 max-w-md">
                    Your browser does not support inline PDF embedding. You can download the complete resume directly below.
                  </p>
                  <a
                    href="/Gowtham_Resume_Current.pdf"
                    download="Gowtham_Resume_Current.pdf"
                    className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono-code font-bold text-[#FAF9F5] bg-[#0F1117] hover:bg-[#D65A31] dark:bg-[#FF5E3A] dark:text-[#08090D] dark:hover:bg-[#FF7A5C] rounded-xs transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Gowtham_Resume_Current.pdf</span>
                  </a>
                </div>
              </object>
            </div>
          ) : (
            <div className="bg-[#FFFFFF] dark:bg-[#12141F] border border-[#E2DFD7] dark:border-[#24293D] rounded-sm p-6 sm:p-8 space-y-6 text-[#0F1117] dark:text-[#F8FAFC]">
              {/* Header */}
              <div className="pb-4 border-b border-[#E2DFD7] dark:border-[#24293D]">
                <h2 className="font-heading text-2xl font-bold">{personalInfo.name}</h2>
                <div className="font-mono-code text-xs text-[#D65A31] dark:text-[#FF5E3A] font-bold mt-0.5">
                  {personalInfo.title}
                </div>
                <div className="flex flex-wrap gap-4 text-xs font-mono-code text-[#525866] dark:text-[#94A3B8] mt-2">
                  <span>Phone: {personalInfo.phone}</span>
                  <span>•</span>
                  <span>Email: {personalInfo.email}</span>
                  <span>•</span>
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-[#0F1117] dark:text-[#F8FAFC] underline">
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h4 className="font-mono-code text-xs font-bold uppercase text-[#525866] dark:text-[#94A3B8] mb-2">
                  Professional Summary
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-[#0F1117] dark:text-[#F8FAFC]">
                  {personalInfo.summary}
                </p>
              </div>

              {/* Education */}
              <div>
                <h4 className="font-mono-code text-xs font-bold uppercase text-[#525866] dark:text-[#94A3B8] mb-2">
                  Education
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-[#F5F4EE] dark:bg-[#181C2B] border border-[#E2DFD7] dark:border-[#24293D] rounded-xs">
                    <div className="font-bold text-[#0F1117] dark:text-[#F8FAFC]">{personalInfo.degree}</div>
                    <div className="text-[#525866] dark:text-[#94A3B8]">{personalInfo.college} • {personalInfo.gradYear}</div>
                    <div className="text-[#607936] dark:text-[#10B981] font-bold font-mono-code mt-0.5">CGPA: {personalInfo.cgpa}</div>
                  </div>
                  <div className="p-3 bg-[#F5F4EE] dark:bg-[#181C2B] border border-[#E2DFD7] dark:border-[#24293D] rounded-xs">
                    <div className="font-bold text-[#0F1117] dark:text-[#F8FAFC]">{personalInfo.school}</div>
                    <div className="text-[#525866] dark:text-[#94A3B8]">Higher Secondary Schooling • Score: {personalInfo.schoolScore}</div>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h4 className="font-mono-code text-xs font-bold uppercase text-[#525866] dark:text-[#94A3B8] mb-2">
                  Experience
                </h4>
                <div className="space-y-2 text-xs">
                  {experienceTimeline.map((item, idx) => (
                    <div key={idx} className="p-3 bg-[#F5F4EE] dark:bg-[#181C2B] border border-[#E2DFD7] dark:border-[#24293D] rounded-xs">
                      <div className="flex justify-between font-bold text-[#0F1117] dark:text-[#F8FAFC]">
                        <span>{item.role} — {item.organization}</span>
                        <span className="font-mono-code text-[#525866] dark:text-[#94A3B8]">{item.period}</span>
                      </div>
                      <p className="text-[#525866] dark:text-[#94A3B8] mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Projects */}
              <div>
                <h4 className="font-mono-code text-xs font-bold uppercase text-[#525866] dark:text-[#94A3B8] mb-2">
                  Projects
                </h4>
                <div className="space-y-2 text-xs">
                  {projects.map((p) => (
                    <div key={p.id} className="p-3 bg-[#F5F4EE] dark:bg-[#181C2B] border border-[#E2DFD7] dark:border-[#24293D] rounded-xs">
                      <div className="font-bold text-[#0F1117] dark:text-[#F8FAFC]">{p.number} // {p.name} — {p.tagline}</div>
                      <div className="font-mono-code text-[11px] text-[#D65A31] dark:text-[#FF5E3A] mt-0.5 font-bold">
                        Tech: {p.technologies.join(', ')}
                      </div>
                      <p className="text-[#525866] dark:text-[#94A3B8] mt-1">{p.shortDescription}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#FAF9F5] dark:bg-[#181C2B] px-6 py-3 border-t border-[#E2DFD7] dark:border-[#24293D] flex items-center justify-between text-xs font-mono-code text-[#525866] dark:text-[#94A3B8]">
          <span>Path: /Gowtham_Resume_Current.pdf</span>
          <a
            href="/Gowtham_Resume_Current.pdf"
            download="Gowtham_Resume_Current.pdf"
            className="inline-flex items-center gap-1.5 text-[#D65A31] dark:text-[#FF5E3A] hover:underline font-bold cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF File</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
