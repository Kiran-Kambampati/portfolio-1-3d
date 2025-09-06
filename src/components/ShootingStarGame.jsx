import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const ShootingStarGame = ({ isVisible, onClose }) => {
  const [score, setScore] = useState(0);
  const [stars, setStars] = useState([]);
  const [gameActive, setGameActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      if (timeLeft > 0 && gameActive) {
        setTimeLeft(timeLeft - 1);
      } else if (timeLeft === 0) {
        endGame();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, gameActive, isVisible]);

  useEffect(() => {
    if (!gameActive || !isVisible) return;

    const starInterval = setInterval(() => {
      const newStar = {
        id: Date.now() + Math.random(),
        x: Math.random() * (window.innerWidth - 50),
        y: -50,
        speed: 2 + Math.random() * 3,
      };
      setStars(prev => [...prev, newStar]);
    }, 800);

    return () => clearInterval(starInterval);
  }, [gameActive, isVisible]);

  useEffect(() => {
    if (!gameActive || !isVisible) return;

    const moveStars = setInterval(() => {
      setStars(prev => prev
        .map(star => ({ ...star, y: star.y + star.speed }))
        .filter(star => star.y < window.innerHeight)
      );
    }, 16);

    return () => clearInterval(moveStars);
  }, [gameActive, isVisible]);

  const startGame = () => {
    setScore(0);
    setStars([]);
    setTimeLeft(30);
    setGameActive(true);
  };

  const endGame = () => {
    setGameActive(false);
    if (score > 10) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const catchStar = (starId) => {
    setStars(prev => prev.filter(star => star.id !== starId));
    setScore(prev => prev + 1);
    
    // Mini confetti for each catch
    confetti({
      particleCount: 10,
      spread: 30,
      origin: { x: Math.random(), y: Math.random() }
    });
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <div className="glass p-8 rounded-2xl max-w-md w-full mx-4 text-center relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl hover-text-neon-blue transition-colors"
        >
          ×
        </button>
        
        <h2 className="text-3xl font-cosmic font-bold mb-4 shimmer-text">
          🌟 Catch the Shooting Stars!
        </h2>
        
        <div className="flex justify-between mb-6">
          <div className="text-neon-blue">
            Score: <span className="font-bold">{score}</span>
          </div>
          <div className="text-neon-purple">
            Time: <span className="font-bold">{timeLeft}s</span>
          </div>
        </div>
        
        {!gameActive && timeLeft === 30 && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startGame}
            className="bg-neon-blue text-black px-6 py-3 rounded-full font-semibold hover:bg-neon-purple transition-colors"
          >
            Start Game
          </motion.button>
        )}
        
        {!gameActive && timeLeft !== 30 && (
          <div>
            <p className="text-xl mb-4">Game Over!</p>
            <p className="text-neon-blue mb-4">Final Score: {score}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={startGame}
              className="bg-neon-purple text-black px-6 py-3 rounded-full font-semibold hover:bg-neon-blue transition-colors"
            >
              Play Again
            </motion.button>
          </div>
        )}
      </div>
      
      {/* Game Stars */}
      {gameActive && stars.map(star => (
        <motion.div
          key={star.id}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          style={{
            position: 'absolute',
            left: star.x,
            top: star.y,
            cursor: 'pointer',
            fontSize: '24px',
            zIndex: 51
          }}
          onClick={() => catchStar(star.id)}
          className="hover:scale-125 transition-transform"
        >
          ⭐
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ShootingStarGame;
