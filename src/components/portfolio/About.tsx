import { Reveal, SectionHeading, GlassCard } from "./motion";
import { motion } from "motion/react";
import { GraduationCap, Target, Quote } from "lucide-react";
import { profile, education, interests, mailtoUrl } from "@/lib/portfolio-data";
export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl px-6 py-28 select-none">
      <SectionHeading
        eyebrow="About"
        title="Turning ideas into intelligent products"
        description="A Computer Science engineer driven by curiosity, accessibility, and the craft of building things that matter."
      />

      <div className="mt-14 flex flex-col gap-8 w-full">
        {/* Main Content: Info blocks */}
        <div className="w-full flex flex-col gap-8">
          <Reveal className="w-full">
            <div className="flex flex-col gap-6 text-[#8b8b92] font-sans text-base sm:text-lg leading-relaxed w-full">
              <p className="text-[#f2f1ee] font-semibold text-lg sm:text-xl leading-relaxed">
                {profile.summary}
              </p>
              <p>
                {profile.summary2}
              </p>
              <p>
                {profile.summary3}
              </p>
            </div>
          </Reveal>

          {/* Pull-quote / signature line */}
          <Reveal delay={0.05} className="w-full text-center py-4">
            <p 
              className="text-3xl sm:text-4xl font-bold italic text-[#ef5b3f] tracking-tight"
              style={{ fontFamily: '"Palatino Linotype", "Book Antiqua", Palatino, serif' }}
            >
              "{profile.motto}"
            </p>
          </Reveal>

          {/* Terminal-style whoami block / info card */}
          <Reveal delay={0.1} className="w-full">
            <GlassCard className="font-mono text-sm flex flex-col gap-4 p-8 border border-white/5 bg-[#111114]/65 relative w-full" tag="whoami">
              <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-2">
                <span className="text-[#ef5b3f]/70 uppercase font-bold">NAME</span>
                <span className="text-[#f2f1ee]">— {profile.name}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-2">
                <span className="text-[#ef5b3f]/70 uppercase font-bold">ROLE</span>
                <span className="text-[#f2f1ee]">— AI Full Stack Developer</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-2">
                <span className="text-[#ef5b3f]/70 uppercase font-bold">EDUCATION</span>
                <span className="text-[#f2f1ee]">— B. E. Computer Science Student at CARE College of Engineering, Tiruchirappalli</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-2">
                <span className="text-[#ef5b3f]/70 uppercase font-bold">LOCATION</span>
                <span className="text-[#f2f1ee]">— {profile.location}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-2">
                <span className="text-[#ef5b3f]/70 uppercase font-bold">LANGUAGES</span>
                <span className="text-[#f2f1ee]">— {profile.languages.join(", ")}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-2">
                <span className="text-[#ef5b3f]/70 uppercase font-bold">EMAIL</span>
                <span className="text-[#f2f1ee]">— <a href={mailtoUrl} className="hover:text-[#ef5b3f] underline transition-colors">{profile.email}</a></span>
              </div>
            </GlassCard>
          </Reveal>

          {/* Career Objective smaller block */}
          <Reveal delay={0.15} className="w-full">
            <div className="p-6 rounded-2xl border border-white/5 bg-[#111114]/40 font-sans w-full">
              <h4 className="text-sm uppercase tracking-widest text-[#ef5b3f] font-bold mb-2">Career Objective</h4>
              <p className="text-sm sm:text-base text-[#8b8b92] leading-relaxed">
                {profile.objective}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
