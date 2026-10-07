/**
 * Mechanical Assembly & Docking Motion Variants for Framer Motion.
 * Provides physical, snapping, cyber-mechanical assembly transitions
 * across all portfolio sections when scrolling into view.
 */

export const mechanicalContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    }
  }
};

export const mechanicalHeader = {
  hidden: { 
    opacity: 0, 
    y: -40, 
    scale: 0.96 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      type: "spring", 
      stiffness: 260, 
      damping: 22 
    } 
  }
};

export const mechanicalLeft = {
  hidden: { 
    opacity: 0, 
    x: -65, 
    rotate: -1.5, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    x: 0, 
    rotate: 0, 
    scale: 1, 
    transition: { 
      type: "spring", 
      stiffness: 220, 
      damping: 20 
    } 
  }
};

export const mechanicalRight = {
  hidden: { 
    opacity: 0, 
    x: 65, 
    rotate: 1.5, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    x: 0, 
    rotate: 0, 
    scale: 1, 
    transition: { 
      type: "spring", 
      stiffness: 220, 
      damping: 20 
    } 
  }
};

export const mechanicalCard = {
  hidden: { 
    opacity: 0, 
    y: 45, 
    scale: 0.92 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      type: "spring", 
      stiffness: 240, 
      damping: 22 
    } 
  }
};

export const mechanicalItem = {
  hidden: { 
    opacity: 0, 
    y: 25, 
    scale: 0.96 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      type: "spring", 
      stiffness: 280, 
      damping: 24 
    } 
  }
};

export const mechanicalLaser = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: { 
    scaleX: 1, 
    opacity: 1, 
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } 
  }
};

export const mechanicalClampTL = {
  hidden: { opacity: 0, x: -25, y: -25 },
  visible: { 
    opacity: 1, 
    x: 0, 
    y: 0, 
    transition: { type: "spring", stiffness: 320, damping: 22 } 
  }
};

export const mechanicalClampTR = {
  hidden: { opacity: 0, x: 25, y: -25 },
  visible: { 
    opacity: 1, 
    x: 0, 
    y: 0, 
    transition: { type: "spring", stiffness: 320, damping: 22 } 
  }
};

export const mechanicalClampBL = {
  hidden: { opacity: 0, x: -25, y: 25 },
  visible: { 
    opacity: 1, 
    x: 0, 
    y: 0, 
    transition: { type: "spring", stiffness: 320, damping: 22 } 
  }
};

export const mechanicalClampBR = {
  hidden: { opacity: 0, x: 25, y: 25 },
  visible: { 
    opacity: 1, 
    x: 0, 
    y: 0, 
    transition: { type: "spring", stiffness: 320, damping: 22 } 
  }
};
