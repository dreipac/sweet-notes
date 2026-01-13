import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Volume2, VolumeX, Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SettingsPage: React.FC = () => {
  const [partnerName, setPartnerName] = React.useState("Schatz");
  const [animationsEnabled, setAnimationsEnabled] = React.useState(true);
  const [soundEnabled, setSoundEnabled] = React.useState(false);

  const settingsGroups = [
    {
      title: "Personalisierung",
      icon: "💕",
      items: [
        {
          label: "Kosename",
          description: "Wie soll dein Partner genannt werden?",
          component: (
            <Input
              value={partnerName}
              onChange={(e) => setPartnerName(e.target.value)}
              className="max-w-[150px] bg-card border-border"
              placeholder="Schatz"
            />
          ),
        },
      ],
    },
    {
      title: "Darstellung",
      icon: "✨",
      items: [
        {
          label: "Animationen",
          description: "Schwebende Herzen und Effekte",
          component: (
            <Switch
              checked={animationsEnabled}
              onCheckedChange={setAnimationsEnabled}
            />
          ),
        },
        {
          label: "Töne",
          description: "Soundeffekte abspielen",
          component: (
            <div className="flex items-center gap-2">
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-primary" />
              ) : (
                <VolumeX className="w-4 h-4 text-muted-foreground" />
              )}
              <Switch checked={soundEnabled} onCheckedChange={setSoundEnabled} />
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pb-24 pt-6 px-4 soft-gradient">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <motion.span
          className="text-4xl block mb-2"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          ⚙️
        </motion.span>
        <h1 className="text-2xl font-display font-bold text-foreground mb-2">
          Einstellungen
        </h1>
        <p className="text-muted-foreground text-sm">
          Personalisiere deine Liebes-App
        </p>
      </motion.div>

      <div className="max-w-md mx-auto space-y-6">
        {settingsGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: groupIndex * 0.1 }}
            className="card-gradient rounded-2xl p-5 shadow-card border border-border"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">{group.icon}</span>
              <h2 className="font-display font-semibold text-foreground">
                {group.title}
              </h2>
            </div>

            <div className="space-y-4">
              {group.items.map((item, itemIndex) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between gap-4 ${
                    itemIndex !== group.items.length - 1
                      ? "pb-4 border-b border-border"
                      : ""
                  }`}
                >
                  <div className="flex-1">
                    <Label className="text-foreground font-medium">
                      {item.label}
                    </Label>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      {item.description}
                    </p>
                  </div>
                  {item.component}
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* About section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-gradient rounded-2xl p-5 shadow-card border border-border text-center"
        >
          <Heart className="w-8 h-8 text-primary mx-auto mb-3 fill-primary/30" />
          <h2 className="font-display font-semibold text-foreground mb-2">
            Für Dich ❤️
          </h2>
          <p className="text-muted-foreground text-sm mb-3">
            Mit viel Liebe gemacht, nur für dich.
          </p>
          <p className="text-xs text-muted-foreground/70">
            Version 1.0.0 • Made with 💕
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SettingsPage;
