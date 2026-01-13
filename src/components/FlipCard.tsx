import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface FlipCardProps {
  frontContent?: string;
  backContent: string;
  index: number;
}

const FlipCard: React.FC<FlipCardProps> = ({ backContent, index }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <motion.div
      className="relative h-40 cursor-pointer"
      style={{ perspective: 1000 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front - Hidden card */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl card-gradient border border-border shadow-card flex flex-col items-center justify-center gap-3"
          style={{ backfaceVisibility: "hidden" }}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="w-10 h-10 text-primary fill-primary/30" />
          </motion.div>
          <span className="text-sm text-muted-foreground font-medium">
            Tippe zum Aufdecken
          </span>
        </div>

        {/* Back - Content */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl romantic-gradient shadow-card flex flex-col items-center justify-center p-4 text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <Heart className="w-6 h-6 text-primary-foreground mb-2 fill-primary-foreground/30" />
          <p className="text-primary-foreground font-medium text-sm leading-relaxed">
            {backContent}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlipCard;
