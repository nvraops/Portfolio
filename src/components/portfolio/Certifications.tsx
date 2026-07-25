import { Reveal, SectionHeading } from "./motion";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, Trophy, BookOpen, X, ShieldCheck, CheckCircle } from "lucide-react";
import { certifications, hackathons, workshops } from "@/lib/portfolio-data";

export function Certifications() {
  const [selectedCard, setSelectedCard] = useState<{
    title: string;
    type: "cert" | "hackathon" | "workshop";
    org: string;
    items: string[];
    description?: string;
  } | null>(null);

  // Combine all certifications, hackathons, and workshops into one uniform dataset
  const combinedItems = [
    ...certifications.map((c) => ({
      title: c.org,
      org: c.org,
      type: "cert" as const,
      icon: Award,
      items: c.items,
      description: undefined,
    })),
    ...hackathons.map((h) => ({
      title: h.name,
      org: h.role,
      type: "hackathon" as const,
      icon: Trophy,
      items: [h.description],
      description: h.description,
    })),
    ...workshops.map((w) => ({
      title: w.name,
      org: w.org,
      type: "workshop" as const,
      icon: BookOpen,
      items: [w.name],
      description: undefined,
    })),
  ];

  return (
    <section id="certifications" className="relative mx-auto max-w-5xl px-6 py-28 select-none">
      <SectionHeading
        eyebrow="Certifications & Achievements"
        description="Upskilling across Artificial Intelligence, Agentic AI, Cloud, Security, and Software Engineering."
      />

      {/* Unified Single Grid */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {combinedItems.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <Reveal key={item.title + idx} delay={(idx % 3) * 0.06}>
              <motion.div
                whileHover={{ y: -5, scale: 1.01 }}
                onClick={() =>
                  setSelectedCard({
                    title: item.title,
                    type: item.type,
                    org: item.org,
                    items: item.items,
                    description: item.description,
                  })
                }
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="tech-card h-full rounded-2xl p-6 border border-cyan/20 bg-black/20 relative group cursor-pointer hover:border-cyan/50 hover:shadow-[0_0_15px_rgba(0,255,255,0.05)] flex flex-col justify-between"
              >
                <div className="absolute right-4 top-4 font-mono text-[8px] text-cyan/30">
                  CRD-0{idx + 1}
                </div>
                <div className="absolute left-0 top-0 h-2 w-2 border-l border-t border-cyan/30" />
                <div className="absolute right-0 top-0 h-2 w-2 border-r border-t border-cyan/30" />

                <div>
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-cyan/15 border border-cyan/20 text-cyan shrink-0">
                      <IconComponent size={18} />
                    </div>
                    <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-cyan line-clamp-1">
                      {item.org}
                    </h3>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {item.items.map((it, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed font-sans">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan/70" />
                        <span className="line-clamp-3">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 text-xs font-sans text-cyan hover:underline text-right font-medium">
                  {item.type === "cert" ? "Verify Credentials →" : "View Details →"}
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>

      {/* Card Details Modal */}
      <AnimatePresence>
        {selectedCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="tech-card rounded-2xl w-full max-w-md overflow-hidden border border-cyan/30 bg-[#070b13] p-6 relative scanline"
            >
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute right-4 top-4 text-muted-foreground hover:text-cyan transition-colors cursor-pointer"
                aria-label="Close details popup"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3 border-b border-cyan/15 pb-4 mb-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-cyan/10 border border-cyan/30 text-cyan">
                  {selectedCard.type === "hackathon" ? <Trophy size={22} /> : selectedCard.type === "workshop" ? <BookOpen size={22} /> : <Award size={22} />}
                </div>
                <div>
                  <h3 className="font-sans text-sm font-bold text-cyan uppercase tracking-wider">
                    {selectedCard.title}
                  </h3>
                  <div className="flex items-center gap-1 text-[9px] font-mono text-green-400">
                    <ShieldCheck size={11} /> RECORD_VERIFIED
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-[10px] font-display font-semibold text-cyan/70 uppercase tracking-widest">
                  {selectedCard.type === "hackathon" ? "Program Details" : "Completed Programs"}
                </div>
                <ul className="space-y-3">
                  {selectedCard.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-3 bg-cyan/5 border border-cyan/10 rounded-xl p-3.5 select-none">
                      <CheckCircle size={14} className="text-cyan shrink-0 mt-0.5" />
                      <span className="text-xs text-foreground/90 font-medium leading-normal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

