import { motion, type Variants } from "motion/react";
import { type ReactNode } from "react";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title?: string;
  description?: string;
}) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="mx-auto max-w-2xl text-center"
    >
      <motion.p
        variants={fadeUp}
        className="mb-4 inline-block rounded-full border border-border glass px-6 py-2.5 text-sm sm:text-base font-black uppercase tracking-[0.15em] text-primary select-none"
      >
        {eyebrow}
      </motion.p>
      {title && (
        <motion.h2 variants={fadeUp} className="text-4xl font-bold sm:text-5xl">
          <span className="text-gradient">{title}</span>
        </motion.h2>
      )}
      {description && (
        <motion.p variants={fadeUp} className="mt-4 text-base text-muted-foreground sm:text-lg">
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

export function GlassCard({
  children,
  className = "",
  tag,
}: {
  children: ReactNode;
  className?: string;
  tag?: string;
}) {
  return (
    <div className={`tech-card rounded-2xl p-6 sm:p-8 overflow-hidden relative group transition-all duration-300 hover:border-cyan/30 ${className}`}>
      {/* Cyber corners */}
      <div className="absolute left-0 top-0 h-2 w-2 border-l border-t border-cyan/30 transition-all group-hover:border-cyan" />
      <div className="absolute right-0 top-0 h-2 w-2 border-r border-t border-cyan/30 transition-all group-hover:border-cyan" />
      <div className="absolute left-0 bottom-0 h-2 w-2 border-l border-b border-cyan/30 transition-all group-hover:border-cyan" />
      <div className="absolute right-0 bottom-0 h-2 w-2 border-r border-b border-cyan/30 transition-all group-hover:border-cyan" />
      
      {tag && (
        <div className="absolute right-3 top-3 font-mono text-[9px] uppercase tracking-widest text-cyan/40 select-none">
          [{tag}]
        </div>
      )}
      {children}
    </div>
  );
}
