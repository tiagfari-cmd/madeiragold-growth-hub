import { motion } from "framer-motion";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { useI18n } from "@/lib/i18n";

export function Results() {
  const { t } = useI18n();
  const r = t.results;
  return (
    <section id="results" className="relative border-t border-border/40 py-32">
      <div className="absolute inset-0 -z-10 opacity-60" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-16 max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary">{r.label}</p>
          <h2 className="mt-6 font-display text-5xl leading-tight sm:text-6xl">
            {r.title1}<em className="italic text-gold-gradient">{r.titleEm}</em>{r.titleEnd}
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{r.sub}</p>
        </Reveal>

        <RevealStagger className="grid gap-px overflow-hidden rounded-sm border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {r.items.map((it) => (
            <motion.div
              key={it.v}
              variants={revealItem}
              className="bg-background p-8 transition-colors hover:bg-card"
            >
              <p className="font-display text-5xl text-gold-gradient sm:text-6xl">{it.k}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">{it.v}</p>
            </motion.div>
          ))}
        </RevealStagger>

        <Reveal delay={0.1} className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border/40 pt-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary">Setores</span>
          {r.sectors.map((s) => (
            <span key={s} className="text-sm text-foreground/80">{s}</span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
