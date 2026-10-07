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
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

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

    // Construct mailto link
    const subjectLine = encodeURIComponent(formData.subject.trim() || `Portfolio Contact from ${formData.name}`);
    const bodyContent = encodeURIComponent(
      `Hello Gowtham,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subjectLine}&body=${bodyContent}`;

    // Trigger user's mail client
    window.location.href = mailtoUrl;

    // Show honest feedback modal / state
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
    <section id="contact" className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#E7E4DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E7E4DD]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#D65A31] uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-xs bg-[#D65A31]"></span>
              09 // GET IN TOUCH
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717]">
              Let's build something meaningful.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono-code text-xs text-[#6B6B65] max-w-sm text-left md:text-right">
            Open for software engineering internships, technical collaborations, and full-stack development roles.
          </p>
        </div>

        {/* Contact Grid: Direct Info Left, Validated Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Column: Direct Outreach & Verified Handles */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-[#FAF9F5] border border-[#E7E4DD] rounded-sm">
              <span className="text-xs font-mono-code uppercase tracking-wider text-[#6B6B65] block mb-2">
                Have an idea worth building?
              </span>
              <p className="text-base text-[#171717] leading-relaxed">
                Whether you are exploring an internship candidate, seeking a hackathon collaborator, or discussing full-stack and AI architectures, I'm ready to engage.
              </p>
            </div>

            {/* Direct Details Cards */}
            <div className="space-y-3 font-mono-code">
              {/* Email Card */}
              <div className="p-4 bg-[#FFFFFF] border border-[#E7E4DD] rounded-xs flex items-center justify-between group hover:border-[#171717] transition-all">
                <div className="flex items-center gap-3 truncate pr-2">
                  <div className="w-9 h-9 rounded-xs bg-[#FAF9F5] border border-[#E7E4DD] flex items-center justify-center text-[#D65A31] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-[#6B6B65] block">PRIMARY EMAIL</span>
                    <a 
                      href={`mailto:${personalInfo.email}`} 
                      className="text-xs sm:text-sm text-[#171717] font-medium hover:text-[#D65A31] transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 text-[#6B6B65] hover:text-[#171717] hover:bg-[#FAF9F5] rounded-xs transition-colors shrink-0 cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-[#8A9A5B]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 bg-[#FFFFFF] border border-[#E7E4DD] rounded-xs flex items-center justify-between group hover:border-[#171717] transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xs bg-[#FAF9F5] border border-[#E7E4DD] flex items-center justify-center text-[#8A9A5B] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#6B6B65] block">DIRECT PHONE</span>
                    <a 
                      href={`tel:${personalInfo.phone}`} 
                      className="text-xs sm:text-sm text-[#171717] font-medium hover:text-[#D65A31] transition-colors block"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2 text-[#6B6B65] hover:text-[#171717] hover:bg-[#FAF9F5] rounded-xs transition-colors shrink-0 cursor-pointer"
                  title="Copy phone number"
                  aria-label="Copy phone"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-4 h-4 text-[#8A9A5B]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* LinkedIn Card */}
              <div className="p-4 bg-[#FFFFFF] border border-[#E7E4DD] rounded-xs flex items-center justify-between group hover:border-[#171717] transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xs bg-[#FAF9F5] border border-[#E7E4DD] flex items-center justify-center text-[#171717] shrink-0">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#6B6B65] block">PROFESSIONAL NETWORK</span>
                    <a 
                      href={personalInfo.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs sm:text-sm text-[#171717] font-medium hover:text-[#D65A31] transition-colors flex items-center gap-1.5"
                    >
                      linkedin.com/in/gowtham-b
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#6B6B65]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* GitHub Card */}
              <div className="p-4 bg-[#FFFFFF] border border-[#E7E4DD] rounded-xs flex items-center justify-between group hover:border-[#171717] transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xs bg-[#FAF9F5] border border-[#E7E4DD] flex items-center justify-center text-[#171717] shrink-0">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#6B6B65] block">SOURCE REPOSITORY</span>
                    <a 
                      href={personalInfo.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs sm:text-sm text-[#171717] font-medium hover:text-[#D65A31] transition-colors flex items-center gap-1.5"
                    >
                      github.com/Gowtham-B1
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#6B6B65]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="p-3 bg-[#FAF9F5] border border-[#E7E4DD] rounded-xs text-xs font-mono-code flex items-center gap-2 text-[#6B6B65]">
              <span className="w-2 h-2 rounded-full bg-[#8A9A5B] animate-pulse"></span>
              <span>Status: <strong className="text-[#171717]">Actively seeking opportunities</strong></span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF9F5] border border-[#E7E4DD] rounded-sm p-6 sm:p-8 shadow-2xs">
              <div className="pb-4 mb-6 border-b border-[#E7E4DD] flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#171717]">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-[#6B6B65] font-mono-code mt-0.5">
                    Prepares a direct email to {personalInfo.email}
                  </p>
                </div>
                <MessageSquare className="w-5 h-5 text-[#D65A31]" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-code text-[#171717] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full px-3.5 py-2.5 bg-[#FFFFFF] border rounded-xs text-xs text-[#171717] font-mono-code focus:outline-none focus:border-[#D65A31] transition-colors ${
                        errors.name ? 'border-red-500' : 'border-[#E7E4DD]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] font-mono-code text-red-500 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code text-[#171717] mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. s.jenkins@company.com"
                      className={`w-full px-3.5 py-2.5 bg-[#FFFFFF] border rounded-xs text-xs text-[#171717] font-mono-code focus:outline-none focus:border-[#D65A31] transition-colors ${
                        errors.email ? 'border-red-500' : 'border-[#E7E4DD]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] font-mono-code text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-[#171717] mb-1">
                    Subject / Discussion Topic
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Full-Stack Internship Opportunity / Project Collaboration"
                    className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#E7E4DD] rounded-xs text-xs text-[#171717] font-mono-code focus:outline-none focus:border-[#D65A31] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-[#171717] mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Detail your requirements, project inquiry, or interview schedule..."
                    className={`w-full px-3.5 py-2.5 bg-[#FFFFFF] border rounded-xs text-xs text-[#171717] font-mono-code focus:outline-none focus:border-[#D65A31] transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-[#E7E4DD]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] font-mono-code text-red-500 mt-1">{errors.message}</p>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] font-mono-code text-[#6B6B65]">
                    Initiates default mail client via mailto
                  </span>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-mono-code font-semibold text-[#FAFAF7] bg-[#171717] hover:bg-[#D65A31] rounded-xs transition-colors shadow-2xs cursor-pointer"
                  >
                    <span>Launch Message Draft</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>

              {/* Feedback Note after launching mailto */}
              {submittedMessage && (
                <div className="mt-4 p-3 bg-[#FFFFFF] border border-[#8A9A5B]/40 rounded-xs text-left">
                  <div className="flex items-center gap-2 text-xs font-mono-code font-semibold text-[#8A9A5B]">
                    <Check className="w-4 h-4" />
                    Mail Client Triggered
                  </div>
                  <p className="text-[11px] text-[#6B6B65] mt-1 font-mono-code">
                    If your email client didn't launch automatically, you can also write directly to{' '}
                    <strong className="text-[#171717]">{personalInfo.email}</strong>.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
