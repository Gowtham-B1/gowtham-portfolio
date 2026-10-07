import React from 'react';
import { motion } from 'framer-motion';
import { 
  mechanicalContainer, 
  mechanicalLaser, 
  mechanicalClampTL, 
  mechanicalClampTR, 
  mechanicalClampBL, 
  mechanicalClampBR 
} from '../utils/motionVariants';

export default function SectionWrapper({
  id,
  children,
  className = '',
  divider = true,
  ...props
}) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={mechanicalContainer}
      className={`relative py-20 lg:py-28 bg-transparent text-left transition-colors ${className}`}
      {...props}
    >
      {/* Mechanical Laser Docking Line at Top */}
      {divider && (
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#DDD8CB]/60 dark:bg-[#24293D]/60 flex items-center justify-between pointer-events-none overflow-hidden">
          <motion.div
            variants={mechanicalLaser}
            className="w-full h-full bg-gradient-to-r from-transparent via-[#D65A31] dark:via-[#FF5E3A] to-transparent origin-center"
          />
        </div>
      )}

      {/* Mechanical Assembly Chassis Brackets & Locking Crosshairs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pointer-events-none">
        {/* Top-Left Bracket & Reticle */}
        <motion.div
          variants={mechanicalClampTL}
          className="absolute -top-3 left-4 sm:left-6 flex items-start gap-1"
        >
          <div className="w-3.5 h-3.5 border-t-2 border-l-2 border-[#D65A31] dark:border-[#FF5E3A]" />
          <span className="text-[9px] font-mono-code text-[#D65A31] dark:text-[#FF5E3A] opacity-75 leading-none select-none">
            +
          </span>
        </motion.div>

        {/* Top-Right Bracket & Reticle */}
        <motion.div
          variants={mechanicalClampTR}
          className="absolute -top-3 right-4 sm:right-6 flex items-start gap-1 flex-row-reverse"
        >
          <div className="w-3.5 h-3.5 border-t-2 border-r-2 border-[#D65A31] dark:border-[#FF5E3A]" />
          <span className="text-[9px] font-mono-code text-[#D65A31] dark:text-[#FF5E3A] opacity-75 leading-none select-none">
            +
          </span>
        </motion.div>

        {/* Bottom-Left Bracket */}
        <motion.div
          variants={mechanicalClampBL}
          className="absolute -bottom-3 left-4 sm:left-6 flex items-end gap-1"
        >
          <div className="w-3.5 h-3.5 border-b-2 border-l-2 border-[#D65A31] dark:border-[#FF5E3A]" />
        </motion.div>

        {/* Bottom-Right Bracket */}
        <motion.div
          variants={mechanicalClampBR}
          className="absolute -bottom-3 right-4 sm:right-6 flex items-end gap-1 flex-row-reverse"
        >
          <div className="w-3.5 h-3.5 border-b-2 border-r-2 border-[#D65A31] dark:border-[#FF5E3A]" />
        </motion.div>
      </div>

      {/* Assembled Content Layer */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  );
}
