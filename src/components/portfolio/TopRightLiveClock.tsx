import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Terminal } from "lucide-react";

export function TopRightLiveClock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  const formattedTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;

  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("replay-boot-intro"));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed top-5 right-6 z-[40] hidden 2xl:flex items-center select-none"
    >
      <button
        onClick={handleClick}
        className="group relative flex items-center gap-2.5 rounded-full border border-white/15 bg-[#111114]/90 backdrop-blur-md px-3.5 py-1.5 shadow-2xl font-mono text-xs text-white/90 hover:border-[#ef5b3f]/60 hover:bg-[#ef5b3f]/10 transition-all cursor-pointer whitespace-nowrap active:scale-95"
        aria-label="Live System Time - Click to Replay Boot Sequence Intro"
      >
        {/* Pulsing Emerald Green Status Dot */}
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>

        {/* Date string */}
        <span className="font-bold text-[#f2f1ee]/90 tracking-tight">{formattedDate}</span>

        {/* Separator pipe */}
        <span className="text-white/20">|</span>

        {/* Ticking Time string in Accent Orange */}
        <span className="font-extrabold text-[#ef5b3f] tracking-widest">{formattedTime}</span>

        {/* Interactive Terminal Icon */}
        <Terminal size={13} className="text-cyan transition-transform group-hover:rotate-12 group-hover:scale-110 ml-0.5" />

        {/* Tooltip on Hover */}
        <span className="absolute top-10 right-0 scale-0 group-hover:scale-100 transition-all duration-200 origin-top-right rounded-lg bg-[#111114] border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#f2f1ee] shadow-2xl whitespace-nowrap pointer-events-none">
          Click to Replay Boot Sequence ↵
        </span>
      </button>
    </motion.div>
  );
}
