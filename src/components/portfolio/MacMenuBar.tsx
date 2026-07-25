import { useState, useEffect } from "react";
import { Cpu, Wifi, Sliders, Command } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

export function MacMenuBar({ activeSection = "Nikhill OS" }: { activeSection?: string }) {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex h-7 items-center justify-between px-3 text-[11px] font-sans font-medium text-[#f2f1ee]/90 bg-[#0a0a0d]/75 backdrop-blur-xl border-b border-white/10 select-none">
      {/* Left Menu Options */}
      <div className="flex items-center gap-4">
        {/* Profile Avatar / OS Icon */}
        <a href="#top" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity font-bold">
          <div className="h-4 w-4 rounded-full overflow-hidden border border-primary/50">
            <img src={profileImg} alt="OS Logo" className="h-full w-full object-cover" />
          </div>
          <span className="font-semibold tracking-tight text-white">Nikhill OS</span>
        </a>

        <span className="h-3 w-[1px] bg-white/15" />

        <div className="hidden sm:flex items-center gap-3 text-muted-foreground text-[11px]">
          <span className="font-semibold text-white uppercase tracking-wide text-[10px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10">
            {activeSection}
          </span>
          <span className="hover:text-white cursor-pointer transition-colors">File</span>
          <span className="hover:text-white cursor-pointer transition-colors">View</span>
          <span className="hover:text-white cursor-pointer transition-colors">Window</span>
          <span className="hover:text-white cursor-pointer transition-colors">Help</span>
        </div>
      </div>

      {/* Right System Indicators */}
      <div className="flex items-center gap-3 font-mono text-[10px] text-muted-foreground">
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-sans font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>AI AGENT READY</span>
        </div>

        <div className="hidden xs:flex items-center gap-2">
          <Wifi size={12} className="text-white/80" />
          <Sliders size={12} className="text-white/80" />
        </div>

        <span className="text-white font-mono font-medium">{timeStr || "12:00:00 PM"}</span>
      </div>
    </header>
  );
}
