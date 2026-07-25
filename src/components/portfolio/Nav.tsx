import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks, profile, mailtoUrl } from "@/lib/portfolio-data";
import profileImg from "@/assets/profile.jpg";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Live ticking date and time clock interval (updates every second)
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  const formattedTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-6 pt-6"
    >
      <nav
        className="flex w-full max-w-5xl items-center justify-between rounded-full px-6 py-3 glass-strong select-none"
      >
        {/* Left Side: Profile Image Avatar + Name */}
        <a href="#top" className="flex items-center gap-2.5 font-display text-sm font-bold tracking-normal shrink-0 group">
          <div className="relative h-8 w-8 rounded-full overflow-hidden border border-primary/50 logo-pulse-effect transition-transform group-hover:scale-105">
            <img
              src={profileImg}
              alt={profile.name}
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <span className="hidden sm:inline text-xs font-bold tracking-wide text-white font-display">{profile.name}</span>
        </a>

        {/* Center Links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-white"
            >
              <span>{l.label}</span>
              <span className="absolute bottom-1 left-4 right-4 h-[1.5px] bg-primary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        {/* Right Action Button / Menu Toggle */}
        <div className="flex items-center gap-2">
          <a
            href={mailtoUrl}
            className="hidden rounded-full bg-primary text-white hover:bg-primary/90 hover:scale-105 active:scale-95 px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all sm:inline-block shadow-lg shadow-primary/20"
          >
            Let's Talk
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white md:hidden hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Responsive mobile menu drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-22 w-[calc(100%-3rem)] max-w-5xl rounded-3xl glass-strong p-4 md:hidden border border-white/10"
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
