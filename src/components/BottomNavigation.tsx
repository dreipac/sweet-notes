import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Mail, Camera, Settings } from "lucide-react";

const BottomNavigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Start", emoji: "🏠" },
    { path: "/letter", icon: Mail, label: "Brief", emoji: "💌" },
    { path: "/memories", icon: Camera, label: "Erinnerungen", emoji: "📸" },
    { path: "/settings", icon: Settings, label: "Einstellungen", emoji: "⚙️" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 glass-effect border-t border-border safe-area-bottom">
      <div className="flex justify-around items-center h-16 px-4 max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className="flex flex-col items-center justify-center relative py-2 px-4"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 romantic-gradient rounded-xl opacity-20"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <motion.div
                animate={{ 
                  scale: isActive ? 1.1 : 1,
                  y: isActive ? -2 : 0 
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`text-xl mb-1 ${isActive ? "" : "grayscale opacity-60"}`}
              >
                {item.emoji}
              </motion.div>
              <span
                className={`text-xs font-medium transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="indicator"
                  className="absolute -top-1 w-1 h-1 rounded-full bg-primary"
                  transition={{ type: "spring", duration: 0.3 }}
                />
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
