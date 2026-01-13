import React from "react";
import { motion } from "framer-motion";
import FlipCard from "@/components/FlipCard";
import FloatingHearts from "@/components/FloatingHearts";

const loveReasons = [
  "Dein Lächeln erhellt jeden meiner Tage",
  "Du machst mich zu einem besseren Menschen",
  "Mit dir fühle ich mich komplett",
  "Deine Umarmungen sind mein Zuhause",
  "Du verstehst mich ohne Worte",
  "Dein Lachen ist die schönste Melodie",
  "Du bist meine beste Freundin",
  "Mit dir ist jeder Moment besonders",
  "Du inspirierst mich jeden Tag",
  "Deine Liebe gibt mir Kraft",
  "Du bist mein Sonnenschein",
  "Ich bin so dankbar für dich",
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen pb-24 pt-6 px-4 soft-gradient relative">
      <FloatingHearts count={8} />
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 relative z-10"
      >
        <motion.span
          className="text-4xl block mb-2"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          💕
        </motion.span>
        <h1 className="text-2xl font-display font-bold text-foreground mb-2">
          Warum ich dich liebe
        </h1>
        <p className="text-muted-foreground text-sm">
          Tippe auf eine Karte, um sie aufzudecken
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto relative z-10">
        {loveReasons.map((reason, index) => (
          <FlipCard key={index} backContent={reason} index={index} />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-center text-muted-foreground text-sm mt-8 relative z-10"
      >
        Und es gibt noch so viel mehr... ❤️
      </motion.p>
    </div>
  );
};

export default HomePage;
