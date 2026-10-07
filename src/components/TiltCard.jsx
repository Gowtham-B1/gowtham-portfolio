import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function TiltCard({
  children,
  className = '',
  maxTilt = 12,
  scale = 1.018,
  glare = true,
  onClick,
  ...props
}) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Raw mouse coordinates relative to card center (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Responsive spring physics with low inertia for instant, crisp tracking
  const springConfig = { stiffness: 420, damping: 22, mass: 0.35 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  // Directional 3D Tilting: tilts towards the cursor
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-maxTilt, maxTilt]);

  // Subtle 3D dynamic elevation / translateZ
  const zDepth = useSpring(isHovered ? 16 : 0, { stiffness: 350, damping: 25 });

  // Specular Glare position tracking
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  const glareBackground = useTransform(
    [glareX, glareY],
    ([gx, gy]) =>
      `radial-gradient(circle at ${gx} ${gy}, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.04) 45%, transparent 75%)`
  );

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalized position from -0.5 to 0.5 across both X and Y axes
    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        z: zDepth,
        transformPerspective: 1200,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale }}
      transition={{ duration: 0.15 }}
      className={`relative crisp-card transition-shadow duration-300 will-change-transform ${className}`}
      {...props}
    >
      {/* Card Body Content with 3D depth preservation */}
      <div 
        style={{ 
          transform: isHovered ? 'translateZ(12px)' : 'translateZ(0px)',
          transition: 'transform 0.25s ease-out',
          transformStyle: 'preserve-3d'
        }} 
        className="relative z-10 w-full h-full"
      >
        {children}
      </div>

      {/* Dynamic Specular Sheen Glare following mouse direction */}
      {glare && (
        <motion.div 
          className="absolute inset-0 pointer-events-none rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 overflow-hidden"
          style={{ background: glareBackground }}
          aria-hidden="true"
        />
      )}
    </motion.div>
  );
}
