import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { profile } from "@/lib/portfolio-data";

interface CinematicBootIntroProps {
  onComplete?: () => void;
}

const BOOT_LOGS = [
  { tag: "EDU", text: "B.E. Computer Science — CARE College of Engineering, Tiruchirappalli", status: "VERIFIED", color: "#38bdf8" },
  { tag: "ROLE", text: "AI Full Stack Developer · Computer Vision & Agentic AI Specialist", status: "ACTIVE", color: "#ef5b3f" },
  { tag: "NET", text: "Connecting to github.com/nvraops & linkedin.com/in/nvraops", status: "OK", color: "#38bdf8" },
  { tag: "PROJECT", text: "VisionAssist AI (YOLO, MediaPipe, EasyOCR, FastAPI, React)", status: "ONLINE", color: "#10b981" },
  { tag: "PROJECT", text: "Enterprise AI Chatbot (React, FastAPI, MongoDB, Python)", status: "ONLINE", color: "#10b981" },
  { tag: "INTERN", text: "Experience: VDart Academy & Peppy Gold Technologies", status: "VERIFIED", color: "#3b82f6" },
  { tag: "STACK", text: "Python · React · Next.js · FastAPI · Django · Docker · PyTorch", status: "READY", color: "#ef5b3f" },
  { tag: "AUTH", text: "Identity: Nikhill Vasudeva Rao P — AI Full Stack Developer", status: "VERIFIED ✓", color: "#10b981" },
];

export function CinematicBootIntro({ onComplete }: CinematicBootIntroProps) {
  const [progress, setProgress] = useState(0);
  const [visibleLogCount, setVisibleLogCount] = useState(0);
  const [dismissed, setDismissed] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Matrix Rain Background Canvas Effect (Theme Tailored)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const chars = "0123456789ABCDEFHIJKLMNOPQRSTUVWXYZ#$@%&*";
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops = new Array(columns).fill(1);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const drawMatrix = () => {
      // Dark trail effect
      ctx.fillStyle = "rgba(8, 8, 10, 0.15)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Alternating glowing orange and cyan matrix rain colors
        const isCyan = i % 3 === 0;
        ctx.fillStyle = isCyan ? "rgba(0, 255, 255, 0.45)" : "rgba(239, 91, 63, 0.45)";
        
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animId = requestAnimationFrame(drawMatrix);
    };

    drawMatrix();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Timed Progress & Log Reveal Sequence
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDismissed(true);
            onComplete?.();
          }, 400);
          return 100;
        }

        const next = prev + 2;
        // Dynamically unlock log lines based on progress percent
        const targetLogIndex = Math.min(
          BOOT_LOGS.length,
          Math.floor((next / 100) * (BOOT_LOGS.length + 1))
        );
        setVisibleLogCount(targetLogIndex);

        return next;
      });
    }, 45); // ~3.5s total boot sequence

    return () => clearInterval(interval);
  }, [onComplete]);

  // Handle Skip Intro
  const handleSkip = () => {
    setDismissed(true);
    onComplete?.();
  };

  // Keyboard shortcut (ESC or Space or Enter)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        handleSkip();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (dismissed) return null;

  const now = new Date();
  const timeString = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05, filter: "blur(12px)" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[100] flex flex-col justify-between p-6 sm:p-12 bg-[#08080a] text-[#f2f1ee] font-mono select-none overflow-hidden"
      >
        {/* Matrix Background Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full pointer-events-none opacity-40" />

        {/* Scanline Sweep Effect */}
        <div className="absolute inset-0 scanline-sweep-effect pointer-events-none" />

        {/* Top Navigation / Status Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4 text-xs font-bold tracking-widest text-[#8b8b92]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#ef5b3f] animate-ping" />
            <span className="text-[#ef5b3f]">NVRAOPS v2.0</span>
            <span className="text-white/40">— INITIALIZING</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Live Ticking Time & Date */}
            <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-white/80 bg-white/5 border border-white/10 px-3 py-1 rounded-md">
              <span className="text-[#38bdf8] font-bold">{timeString.split(" ")[0]}</span>
              <span className="text-[#ef5b3f] font-bold">{timeString.split(" ")[1]}</span>
            </div>

            <button
              onClick={handleSkip}
              className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] text-white hover:border-[#ef5b3f]/50 hover:bg-[#ef5b3f]/10 transition-all cursor-pointer"
            >
              <span>SKIP INTRO</span>
              <span className="text-[#ef5b3f] transition-transform group-hover:translate-x-0.5">↵</span>
            </button>
          </div>
        </div>

        {/* Center Main Stage */}
        <div className="relative z-10 mx-auto my-auto flex w-full max-w-4xl flex-col gap-8">
          {/* Main Title Banner */}
          <div className="flex flex-col gap-2">
            <div className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#ef5b3f] font-bold">
              AI FULL STACK DEVELOPER SYSTEM KERNEL
            </div>
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(239,91,63,0.3)]">
              Nikhill Vasudeva Rao
            </h1>
          </div>

          {/* Diagnostic Log Terminal Lines */}
          <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md p-5 sm:p-7 shadow-2xl min-h-[260px] justify-start">
            {BOOT_LOGS.slice(0, visibleLogCount).map((log, idx) => (
              <motion.div
                key={log.tag + idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-between text-xs sm:text-sm font-medium gap-4"
              >
                <div className="flex items-center gap-3 truncate">
                  <span className="text-[#ef5b3f]/70 font-bold shrink-0">
                    [&nbsp;{log.tag}&nbsp;]
                  </span>
                  <span className="text-[#f2f1ee]/90 truncate">{log.text}</span>
                </div>
                <span
                  className="font-bold text-[10px] sm:text-xs shrink-0 tracking-wider px-2 py-0.5 rounded border border-white/5 bg-white/5"
                  style={{ color: log.color }}
                >
                  {log.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Progress Bar & Timestamp Footer */}
        <div className="relative z-10 flex flex-col gap-3 max-w-4xl mx-auto w-full pt-4 border-t border-white/10">
          {/* Bar track */}
          <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/10 border border-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-[#ef5b3f] via-[#38bdf8] to-[#10b981] shadow-[0_0_12px_rgba(239,91,63,0.8)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          <div className="flex items-center justify-between text-[10px] sm:text-xs text-[#8b8b92] font-mono font-semibold">
            <span>{timeString}</span>
            <span className="text-[#ef5b3f] font-bold tracking-widest">{progress}% COMPLETE</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
