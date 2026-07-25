import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  speedY: number;
  speedX: number;
  size: number;
  content: string;
  phase: number;
  phaseSpeed: number;
}

interface FloatingWindow {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
  type: "editor" | "logger" | "bash";
  
  // Editor typing variables
  lines: string[];
  currentLineIdx: number;
  charIdx: number;
  typedLines: string[];
  lastTypeTime: number;
  typeDelay: number;
  
  // Logger variables
  logLines: string[];
  currentLogIdx: number;
  activeLogLines: string[];
  lastLogTime: number;
  logDelay: number;
  
  // Floating movement variables
  baseX: number;
  baseY: number;
  driftRangeX: number;
  driftRangeY: number;
  phase: number;
  phaseSpeed: number;
  opacity: number;
}

const CODE_SNIPPETS = [
  // React & TypeScript
  "const [data, setData] = useState<Data | null>(null);",
  "useEffect(() => { const sub = api.subscribe(); return () => sub.unsubscribe(); }, []);",
  "const memoizedValue = useMemo(() => computeExpensive(a, b), [a, b]);",
  "export default function HeroSection({ heading, stats }: HeroProps) {",
  "const { theme, toggleTheme } = useTheme();",
  "const response = await fetch(`/api/chat/history?id=${chatId}`);",
  "const router = createRootRouteWithContext<{ queryClient: QueryClient }>();",
  "const query = useQuery({ queryKey: ['portfolio'], queryFn: fetchPortfolio });",
  "const { mutate } = useMutation({ mutationFn: updateProfile });",
  
  // Python & AI/ML/DL
  "import torch; import torch.nn as nn;",
  "class NeuralNetwork(nn.Module):",
  "    def __init__(self): super().__init__(); self.fc = nn.Linear(784, 10);",
  "    def forward(self, x): return torch.softmax(self.fc(x), dim=1)",
  "model = YOLO('yolov8n.pt'); results = model.track(source='webcam', show=True);",
  "optimizer = torch.optim.Adam(model.parameters(), lr=0.001);",
  "loss = criterion(outputs, targets); loss.backward(); optimizer.step();",
  "dataset = torchvision.datasets.MNIST(root='./data', train=True, download=True);",
  "cv2.imshow('Camera Feed', frame); if cv2.waitKey(1) & 0xFF == ord('q'): break",
  "def detect_features(image): gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY); return gray;",
  "agent = Agent(role='AI Architect', goal='Build intelligent software', memory=True);",
  "vector_store = Chroma.from_documents(documents, embeddings);",
  "chain = load_qa_chain(llm, chain_type='stuff'); response = chain.run(query);",
  
  // Django & Backend APIs
  "class ProjectDetailView(generics.RetrieveUpdateDestroyAPIView):",
  "    queryset = Project.objects.all(); serializer_class = ProjectSerializer;",
  "class ChatMessage(models.Model): sender = models.CharField(max_length=50); timestamp = models.DateTimeField(auto_now_add=True);",
  "def get_queryset(self): return self.queryset.filter(user=self.request.user)",
  "@api_view(['POST']) def classify_intent(request): return Response(classifier.predict(request.data))",
  "app = FastAPI(title='AI Portfolio Agent API', version='1.0.0');",
  "@app.post('/api/agent/query') async def handle_query(query: AgentQuery):",
  
  // Docker & CLI & Deployments
  "docker build -t ai-portfolio:latest .",
  "docker run -p 3000:3000 --env-file .env ai-portfolio",
  "npm run dev -- --host 0.0.0.0",
  "pip install tensorflow-cpu opencv-python fastapi uvicorn",
  "git add . && git commit -m 'feat: continuous integration background'",
  "npm install @tanstack/react-router lucide-react motion",
  "bun run dev",
];

