import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  X,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  Award,
  BookOpen,
  Users,
  Compass,
  Check,
} from "lucide-react";
import { SectionHeading, Reveal } from "./motion";
import { learningCredentials, type LearningCredential } from "@/lib/portfolio-data";

// High fidelity vector logos for each organization/issuer
function OrgLogo({ issuer, className = "w-5 h-5" }: { issuer: string; className?: string }) {
  const norm = issuer.toLowerCase();

  // AWS Academy
  if (norm.includes("aws") || norm.includes("amazon")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18.8 15.6c-2.4 1.8-5.8 2.7-8.8 2.7-4.2 0-8-1.5-10.9-4-.2-.2-.2-.5 0-.7.4-.4.8-.8 1.2-1.2.2-.2.5-.2.7 0 2.4 2 5.5 3.2 8.9 3.2 2.5 0 5.4-.8 7.4-2.2.3-.2.6 0 .8.2.3.4.6.9.9 1.3.2.2.1.5-.2.7z"
          fill="#FF9900"
        />
        <path
          d="M19.7 13.9c-.3-.4-1.9-.6-2.9-.5-.3 0-.4-.2-.2-.4.7-.9 2.5-.7 2.8-.3.3.4.2 2.3-.4 2.8-.2.2-.4.1-.3-.2.3-.6.9-1.2.9-1.4z"
          fill="#FF9900"
        />
        <path
          d="M12.4 4.5l-1.9 5.5h3.8l-1.9-5.5zm-3.6 10.3l3.6-10.3c.1-.4.5-.7.9-.7.4 0 .8.3.9.7l3.6 10.3h-2.1l-.7-2.1h-4.3l-.7 2.1H8.8z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  // Google / Kaggle
  if (norm.includes("google") || norm.includes("kaggle")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          fill="#4285F4"
        />
        <path
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          fill="#34A853"
        />
        <path
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          fill="#FBBC05"
        />
        <path
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          fill="#EA4335"
        />
      </svg>
    );
  }

  // Anthropic / Claude
  if (norm.includes("anthropic") || norm.includes("claude")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path
          d="M13.8 3.5l4.9 14.5h-3.3l-1-3.2H9.6l-1 3.2H5.3L10.2 3.5h3.6zm-1.8 4.3l-1.6 5h3.2l-1.6-5z"
          fill="#D97757"
        />
        <circle cx="18.5" cy="5.5" r="1.8" fill="#D97757" />
      </svg>
    );
  }

  // Microsoft
  if (norm.includes("microsoft")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="9.5" height="9.5" fill="#F25022" />
        <rect x="12.5" y="2" width="9.5" height="9.5" fill="#7FBA00" />
        <rect x="2" y="12.5" width="9.5" height="9.5" fill="#00A4EF" />
        <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#FFB900" />
      </svg>
    );
  }

  // Tata
  if (norm.includes("tata")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#005696" />
        <path d="M6 7.5h12M12 7.5v9.5" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }

  // Adobe
  if (norm.includes("adobe")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#FA0F00" />
        <path d="M14.2 6.5h3.8l-2.8 11h-2.8l1.8-11zm-4.4 0H6l2.8 11h2.8l-1.8-11zm2.2 4.5l1.9 6.5h-2.1l-.7-2.6H8.5l2.2-3.9z" fill="#ffffff" />
      </svg>
    );
  }

  // Scaler
  if (norm.includes("scaler")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#0B132B" />
        <path d="M6 17L12 7l6 10H6z" fill="#E83E8C" />
        <path d="M9 17l3-5 3 5H9z" fill="#3B82F6" />
      </svg>
    );
  }

  // Udemy
  if (norm.includes("udemy")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#A435F0" />
        <path
          d="M12 5.5l5.5 3.2v6.4l-5.5 3.2-5.5-3.2V8.7L12 5.5z"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M9.5 10v3.5a2.5 2.5 0 005 0V10" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  // Simplilearn
  if (norm.includes("simplilearn")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#006699" />
        <circle cx="12" cy="12" r="6" stroke="#F68A1E" strokeWidth="2.5" />
        <path d="M10 9l5 3-5 3V9z" fill="#ffffff" />
      </svg>
    );
  }

  // MoE / AICTE / Government of India
  if (norm.includes("moe") || norm.includes("aicte") || norm.includes("government")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#FF9933" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="#000088" strokeWidth="1.5" />
        <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" stroke="#138808" strokeWidth="1" />
      </svg>
    );
  }

  // Internshala
  if (norm.includes("internshala")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#00A5EC" />
        <path d="M6 18l6-12 6 12-6-3-6 3z" fill="#ffffff" />
      </svg>
    );
  }

  // CARE / IIC
  if (norm.includes("care") || norm.includes("iic")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#00ffff" strokeWidth="1.8" />
        <path d="M12 6v6l4 2" stroke="#ef5b3f" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // Default tech/webinar logo
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}

