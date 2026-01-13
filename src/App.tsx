import React from "react";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroAnimation from "@/components/IntroAnimation";
import BottomNavigation from "@/components/BottomNavigation";
import HomePage from "@/pages/HomePage";
import LoveLetterPage from "@/pages/LoveLetterPage";
import MemoriesPage from "@/pages/MemoriesPage";
import SettingsPage from "@/pages/SettingsPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showIntro, setShowIntro] = React.useState(true);
  const [introComplete, setIntroComplete] = React.useState(false);

  // Check if intro was already shown in this session
  React.useEffect(() => {
    const introShown = sessionStorage.getItem("introShown");
    if (introShown) {
      setShowIntro(false);
      setIntroComplete(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setIntroComplete(true);
    sessionStorage.setItem("introShown", "true");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatePresence mode="wait">
            {showIntro && (
              <IntroAnimation onComplete={handleIntroComplete} />
            )}
          </AnimatePresence>

          {introComplete && (
            <>
              <div className="safe-area-top" />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/letter" element={<LoveLetterPage />} />
                <Route path="/memories" element={<MemoriesPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <BottomNavigation />
            </>
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
