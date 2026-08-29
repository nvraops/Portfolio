import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks, profile, mailtoUrl } from "@/lib/portfolio-data";
import profileImg from "@/assets/profile.jpg";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 sm:px-6 pt-4 sm:pt-5 pointer-events-none"
    >
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full px-3.5 sm:px-5 py-2 sm:py-2.5 transition-all duration-300 select-none pointer-events-auto ${
          scrolled
            ? "border border-white/15 bg-[#0a0a0f]/90 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
            : "border border-white/10 bg-[#0c0c12]/75 backdrop-blur-xl shadow-xl"
        }`}
      >
        {/* Left Side: Profile Avatar + Responsive Name */}
        <a
          href="#top"
          className="flex items-center gap-2.5 shrink-0 group pr-1 sm:pr-2"
        >
          <div className="relative h-7 w-7 sm:h-8 sm:w-8 rounded-full overflow-hidden border border-primary/50 logo-pulse-effect transition-transform group-hover:scale-105 shrink-0">
            <img
              src={profileImg}
              alt={profile.name}
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <span className="text-xs font-bold tracking-tight text-white font-display hidden sm:inline-block">
            <span className="hidden xl:inline">{profile.name}</span>
            <span className="xl:hidden">Nikhill V.</span>
          </span>
        </a>

        {/* Center Links with comfortable spacing and refined typography */}
        <div className="hidden items-center gap-0.5 lg:gap-1 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative px-2.5 lg:px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider text-muted-foreground hover:text-white hover:bg-white/[0.06] transition-all duration-200"
            >
              <span>{l.label}</span>
              <span className="absolute bottom-1 left-3 right-3 h-[1.5px] bg-primary scale-x-0 origin-center transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        {/* Right Action Button / Menu Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={mailtoUrl}
            className="hidden rounded-full bg-gradient-to-r from-[#ef5b3f] to-[#f5816b] text-white hover:brightness-110 hover:scale-105 active:scale-95 px-4 py-1.5 sm:px-4.5 sm:py-2 text-[11px] font-bold uppercase tracking-wider transition-all sm:inline-flex items-center gap-1 shadow-md shadow-primary/20"
          >
            <span>Let's Talk</span>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-full border border-white/10 text-white md:hidden hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Responsive mobile menu drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="absolute top-18 sm:top-20 w-[calc(100%-2rem)] max-w-5xl rounded-3xl bg-[#0a0a0f]/95 backdrop-blur-2xl p-4 md:hidden border border-white/10 shadow-2xl pointer-events-auto"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-2 border-t border-white/10 mt-1">
                <a
                  href={mailtoUrl}
                  onClick={() => setOpen(false)}
                  className="w-full flex items-center justify-center rounded-2xl bg-primary text-white py-3 text-xs font-bold uppercase tracking-wider"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
