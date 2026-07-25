import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, Mail, Instagram, Sparkles } from "lucide-react";
import { profile, stats, education, experience, certifications, mailtoUrl } from "@/lib/portfolio-data";
import profileImg from "@/assets/profile.jpg";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showCollegeModal, setShowCollegeModal] = useState(false);
  const [showInternshipsModal, setShowInternshipsModal] = useState(false);
  const [showCertificationsModal, setShowCertificationsModal] = useState(false);
  const [showLanguagesModal, setShowLanguagesModal] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Variant for staggered children entrance on page load
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section 
      id="top" 
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-transparent text-[#f2f1ee] py-24 w-full"
    >
      {/* Ambient background tint */}
      <div className="absolute inset-0 bg-[#08080a]/15" />
      
      {/* Signature Ambient Effects Layer */}
      {/* 1. Vignette shadow overlay */}
      <div className="vignette-overlay" />

      {/* 2. Scanline sweep */}
      <div className="scanline-sweep-effect" />

      {/* 3. Faint background grid with radial fade */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none -z-10" />

      {/* 4. Film-grain/noise overlay */}
      <svg className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.02] mix-blend-overlay">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* 5. Cursor-follow spotlight */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(239, 91, 63, 0.08), transparent 80%)`
        }}
      />

      {/* 6. Vertical email tag on left border */}
      <div className="fixed bottom-12 left-8 z-40 hidden vertical-text text-[9px] font-mono tracking-widest text-[#8b8b92]/40 lg:block select-none">
        {profile.email}
      </div>

      {/* 7. Overall continuous background code canvas is rendered by index layout */}

      {/* Right side vertical text sidebar */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 select-none z-10">
        <div className="h-12 w-[1px] bg-white/15" />
        <span className="vertical-text text-[9px] font-mono tracking-[0.4em] text-[#8b8b92]/40 uppercase">
          AI SYSTEMS ARCHITECT
        </span>
        <div className="h-12 w-[1px] bg-white/15" />
      </div>

      {/* Content Area */}
      <div className="mx-auto w-full max-w-5xl px-6 flex flex-col justify-center items-center gap-12 relative z-10">
        
        {/* Main Hero Card */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full rounded-[32px] border border-white/10 bg-[#161413]/70 backdrop-blur-md shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 md:divide-x md:divide-white/10">
            
            {/* Left Pane: Heading and body info */}
            <div className="md:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between items-center text-center">
              <div>
                {/* Header Tag */}
                <div className="text-[9px] sm:text-[10px] font-mono tracking-[0.25em] text-[#8b8b92] uppercase pb-4">
                  AI SYSTEMS &bull; COMPUTER VISION &bull; AGENTIC AI &bull; FULL STACK
                </div>
                
                {/* Separator */}
                <div className="h-[1px] bg-white/10 w-full mb-6" />
                
                {/* Meet the Developer */}
                <div className="inline-flex items-center gap-2 text-[#3b82f6] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4">
                  <Sparkles size={12} className="text-[#3b82f6]" /> MEET THE DEVELOPER
                </div>
                
                {/* Name Headline */}
                <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight tracking-normal text-white mb-3 font-display whitespace-nowrap">
                  {profile.name}
                </h1>
                
                {/* Subtitle / Primary Role */}
                <div className="text-[#3b82f6] text-xs sm:text-sm md:text-base font-extrabold tracking-[0.2em] uppercase mb-6 font-mono">
                  {profile.title}
                </div>
                
                {/* Body paragraph with corrected word spacing */}
                <p className="text-sm sm:text-base text-[#8b8b92] leading-relaxed font-sans font-medium mb-8">
                  {profile.summary
                    .split(" ")
                    .map((word, index) => {
                      const cleanWord = word.replace(/[.,]/g, "");
                      const isName = ["Nikhill", "Vasudeva", "Rao", "P", "AI", "Full", "Stack", "Developer"].includes(cleanWord);
                      return (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.45 + index * 0.02,
                            ease: "easeOut",
                          }}
                          className={isName ? "text-[#ef5b3f] font-bold inline-block mr-1.5" : "inline-block mr-1.5"}
                        >
                          {word}
                        </motion.span>
                      );
                    })}
                </p>
              </div>
              
              {/* Actions Row */}
              <div className="flex flex-wrap justify-center gap-3 mt-auto">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl border border-white/5 bg-white/5 text-[10px] font-bold tracking-wider uppercase text-white hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105 active:scale-95"
                >
                  <Github size={14} /> GITHUB PROFILE <span className="text-[10px] text-[#8b8b92]">↗</span>
                </a>
                
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl border border-white/5 bg-white/5 text-[10px] font-bold tracking-wider uppercase text-white hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105 active:scale-95"
                >
                  <Linkedin size={14} /> LINKEDIN CONNECT <span className="text-[10px] text-[#8b8b92]">↗</span>
                </a>
                
                <a
                  href={profile.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl border border-white/5 bg-white/5 text-[10px] font-bold tracking-wider uppercase text-white hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105 active:scale-95"
                >
                  <Instagram size={14} /> INSTAGRAM <span className="text-[10px] text-[#8b8b92]">↗</span>
                </a>
                
                <a
                  href={mailtoUrl}
                  className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl border border-white/5 bg-white/5 text-[10px] font-bold tracking-wider uppercase text-white hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105 active:scale-95"
                >
                  <Mail size={14} /> EMAIL
                </a>
              </div>
            </div>
            
            {/* Right Pane: Quote, Photo, Status, Specialties */}
            <div className="md:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col justify-between bg-black/15">
              <div className="flex flex-col items-center mb-6 text-center w-full">
                <div className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#8b8b92] uppercase mb-1">
                  CORE PHILOSOPHY
                </div>
                <div className="text-white font-black italic tracking-wide text-xs sm:text-sm md:text-base leading-tight uppercase font-display">
                  "{profile.tagline.toUpperCase()}"
                </div>
              </div>
              
              {/* Profile Image card */}
              <div className="relative w-full max-w-[260px] sm:max-w-[280px] mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-lg group mb-6 bg-black/20">
                <img 
                  src={profileImg} 
                  alt={profile.name}
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Active Indicator */}
                <div className="absolute bottom-3 left-3 bg-[#111114]/85 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-[8px] font-mono font-bold tracking-wider uppercase text-white select-none">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full dot-pulse-effect rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>
                  ACTIVE AI FULL STACK DEVELOPER
                </div>
              </div>
              
              {/* Bottom Specialties & Location info */}
              <div className="space-y-3 font-mono text-[10px] sm:text-xs mt-auto pt-4 border-t border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-[#8b8b92] uppercase tracking-wider text-[9px]">TITLE</span>
                  <span className="text-white font-bold">{profile.title}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#8b8b92] uppercase tracking-wider text-[9px]">LOCATION</span>
                  <span className="text-white font-bold uppercase">{profile.location}</span>
                </div>
              </div>
            </div>
            
            
          </div>
        </motion.div>

        {/* Bottom Area: Stat Strip Grid */}
        <motion.div
          variants={itemVariants}
          className="grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4 w-full border-t border-white/5 pt-8"
        >
          {stats.map((s, idx) => {
            const isGraduation = s.value === "2028" || s.label.toLowerCase().includes("graduation");
            const isInternships = s.value === "2" || s.label.toLowerCase().includes("internship");
            const isCertifications = s.label.toLowerCase().includes("certification");
            const isLanguages = s.value === "4" || s.label.toLowerCase().includes("language");
            return (
              <div
                key={s.label}
                onClick={
                  isGraduation
                    ? () => setShowCollegeModal(true)
                    : isInternships
                      ? () => setShowInternshipsModal(true)
                      : isCertifications
                        ? () => setShowCertificationsModal(true)
                        : isLanguages
                          ? () => setShowLanguagesModal(true)
                          : undefined
                }
                className={`tech-card rounded-2xl px-5 py-4 border border-white/5 hover:border-[#ef5b3f]/40 hover:shadow-[0_0_20px_rgba(239,91,63,0.15)] hover:-translate-y-1 transition-all duration-300 relative group bg-[#111114] ${
                  isGraduation || isInternships || isCertifications || isLanguages ? "cursor-pointer active:scale-95 select-none" : ""
                }`}
              >
                <div className="absolute right-4 top-4 font-mono text-[8px] text-[#ef5b3f]/40">MON_0{idx + 1}</div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-[#f2f1ee] group-hover:text-[#ef5b3f] transition-colors">{s.value}</div>
                <div className="mt-1 text-[9px] font-mono uppercase tracking-wider text-[#8b8b92]">{s.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* College Details Modal */}
      <AnimatePresence>
        {showCollegeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCollegeModal(false)}
              className="absolute inset-0 bg-[#08080a]/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#111114]/90 p-6 shadow-2xl backdrop-blur-xl select-none"
            >
              {/* Decorative Accent border at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ef5b3f] to-[#f5816b]" />

              {/* Close Button */}
              <button
                onClick={() => setShowCollegeModal(false)}
                className="absolute top-4 right-4 text-[#8b8b92] hover:text-[#f2f1ee] transition-colors p-1.5 rounded-full hover:bg-white/5 cursor-pointer"
                aria-label="Close modal"
              >
                <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="flex flex-col gap-4">
                <div className="inline-flex items-center gap-1.5 self-start rounded-full border border-[#ef5b3f]/20 bg-[#ef5b3f]/5 px-2.5 py-1 text-[8px] font-mono uppercase tracking-wider text-[#ef5b3f]">
                  Academic Institution
                </div>

                <div className="mt-2">
                  <h3 className="text-xl font-black text-[#f2f1ee] tracking-tight">{education.school}</h3>
                  <div className="mt-3 flex flex-col gap-2 border-t border-white/5 pt-3">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#8b8b92]">Degree</span>
                      <p className="text-sm font-semibold text-[#ef5b3f]">{education.degree}</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#8b8b92]">Field of Study</span>
                      <p className="text-sm font-semibold text-[#f2f1ee]">{education.field}</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#8b8b92]">Graduation</span>
                      <p className="text-xs font-mono text-[#8b8b92]">{education.graduation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Internships Details Modal */}
      <AnimatePresence>
        {showInternshipsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowInternshipsModal(false)}
              className="absolute inset-0 bg-[#08080a]/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#111114]/90 p-6 shadow-2xl backdrop-blur-xl select-none"
            >
              {/* Decorative Accent border at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ef5b3f] to-[#f5816b]" />

              {/* Close Button */}
              <button
                onClick={() => setShowInternshipsModal(false)}
                className="absolute top-4 right-4 text-[#8b8b92] hover:text-[#f2f1ee] transition-colors p-1.5 rounded-full hover:bg-white/5 cursor-pointer"
                aria-label="Close modal"
              >
                <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="flex flex-col gap-4 max-h-[80vh] overflow-y-auto pr-1">
                <div className="inline-flex items-center gap-1.5 self-start rounded-full border border-[#ef5b3f]/20 bg-[#ef5b3f]/5 px-2.5 py-1 text-[8px] font-mono uppercase tracking-wider text-[#ef5b3f]">
                  Professional Internships
                </div>

                <div className="mt-2 flex flex-col gap-6">
                  {experience.map((exp, index) => (
                    <div
                      key={index}
                      className={`flex flex-col gap-2 ${index > 0 ? "border-t border-white/5 pt-4" : ""}`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4 className="text-base font-bold text-[#f2f1ee] tracking-tight">
                          {exp.role}
                        </h4>
                        <span className="text-[10px] font-mono text-[#8b8b92] sm:text-right bg-white/5 px-2 py-0.5 rounded">
                          {exp.period}
                        </span>
                      </div>

                      <div className="text-xs font-semibold text-[#ef5b3f] tracking-wide">
                        {exp.company}
                      </div>

                      <ul className="mt-2 list-disc list-inside text-xs text-[#8b8b92] space-y-1.5 font-sans leading-relaxed">
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx} className="pl-1">
                            <span className="text-[#8b8b92]">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Certifications Details Modal */}
      <AnimatePresence>
        {showCertificationsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCertificationsModal(false)}
              className="absolute inset-0 bg-[#08080a]/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#111114]/90 p-6 shadow-2xl backdrop-blur-xl select-none"
            >
              {/* Decorative Accent border at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ef5b3f] to-[#f5816b]" />

              {/* Close Button */}
              <button
                onClick={() => setShowCertificationsModal(false)}
                className="absolute top-4 right-4 text-[#8b8b92] hover:text-[#f2f1ee] transition-colors p-1.5 rounded-full hover:bg-white/5 cursor-pointer"
                aria-label="Close modal"
              >
                <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="flex flex-col gap-4 max-h-[75vh] overflow-y-auto pr-1">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-[#ef5b3f]/20 bg-[#ef5b3f]/5 px-2.5 py-1 text-[8px] font-mono uppercase tracking-wider text-[#ef5b3f]">
                    12 Verified Certifications
                  </div>
                  <span className="text-[10px] font-mono text-cyan/70 font-semibold">
                    Total: {certifications.reduce((acc, c) => acc + c.items.length, 0)} Credentials
                  </span>
                </div>

                <div className="mt-2 flex flex-col gap-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className={`flex flex-col gap-1.5 ${index > 0 ? "border-t border-white/5 pt-3" : ""}`}
                    >
                      <div className="flex items-center justify-between text-xs font-bold text-[#ef5b3f] uppercase tracking-wider font-mono">
                        <span>{cert.org}</span>
                        <span className="text-[9px] text-[#8b8b92]">({cert.items.length})</span>
                      </div>

                      <ul className="space-y-1">
                        {cert.items.map((item, iIdx) => (
                          <li key={iIdx} className="text-xs text-[#f2f1ee]/90 font-sans font-medium relative pl-3.5 before:content-['•'] before:text-[#ef5b3f] before:absolute before:left-0">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex justify-end">
                  <a
                    href="#certifications"
                    onClick={() => setShowCertificationsModal(false)}
                    className="text-xs font-mono font-bold text-cyan hover:underline inline-flex items-center gap-1"
                  >
                    View All Details &amp; Credential Cards →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Languages Details Modal */}
      <AnimatePresence>
        {showLanguagesModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLanguagesModal(false)}
              className="absolute inset-0 bg-[#08080a]/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative z-10 w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-[#111114]/90 p-6 shadow-2xl backdrop-blur-xl select-none"
            >
              {/* Decorative Accent border at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ef5b3f] to-[#f5816b]" />

              {/* Close Button */}
              <button
                onClick={() => setShowLanguagesModal(false)}
                className="absolute top-4 right-4 text-[#8b8b92] hover:text-[#f2f1ee] transition-colors p-1.5 rounded-full hover:bg-white/5 cursor-pointer"
                aria-label="Close modal"
              >
                <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="flex flex-col gap-4">
                <div className="inline-flex items-center gap-1.5 self-start rounded-full border border-[#ef5b3f]/20 bg-[#ef5b3f]/5 px-2.5 py-1 text-[8px] font-mono uppercase tracking-wider text-[#ef5b3f]">
                  Spoken Languages
                </div>

                <div className="mt-2">
                  <h3 className="text-xl font-black text-[#f2f1ee] tracking-tight">Languages I Speak</h3>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {profile.languages.map((lang, idx) => (
                      <div
                        key={lang}
                        className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/5 px-3 py-2.5 hover:border-[#ef5b3f]/30 transition-all group"
                      >
                        <span className="text-[10px] font-mono text-[#ef5b3f]/60 group-hover:text-[#ef5b3f] transition-colors">
                          0{idx + 1}
                        </span>
                        <span className="text-xs font-semibold text-[#f2f1ee]">
                          {lang}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
