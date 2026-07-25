import { motion } from "motion/react";
import { User, Code2, Briefcase, Award, Mail, FileText, Bot } from "lucide-react";

interface MacDockProps {
  onToggleAi?: () => void;
}

export function MacDock({ onToggleAi }: MacDockProps) {
  const dockApps = [
    { id: "about-app", label: "About.app", icon: User, href: "#about" },
    { id: "projects-app", label: "Projects.app", icon: Code2, href: "#projects" },
    { id: "experience-app", label: "Experience.app", icon: Briefcase, href: "#experience" },
    { id: "skills-app", label: "Skills.app", icon: Award, href: "#skills" },
    { id: "contact-app", label: "Contact.app", icon: Mail, href: "#contact" },
  ];

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 select-none">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0a0a0d]/80 backdrop-blur-2xl px-3 py-2 shadow-2xl shadow-black/80"
      >
        {dockApps.map((app) => {
          const Icon = app.icon;
          return (
            <a
              key={app.id}
              href={app.href}
              className="group relative flex flex-col items-center p-2 rounded-xl text-white/80 hover:text-white transition-all hover:scale-125 duration-200"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                <Icon size={18} className="transition-transform group-hover:scale-110 group-hover:text-primary" />
              </div>

              {/* Active Indicator Dot */}
              <span className="h-1 w-1 rounded-full bg-primary/80 mt-1 shadow-[0_0_6px_rgba(239,91,63,0.8)]" />

              {/* macOS Tooltip */}
              <span className="absolute bottom-14 scale-0 group-hover:scale-100 transition-all duration-200 origin-bottom rounded-lg bg-[#111114] border border-white/10 px-2.5 py-1 text-[10px] font-bold tracking-wide text-[#f2f1ee] shadow-xl whitespace-nowrap">
                {app.label}
              </span>
            </a>
          );
        })}

        <div className="h-6 w-[1px] bg-white/10 mx-1" />

        {/* Resume PDF Action */}
        <a
          href="/CV_Nikhill_Vasudeva_Rao.pdf"
          download="CV_Nikhill_Vasudeva_Rao.pdf"
          className="group relative flex flex-col items-center p-2 rounded-xl text-white/80 hover:text-white transition-all hover:scale-125 duration-200"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/20 border border-primary/40 text-primary shadow-md">
            <FileText size={18} />
          </div>
          <span className="h-1 w-1 rounded-full bg-emerald-400 mt-1" />
          <span className="absolute bottom-14 scale-0 group-hover:scale-100 transition-all duration-200 origin-bottom rounded-lg bg-[#111114] border border-white/10 px-2.5 py-1 text-[10px] font-bold tracking-wide text-[#f2f1ee] shadow-xl whitespace-nowrap">
            CV_Nikhill_Vasudeva_Rao.pdf
          </span>
        </a>

        {/* AI Assistant App Icon */}
        {onToggleAi && (
          <button
            onClick={onToggleAi}
            className="group relative flex flex-col items-center p-2 rounded-xl text-white/80 hover:text-white transition-all hover:scale-125 duration-200"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/20 border border-violet-500/40 text-violet-400 shadow-md animate-pulse">
              <Bot size={18} />
            </div>
            <span className="h-1 w-1 rounded-full bg-violet-400 mt-1" />
            <span className="absolute bottom-14 scale-0 group-hover:scale-100 transition-all duration-200 origin-bottom rounded-lg bg-[#111114] border border-white/10 px-2.5 py-1 text-[10px] font-bold tracking-wide text-[#f2f1ee] shadow-xl whitespace-nowrap">
              AI Assistant.app
            </span>
          </button>
        )}
      </motion.div>
    </div>
  );
}
