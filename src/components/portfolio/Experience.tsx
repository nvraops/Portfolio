import { Reveal, GlassCard } from "./motion";
import { Calendar, CheckCircle } from "lucide-react";
import { experience } from "@/lib/portfolio-data";

const FlowerIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#ef5b3f] shrink-0 animate-spin-slow">
    <path d="M12 2v20M2 12h20M5.22 5.22l13.56 13.56M18.78 5.22L5.22 18.78" />
  </svg>
);

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-5xl px-6 py-24 select-none">
      {/* Section Title */}
      <div className="flex items-center gap-3 text-2xl sm:text-3xl font-black uppercase tracking-[0.08em] text-white mb-12">
        <FlowerIcon />
        <span>My Experience</span>
      </div>

      {/* Cards Wrapper */}
      <div className="flex flex-col gap-10 w-full">
        {experience.map((exp, idx) => (
          <Reveal key={exp.company} delay={idx * 0.1} className="w-full">
            <GlassCard className="p-6 sm:p-8 border border-white/5 bg-[#111114]/65 relative w-full flex flex-col gap-6" tag={exp.company.split(" ")[0].toUpperCase()}>
              {/* Header: Role, Company, Period */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-bold uppercase tracking-wider text-[#ef5b3f] mt-1.5 block">
                    {exp.company}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-[#8b8b92] bg-white/5 border border-white/5 rounded-lg px-3.5 py-1.5 self-start sm:self-center shrink-0">
                  <Calendar size={14} className="text-[#ef5b3f]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Work Details / Accomplishments (Directly visible!) */}
              <div className="flex flex-col gap-4">
                <div className="text-[10px] font-mono font-bold text-[#8b8b92]/70 uppercase tracking-widest">
                  Key Responsibilities & Accomplishments
                </div>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                  {exp.points.map((point) => (
                    <div 
                      key={point} 
                      className="flex items-start gap-3.5 bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-white/10 rounded-xl p-4 transition-all duration-300 select-none group"
                    >
                      <CheckCircle size={15} className="text-[#ef5b3f] shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                      <p className="text-sm text-[#8b8b92] group-hover:text-white leading-relaxed font-sans font-medium transition-colors duration-250">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
