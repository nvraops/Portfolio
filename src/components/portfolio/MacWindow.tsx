import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, Minimize2, RotateCcw, Monitor } from "lucide-react";

interface MacWindowProps {
  id: string;
  title: string;
  appBadge?: string;
  children: ReactNode;
  className?: string;
}

export function MacWindow({ id, title, appBadge, children, className = "" }: MacWindowProps) {
  const [windowState, setWindowState] = useState<"normal" | "minimized" | "closed" | "fullscreen">("normal");

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setWindowState("closed");
  };

  const handleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation();
    setWindowState((prev) => (prev === "minimized" ? "normal" : "minimized"));
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setWindowState((prev) => (prev === "fullscreen" ? "normal" : "fullscreen"));
  };

  const handleRestore = () => {
    setWindowState("normal");
  };

  return (
    <div id={id} className="relative w-full max-w-6xl mx-auto my-8 scroll-mt-20">
      <AnimatePresence mode="wait">
        {windowState === "closed" ? (
          <motion.div
            key="closed"
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#111114]/60 backdrop-blur-xl px-6 py-4 text-xs font-mono text-muted-foreground shadow-lg"
          >
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
              <span>[{title}] is currently closed.</span>
            </div>
            <button
              onClick={handleRestore}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-primary/40 bg-primary/10 text-primary font-bold hover:bg-primary/20 transition-all active:scale-95"
            >
              <RotateCcw size={12} /> Reopen {title}
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="window"
            initial={{ opacity: 0, scale: 0.85, y: 40, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            animate={
              windowState === "minimized"
                ? { opacity: 0.2, scale: 0.65, y: 140, filter: "blur(12px)" }
                : windowState === "fullscreen"
                ? { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
            }
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
              duration: windowState === "fullscreen" ? 0.6 : 0.5,
            }}
            className={`tech-card transition-all duration-500 overflow-hidden relative border border-white/10 bg-[#0c0c0f]/80 backdrop-blur-2xl shadow-2xl ${
              windowState === "fullscreen"
                ? "rounded-none fixed inset-0 z-50 max-w-none my-0 overflow-y-auto"
                : "rounded-[24px]"
            } ${className}`}
          >
            {/* macOS Window Header Bar */}
            <div className="flex h-10 items-center justify-between border-b border-white/10 px-4 bg-white/[0.03] select-none">
              {/* Traffic Light Buttons */}
              <div className="flex items-center gap-2 group">
                <button
                  onClick={handleClose}
                  className="flex h-3 w-3 items-center justify-center rounded-full bg-[#ff5f56] hover:brightness-110 active:brightness-90 transition-all shadow-sm"
                  title="Close Window (Scale 1 → 0.9, Blur 10px)"
                />
                <button
                  onClick={handleMinimize}
                  className="flex h-3 w-3 items-center justify-center rounded-full bg-[#ffbd2e] hover:brightness-110 active:brightness-90 transition-all shadow-sm"
                  title="Minimize Window (Translate toward Dock)"
                />
                <button
                  onClick={handleFullscreen}
                  className="flex h-3 w-3 items-center justify-center rounded-full bg-[#27c93f] hover:brightness-110 active:brightness-90 transition-all shadow-sm"
                  title="Toggle Fullscreen Mode"
                />
              </div>

              {/* Window Title & Badge */}
              <div className="flex items-center gap-2 font-display text-xs font-semibold text-white/90">
                <span>{title}</span>
                {appBadge && (
                  <span className="font-mono text-[9px] uppercase tracking-wider text-primary px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                    {appBadge}
                  </span>
                )}
              </div>

              {/* Fullscreen Toggle Icon / Status */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleFullscreen}
                  className="text-white/40 hover:text-white transition-colors p-1"
                  aria-label="Toggle Fullscreen"
                >
                  {windowState === "fullscreen" ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
                </button>
              </div>
            </div>

            {/* Window Content */}
            <div className="p-4 sm:p-8">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
