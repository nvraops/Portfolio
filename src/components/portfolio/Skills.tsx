import { Reveal } from "./motion";
import { motion } from "motion/react";
import { skillGroups } from "@/lib/portfolio-data";

const FlowerIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary shrink-0">
    <path d="M12 2v20M2 12h20M5.22 5.22l13.56 13.56M18.78 5.22L5.22 18.78" />
  </svg>
);

// Map of official brand logos in high-fidelity inline SVGs
const TechIcon = ({ name }: { name: string }) => {
  const normalized = name.toLowerCase();
  
  if (normalized.includes("python")) {
    return (
      <svg width="20" height="20" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M54.76 11.23C51.69 11.23 48.78 11.49 46.12 11.96C37.07 13.56 35.8 19.38 35.8 28.53H45.74V29.84H31.86C22.7 29.84 15.26 35.6 15.26 44.66C15.26 53.72 21.08 59.48 29.84 59.48H32.48V55.85C32.48 48.16 38.64 42 46.33 42H64.21C71.9 42 78.06 48.16 78.06 55.85V59.48H81.33C90.39 59.48 97.83 52.88 97.83 43.82C97.83 34.76 92.02 29.84 83.26 29.84H80.62V33.47C80.62 41.16 74.46 47.32 66.77 47.32H48.89C41.2 47.32 35.04 41.16 35.04 33.47V28.53C35.04 19.38 41.64 11.23 54.76 11.23Z" fill="#3776AB"/>
        <path d="M55.24 98.77C58.31 98.77 61.22 98.51 63.88 98.04C72.93 96.44 74.2 90.62 74.2 81.47H64.26V80.16H78.14C87.3 80.16 94.74 74.4 94.74 65.34C94.74 56.28 88.92 50.52 80.16 50.52H77.52V54.15C77.52 61.84 71.36 68 63.67 68H45.79C38.1 68 31.94 61.84 31.94 54.15V50.52H28.67C19.61 50.52 12.17 57.12 12.17 66.18C12.17 75.24 17.98 80.16 26.74 80.16H29.38V76.53C29.38 68.84 35.54 62.68 43.23 62.68H61.11C68.8 62.68 74.96 68.84 74.96 76.53V81.47C74.96 90.62 68.36 98.77 55.24 98.77Z" fill="#FFE873"/>
      </svg>
    );
  }
  
  if (normalized.includes("java") && !normalized.includes("script")) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.378 18.067s1.866.52 4.195.52c4.462 0 7.82-1.895 10.954-3.834 3.109-1.92 6.467-3.953 6.467-3.953s-1.808 1.159-4.887 2.853c-3.138 1.724-6.496 3.923-11.042 3.923-2.117 0-4.07-.384-5.687-1.509zm1.385-3.056s1.618.368 3.518.368c3.784 0 6.643-1.464 9.382-2.937 2.67-1.436 5.568-3.003 5.568-3.003s-1.53.882-4.137 2.149c-2.656 1.295-5.525 2.973-9.353 2.973-1.884 0-3.518-.323-4.978-1.55zm5.555-5.608s-1.074.882-.265 2.164c.736 1.162 2.656.912 3.657.412 1.486-.736 1.737-1.972.736-2.678-.853-.604-3.135-.684-4.128.102zm-1.869-.971s.912-.971 3.238-.853c3.047.162 4.798 1.943 3.974 3.738-.795 1.737-3.46 2.06-5.328 1.34-2.193-.846-3.047-3.017-1.884-4.225zM13.238.167s.103 2.458-1.943 4.224C9.535 5.926 9.432 7.737 9.432 7.737s1.354-.795 2.502-2.06c1.325-1.457.736-3.915.736-3.915zm4.843.853s-.368 2.002-2.31 3.473c-1.869 1.413-1.457 3.238-1.457 3.238s1.618-1.148 2.723-2.325c1.236-1.325.684-3.076.684-3.076z" fill="#E76F51"/>
      </svg>
    );
  }
  
  if (normalized.includes("javascript")) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
        <path d="M19.467 17.5c0 1.93-1.4 3.3-3.73 3.3-2.2 0-3.37-1.07-3.97-2.2l1.9-1.1c.43.76.96 1.33 1.93 1.33.93 0 1.63-.4 1.63-1.57v-8.23h2.24V17.5zM11.667 9.07v8.43c0 1.93-1.2 3.3-3.53 3.3-2.2 0-3.37-1.07-3.97-2.2l1.9-1.1c.43.76.96 1.33 1.93 1.33.93 0 1.63-.4 1.63-1.57V9.07h2.04z" fill="#000000"/>
      </svg>
    );
  }

  if (normalized.includes("typescript")) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="3" fill="#3178C6"/>
        <text x="5" y="17" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">TS</text>
      </svg>
    );
  }

  if (normalized.includes("html")) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 0h21l-1.9 19.3L12 24l-8.6-4.7L1.5 0zm16.4 5.3H6.1l.4 4.3h10.9l-.4 4.4-5 2.7-5-2.7-.3-3.2H4.4l.5 5.8 7.1 3.9 7.1-3.9.8-8.9-.1-2.4z" fill="#E34F26"/>
      </svg>
    );
  }

  if (normalized.includes("css")) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 0h21l-1.9 19.3L12 24l-8.6-4.7L1.5 0zm16.4 5.3H6.1l.4 4.3h10.9l-.4 4.4-5 2.7-5-2.7-.3-3.2H4.4l.5 5.8 7.1 3.9 7.1-3.9.8-8.9-.1-2.4z" fill="#1572B6"/>
      </svg>
    );
  }

  if (normalized.includes("react")) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#61DAFB" strokeWidth="1.8" />
        <ellipse cx="12" cy="12" rx="4" ry="9" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="4" ry="9" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="4" ry="9" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(150 12 12)" />
      </svg>
    );
  }

  if (normalized.includes("next")) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11" stroke="#ffffff" strokeWidth="1.8"/>
        <path d="M16 16L9.5 8H8v8h1.5v-5.5L15.5 16H16z" fill="#ffffff"/>
      </svg>
    );
  }

  if (normalized.includes("tailwind")) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6c-3.3 0-5.5 1.6-6.6 4.9 1.1-1.6 2.4-2.2 3.8-1.6 1.3.5 2.1 1.9 2.5 3.3.6 2.1 2.3 3.4 5.3 3.4 3.3 0 5.5-1.6 6.6-4.9-1.1 1.6-2.4 2.2-3.8 1.6-1.3-.5-2.1-1.9-2.5-3.3C16.7 7.3 15 6 12 6z" fill="#38BDF8"/>
      </svg>
    );
  }

  if (normalized.includes("django")) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#092E20"/>
        <text x="4" y="16" fill="#44B78B" fontSize="12" fontWeight="bold" fontFamily="monospace">Dj</text>
      </svg>
    );
  }

  if (normalized.includes("fastapi")) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 22h20L12 2zm-1 15h2v2h-2v-2zm0-8h2v6h-2V9z" fill="#059669"/>
      </svg>
    );
  }

  if (normalized.includes("mongodb")) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2s-6 6.5-6 12c0 3.3 2.7 6 6 6s6-2.7 6-6c0-5.5-6-12-6-12zm0 16.5c-2.5 0-4.5-2-4.5-4.5 0-3.5 4.5-9 4.5-9s4.5 5.5 4.5 9c0 2.5-2 4.5-4.5 4.5z" fill="#47A248"/>
      </svg>
    );
  }

  if (normalized.includes("postgres")) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#336791"/>
        <text x="6" y="16" fill="#ffffff" fontSize="10" fontWeight="bold">PG</text>
      </svg>
    );
  }

  if (normalized.includes("sqlite")) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h16v16H4V4z" fill="#003B57"/>
        <text x="5" y="16" fill="#00f0ff" fontSize="9" fontWeight="bold">SQL</text>
      </svg>
    );
  }

  if (normalized.includes("supabase")) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L3 14h8l-1 8 11-12h-8l1-8z" fill="#3ECF8E"/>
      </svg>
    );
  }

  if (normalized.includes("git") && !normalized.includes("hub")) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 10.9L13.1.7C12.7.3 12-.1 11.4-.1s-1.3.3-1.7.7L.7 9.8c-.9.9-.9 2.5 0 3.4l10.2 10.2c.4.4 1.1.7 1.7.7s1.3-.3 1.7-.7l9-9c.9-.9.9-2.5 0-3.5zM12 18.2c-.7 0-1.2-.5-1.2-1.2 0-.3.1-.6.3-.8l-2-2c-.2.1-.5.2-.8.2-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2c0 .3-.1.6-.3.8l2 2c.2-.1.5-.2.8-.2.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2zm2.6-7.8c-.3.2-.6.3-.9.3-.7 0-1.2-.5-1.2-1.2 0-.3.1-.6.3-.8l-1.9-1.9c-.2.1-.5.2-.8.2-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2c0 .3-.1.6-.3.8l1.9 1.9c.2-.1.5-.2.8-.2.7 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2z" fill="#F05032"/>
      </svg>
    );
  }

  if (normalized.includes("github")) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="#ffffff"/>
      </svg>
    );
  }

  if (normalized.includes("docker")) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.983 11.078h2.119c.102 0 .186-.084.186-.186V9.034c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v1.858c0 .102.084.186.186.186zm-2.937 0h2.119c.102 0 .186-.084.186-.186V9.034c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v1.858c0 .102.084.186.186.186zm-2.937 0h2.12c.102 0 .186-.084.186-.186V9.034c0-.102-.084-.186-.186-.186h-2.12c-.102 0-.186.084-.186.186v1.858c0 .102.084.186.186.186zm-2.937 0h2.12c.102 0 .186-.084.186-.186V9.034c0-.102-.084-.186-.186-.186h-2.12c-.102 0-.186.084-.186.186v1.858c0 .102.084.186.186.186zm2.937-2.937h2.119c.102 0 .186-.084.186-.186V6.097c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v1.858c0 .102.084.186.186.186zm2.937 0h2.119c.102 0 .186-.084.186-.186V6.097c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v1.858c0 .102.084.186.186.186zm-5.874 0h2.12c.102 0 .186-.084.186-.186V6.097c0-.102-.084-.186-.186-.186h-2.12c-.102 0-.186.084-.186.186v1.858c0 .102.084.186.186.186zm5.874-2.937h2.119c.102 0 .186-.084.186-.186V3.16c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v1.858c0 .102.084.186.186.186zm-2.937 5.874h2.119c.102 0 .186-.084.186-.186V9.034c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v1.858c0 .102.084.186.186.186zM22.04 12.3c-.347-.508-1.077-.66-1.573-.322-.96.653-2.073.98-3.238.98H1.325c-.728 0-1.325.597-1.325 1.326 0 4.195 3.325 7.6 7.425 7.6 4.417 0 8.077-3.9 8.077-7.8 0-.322.046-.645.138-.96 1.325-.33 2.119-1.6 1.76-2.9-1.2-1.12-1.9-2.22-1.9-2.22h.93c.96 0 1.724-.76 1.724-1.724V6.098c-.015-.226-.185-.4-.417-.4-.226 0-.4.185-.4.4v.481c0 .96-.76 1.724-1.724 1.724h-1.39C16.92 5.093 18.067 4.1 19.39 4.1c.226 0 .4-.185.4-.4s-.185-.4-.4-.4c-2.31 0-4.111 2.31-4.111 2.31v.17l-.015.35c0 .102.084.186.186.186h1.724c.226 0 .417.185.417.417v.481c0 .226-.185.417-.417.417h-.93s-.33 1.159-1.425 2.164c.226-.6.347-1.226.347-1.858v-1.858c0-.102-.084-.186-.186-.186H12.9c-.102 0-.186.084-.186.186v1.858c0 .882-.249 1.724-.728 2.458-.1-.13-.231-.22-.387-.272a.186.186 0 00-.231.18v.1c0 1.2-1.077 2.18-2.31 2.18H6.945c-.226 0-.417-.185-.417-.417v-.481c0-.226.185-.417.417-.417h2.12c.102 0 .186-.084.186-.186V9.034c0-.102-.084-.186-.186-.186H6.945c-.102 0-.186.084-.186.186v1.858c0 .226-.185.417-.417.417h-2.12c-.226 0-.417-.185-.417-.417v-.481c0-.226.185-.417.417-.417h1.026c.102 0 .186-.084.186-.186V9.034c0-.102-.084-.186-.186-.186H4.008c-.102 0-.186-.084-.186-.186v1.858c0 .226-.185.417-.417.417h-2.12c-.226 0-.417-.185-.417-.417v-.481c0-.226.185-.417.417-.417h1.026c.102 0 .186-.084.186-.186V9.034c0-.102-.084-.186-.186-.186H.983c-.102 0-.186-.084-.186-.186V7.17c0-.102.084-.186.186-.186H1.91c.102 0 .186-.084.186-.186V4.92c0-.102-.084-.186-.186-.186z" fill="#2496ED"/>
      </svg>
    );
  }

  if (normalized.includes("vscode") || normalized.includes("visual studio")) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.9 6.5l-3.3-3.3c-.2-.2-.5-.2-.7 0L12.5 10l-3.3-3.3c-.2-.2-.5-.2-.7 0L5.2 10 1.9 6.7c-.2-.2-.5-.2-.7 0L.1 7.8c-.2.2-.2.5 0 .7l4.4 4.4L.1 17.3c-.2.2-.2.5 0 .7l1.1 1.1c.2.2.5.2.7 0l3.3-3.3 3.3 3.3c.2.2.5.2.7 0l7.4-7.4 7.4 7.4c.2.2.5.2.7 0l1.1-1.1c.2-.2.2-.5 0-.7l-4.4-4.4 4.4-4.4c.1-.2.1-.5-.1-.7z" fill="#007ACC"/>
      </svg>
    );
  }

  if (normalized.includes("opencv")) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="7" r="4" fill="#E74C3C"/>
        <circle cx="7" cy="16" r="4" fill="#3498DB"/>
        <circle cx="17" cy="16" r="4" fill="#2ECC71"/>
      </svg>
    );
  }

  if (normalized.includes("google") || normalized.includes("gemini")) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
      </svg>
    );
  }

  if (normalized.includes("kubernetes")) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#326CE5" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zM12 6v12M6 9l12 6M18 9L6 15" />
      </svg>
    );
  }

  // Fallback AI glowing node
  if (normalized.includes("ai") || normalized.includes("agent") || normalized.includes("prompt") || normalized.includes("model") || normalized.includes("yolo") || normalized.includes("claude") || normalized.includes("openai") || normalized.includes("hugging")) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef5b3f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.25" />
      </svg>
    );
  }

  // Fallback Machine Learning nodes
  if (normalized.includes("learning") || normalized.includes("api") || normalized.includes("responsive") || normalized.includes("nlp") || normalized.includes("llm")) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00ffff" strokeWidth="2" className="text-cyan">
        <path d="M12 16v-4M8 12h8M12 8V4M6 12a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4zm-6 8a2 2 0 100-4 2 2 0 000 4zm0-12a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    );
  }

  // Default code icon
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
};

