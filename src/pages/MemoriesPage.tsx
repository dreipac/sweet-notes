import React from "react";
import { motion } from "framer-motion";
import { Heart, Camera } from "lucide-react";

const memories = [
  {
    id: 1,
    title: "Euses erste Date mit de Rose",
    description: "De Tag wo alles agfange het",
    emoji: "💕",
  },
  {
    id: 2,
    title: "Wo mir zemme cho sind",
    description: "Beide nervös und mir hend eus Versprechige geh und beidi simmer verliebt gsii, de schönsti Tag wo ich je gha hann",
    emoji: "❤️",
  },
  {
    id: 3,
    title: "Erste mal Chur",
    description: "Interessant gsi und dir hani zeigt mini City",
    emoji: "💒",
  },
  {
    id: 4,
    title: "Ersti Übernachtig",
    description: "Beidi ufgregt gsi und für eus beidi en sehr schöne Abig",
    emoji: "💤",
  },
  {
    id: 5,
    title: "Kommunikation und Liebi",
    description: "Mir geben eus Mühe um besser zu werde und ich denke mir verdienen en zweite Chance",
    emoji: "✨",
  },
  {
    id: 6,
    title: "Eusi Zuekunft",
    description: "Alles chunnt no uf eus zue und mir werden reifer und besser zemme verbringe",
    emoji: "🌟",
  },
];

const MemoriesPage: React.FC = () => {
  return (
    <div className="min-h-screen pb-24 pt-6 px-4 soft-gradient">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <motion.span
          className="text-4xl block mb-2"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          📸
        </motion.span>
        <h1 className="text-2xl font-display font-bold text-foreground mb-2">
          Unsere Erinnerungen
        </h1>
        <p className="text-muted-foreground text-sm">
          Momente, die für immer bleiben
        </p>
      </motion.div>

      <div className="grid gap-4 max-w-md mx-auto">
        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="card-gradient rounded-2xl p-4 shadow-card border border-border"
          >
            <div className="flex items-center gap-4">
              <motion.div
                className="w-16 h-16 romantic-gradient rounded-xl flex items-center justify-center text-2xl shadow-soft"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {memory.emoji}
              </motion.div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-foreground">
                  {memory.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {memory.description}
                </p>
              </div>
              <Heart className="w-5 h-5 text-primary fill-primary/30" />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 p-6 card-gradient rounded-2xl shadow-card border border-border max-w-md mx-auto"
      >
        <div className="flex items-center gap-3 mb-3">
          <Camera className="w-5 h-5 text-primary" />
          <h3 className="font-display font-semibold text-foreground">
            Neui Erinnerig hinzuefüege
          </h3>
        </div>
        <p className="text-muted-foreground text-sm mb-4">
          Bald chasch eigeni Erinnerige ine tue  💕
        </p>
        <div className="w-full h-32 border-2 border-dashed border-primary/30 rounded-xl flex items-center justify-center">
          <span className="text-primary/50 text-sm">Bald verfüegbar</span>
        </div>
      </motion.div>
    </div>
  );
};

export default MemoriesPage;
