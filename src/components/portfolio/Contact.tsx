import { Reveal } from "./motion";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { profile, mailtoUrl, contactInfo } from "@/lib/portfolio-data";
import profileImg from "@/assets/profile.jpg";

const contacts = [
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Primary Email", value: profile.email, href: mailtoUrl },
  { icon: Mail, label: "Secondary Email", value: profile.secondaryEmail, href: `mailto:${profile.secondaryEmail}` },
  { icon: MapPin, label: "Location", value: profile.location, href: undefined },
];

export function Contact() {
  return (
    <section id="contact" className="relative w-full border-t border-white/10 bg-[#0a0a0d]/65 backdrop-blur-xl py-24 select-none">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Title */}
        <div className="flex items-center gap-3 text-2xl sm:text-3xl font-black uppercase tracking-[0.08em] text-white">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary shrink-0">
            <path d="M12 2v20M2 12h20M5.22 5.22l13.56 13.56M18.78 5.22L5.22 18.78" />
          </svg>
          <span>Get in touch</span>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Left Pane - Professional Contact Details Card */}
          <Reveal className="h-full">
            <div className="tech-card rounded-2xl p-6 sm:p-8 border border-white/10 bg-black/40 backdrop-blur-md flex flex-col gap-6 relative overflow-hidden h-full">
              <div className="absolute left-0 top-0 h-2 w-2 border-l border-t border-primary/30" />
              <div className="absolute right-0 top-0 h-2 w-2 border-r border-t border-primary/30" />
              
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary border-b border-white/10 pb-2">
                Contact Information
              </h3>
              
              <div className="flex flex-col gap-5">
                {contacts.map((c) => {
                  const itemContent = (
                    <div className="flex items-start gap-4 group cursor-pointer">
                      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20 group-hover:border-primary/45 transition-all duration-300">
                        <c.icon size={16} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-sans text-[10px] font-bold uppercase tracking-wider text-muted-foreground select-none">
                          {c.label}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-foreground/90 font-sans group-hover:text-primary transition-colors truncate">
                          {c.value}
                        </p>
                      </div>
                    </div>
                  );
                  
                  return c.href ? (
                    <a key={c.label} href={c.href} className="block">
                      {itemContent}
                    </a>
                  ) : (
                    <div key={c.label}>{itemContent}</div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Right Pane - Collaboration Card */}
          <Reveal delay={0.1} className="h-full">
            <div className="tech-card flex h-full flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute left-0 top-0 h-2 w-2 border-l border-t border-primary/30" />
              <div className="absolute right-0 top-0 h-2 w-2 border-r border-t border-primary/30" />
              
              <div>
                <h3 className="font-display text-lg xs:text-xl sm:text-2xl lg:text-[1.65rem] font-black text-white whitespace-nowrap tracking-tight">
                  {contactInfo.tagline}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground font-sans">
                  {contactInfo.body}
                </p>
              </div>
              
              <div className="flex flex-col gap-3">
                <a
                  href={mailtoUrl}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  <Mail size={16} /> Send an Email
                </a>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-3 text-xs font-semibold text-white transition-all hover:bg-white/10 hover:border-white/30"
                  >
                    <Github size={14} /> GitHub
                    <ArrowUpRight size={12} className="opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-3 text-xs font-semibold text-white transition-all hover:bg-white/10 hover:border-white/30"
                  >
                    <Linkedin size={14} /> LinkedIn
                    <ArrowUpRight size={12} className="opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href={profile.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-3 text-xs font-semibold text-white transition-all hover:bg-white/10 hover:border-white/30"
                  >
                    <Instagram size={14} /> Instagram
                    <ArrowUpRight size={12} className="opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Rearranged Footer */}
        <footer className="mt-20 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-muted-foreground select-none">
          <div className="flex items-center gap-2.5">
            <div className="relative h-6 w-6 rounded-full overflow-hidden border border-primary/40 shrink-0">
              <img src={profileImg} alt={profile.name} className="h-full w-full object-cover" />
            </div>
            <span className="text-foreground/90 font-semibold">{profile.name}</span>
          </div>
          <p className="text-[10px]">
            © {new Date().getFullYear()} · Crafted with AI & Intent
          </p>
        </footer>
      </div>
    </section>
  );
}
