import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileText, MessageSquare, Phone, Mail, MessageCircle, Instagram, X } from "lucide-react";
import { profile, mailtoUrl } from "@/lib/portfolio-data";

export function FloatingToggle() {
  const [contactOpen, setContactOpen] = useState(false);

  // Formatted whatsapp number (remove '+' and spaces)
  const whatsappNumber = profile.phone.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const callUrl = `tel:${profile.phone.replace(/\s+/g, "")}`;
  const mailUrl = mailtoUrl;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 select-none">

      {/* 1. Resume Floating Button */}
      <div className="floating-action-bob">
        <a
          href="/CV_Nikhill_Vasudeva_Rao.pdf"
          download="CV_Nikhill_Vasudeva_Rao.pdf"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-all hover:scale-110 hover:bg-primary/90 active:scale-95 group relative"
          aria-label="Download Resume"
        >
          <FileText size={20} className="transition-transform group-hover:scale-110" />
          
          {/* Tooltip */}
          <span className="absolute right-14 scale-0 group-hover:scale-100 transition-all duration-200 origin-right rounded-lg bg-[#111114] border border-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#f2f1ee] shadow-xl whitespace-nowrap">
            Download Resume
          </span>
        </a>
      </div>

      {/* 2. Contact Expandable Toggle (Placed below the Resume Button) */}
      <div className="flex items-center gap-3 relative">
        {/* Expanded Contact Options (Slide out to the left) */}
        <AnimatePresence>
          {contactOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="flex items-center gap-2"
            >
              {/* WhatsApp Link */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setContactOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 shadow-lg transition-all hover:scale-110 hover:bg-emerald-500/20 active:scale-95 group relative"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle size={18} />
                <span className="absolute bottom-12 scale-0 group-hover:scale-100 transition-all duration-200 origin-bottom rounded-lg bg-[#111114] border border-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#f2f1ee] shadow-xl whitespace-nowrap">
                  WhatsApp
                </span>
              </a>

              {/* Call Link */}
              <a
                href={callUrl}
                onClick={() => setContactOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-400 shadow-lg transition-all hover:scale-110 hover:bg-sky-500/20 active:scale-95 group relative"
                aria-label="Call Phone"
              >
                <Phone size={18} />
                <span className="absolute bottom-12 scale-0 group-hover:scale-100 transition-all duration-200 origin-bottom rounded-lg bg-[#111114] border border-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#f2f1ee] shadow-xl whitespace-nowrap">
                  Call
                </span>
              </a>

              {/* Instagram Link */}
              <a
                href={profile.instagram}
                target="_blank"
                rel="noreferrer"
                onClick={() => setContactOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-pink-500/20 bg-pink-500/10 text-pink-400 shadow-lg transition-all hover:scale-110 hover:bg-pink-500/20 active:scale-95 group relative"
                aria-label="Instagram Profile"
              >
                <Instagram size={18} />
                <span className="absolute bottom-12 scale-0 group-hover:scale-100 transition-all duration-200 origin-bottom rounded-lg bg-[#111114] border border-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#f2f1ee] shadow-xl whitespace-nowrap">
                  Instagram
                </span>
              </a>

              {/* Mail Link */}
              <a
                href={mailUrl}
                onClick={() => setContactOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 shadow-lg transition-all hover:scale-110 hover:bg-orange-500/20 active:scale-95 group relative"
                aria-label="Send Email"
              >
                <Mail size={18} />
                <span className="absolute bottom-12 scale-0 group-hover:scale-100 transition-all duration-200 origin-bottom rounded-lg bg-[#111114] border border-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#f2f1ee] shadow-xl whitespace-nowrap">
                  Email
                </span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <button
          onClick={() => setContactOpen(!contactOpen)}
          className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-xl transition-all hover:scale-110 hover:bg-primary/90 active:scale-95 group cursor-pointer relative"
          aria-label="Contact options"
        >
          <motion.div
            animate={{ rotate: contactOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {contactOpen ? <X size={20} /> : <MessageSquare size={20} />}
          </motion.div>
          
          {/* Tooltip (Only when closed) */}
          {!contactOpen && (
            <span className="absolute right-14 scale-0 group-hover:scale-100 transition-all duration-200 origin-right rounded-lg bg-[#111114] border border-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#f2f1ee] shadow-xl whitespace-nowrap">
              Quick Connect
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