const customGroups = [
  {
    category: "Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"]
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion", "Responsive Web Design"]
  },
  {
    category: "Backend",
    skills: ["FastAPI", "Django", "REST APIs", "WebSockets", "Authentication", "API Development"]
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL", "SQLite", "Supabase"]
  },
  {
    category: "AI & Vision",
    skills: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Computer Vision", "Generative AI", "Agentic AI", "LLMs", "Prompt Engineering", "MCP", "AI Agents", "NLP", "YOLO", "OpenCV", "MediaPipe", "EasyOCR", "Whisper", "LangChain", "Hugging Face", "Google AI Studio", "Claude", "Gemini", "OpenAI APIs"]
  },
  {
    category: "Tools & Cloud",
    skills: ["Docker", "Kubernetes", "Cloud Run", "GitHub Actions", "Render", "Railway", "Netlify", "Vercel", "Git", "GitHub", "Visual Studio Code", "Postman", "Figma", "Linux", "Windows"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-5xl px-6 py-24 select-none">
      {/* Section Title */}
      <div className="flex items-center gap-3 text-2xl sm:text-3xl font-black uppercase tracking-[0.08em] text-white">
        <FlowerIcon />
        <span>My Stack</span>
      </div>

      <div className="mt-16 flex flex-col gap-12 sm:gap-14">
        {customGroups.map((group, idx) => (
          <Reveal key={group.category} delay={idx * 0.06}>
            <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/5 pb-10 sm:pb-12 gap-6 lg:gap-8 items-start">
              {/* Left Column: Huge bold title */}
              <h3 className="font-display text-4xl sm:text-5xl font-black uppercase text-foreground/35 tracking-tighter lg:col-span-4 w-full">
                {group.category}
              </h3>
              
              {/* Right Column: Grid list of technology items */}
              <div className="lg:col-span-8 flex flex-wrap gap-x-8 gap-y-6 items-center pt-1.5 sm:pt-2">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center gap-3 cursor-pointer py-1.5"
                  >
                    <TechIcon name={skill} />
                    <span className="text-sm font-semibold tracking-wide text-white font-sans">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

