import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const LoveLetterPage: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const letterContent = `Mein liebster Schatz,

Jeden Tag mit dir ist ein Geschenk. Du bist nicht nur meine Partnerin, sondern auch meine beste Freundin, mein Fels in der Brandung und mein größtes Glück.

Ich liebe es, wie du lachst, wie du mich anschaust und wie du immer für mich da bist. Mit dir fühle ich mich vollständig.

Danke, dass du mein Leben so wunderbar machst. Ich freue mich auf jede Sekunde, die wir noch zusammen erleben werden.

Für immer dein,
💕`;

  return (
    <div className="min-h-screen pb-24 pt-10 px-4 soft-gradient flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-2xl font-display font-bold text-foreground mb-2">
          Ein Brief für dich
        </h1>
        <p className="text-muted-foreground text-sm">
          {isOpen ? "Mit Liebe geschrieben ❤️" : "Tippe auf den Brief, um ihn zu öffnen"}
        </p>
      </motion.div>

      <div className="relative w-full max-w-sm mx-auto">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              className="relative cursor-pointer"
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              exit={{ opacity: 0, scale: 0.8, rotateX: 45 }}
              transition={{ duration: 0.5 }}
            >
              {/* Envelope back */}
              <div className="w-full h-48 bg-cream rounded-xl shadow-card relative overflow-hidden">
                {/* Envelope flap */}
                <div 
                  className="absolute top-0 left-0 right-0 h-24 romantic-gradient"
                  style={{
                    clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                  }}
                />
                
                {/* Heart seal */}
                <motion.div
                  className="absolute top-12 left-1/2 -translate-x-1/2 z-10"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <div className="w-16 h-16 romantic-gradient rounded-full flex items-center justify-center shadow-glow">
                    <Heart className="w-8 h-8 text-primary-foreground fill-primary-foreground/50" />
                  </div>
                </motion.div>

                {/* Envelope body pattern */}
                <div className="absolute bottom-4 left-4 right-4 h-16 border-t-2 border-dashed border-primary/20" />
              </div>

              <motion.p
                className="text-center text-primary font-medium mt-4"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨ Tippe zum Öffnen ✨
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full"
            >
              {/* Paper with hearts */}
              <div className="letter-gradient rounded-xl shadow-card p-6 relative overflow-hidden min-h-[400px]">
                {/* Decorative hearts */}
                <div className="absolute top-4 right-4 text-2xl opacity-30">💕</div>
                <div className="absolute bottom-4 left-4 text-2xl opacity-30">💕</div>
                <div className="absolute top-1/2 right-6 text-lg opacity-20">❤️</div>

                {/* Paper lines */}
                <div className="absolute inset-x-6 top-16 bottom-6 space-y-6">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="h-px bg-primary/10" />
                  ))}
                </div>

                {/* Letter content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="relative z-10"
                >
                  <pre className="font-sans text-foreground text-sm leading-relaxed whitespace-pre-wrap">
                    {letterContent}
                  </pre>
                </motion.div>
              </div>

              <motion.button
                className="mt-6 mx-auto block text-primary font-medium text-sm"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Brief schließen 💌
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LoveLetterPage;
