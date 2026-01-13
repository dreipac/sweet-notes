import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [currentPhase, setCurrentPhase] = React.useState(0);

  const messages = [
    { text: "Hey mein Schatz...", emoji: "💕" },
    { text: "Ich habe etwas für dich vorbereitet", emoji: "🎁" },
    { text: "Weil du das Beste bist, was mir je passiert ist", emoji: "✨" },
    { text: "Ich liebe dich", emoji: "❤️" },
  ];

  React.useEffect(() => {
    if (currentPhase < messages.length) {
      const timer = setTimeout(() => {
        setCurrentPhase(currentPhase + 1);
      }, 2500);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentPhase, onComplete, messages.length]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center romantic-gradient"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background hearts */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary-foreground/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: 20 + Math.random() * 40,
            }}
            animate={{
              y: [-20, 20],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {currentPhase < messages.length && (
          <motion.div
            key={currentPhase}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center px-8"
          >
            <motion.span
              className="text-6xl block mb-6"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {messages[currentPhase].emoji}
            </motion.span>
            <h1 className="text-2xl md:text-3xl font-display font-semibold text-primary-foreground leading-relaxed">
              {messages[currentPhase].text}
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress dots */}
      <div className="absolute bottom-20 flex gap-2">
        {messages.map((_, i) => (
          <motion.div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i <= currentPhase ? "bg-primary-foreground" : "bg-primary-foreground/30"
            }`}
            animate={{ scale: i === currentPhase ? [1, 1.3, 1] : 1 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default IntroAnimation;