// Content for the Editor typing window
const EDITOR_LINES = [
  "import { useEffect, useState } from 'react';",
  "import { motion } from 'motion/react';",
  "",
  "export default function Chatbot() {",
  "  const [active, setActive] = useState(false);",
  "  const [history, setHistory] = useState([]);",
  "",
  "  useEffect(() => {",
  "    const checkServer = async () => {",
  "      const res = await api.get('/status');",
  "      setActive(res.ok);",
  "    };",
  "    checkServer();",
  "  }, []);",
  "",
  "  const queryAgent = async (prompt) => {",
  "    const response = await agent.predict(prompt);",
  "    setHistory(prev => [...prev, response]);",
  "  };",
  "  return <div className='flex' />",
  "}"
];

// Content for the Machine Learning training logger
const LOGGER_LINES = [
  "[INFO] GPU model found: NVIDIA GeForce RTX 4090",
  "[INFO] Loading CNN configuration weights...",
  "[INFO] Total trainable parameters: 23,894,102",
  "[INFO] Epoch 01/20 - batch 32/250 - loss: 1.1092",
  "[INFO] Epoch 01/20 - batch 128/250 - loss: 0.8921",
  "[SUCCESS] Epoch 01 completed. val_loss: 0.7201 - acc: 76.4%",
  "[INFO] Epoch 02/20 - batch 32/250 - loss: 0.6510",
  "[INFO] Epoch 02/20 - batch 128/250 - loss: 0.5109",
  "[SUCCESS] Epoch 02 completed. val_loss: 0.4429 - acc: 88.9%",
  "[INFO] Epoch 03/20 - batch 32/250 - loss: 0.3892",
  "[INFO] Epoch 03/20 - batch 128/250 - loss: 0.2291",
  "[SUCCESS] Epoch 03 completed. val_loss: 0.1802 - acc: 94.8%",
  "[INFO] Epoch 04/20 - batch 32/250 - loss: 0.1601",
  "[SUCCESS] Epoch 04 completed. val_loss: 0.1198 - acc: 97.2%",
  "[INFO] Save checkpoint trigger activated.",
  "[SUCCESS] Saved model checkpoint to './weights/best.weights'"
];

// Content for the Terminal dev server log
const BASH_LINES = [
  "$ bun run dev",
  "[vite] v6.0.1 dev server running...",
  "  > Local:    http://localhost:5173/",
  "  > Network:  http://192.168.1.12:5173/",
  "[vite] hmr enabled (hot module replacement)",
  "[vite] file system change detected: src/routes/index.tsx",
  "✓ transform client components in 142ms",
  "GET /api/portfolio - 200 OK - 8.4ms",
  "GET /assets/profile.jpg - 200 OK - 32ms",
  "POST /api/chat/faq - 200 OK - 180ms",
  "✓ hmr update in 80ms"
];

// Cross-browser safe rounded rectangle drawing
function drawRoundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  if (ctx.roundRect) {
    ctx.roundRect(x, y, w, h, r);
  } else {
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
  }
}

