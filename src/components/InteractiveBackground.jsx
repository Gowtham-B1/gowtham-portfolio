import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTheme } from '../context/useTheme';

export default function InteractiveBackground() {
  const { theme } = useTheme();
  const canvasRef = useRef(null);
  const isDark = theme === 'dark';

  // Smooth mouse tracker for the ambient spotlight
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const springConfig = { damping: 28, stiffness: 140, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const auraSpringConfig = { damping: 45, stiffness: 70, mass: 1 };
  const auraX = useSpring(mouseX, auraSpringConfig);
  const auraY = useSpring(mouseY, auraSpringConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Interactive Particle Constellation Canvas with physics & cursor repulsion
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates inside canvas
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 160
    };

    const handleCanvasMouse = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleCanvasMouse, { passive: true });
    window.addEventListener('mouseout', handleMouseLeave);

    // Particle class
    const particleCount = Math.min(Math.floor((width * height) / 16000), 75);
    const particles = [];

    const color1 = isDark ? '255, 94, 58' : '214, 90, 49';
    const color2 = isDark ? '16, 185, 129' : '96, 121, 54';

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.color = Math.random() > 0.4 ? color1 : color2;
        this.alpha = Math.random() * 0.5 + 0.2;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        ctx.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce on edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse interaction: push away or attract
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = (dx / distance) * force * 3;
          const directionY = (dy / distance) * force * 3;
          this.x -= directionX;
          this.y -= directionY;
        }
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect particles with luminous lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * (isDark ? 0.22 : 0.15);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${color1}, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Connect particles to mouse cursor when close
      for (let i = 0; i < particles.length; i++) {
        const dx = mouse.x - particles[i].x;
        const dy = mouse.y - particles[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const cursorLineAlpha = (1 - dist / mouse.radius) * (isDark ? 0.4 : 0.25);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${color1}, ${cursorLineAlpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }

        particles[i].update();
        particles[i].draw();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleCanvasMouse);
      window.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [isDark]);

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 transition-colors duration-500"
      aria-hidden="true"
    >
      {/* Dynamic Engineering Grid Pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-85" />

      {/* Floating Canvas Constellation Network */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-90"
      />

      {/* Primary Dynamic Mouse Spotlight */}
      <motion.div
        className="absolute rounded-full filter blur-[90px]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          width: 550,
          height: 550,
          background: isDark
            ? 'radial-gradient(circle, rgba(255, 94, 58, 0.22) 0%, rgba(16, 185, 129, 0.08) 45%, transparent 70%)'
            : 'radial-gradient(circle, rgba(214, 90, 49, 0.15) 0%, rgba(96, 121, 54, 0.08) 45%, transparent 70%)',
        }}
      />

      {/* Secondary Lagging Ambient Aura for fluid depth */}
      <motion.div
        className="absolute rounded-full filter blur-[130px]"
        style={{
          x: auraX,
          y: auraY,
          translateX: '-50%',
          translateY: '-50%',
          width: 800,
          height: 800,
          background: isDark
            ? 'radial-gradient(circle, rgba(255, 94, 58, 0.1) 0%, rgba(36, 41, 61, 0.4) 60%, transparent 80%)'
            : 'radial-gradient(circle, rgba(214, 90, 49, 0.07) 0%, rgba(226, 223, 215, 0.5) 60%, transparent 80%)',
        }}
      />

      {/* Atmospheric Glowing Orbs in Corners */}
      <div 
        className={`absolute -top-32 -right-32 w-[450px] h-[450px] rounded-full filter blur-[110px] transition-all duration-700 ${
          isDark ? 'bg-[#FF5E3A]/12' : 'bg-[#D65A31]/10'
        } animate-pulse`} 
      />
      <div 
        className={`absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full filter blur-[120px] transition-all duration-700 ${
          isDark ? 'bg-[#10B981]/10' : 'bg-[#607936]/8'
        }`} 
      />
      <div 
        className={`absolute -bottom-32 -right-20 w-[450px] h-[450px] rounded-full filter blur-[110px] transition-all duration-700 ${
          isDark ? 'bg-[#FF5E3A]/10' : 'bg-[#D65A31]/8'
        }`} 
      />
    </div>
  );
}
