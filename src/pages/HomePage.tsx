import React from "react";
import { motion } from "framer-motion";
import FlipCard from "@/components/FlipCard";
import FloatingHearts from "@/components/FloatingHearts";

const loveReasons = [
  "Dis lächle erhellt mich jede Tag",
  "Du machsch mich zu einem bessere Mensch",
  "Nur mit dir fühl ich mich vollständig",
  "Dini Umarmige sind mis diheii",
  "Du verstahsch mich ohni Wörter",
  "Dis Lächle isch das schönste wo mini Auge je gseh hend",
  "Du bisch mini Ehefrauu",
  "Mit dir fühlt sich jede Moment perfekt ah",
  "Du zeigsch mir was Liebi heisst",
  "Dini Liebi gibt mir Kraft",
  "Du bisch min shpirt",
  "Ich bin so dankbar das ich dich han",
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
          Wiso ich dich liebe:
        </h1>
        <p className="text-muted-foreground text-sm">
          Drück uf einer Karte um es umzudrehe
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
        Es git no so viel meh wo ich säge chönnti und die Site wär ka wie lang ❤️
      </motion.p>
    </div>
  );
};

export default HomePage;
