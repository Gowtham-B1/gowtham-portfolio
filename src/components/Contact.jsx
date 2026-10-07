import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  Send, 
  MessageSquare, 
  ArrowUpRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import TiltCard from './TiltCard';
import SectionWrapper from './SectionWrapper';
import { 
  mechanicalHeader, 
  mechanicalLeft, 
  mechanicalRight, 
  mechanicalCard 
} from '../utils/motionVariants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [copiedType, setCopiedType] = useState(null);
  const [submittedMessage, setSubmittedMessage] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please include a brief message';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    const subjectLine = encodeURIComponent(formData.subject.trim() || `Portfolio Contact from ${formData.name}`);
    const bodyContent = encodeURIComponent(
      `Hello Gowtham,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subjectLine}&body=${bodyContent}`;

    window.location.href = mailtoUrl;

    setSubmittedMessage({
      name: formData.name,
      email: formData.email,
      message: formData.message
    });
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Mechanical Drop-In */}
        <motion.div 
          variants={mechanicalHeader}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#DDD8CB] dark:border-[#24293D]"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#D65A31] dark:text-[#FF5E3A] uppercase tracking-wider mb-2 font-bold">
              <span className="w-2 h-2 rounded-xs bg-[#D65A31] dark:bg-[#FF5E3A] animate-ping"></span>
              09 // GET IN TOUCH
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#12141A] dark:text-[#F8FAFC]">
              Let's build something meaningful.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono-code text-xs text-[#4E5463] dark:text-[#94A3B8] max-w-sm text-left md:text-right font-medium">
            Open for software engineering internships, technical collaborations, and full-stack development roles.
          </p>
        </motion.div>

        {/* Contact Grid: Direct Info Left, Validated Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Column: Direct Outreach & Verified Handles (Mechanical Left Assembly) */}
          <motion.div 
            variants={mechanicalLeft}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-sm shadow-sm dark:shadow-xl">
              <span className="text-xs font-mono-code uppercase tracking-wider text-[#4E5463] dark:text-[#94A3B8] block mb-2 font-bold">
                Have an idea worth building?
              </span>
              <p className="text-base text-[#12141A] dark:text-[#F8FAFC] leading-relaxed">
                Whether you are exploring an internship candidate, seeking a hackathon collaborator, or discussing full-stack and AI architectures, I'm ready to engage.
              </p>
            </div>

            {/* Direct Details Cards */}
            <div className="space-y-3 font-mono-code">
              {/* Email Card */}
              <TiltCard className="p-4 bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-xs flex items-center justify-between group hover:border-[#D65A31] dark:hover:border-[#FF5E3A] hover:shadow-md transition-all">
                <div className="flex items-center gap-3 truncate pr-2">
                  <div className="w-9 h-9 rounded-xs bg-[#FAF8F5] dark:bg-[#181C2B] border border-[#DDD8CB] dark:border-[#24293D] flex items-center justify-center text-[#D65A31] dark:text-[#FF5E3A] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-[#4E5463] dark:text-[#94A3B8] block">PRIMARY EMAIL</span>
                    <a 
                      href={`mailto:${personalInfo.email}`} 
                      className="text-xs sm:text-sm text-[#12141A] dark:text-[#F8FAFC] font-bold hover:text-[#D65A31] dark:hover:text-[#FF5E3A] transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 text-[#4E5463] dark:text-[#94A3B8] hover:text-[#12141A] dark:hover:text-[#F8FAFC] hover:bg-[#FAF8F5] dark:hover:bg-[#181C2B] rounded-xs transition-colors shrink-0 cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-[#546E2A] dark:text-[#10B981]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </TiltCard>

              {/* Phone Card */}
              <TiltCard className="p-4 bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-xs flex items-center justify-between group hover:border-[#D65A31] dark:hover:border-[#FF5E3A] hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xs bg-[#FAF8F5] dark:bg-[#181C2B] border border-[#DDD8CB] dark:border-[#24293D] flex items-center justify-center text-[#546E2A] dark:text-[#10B981] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#4E5463] dark:text-[#94A3B8] block">DIRECT PHONE</span>
                    <a 
                      href={`tel:${personalInfo.phone}`} 
                      className="text-xs sm:text-sm text-[#12141A] dark:text-[#F8FAFC] font-bold hover:text-[#D65A31] dark:hover:text-[#FF5E3A] transition-colors block"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2 text-[#4E5463] dark:text-[#94A3B8] hover:text-[#12141A] dark:hover:text-[#F8FAFC] hover:bg-[#FAF8F5] dark:hover:bg-[#181C2B] rounded-xs transition-colors shrink-0 cursor-pointer"
                  title="Copy phone number"
                  aria-label="Copy phone"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-4 h-4 text-[#546E2A] dark:text-[#10B981]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </TiltCard>

              {/* LinkedIn Card */}
              <TiltCard className="p-4 bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-xs flex items-center justify-between group hover:border-[#D65A31] dark:hover:border-[#FF5E3A] hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xs bg-[#FAF8F5] dark:bg-[#181C2B] border border-[#DDD8CB] dark:border-[#24293D] flex items-center justify-center text-[#12141A] dark:text-[#F8FAFC] shrink-0">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#4E5463] dark:text-[#94A3B8] block">PROFESSIONAL NETWORK</span>
                    <a 
                      href={personalInfo.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs sm:text-sm text-[#12141A] dark:text-[#F8FAFC] font-bold hover:text-[#D65A31] dark:hover:text-[#FF5E3A] transition-colors flex items-center gap-1.5"
                    >
                      linkedin.com/in/gowtham-b
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#4E5463] dark:text-[#94A3B8]" />
                    </a>
                  </div>
                </div>
              </TiltCard>

              {/* GitHub Card */}
              <TiltCard className="p-4 bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-xs flex items-center justify-between group hover:border-[#D65A31] dark:hover:border-[#FF5E3A] hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xs bg-[#FAF8F5] dark:bg-[#181C2B] border border-[#DDD8CB] dark:border-[#24293D] flex items-center justify-center text-[#12141A] dark:text-[#F8FAFC] shrink-0">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#4E5463] dark:text-[#94A3B8] block">SOURCE REPOSITORY</span>
                    <a 
                      href={personalInfo.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs sm:text-sm text-[#12141A] dark:text-[#F8FAFC] font-bold hover:text-[#D65A31] dark:hover:text-[#FF5E3A] transition-colors flex items-center gap-1.5"
                    >
                      github.com/Gowtham-B1
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#4E5463] dark:text-[#94A3B8]" />
                    </a>
                  </div>
                </div>
              </TiltCard>
            </div>

            {/* Availability Badge */}
            <div className="p-3 bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-xs text-xs font-mono-code flex items-center gap-2 text-[#4E5463] dark:text-[#94A3B8]">
              <span className="w-2 h-2 rounded-full bg-[#546E2A] dark:bg-[#10B981] animate-pulse"></span>
              <span>Status: <strong className="text-[#12141A] dark:text-[#F8FAFC]">Actively seeking opportunities</strong></span>
            </div>
          </motion.div>

          {/* Right Column: Contact Form (Mechanical Right Assembly) */}
          <motion.div 
            variants={mechanicalRight}
            className="lg:col-span-7"
          >
            <TiltCard className="bg-[#FFFFFF] dark:bg-[#12141F] border border-[#DDD8CB] dark:border-[#24293D] rounded-sm p-6 sm:p-8 shadow-sm dark:shadow-xl hover:border-[#D65A31] dark:hover:border-[#FF5E3A] transition-colors">
              <div className="pb-4 mb-6 border-b border-[#E8E4DA] dark:border-[#24293D] flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-[#12141A] dark:text-[#F8FAFC]">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-[#4E5463] dark:text-[#94A3B8] font-mono-code mt-0.5">
                    Prepares a direct email to {personalInfo.email}
                  </p>
                </div>
                <MessageSquare className="w-5 h-5 text-[#D65A31] dark:text-[#FF5E3A]" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-code text-[#12141A] dark:text-[#F8FAFC] mb-1 font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] dark:bg-[#181C2B] border rounded-xs text-xs text-[#12141A] dark:text-[#F8FAFC] font-mono-code focus:outline-none focus:border-[#D65A31] dark:focus:border-[#FF5E3A] transition-colors ${
                        errors.name ? 'border-red-500' : 'border-[#DDD8CB] dark:border-[#24293D]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] font-mono-code text-red-500 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code text-[#12141A] dark:text-[#F8FAFC] mb-1 font-semibold">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. s.jenkins@company.com"
                      className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] dark:bg-[#181C2B] border rounded-xs text-xs text-[#12141A] dark:text-[#F8FAFC] font-mono-code focus:outline-none focus:border-[#D65A31] dark:focus:border-[#FF5E3A] transition-colors ${
                        errors.email ? 'border-red-500' : 'border-[#DDD8CB] dark:border-[#24293D]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] font-mono-code text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-[#12141A] dark:text-[#F8FAFC] mb-1 font-semibold">
                    Subject / Discussion Topic
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Full-Stack Internship Opportunity / Project Collaboration"
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] dark:bg-[#181C2B] border border-[#DDD8CB] dark:border-[#24293D] rounded-xs text-xs text-[#12141A] dark:text-[#F8FAFC] font-mono-code focus:outline-none focus:border-[#D65A31] dark:focus:border-[#FF5E3A] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-[#12141A] dark:text-[#F8FAFC] mb-1 font-semibold">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Detail your requirements, project inquiry, or interview schedule..."
                    className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] dark:bg-[#181C2B] border rounded-xs text-xs text-[#12141A] dark:text-[#F8FAFC] font-mono-code focus:outline-none focus:border-[#D65A31] dark:focus:border-[#FF5E3A] transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-[#DDD8CB] dark:border-[#24293D]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] font-mono-code text-red-500 mt-1">{errors.message}</p>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] font-mono-code text-[#4E5463] dark:text-[#94A3B8]">
                    Initiates default mail client via mailto
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-mono-code font-bold text-[#FFFFFF] bg-[#12141A] hover:bg-[#D65A31] dark:bg-[#FF5E3A] dark:text-[#08090D] dark:hover:bg-[#FF7A5C] rounded-xs transition-all shadow-md cursor-pointer"
                  >
                    <span>Launch Message Draft</span>
                    <Send className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </form>

              {/* Feedback Note after launching mailto */}
              {submittedMessage && (
                <div className="mt-4 p-3 bg-[#FFFFFF] dark:bg-[#181C2B] border border-[#546E2A]/40 dark:border-[#10B981]/40 rounded-xs text-left">
                  <div className="flex items-center gap-2 text-xs font-mono-code font-bold text-[#546E2A] dark:text-[#10B981]">
                    <Check className="w-4 h-4" />
                    Mail Client Triggered
                  </div>
                  <p className="text-[11px] text-[#4E5463] dark:text-[#94A3B8] mt-1 font-mono-code">
                    If your email client didn't launch automatically, you can also write directly to{' '}
                    <strong className="text-[#12141A] dark:text-[#F8FAFC]">{personalInfo.email}</strong>.
                  </p>
                </div>
              )}
            </TiltCard>
          </motion.div>

        </div>

      </div>
    </SectionWrapper>
  );
}
