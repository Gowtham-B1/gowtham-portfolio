import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import FeaturedProjects from './components/FeaturedProjects';
import Experience from './components/Experience';
import Research from './components/Research';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#171717] selection:bg-[#D65A31]/20 selection:text-[#171717] flex flex-col font-sans">
      {/* Sticky Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Portfolio Content */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 01 // Profile & Background */}
        <About />

        {/* 02 // Technical Capabilities */}
        <TechStack />

        {/* 03 // Featured Work */}
        <FeaturedProjects />

        {/* 04 // Professional Experience */}
        <Experience />

        {/* 05 // Research & Technical Papers */}
        <Research />

        {/* 06 // Honors & Recognitions */}
        <Achievements />

        {/* 07 // Verified Credentials */}
        <Certifications />

        {/* 08 // Education & Academic Foundation */}
        <Education />

        {/* 09 // Get In Touch & Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume View & Download Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </div>
  );
}
