import { createFileRoute } from "@tanstack/react-router";
import { Suspense, lazy, useEffect, useState } from "react";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { FeaturedProject } from "@/components/portfolio/FeaturedProject";
import { Skills } from "@/components/portfolio/Skills";
import { Certifications } from "@/components/portfolio/Certifications";
import { Vision } from "@/components/portfolio/Vision";
import { Contact } from "@/components/portfolio/Contact";
import { FloatingToggle } from "@/components/portfolio/FloatingToggle";
import { CinematicBootIntro } from "@/components/portfolio/CinematicBootIntro";
import { TopRightLiveClock } from "@/components/portfolio/TopRightLiveClock";

const ThreeBackground = lazy(() => import("@/components/portfolio/ThreeBackground"));

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [mounted, setMounted] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    setMounted(true);
    
    // Allow replaying boot intro via custom event
    const handleReplay = () => setShowIntro(true);
    window.addEventListener("replay-boot-intro", handleReplay);
    return () => window.removeEventListener("replay-boot-intro", handleReplay);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground font-sans">
      {/* Cinematic OS Boot Sequence Intro Overlay */}
      {showIntro && (
        <CinematicBootIntro onComplete={() => setShowIntro(false)} />
      )}

      {/* Standalone Top Right Live Running Clock & Replay Trigger */}
      <TopRightLiveClock />

      {/* 1. Background layer (z-0) placed on top of bg-background but behind content */}
      {mounted && (
        <div className="fixed inset-0 z-0 w-full h-full overflow-hidden pointer-events-none">
          <Suspense fallback={null}>
            <ThreeBackground />
          </Suspense>
          {/* Subtle background dimming overlay for crisp text readability */}
          <div className="absolute inset-0 bg-black/40 backdrop-brightness-90 pointer-events-none" />
        </div>
      )}

      {/* 2. Content layer (z-10) wrapper containing all sections */}
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <About />
          <Experience />
          <FeaturedProject />
          <Skills />
          <Certifications />
          <Vision />
          <Contact />
        </main>
        <FloatingToggle />
      </div>
    </div>
  );
}