const CATEGORIES = [
  "ALL",
  "AI / ML",
  "AGENTIC AI",
  "MICROSOFT",
  "CLOUD / DEVOPS",
  "FULL STACK",
  "WORKSHOPS",
  "LEADERSHIP",
] as const;

type CategoryFilter = (typeof CATEGORIES)[number];

function formatDisplayDate(item: LearningCredential) {
  if (item.date) return item.date;
  if (!item.completedDate) return undefined;
  const [year, month, day] = item.completedDate.split("-").map(Number);
  if (!year || !month) return undefined;
  const dateObj = new Date(year, month - 1, day || 1);
  return dateObj.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalItem, setActiveModalItem] = useState<LearningCredential | null>(null);

  // Compute filtered items and ensure they are always sorted by date of done (newest first)
  const filteredItems = useMemo(() => {
    return learningCredentials
      .filter((item) => {
        // Category check
        const matchesCategory =
          selectedCategory === "ALL"
            ? true
            : selectedCategory === "AI / ML"
            ? item.category === "AI / ML" || (item.category === "AGENTIC AI" && item.id.includes("agents"))
            : item.category === selectedCategory;

        // Search check
        const q = searchQuery.trim().toLowerCase();
        if (!q) return matchesCategory;

        const matchesSearch =
          item.title.toLowerCase().includes(q) ||
          item.issuer.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.type.toLowerCase().includes(q) ||
          item.skills.some((s) => s.toLowerCase().includes(q));

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        const timeA = new Date(a.completedDate).getTime();
        const timeB = new Date(b.completedDate).getTime();
        return timeB - timeA; // Descending: newest completed date first
      });
  }, [selectedCategory, searchQuery]);

  // Knowledge breakdown stats without fabricating fake statistics
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const c of CATEGORIES) {
      if (c === "ALL") {
        counts[c] = learningCredentials.length;
      } else if (c === "AI / ML") {
        counts[c] = learningCredentials.filter((i) => i.category === "AI / ML").length;
      } else {
        counts[c] = learningCredentials.filter((i) => i.category === c).length;
      }
    }
    return counts;
  }, []);

  return (
    <section id="certifications" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-24 select-none">
      {/* Section Header */}
      <SectionHeading
        eyebrow="Learning & Credentials"
        title="Verified Knowledge & Engineering Credentials"
        description="A continuously evolving technical foundation across Machine Learning, Agentic AI, Cloud DevOps, Cybersecurity, and Software Architecture."
      />

      {/* Main macOS Application Window Container */}
      <div className="mt-12 rounded-[24px] border border-white/10 bg-[#0a0a0f]/85 backdrop-blur-2xl shadow-2xl overflow-hidden transition-all duration-300">
        {/* macOS Window Title Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-3.5 bg-white/[0.02]">
          {/* Left: Window Controls */}
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
            <span className="ml-3 font-mono text-[11px] text-muted-foreground hidden sm:inline-block">
              knowledge_vault.app — v2.6.0
            </span>
          </div>

          {/* Center/Right: Live Status & Verified Badge */}
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-mono font-medium text-cyan-400">
              <ShieldCheck size={12} className="text-cyan-400" />
              <span>VERIFIED_CREDENTIALS</span>
            </div>
            <div className="font-mono text-[10px] text-muted-foreground hidden md:inline-block">
              {learningCredentials.length} Total Records
            </div>
          </div>
        </div>

        {/* Knowledge Distribution Visualizer Bar */}
        <div className="border-b border-white/5 bg-white/[0.01] px-5 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
              <Layers size={13} className="text-primary" />
              <span>Learning Area Distribution</span>
            </div>
            <span className="font-mono text-[10px] text-muted-foreground/80">
              Categorized by Core Engineering Disciplines
            </span>
          </div>

          {/* Segmented Distribution Bar */}
          <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden flex gap-0.5 p-0.5">
            <div
              style={{ width: `${((categoryCounts["AI / ML"] || 0) / (learningCredentials.length || 1)) * 100}%` }}
              className="h-full rounded-l-full bg-cyan-400"
              title={`AI & Machine Learning (${categoryCounts["AI / ML"] || 0})`}
            />
            <div
              style={{ width: `${((categoryCounts["AGENTIC AI"] || 0) / (learningCredentials.length || 1)) * 100}%` }}
              className="h-full bg-orange-500"
              title={`Generative & Agentic AI (${categoryCounts["AGENTIC AI"] || 0})`}
            />
            <div
              style={{ width: `${((categoryCounts["MICROSOFT"] || 0) / (learningCredentials.length || 1)) * 100}%` }}
              className="h-full bg-blue-500"
              title={`Microsoft AI & Security (${categoryCounts["MICROSOFT"] || 0})`}
            />
            <div
              style={{ width: `${((categoryCounts["CLOUD / DEVOPS"] || 0) / (learningCredentials.length || 1)) * 100}%` }}
              className="h-full bg-purple-500"
              title={`Cloud & DevOps (${categoryCounts["CLOUD / DEVOPS"] || 0})`}
            />
            <div
              style={{ width: `${((categoryCounts["FULL STACK"] || 0) / (learningCredentials.length || 1)) * 100}%` }}
              className="h-full bg-emerald-500"
              title={`Programming & Full Stack (${categoryCounts["FULL STACK"] || 0})`}
            />
            <div
              style={{ width: `${((categoryCounts["WORKSHOPS"] || 0) / (learningCredentials.length || 1)) * 100}%` }}
              className="h-full bg-amber-400"
              title={`Workshops & Professional Dev (${categoryCounts["WORKSHOPS"] || 0})`}
            />
            <div
              style={{ width: `${((categoryCounts["LEADERSHIP"] || 0) / (learningCredentials.length || 1)) * 100}%` }}
              className="h-full rounded-r-full bg-indigo-400"
              title={`Leadership & Activities (${categoryCounts["LEADERSHIP"] || 0})`}
            />
          </div>

          {/* Legend Chips */}
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-[10px] font-mono text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-cyan-400" /> AI/ML ({categoryCounts["AI / ML"]})
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-orange-500" /> Agentic AI ({categoryCounts["AGENTIC AI"]})
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-blue-500" /> Microsoft ({categoryCounts["MICROSOFT"]})
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-purple-500" /> Cloud/DevOps ({categoryCounts["CLOUD / DEVOPS"]})
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Full Stack ({categoryCounts["FULL STACK"]})
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-amber-400" /> Workshops ({categoryCounts["WORKSHOPS"]})
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-indigo-400" /> Leadership ({categoryCounts["LEADERSHIP"]})
            </span>
          </div>
        </div>

        {/* Interactive Search & Filter Toolbar */}
        <div className="p-4 sm:p-6 border-b border-white/5 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            {/* Search Input Bar */}
            <div className="relative flex-1 max-w-md">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search credentials, skills, issuers (e.g. AWS, Claude, Python)..."
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] pl-10 pr-10 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-cyan-400/50 focus:bg-white/[0.06] focus:outline-none transition-all font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white transition-colors"
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Live Count & Sort Indicator */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground self-start md:self-center">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded-lg px-2.5 py-1 shadow-xs">
                <Calendar size={11} className="text-cyan-400" />
                <span>Sorted by Date Done (Latest First ↓)</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs">
                <span>Showing:</span>
                <span className="font-bold text-cyan-400">
                  {filteredItems.length} {filteredItems.length === 1 ? "record" : "records"}
                </span>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-1" role="tablist" aria-label="Credential Categories">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              const count = categoryCounts[category] ?? 0;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  role="tab"
                  aria-selected={isActive}
                  className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_12px_rgba(6,182,212,0.15)]"
                      : "bg-white/[0.02] text-muted-foreground hover:text-white border border-white/5 hover:border-white/15"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[9px] px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-cyan-500/30 text-cyan-300" : "bg-white/5 text-muted-foreground"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Credential Cards Grid */}
        <div className="p-4 sm:p-6 lg:p-8">
          {filteredItems.length === 0 ? (
            <div className="py-16 text-center flex flex-col items-center justify-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/5 text-muted-foreground">
                <Search size={22} />
              </div>
              <p className="text-sm font-sans font-medium text-muted-foreground">
                No credentials found matching &quot;{searchQuery}&quot;
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("ALL");
                }}
                className="mt-2 text-xs font-mono text-cyan-400 underline cursor-pointer"
              >
                Reset all filters
              </button>
            </div>
          ) : (
            <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence>
                {filteredItems.map((item, idx) => {
                  const isPrimary = item.tier === "primary";
                  const isActivity = item.tier === "activity";
                  const displayDate = formatDisplayDate(item);

                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2, delay: (idx % 3) * 0.04 }}
                      key={item.id}
                      onClick={() => setActiveModalItem(item)}
                      tabIndex={0}
                      role="button"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setActiveModalItem(item);
                        }
                      }}
                      className={`group relative flex flex-col justify-between rounded-2xl border p-5 sm:p-6 transition-all duration-300 cursor-pointer overflow-hidden ${
                        isPrimary
                          ? "border-white/10 bg-[#0e0e14]/90 hover:border-cyan-400/50 hover:bg-[#13131c] hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:-translate-y-1"
                          : isActivity
                          ? "border-white/10 bg-[#0a0a0e]/75 hover:border-indigo-400/40 hover:bg-[#101017] hover:-translate-y-0.5"
                          : "border-white/10 bg-[#0b0b10]/80 hover:border-amber-400/35 hover:bg-[#111118] hover:-translate-y-0.5"
                      }`}
                    >
                      {/* Cyber Accent Corners for Primary Cards */}
                      {isPrimary && (
                        <>
                          <div className="absolute left-0 top-0 h-2.5 w-2.5 border-l border-t border-cyan-400/40 group-hover:border-cyan-400 transition-colors" />
                          <div className="absolute right-0 top-0 h-2.5 w-2.5 border-r border-t border-cyan-400/40 group-hover:border-cyan-400 transition-colors" />
                        </>
                      )}

                      {/* Card ID Code */}
                      <div className="absolute right-3.5 top-3.5 font-mono text-[9px] text-muted-foreground/40 group-hover:text-cyan-400/80 transition-colors">
                        REC-{String(idx + 1).padStart(2, "0")}
                      </div>

                      {/* Top Section: Logo & Org & Type */}
                      <div>
                        <div className="flex items-center gap-3 mb-3.5 pr-10">
                          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-cyan-400/30 transition-colors">
                            <OrgLogo issuer={item.issuer} className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground block line-clamp-1">
                              {item.issuer}
                            </span>
                            <span
                              className={`inline-block mt-0.5 font-mono text-[9px] px-2 py-0.5 rounded-full border ${
                                item.category === "AI / ML" || item.category === "AGENTIC AI"
                                  ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
                                  : item.category === "MICROSOFT"
                                  ? "bg-blue-500/10 border-blue-500/30 text-blue-400"
                                  : item.category === "CLOUD / DEVOPS"
                                  ? "bg-purple-500/10 border-purple-500/30 text-purple-400"
                                  : item.category === "FULL STACK"
                                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                                  : item.category === "LEADERSHIP"
                                  ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-400"
                                  : "bg-amber-500/10 border-amber-500/30 text-amber-300"
                              }`}
                            >
                              {item.type}
                            </span>
                          </div>
                        </div>

                        {/* Title */}
                        <h4 className="font-sans text-sm font-bold text-white leading-snug group-hover:text-cyan-400 transition-colors mb-2 line-clamp-2">
                          {item.title}
                        </h4>

                        {/* Completion Date */}
                        {displayDate && (
                          <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-400/80 mb-2">
                            <Calendar size={11} className="text-cyan-400/80" />
                            <span>{displayDate}</span>
                          </div>
                        )}

                        {/* 2-line Professional Description */}
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 font-sans font-medium mb-4">
                          {item.description}
                        </p>
                      </div>

                      {/* Bottom Section: Skills Tags & Action */}
                      <div className="pt-3 border-t border-white/5">
                        {/* Skills Chips */}
                        <div className="flex flex-wrap gap-1.5 mb-3.5">
                          {item.skills.slice(0, 3).map((skill) => (
                            <span
                              key={skill}
                              className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/5 text-muted-foreground/90 group-hover:border-white/15 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                          {item.skills.length > 3 && (
                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-md bg-white/[0.03] text-muted-foreground/60">
                              +{item.skills.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Action link */}
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400/90 font-medium">
                            <ShieldCheck size={12} /> Verified
                          </span>
                          <span className="text-cyan-400 group-hover:underline inline-flex items-center gap-1 font-semibold">
                            Inspect Record →
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        {/* Application Window Footer */}
        <div className="border-t border-white/10 px-5 py-3 bg-white/[0.02] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] font-mono text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>AI Engineer Knowledge Repository • Chronologically Ordered by Date of Completion</span>
          </div>
          <div>All records verified through official learning pathways &amp; programs</div>
        </div>
      </div>

      {/* macOS Glass Detail Modal */}
      <AnimatePresence>
        {activeModalItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setActiveModalItem(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-credential-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-2xl border border-cyan-500/30 bg-[#0c0c14] shadow-2xl overflow-hidden relative"
            >
              {/* Modal Window Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 bg-white/[0.03]">
                {/* Traffic lights */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveModalItem(null)}
                    className="h-3 w-3 rounded-full bg-[#ff5f56] hover:brightness-110 cursor-pointer"
                    aria-label="Close modal"
                  />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                  <span className="ml-3 font-mono text-[10px] text-cyan-400/70">
                    CREDENTIAL_INSPECTOR://{activeModalItem.id}
                  </span>
                </div>
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="text-muted-foreground hover:text-white transition-colors cursor-pointer p-1"
                  aria-label="Close popup"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-7 max-h-[80vh] overflow-y-auto">
                {/* Header Profile */}
                <div className="flex items-start gap-4 pb-5 border-b border-white/10">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    <OrgLogo issuer={activeModalItem.issuer} className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                        {activeModalItem.issuer}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[9px] font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full">
                        <ShieldCheck size={10} /> VERIFIED
                      </span>
                    </div>
                    <h3 id="modal-credential-title" className="font-sans text-base sm:text-lg font-bold text-white leading-snug">
                      {activeModalItem.title}
                    </h3>
                  </div>
                </div>

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 gap-3 py-4 border-b border-white/10 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[10px] text-muted-foreground block">CREDENTIAL TYPE</span>
                    <span className="text-white font-bold mt-0.5 block">{activeModalItem.type}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[10px] text-muted-foreground block">DOMAIN CATEGORY</span>
                    <span className="text-cyan-400 font-bold mt-0.5 block">{activeModalItem.category}</span>
                  </div>
                  {formatDisplayDate(activeModalItem) && (
                    <div className="col-span-2 p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2">
                      <Calendar size={14} className="text-cyan-400" />
                      <div>
                        <span className="text-[10px] text-muted-foreground block">COMPLETION DATE</span>
                        <span className="text-white font-bold">{formatDisplayDate(activeModalItem)}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Professional Description */}
                <div className="py-4 border-b border-white/10">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground mb-2">
                    Executive Summary &amp; Scope
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/90 font-sans leading-relaxed">
                    {activeModalItem.description}
                  </p>
                </div>

                {/* Skills Learned */}
                <div className="py-4">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
                    Validated Competencies &amp; Technical Skills
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {activeModalItem.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/5"
                      >
                        <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                        <span className="text-xs text-foreground/90 font-medium font-sans">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Optional Credential Link (Rendered ONLY if genuine URL exists) */}
                {activeModalItem.credentialUrl && (
                  <div className="mt-4 pt-4 border-t border-white/10 flex justify-end">
                    <a
                      href={activeModalItem.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold transition-all"
                    >
                      <span>View Official Credential</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
