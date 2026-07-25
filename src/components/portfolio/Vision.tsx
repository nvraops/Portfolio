import { Reveal, SectionHeading } from "./motion";
import { profile } from "@/lib/portfolio-data";

export function Vision() {
  return (
    <section id="vision" className="relative mx-auto max-w-5xl px-6 py-32 select-none">
      <SectionHeading
        eyebrow="Vision"
        title="Professional Vision"
      />

      <div className="mt-20 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
        <Reveal>
          <blockquote className="font-display text-2xl sm:text-4xl font-extrabold text-[#f2f1ee] leading-tight tracking-tight">
            "{profile.tagline}"
          </blockquote>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#ef5b3f] to-transparent animate-pulse" />
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 text-sm sm:text-base text-[#8b8b92] leading-relaxed max-w-2xl font-medium font-sans">
            {profile.summary}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

