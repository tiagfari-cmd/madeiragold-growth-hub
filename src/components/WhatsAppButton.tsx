import { MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function WhatsAppButton() {
  const { waUrl } = useI18n();
  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgba(37,211,102,0.7)] ring-1 ring-white/10 transition-all hover:scale-105 animate-pulse-gold"
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2.2} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
