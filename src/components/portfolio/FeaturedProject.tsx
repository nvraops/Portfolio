import { Reveal } from "./motion";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Play, Code, Cpu, Folder, File, Eye, Bot } from "lucide-react";
import { featuredProjects } from "@/lib/portfolio-data";
import visionImg from "@/assets/vision-assist.jpg";

const FlowerIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary shrink-0">
    <path d="M12 2v20M2 12h20M5.22 5.22l13.56 13.56M18.78 5.22L5.22 18.78" />
  </svg>
);

function IDEWindow({ project }: { project: typeof featuredProjects[number] }) {
  const [activeTab, setActiveTab] = useState<"feed" | "code">("feed");

  const isVision = project.id === "vision-assist";

  return (
    <div className="tech-card rounded-2xl overflow-hidden border border-white/10 w-full font-mono text-[11px] leading-relaxed shadow-[0_0_30px_rgba(255,255,255,0.02)] select-none">
      {/* Top Bar */}
      <div className="flex items-center justify-between bg-black/45 px-4 py-2.5 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          <span className="text-[9px] text-muted-foreground ml-3 hidden sm:inline">~/{project.id}/src/</span>
        </div>
        <div className="flex gap-3 text-primary text-[9px] items-center">
          <span className="flex items-center gap-1"><Play size={10} className="text-primary animate-pulse" /> SYSTEM_ACTIVE</span>
        </div>
      </div>
      
      {/* Workspace */}
      <div className="flex h-[320px] bg-black/10">
        {/* Sidebar */}
        <div className="hidden sm:flex flex-col w-36 border-r border-white/10 p-3 bg-black/20 text-[9px] text-muted-foreground gap-2 shrink-0">
          <div className="flex items-center gap-1 text-foreground/80 font-bold uppercase tracking-wider text-[8px] mb-1">
            <Folder size={10} className="text-primary" /> project_tree
          </div>
          <div className="pl-1 flex flex-col gap-1.5">
            <div className={`flex items-center gap-1 cursor-pointer transition-colors ${activeTab === 'code' ? 'text-primary font-bold' : 'hover:text-foreground'}`} onClick={() => setActiveTab("code")}>
              <File size={10} /> {isVision ? "detect.py" : "chatbot.py"}
            </div>
            <div className="flex items-center gap-1"><File size={10} /> config.json</div>
            <div className="flex items-center gap-1"><File size={10} /> model.py</div>
            <div className="flex items-center gap-1"><File size={10} /> requirements.txt</div>
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Tabs */}
          <div className="flex bg-black/25 border-b border-white/10 text-[9px]">
            <button 
              onClick={() => setActiveTab("feed")}
              className={`px-3 py-2 border-r border-white/10 flex items-center gap-1.5 transition-colors ${activeTab === 'feed' ? 'bg-black/15 text-primary border-t border-t-primary font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
            >
              <Cpu size={10} /> {isVision ? "cv_feed.h264" : "ai_engine.log"}
            </button>
            <button 
              onClick={() => setActiveTab("code")}
              className={`px-3 py-2 border-r border-white/10 flex items-center gap-1.5 transition-colors ${activeTab === 'code' ? 'bg-black/15 text-primary border-t border-t-primary font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
            >
              <Code size={10} /> {isVision ? "detect.py" : "chatbot.py"}
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="flex-1 relative overflow-hidden bg-black/5">
            {activeTab === "feed" ? (
              isVision ? (
                <div className="relative h-full w-full group">
                  <img
                    src={visionImg}
                    alt="VisionAssist AI"
                    className="h-full w-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
                  <div className="absolute inset-0 border border-white/5 pointer-events-none" />
                  
                  <div className="absolute top-[18%] left-[25%] w-[40%] h-[55%] border border-primary shadow-[0_0_12px_rgba(226,88,62,0.3)] pointer-events-none">
                    <span className="absolute left-0 bottom-full bg-primary text-white font-bold font-mono text-[7px] px-1 py-0.5 rounded-t-sm whitespace-nowrap">
                      [Object: Obstacle / Person] 99.4%
                    </span>
                  </div>

                  <div className="absolute top-[48%] left-[10%] w-[25%] h-[35%] border border-cyan shadow-[0_0_12px_rgba(0,255,255,0.3)] pointer-events-none">
                    <span className="absolute left-0 bottom-full bg-cyan text-black font-bold font-mono text-[7px] px-1 py-0.5 rounded-t-sm whitespace-nowrap">
                      [OCR: Text Stream] 98.7%
                    </span>
                  </div>
                  
                  <div className="absolute left-4 top-4 bg-primary/15 border border-primary/30 text-primary px-2 py-0.5 rounded font-mono text-[7px] font-bold tracking-widest animate-pulse flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-primary animate-ping" />
                    CV_STREAMING
                  </div>

                  <div className="absolute right-4 top-4 bg-black/60 border border-white/10 text-primary/70 px-2 py-0.5 rounded font-mono text-[7px] tracking-wider">
                    FPS: 30.0
                  </div>
                </div>
              ) : (
                <div className="p-4 overflow-auto h-full text-[10px] font-mono bg-black/50 text-foreground/90 space-y-2">
                  <div className="text-emerald-400 font-bold">[SYSTEM] AI Chatbot Engine Initialized</div>
                  <div className="text-cyan">[USER]: Connect to customer support repository and retrieve product documentation.</div>
                  <div className="text-white/80">[BOT]: Searching MongoDB vector index... Matched 3 relevant documents with 96.8% confidence.</div>
                  <div className="text-primary font-bold">[RESPONSE]: Generating context-aware answer with repository references.</div>
                  <div className="text-[#8b8b92] text-[9px] pt-2 border-t border-white/10">Status: Dynamic Retrieval Active &bull; Session Secured</div>
                </div>
              )
            ) : (
              <div className="p-4 overflow-auto h-full text-[9px] text-foreground/80 font-mono bg-black/35 whitespace-pre scrollbar-none leading-relaxed">
                {isVision ? (
                  <>
                    <span className="text-primary">import</span> cv2<br />
                    <span className="text-primary">import</span> numpy <span className="text-primary">as</span> np<br />
                    <span className="text-primary">from</span> ultralytics <span className="text-primary">import</span> YOLO<br />
                    <span className="text-primary">import</span> easyocr<br />
                    <br />
                    <span className="text-muted-foreground"># VisionAssist AI Core pipeline</span><br />
                    model = YOLO(<span className="text-yellow-400">"yolov8n.pt"</span>)<br />
                    reader = easyocr.Reader([<span className="text-yellow-400">'en'</span>])<br />
                    cap = cv2.VideoCapture(<span className="text-purple-400">0</span>)<br />
                    <br />
                    <span className="text-primary">while</span> cap.isOpened():<br />
                    &nbsp;&nbsp;ret, frame = cap.read()<br />
                    &nbsp;&nbsp;<span className="text-primary">if not</span> ret: <span className="text-primary">break</span><br />
                    &nbsp;&nbsp;results = model(frame)<br />
                    &nbsp;&nbsp;annotated = results[<span className="text-purple-400">0</span>].plot()<br />
                    &nbsp;&nbsp;cv2.imshow(<span className="text-yellow-400">"VisionAssist AI Live"</span>, annotated)
                  </>
                ) : (
                  <>
                    <span className="text-primary">from</span> fastapi <span className="text-primary">import</span> FastAPI, Depends<br />
                    <span className="text-primary">from</span> pymongo <span className="text-primary">import</span> MongoClient<br />
                    <br />
                    app = FastAPI(title=<span className="text-yellow-400">"Enterprise AI Chatbot"</span>)<br />
                    db = MongoClient(<span className="text-yellow-400">"mongodb://localhost:27017"</span>)[<span className="text-yellow-400">"knowledge_db"</span>]<br />
                    <br />
                    <span className="text-primary">@app.post</span>(<span className="text-yellow-400">"/api/v1/chat"</span>)<br />
                    <span className="text-primary">async def</span> chat_response(query: str, session_id: str):<br />
                    &nbsp;&nbsp;context = await retrieve_knowledge(db, query)<br />
                    &nbsp;&nbsp;response = await generate_hybrid_ai_response(query, context)<br />
                    &nbsp;&nbsp;<span className="text-primary">return</span> &#123;<span className="text-yellow-400">"reply"</span>: response, <span className="text-yellow-400">"session"</span>: session_id&#125;
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturedProject() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const selectedProject = featuredProjects.find((p) => p.id === selectedProjectId);

  return (
    <section id="project" className="relative mx-auto max-w-5xl px-6 py-24 select-none">
      {/* Section Title */}
      <div className="flex items-center gap-3 text-2xl sm:text-3xl font-black uppercase tracking-[0.08em] text-white">
        <FlowerIcon />
        <span>Featured Projects</span>
      </div>

      <div className="mt-12 flex flex-col gap-6">
        {featuredProjects.map((proj, idx) => (
          <Reveal key={proj.id} delay={idx * 0.1}>
            <div 
              onClick={() => setSelectedProjectId(proj.id)}
              className="tech-card rounded-2xl border border-white/15 bg-black/35 backdrop-blur-md p-6 sm:p-8 relative overflow-hidden transition-all duration-300 hover:border-primary/50 hover:bg-black/50 hover:shadow-xl hover:shadow-primary/10 cursor-pointer group select-none"
            >
              {/* Corner Tech Accents */}
              <div className="absolute left-0 top-0 h-2.5 w-2.5 border-l-2 border-t-2 border-primary/40 group-hover:border-primary transition-colors" />
              <div className="absolute right-0 top-0 h-2.5 w-2.5 border-r-2 border-t-2 border-primary/40 group-hover:border-primary transition-colors" />
              <div className="absolute left-0 bottom-0 h-2.5 w-2.5 border-l-2 border-b-2 border-primary/40 group-hover:border-primary transition-colors" />
              <div className="absolute right-0 bottom-0 h-2.5 w-2.5 border-r-2 border-b-2 border-primary/40 group-hover:border-primary transition-colors" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-display text-2xl sm:text-3xl font-black text-white group-hover:text-primary transition-colors tracking-tight">
                      {proj.name}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-orange-500/30 bg-orange-500/15 text-orange-400 text-[9px] font-mono font-bold tracking-wider uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                      {proj.status}
                    </span>
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-white/80 font-sans max-w-2xl">
                    {proj.tagline}
                  </p>

                  {/* Stack Details */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {proj.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded border border-white/10 bg-white/5 font-mono text-[9px] text-[#8b8b92]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-primary uppercase transition-transform shrink-0 pt-2 sm:pt-0">
                  View project details <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="tech-card rounded-2xl w-full max-w-3xl overflow-hidden border border-white/15 bg-[#070b13] p-5 sm:p-6 relative max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedProjectId(null)}
                className="absolute right-4 top-4 text-muted-foreground hover:text-primary transition-colors z-20 cursor-pointer p-1"
                aria-label="Close project modal"
              >
                <X size={18} />
              </button>

              <div className="flex items-start gap-3 border-b border-white/10 pb-4 mb-4 pr-8">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-orange-500/15 border border-orange-500/30 text-orange-400 shrink-0">
                  {selectedProject.id === "vision-assist" ? <Eye size={20} /> : <Bot size={20} />}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">{selectedProject.name}</h3>
                  <p className="text-xs text-primary font-bold uppercase tracking-wider">{selectedProject.tagline}</p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-12 items-start">
                <div className="md:col-span-7">
                  <IDEWindow project={selectedProject} />
                </div>
                <div className="md:col-span-5 flex flex-col gap-4 text-xs">
                  <p className="text-muted-foreground leading-relaxed font-sans text-xs">
                    {selectedProject.description}
                  </p>
                  
                  <div className="border-t border-white/10 pt-3">
                    <p className="font-bold text-[9px] uppercase tracking-wider text-primary">Key Features</p>
                    <ul className="mt-1.5 space-y-1.5 font-sans">
                      {selectedProject.features.map(f => (
                        <li key={f} className="flex items-center gap-2 text-foreground/80 text-[11px]">
                          <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-white/10 pt-3">
                    <p className="font-bold text-[9px] uppercase tracking-wider text-primary mb-1.5">Technologies Used</p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.technologies.map(t => (
                        <span key={t} className="px-2 py-0.5 rounded border border-white/10 bg-white/5 font-mono text-[9px] text-white/80">
                          {t}
                        </span>
                      ))}
                    </div>
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

