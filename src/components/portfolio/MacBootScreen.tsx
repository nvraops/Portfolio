import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Terminal, ShieldCheck } from "lucide-react";

export function MacBootScreen({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState<"init" | "loading">("init");

  useEffect(() => {
    // Stage 1: "Initializing AI Workspace..." (0ms - 400ms)
    // Stage 2: "Loading Nikhill Vasudeva Rao P Portfolio..." (400ms - 800ms)
    // Complete at 850ms (within the 0.5s - 1s spec requirement)
    const t1 = setTimeout(() => {
      setStage("loading");
    }, 400);

    const t2 = setTimeout(() => {
      onComplete();
    }, 850);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, filter: "blur(12px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050507] text-[#f2f1ee] select-none font-sans"
    >
      <div className="flex flex-col items-center gap-6 max-w-sm px-6 text-center">
        {/* Apple/AI Glow Logo */}
        <motion.div
          animate={{ scale: [0.95, 1.05, 1], opacity: [0.7, 1] }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 shadow-[0_0_40px_-10px_rgba(239,91,63,0.4)] backdrop-blur-xl"
        >
          <Cpu size={32} className="text-primary animate-pulse" />
        </motion.div>

        {/* Boot Status Messages */}
        <div className="min-h-[60px] flex flex-col items-center justify-center gap-2">
          <AnimatePresence mode="wait">
            {stage === "init" ? (
              <motion.div
                key="init"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-2 font-mono text-xs text-[#8b8b92]"
              >
                <Terminal size={14} className="text-primary animate-spin" />
                <span>Initializing AI Workspace...</span>
              </motion.div>
            ) : (
              <motion.div
                key="loading"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-2 font-mono text-xs font-semibold text-[#f2f1ee]"
              >
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>Loading Nikhill Vasudeva Rao P Portfolio...</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Subtle Progress Bar */}
        <div className="w-48 h-1 rounded-full bg-white/10 overflow-hidden relative">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: stage === "init" ? "45%" : "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-primary to-orange-400 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
}
