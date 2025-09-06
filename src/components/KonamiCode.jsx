import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const KonamiCode = ({ onActivate }) => {
  const [keySequence, setKeySequence] = useState([]);
  const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      setKeySequence(prev => {
        const newSequence = [...prev, event.code].slice(-konamiCode.length);
        
        if (newSequence.length === konamiCode.length &&
            newSequence.every((key, index) => key === konamiCode[index])) {
          onActivate();
          return [];
        }
        
        return newSequence;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onActivate]);

  return null;
};

export const RainbowMode = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-yellow-500/20 via-green-500/20 via-blue-500/20 via-indigo-500/20 to-purple-500/20 animate-pulse"></div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 20 }}
        exit={{ opacity: 0, y: -100 }}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 text-4xl font-cosmic font-bold bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent animate-bounce"
      >
        🌈 RAINBOW MODE ACTIVATED! 🌈
      </motion.div>
    </div>
  );
};

export default KonamiCode;