// Tokenizing code parser for syntax-highlighted canvas prints
function drawHighlightedCode(
  ctx: CanvasRenderingContext2D,
  code: string,
  x: number,
  y: number,
  opacity: number
) {
  const tokenRegex = /(\/\/.*|#.*)|("[^"]*"|'[^']*')|\b(const|let|var|function|return|import|from|def|class|await|async|as|if|else|for|in|try|except|interface|export|default|super)\b|\b([a-zA-Z_]\w*)(?=\s*\()|\b(\d+)\b|([^\s\w]+)|(\s+)|([a-zA-Z_]\w*)/g;

  let match;
  let currentX = x;

  tokenRegex.lastIndex = 0;

  while ((match = tokenRegex.exec(code)) !== null) {
    const [
      full,
      comment,
      string,
      keyword,
      funcName,
      number,
      symbol,
      whitespace,
      word
    ] = match;

    let color = `rgba(139, 139, 146, ${opacity * 0.55})`; // default muted text

    if (comment) {
      color = `rgba(85, 85, 92, ${opacity * 0.75})`;
    } else if (string) {
      color = `rgba(16, 185, 129, ${opacity * 0.95})`; // green strings
    } else if (keyword) {
      color = `rgba(239, 91, 63, ${opacity})`; // orange keywords
    } else if (funcName) {
      color = `rgba(59, 130, 246, ${opacity * 0.9})`; // blue functions
    } else if (number) {
      color = `rgba(245, 158, 11, ${opacity * 0.95})`; // amber numbers
    } else if (symbol) {
      color = `rgba(242, 241, 238, ${opacity * 0.75})`; // off-white symbols
    } else if (whitespace) {
      currentX += ctx.measureText(whitespace).width;
      continue;
    } else if (word) {
      color = `rgba(242, 241, 238, ${opacity * 0.8})`; // general variables
    }

    ctx.fillStyle = color;
    ctx.fillText(full, currentX, y);
    currentX += ctx.measureText(full).width;
  }
}

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Columns calculation for scrolling code strings
    const colWidth = 260;
    const getColsCount = (w: number) => Math.max(1, Math.floor(w / colWidth));
    let colsCount = getColsCount(width);

    // Initial background code strings array
    const particles: Particle[] = [];
    const maxParticles = Math.min(40, colsCount * 2.5);

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < maxParticles; i++) {
        const colIndex = i % colsCount;
        particles.push({
          x: colIndex * colWidth + Math.random() * 40 + 10,
          y: Math.random() * height,
          speedY: 0.16 + Math.random() * 0.2, // very slow, background drift
          speedX: (Math.random() - 0.5) * 0.03,
          size: 10.5 + Math.random() * 2.5,
          content: CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
          phase: Math.random() * Math.PI * 2,
          phaseSpeed: 0.001 + Math.random() * 0.002,
        });
      }
    };

    initParticles();

    // Floating Interactive Developer Terminals
    const windows: FloatingWindow[] = [
      {
        id: "react-ide",
        x: 80,
        y: 160,
        baseX: 80,
        baseY: 160,
        width: 320,
        height: 190,
        title: "index.tsx (React) — Editor",
        type: "editor",
        lines: EDITOR_LINES,
        currentLineIdx: 0,
        charIdx: 0,
        typedLines: [],
        lastTypeTime: 0,
        typeDelay: 70,
        logLines: [],
        currentLogIdx: 0,
        activeLogLines: [],
        lastLogTime: 0,
        logDelay: 0,
        driftRangeX: 20,
        driftRangeY: 25,
        phase: 0,
        phaseSpeed: 0.0006,
        opacity: 0.70,
      },
      {
        id: "ml-training",
        x: width - 420,
        y: 460,
        baseX: width - 420,
        baseY: 460,
        width: 340,
        height: 180,
        title: "train_yolo.py (Python) — Neural Net Output",
        type: "logger",
        lines: [],
        currentLineIdx: 0,
        charIdx: 0,
        typedLines: [],
        lastTypeTime: 0,
        typeDelay: 0,
        logLines: LOGGER_LINES,
        currentLogIdx: 0,
        activeLogLines: [],
        lastLogTime: 0,
        logDelay: 1200,
        driftRangeX: 30,
        driftRangeY: 20,
        phase: Math.PI / 3,
        phaseSpeed: 0.0008,
        opacity: 0.65,
      },
      {
        id: "docker-logs",
        x: 140,
        y: height - 280,
        baseX: 140,
        baseY: height - 280,
        width: 340,
        height: 170,
        title: "terminal — npm run dev",
        type: "bash",
        lines: [],
        currentLineIdx: 0,
        charIdx: 0,
        typedLines: [],
        lastTypeTime: 0,
        typeDelay: 0,
        logLines: BASH_LINES,
        currentLogIdx: 0,
        activeLogLines: [],
        lastLogTime: 0,
        logDelay: 1800,
        driftRangeX: 25,
        driftRangeY: 30,
        phase: Math.PI * 1.2,
        phaseSpeed: 0.0007,
        opacity: 0.65,
      }
    ];

    // Readjust window coordinates to stay inside responsive screens
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;

      // Re-evaluate columns
      const newColsCount = getColsCount(width);
      if (newColsCount !== colsCount) {
        colsCount = newColsCount;
        initParticles();
      }

      // Re-position base positions of terminals so they align with screen sizes
      windows.forEach((win) => {
        if (win.id === "react-ide") {
          win.baseX = Math.min(width - win.width - 40, Math.max(20, width * 0.08));
          win.baseY = Math.max(100, height * 0.15);
        } else if (win.id === "ml-training") {
          win.baseX = Math.min(width - win.width - 25, Math.max(20, width - win.width - width * 0.08));
          win.baseY = Math.max(150, height * 0.45);
        } else if (win.id === "docker-logs") {
          win.baseX = Math.min(width - win.width - 40, Math.max(20, width * 0.12));
          win.baseY = Math.min(height - win.height - 40, Math.max(300, height * 0.7));
        }
        win.x = win.baseX;
        win.y = win.baseY;
      });
    };

    window.addEventListener("resize", handleResize);
    // run initial positions layout check
    handleResize();

    const drawWindow = (w: FloatingWindow) => {
      ctx.save();

      // Card Background Shadow
      ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
      ctx.shadowBlur = 15;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 10;

      // Outer window box
      drawRoundRect(ctx, w.x, w.y, w.width, w.height, 10);
      ctx.fillStyle = `rgba(10, 10, 12, ${w.opacity * 0.95})`; // dark card theme
      ctx.fill();

      // Border glow
      ctx.shadowBlur = 0; // reset shadow
      ctx.strokeStyle = `rgba(255, 255, 255, ${w.opacity * 0.15})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Window Header
      const headerHeight = 26;
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(w.x, w.y, w.width, headerHeight, [10, 10, 0, 0]);
      } else {
        ctx.rect(w.x, w.y, w.width, headerHeight);
      }
      ctx.fillStyle = `rgba(20, 20, 24, ${w.opacity * 0.9})`;
      ctx.fill();
      ctx.stroke();

      // Window controls (circles)
      const btnY = w.y + 13;
      const btnColors = [
        `rgba(239, 68, 68, ${w.opacity * 0.9})`,
        `rgba(245, 158, 11, ${w.opacity * 0.9})`,
        `rgba(16, 185, 129, ${w.opacity * 0.9})`
      ];
      btnColors.forEach((color, idx) => {
        ctx.beginPath();
        ctx.arc(w.x + 14 + idx * 12, btnY, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });

      // Tab Title
      ctx.fillStyle = `rgba(139, 139, 146, ${w.opacity * 0.95})`;
      ctx.font = `600 9.5px "JetBrains Mono", "Fira Code", monospace`;
      ctx.textAlign = "center";
      ctx.fillText(w.title, w.x + w.width / 2, w.y + 16);
      ctx.textAlign = "left";

      // Console content rendering
      const contentY = w.y + headerHeight + 14;
      const paddingX = 14;
      ctx.font = `500 9.5px "JetBrains Mono", "Fira Code", monospace`;

      if (w.type === "editor") {
        let currentY = contentY;
        w.typedLines.forEach((line) => {
          drawHighlightedCode(ctx, line, w.x + paddingX, currentY, w.opacity * 0.85);
          currentY += 13.5;
        });

        // Current typing line
        if (w.currentLineIdx < w.lines.length) {
          const currentLine = w.lines[w.currentLineIdx];
          const typedText = currentLine.substring(0, w.charIdx);
          const showCursor = Math.floor(Date.now() / 400) % 2 === 0;
          const displayLine = typedText + (showCursor ? "█" : "");
          drawHighlightedCode(ctx, displayLine, w.x + paddingX, currentY, w.opacity * 0.95);
        }
      } else if (w.type === "logger" || w.type === "bash") {
        let currentY = contentY;
        w.activeLogLines.forEach((line) => {
          let color = `rgba(242, 241, 238, ${w.opacity * 0.7})`;
          if (line.includes("[SUCCESS]") || line.includes("200 OK") || line.startsWith("✓")) {
            color = `rgba(16, 185, 129, ${w.opacity * 0.95})`; // green
          } else if (line.includes("[INFO]") || line.includes("[vite]")) {
            color = `rgba(59, 130, 246, ${w.opacity * 0.9})`; // blue
          } else if (line.startsWith("$ ")) {
            color = `rgba(239, 91, 63, ${w.opacity})`; // orange prompts
          } else if (line.includes("Local:") || line.includes("Network:")) {
            color = `rgba(139, 139, 146, ${w.opacity * 0.75})`;
          }

          ctx.fillStyle = color;
          ctx.fillText(line, w.x + paddingX, currentY);
          currentY += 13.5;
        });

        // Blinking loading spinner at command prompt
        if (w.type === "bash") {
          const spinners = ["|", "/", "-", "\\"];
          const spIdx = Math.floor(Date.now() / 150) % 4;
          ctx.fillStyle = `rgba(239, 91, 63, ${w.opacity * 0.95})`;
          ctx.fillText(`Compiling... [${spinners[spIdx]}]`, w.x + paddingX, currentY);
        }
      }

      ctx.restore();
    };

    const updateWindows = (now: number) => {
      windows.forEach((w) => {
        // 1. Gently drift position in 2D space using math phase values
        w.phase += w.phaseSpeed;
        w.x = w.baseX + Math.sin(w.phase) * w.driftRangeX;
        w.y = w.baseY + Math.cos(w.phase * 0.8) * w.driftRangeY;

        // 2. Run simulation algorithms
        if (w.type === "editor") {
          // Editor Typing Simulation
          if (now - w.lastTypeTime > w.typeDelay) {
            w.lastTypeTime = now;
            if (w.currentLineIdx < w.lines.length) {
              const currentLine = w.lines[w.currentLineIdx];
              if (w.charIdx < currentLine.length) {
                w.charIdx++;
                // Add variable delay to simulate typing rhythms
                const char = currentLine.charAt(w.charIdx - 1);
                w.typeDelay = char === " " ? 40 : char === ";" || char === "(" ? 180 : 70;
              } else {
                // Line fully typed
                w.typedLines.push(currentLine);
                w.currentLineIdx++;
                w.charIdx = 0;
                w.typeDelay = 350; // pause at newline

                // Cap editor lines count and scroll old lines out
                if (w.typedLines.length > 10) {
                  w.typedLines.shift();
                }
              }
            } else {
              // Wait before resetting typing cycle
              w.typeDelay = 4000;
              w.currentLineIdx = 0;
              w.charIdx = 0;
              w.typedLines = [];
            }
          }
        } else if (w.type === "logger" || w.type === "bash") {
          // Terminal Log Simulation
          if (now - w.lastLogTime > w.logDelay) {
            w.lastLogTime = now;
            if (w.currentLogIdx < w.logLines.length) {
              const nextLog = w.logLines[w.currentLogIdx];
              w.activeLogLines.push(nextLog);
              w.currentLogIdx++;
              
              // Variable logger delay for natural scroll look
              w.logDelay = nextLog.startsWith("$ ") ? 800 : Math.random() * 1000 + 400;

              if (w.activeLogLines.length > 9) {
                w.activeLogLines.shift();
              }
            } else {
              // Completed all processes, wait then restart logs
              w.logDelay = 6000;
              w.currentLogIdx = 0;
              w.activeLogLines = [];
            }
          }
        }
      });
    };

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // 1. Render slow background drift code lines
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.phase) * 0.06;
        p.phase += p.phaseSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          const colIndex = Math.floor(Math.random() * colsCount);
          p.x = colIndex * colWidth + Math.random() * 40 + 10;
          p.content = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
          p.speedY = 0.16 + Math.random() * 0.2;
        }

        if (p.x > width + 100) p.x = -100;
        else if (p.x < -100) p.x = width + 100;

        const opacity = 0.04 + (Math.sin(p.phase) + 1) * 0.04;
        ctx.font = `500 ${p.size}px "JetBrains Mono", "Fira Code", monospace`;
        drawHighlightedCode(ctx, p.content, p.x, p.y, opacity);
      });

      // 2. Update and render active developer terminals
      updateWindows(time);
      windows.forEach(drawWindow);

      animationFrameId = requestAnimationFrame(render);
    };

    render(0);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-none"
    />
  );
}
