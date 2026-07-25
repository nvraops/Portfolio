import { Mail, Phone, MapPin, GraduationCap, Github, Linkedin, Instagram } from "lucide-react";
import { profile, mailtoUrl } from "@/lib/portfolio-data";
import profileImg from "@/assets/profile.jpg";

export function ProfileSidebar() {
  return (
    <aside className="tech-card rounded-[28px] border border-white/10 bg-[#111114]/75 backdrop-blur-xl p-8 flex flex-col items-center text-center w-full select-none shadow-2xl">
      {/* 1. Avatar Container */}
      <div className="relative w-36 h-36 rounded-[30px] overflow-hidden border border-white/10 p-1.5 bg-black/30 group">
        <div className="absolute left-0 top-0 h-2 w-2 border-l border-t border-primary/40 group-hover:border-primary" />
        <div className="absolute right-0 top-0 h-2 w-2 border-r border-t border-primary/40 group-hover:border-primary" />
        <div className="absolute left-0 bottom-0 h-2 w-2 border-l border-b border-primary/40 group-hover:border-primary" />
        <div className="absolute right-0 bottom-0 h-2 w-2 border-r border-b border-primary/40 group-hover:border-primary" />
        
        <img
          src={profileImg}
          alt={profile.name}
          className="w-full h-full object-cover rounded-[24px] transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* 2. Profile Name & Subtitle */}
      <h2 className="text-xl font-bold text-white tracking-tight mt-6 leading-tight font-display">
        {profile.name}
      </h2>
      <div className="mt-3 px-3 py-1.5 rounded-xl border border-white/5 bg-white/5 text-[9px] font-bold uppercase tracking-wider text-primary">
        {profile.title}
      </div>

      {/* 3. Divider */}
      <div className="h-[1px] bg-white/10 w-full my-6" />

      {/* 4. Contact Information List */}
      <div className="w-full flex flex-col gap-4 text-left font-sans">
        {/* Email */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-primary shadow-md shrink-0">
            <Mail size={16} />
          </div>
          <div className="min-w-0 flex-1">
            <span className="text-[9px] font-mono uppercase tracking-wider text-[#8b8b92]">Email</span>
            <p className="text-xs font-semibold text-[#f2f1ee] truncate hover:text-primary transition-colors">
              <a href={mailtoUrl} title={profile.email}>{profile.email}</a>
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-primary shadow-md shrink-0">
            <Phone size={16} />
          </div>
          <div>
            <span className="text-[9px] font-mono uppercase tracking-wider text-[#8b8b92]">Phone</span>
            <p className="text-xs font-semibold text-[#f2f1ee] whitespace-nowrap">
              <a href={`tel:${profile.phone.replace(/\s+/g, "")}`}>{profile.phone}</a>
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-primary shadow-md shrink-0">
            <GraduationCap size={16} />
          </div>
          <div>
            <span className="text-[9px] font-mono uppercase tracking-wider text-[#8b8b92]">Education</span>
            <p className="text-xs font-semibold text-[#f2f1ee] leading-tight">
              B.E. CSE (Expected 2028)
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-primary shadow-md shrink-0">
            <MapPin size={16} />
          </div>
          <div>
            <span className="text-[9px] font-mono uppercase tracking-wider text-[#8b8b92]">Location</span>
            <p className="text-xs font-semibold text-[#f2f1ee] leading-tight">
              {profile.location}
            </p>
          </div>
        </div>
      </div>

      {/* 5. Divider */}
      <div className="h-[1px] bg-white/10 w-full my-6 mt-auto" />

      {/* 6. Social Connects */}
      <div className="flex items-center justify-center gap-4">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 bg-white/5 text-muted-foreground hover:text-white hover:border-white/20 transition-all hover:scale-110"
          aria-label="GitHub"
        >
          <Github size={16} />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 bg-white/5 text-muted-foreground hover:text-white hover:border-white/20 transition-all hover:scale-110"
          aria-label="LinkedIn"
        >
          <Linkedin size={16} />
        </a>
        <a
          href={profile.instagram}
          target="_blank"
          rel="noreferrer"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 bg-white/5 text-muted-foreground hover:text-white hover:border-white/20 transition-all hover:scale-110"
          aria-label="Instagram"
        >
          <Instagram size={16} />
        </a>
        <a
          href={mailtoUrl}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 bg-white/5 text-muted-foreground hover:text-white hover:border-white/20 transition-all hover:scale-110"
          aria-label="Email"
        >
          <Mail size={16} />
        </a>
      </div>
    </aside>
  );
}
