import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import InteractiveBackground from './components/InteractiveBackground';
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
    <ThemeProvider>
      <div className="min-h-screen bg-[#F0ECE1] dark:bg-[#08090D] text-[#12141A] dark:text-[#F8FAFC] selection:bg-[#D65A31]/25 dark:selection:bg-[#FF5E3A]/30 flex flex-col font-sans transition-colors duration-400 relative">
        {/* Interactive Mouse-Reactive Background Spotlight & Grid */}
        <InteractiveBackground />

        {/* Sticky Navigation */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Portfolio Content */}
        <main className="flex-1 w-full relative z-10">
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
    </ThemeProvider>
  );
}
