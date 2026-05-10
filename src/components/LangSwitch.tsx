import { useI18n } from "@/lib/i18n";

export function LangSwitch() {
  const { lang, setLang } = useI18n();
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-background/40 p-1 text-[10px] uppercase tracking-[0.2em]">
      {(["pt", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary"
          }`}
          aria-pressed={lang === l}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
