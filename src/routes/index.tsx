import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Film, Instagram, Megaphone, Palette, Check, Star } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import madeira from "@/assets/madeira.jpg";
import logo from "@/assets/mediagest-logo.png";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LocationSection } from "@/components/LocationSection";
import { Results } from "@/components/Results";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MediaGest Creative Studios — Gestão de Redes Sociais, Madeira" },
      { name: "description", content: "Gestão premium de redes sociais, reels, branding e estratégia Meta Ads desde a Madeira. Análise de marca gratuita em 24h." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Results />
      <Pricing />
      <LocationSection />
      <AnalysisCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function Hero() {
  const { t, waUrl } = useI18n();
  const ease = [0.22, 1, 0.36, 1] as const;
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-16">
      <img src={heroBg} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial-gold)" }} />

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-8">
        <motion.div
          className="lg:col-span-8"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
        >
          <motion.div
            variants={revealItem}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-primary"
          >
            <Sparkles className="h-3 w-3" /> {t.hero.badge}
          </motion.div>
          <motion.h1 variants={revealItem} className="font-display text-5xl leading-[0.95] text-foreground sm:text-7xl lg:text-[5.5rem]">
            {t.hero.title1}
            <em className="not-italic text-gold-gradient">{t.hero.titleEm}</em>
            {t.hero.title2}
          </motion.h1>
          <motion.p variants={revealItem} className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{t.hero.sub}</motion.p>
          <motion.div variants={revealItem} className="mt-10 flex flex-wrap items-center gap-4">
            <a href={waUrl} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.02]">
              {t.hero.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#services" className="text-sm uppercase tracking-[0.2em] text-foreground/80 underline-offset-8 hover:text-primary hover:underline">{t.hero.explore}</a>
          </motion.div>

          <motion.dl variants={revealItem} className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-border/50 pt-8">
            {t.hero.stats.map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-2xl text-gold-gradient sm:text-3xl">{k}</dt>
                <dd className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{v}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          className="relative lg:col-span-4 lg:mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease }}
        >
          <div className="relative mx-auto aspect-[3/4] max-w-sm overflow-hidden rounded-sm border border-primary/20 shadow-[var(--shadow-deep)]">
            <img src={madeira} alt="Madeira" className="h-full w-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary">{t.hero.studio}</p>
              <p className="mt-1 font-display text-2xl text-foreground">{t.hero.city}</p>
            </div>
          </div>
          <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-full border border-primary/30 lg:block" />
        </motion.div>
      </div>
    </section>
  );
}

function Marquee() {
  const { t } = useI18n();
  const items = [...t.marquee, ...t.marquee];
  return (
    <div className="overflow-hidden border-y border-border/40 bg-onyx py-6">
      <div className="flex gap-12 whitespace-nowrap text-sm uppercase tracking-[0.4em] text-muted-foreground">
        {items.map((w, i) => (
          <span key={i} className="flex items-center gap-12">
            <span>{w}</span>
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary">{t.about.label}</p>
          <h2 className="mt-6 font-display text-5xl leading-tight sm:text-6xl">
            {t.about.title1}<span className="text-gold-gradient">{t.about.titleEm}</span>{t.about.titleEnd}
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="space-y-6 text-base leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7">
          <p className="text-foreground/90">
            {t.about.p1Pre}<span className="text-primary">{t.about.p1Brand}</span>{t.about.p1Post}
          </p>
          <p>{t.about.p2}</p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            {t.about.cards.map((c) => (
              <div key={c.title} className="rounded-sm border border-border/60 bg-card/40 p-5">
                <p className="font-display text-lg text-primary">{c.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  const { t } = useI18n();
  const icons = [Film, Instagram, Palette, Megaphone];
  return (
    <section id="services" className="relative border-t border-border/40 bg-onyx py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-primary">{t.services.label}</p>
            <h2 className="mt-6 font-display text-5xl leading-tight sm:text-6xl">
              {t.services.title1}<span className="text-gold-gradient">{t.services.titleEm}</span>{t.services.titleEnd}
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">{t.services.sub}</p>
        </Reveal>

        <RevealStagger className="grid gap-px overflow-hidden rounded-sm border border-border/60 bg-border/60 md:grid-cols-2">
          {t.services.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <motion.article
                key={s.title}
                variants={revealItem}
                className="group relative bg-background p-10 transition-colors hover:bg-card"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
                  <Icon className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                </div>
                <h3 className="font-display text-3xl text-foreground">{s.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <div className="mt-10 h-px w-12 bg-primary transition-all group-hover:w-24" />
              </motion.article>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}

function Pricing() {
  const { t, waUrl } = useI18n();
  const meta = [
    { price: "€250", cadence: t.pricing.perMonth, featured: false },
    { price: "€400", cadence: t.pricing.perMonth, featured: true },
    { price: t.pricing.onRequest, cadence: "", featured: false },
  ];
  return (
    <section id="pricing" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-20 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary">{t.pricing.label}</p>
          <h2 className="mt-6 font-display text-5xl leading-tight sm:text-6xl">
            {t.pricing.title1}<span className="text-gold-gradient">{t.pricing.titleEm}</span>{t.pricing.titleEnd}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground">{t.pricing.sub}</p>
        </Reveal>

        <RevealStagger className="grid gap-6 lg:grid-cols-3">
          {t.pricing.tiers.map((tier, i) => {
            const m = meta[i];
            return (
              <motion.div
                key={tier.name}
                variants={revealItem}
                className={`relative flex flex-col rounded-sm border p-10 transition-all ${
                  m.featured
                    ? "border-primary/60 bg-gradient-to-b from-primary/10 via-card to-card shadow-[var(--shadow-gold)] lg:-translate-y-4"
                    : "border-border bg-card/40 hover:border-primary/40"
                }`}
              >
                {m.featured && (
                  <div className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-primary px-4 py-1 text-[10px] uppercase tracking-[0.3em] text-primary-foreground">
                    <Star className="h-3 w-3" /> {t.pricing.featured}
                  </div>
                )}
                <p className="text-xs uppercase tracking-[0.3em] text-primary">{tier.name}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className={`font-display text-5xl ${m.featured ? "text-gold-gradient" : "text-foreground"}`}>{m.price}</span>
                  <span className="text-sm text-muted-foreground">{m.cadence}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{tier.desc}</p>
                <ul className="mt-8 space-y-3 border-t border-border/50 pt-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-foreground/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all ${
                    m.featured
                      ? "bg-primary text-primary-foreground hover:scale-[1.02]"
                      : "border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {t.pricing.start} {tier.name} <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}

function AnalysisCTA() {
  const { t, waUrl } = useI18n();
  return (
    <section id="analysis" className="relative overflow-hidden border-y border-primary/20 py-32">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial-gold)" }} />
      <img src={heroBg} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30" loading="lazy" />
      <div className="absolute inset-0 -z-10 bg-background/70" />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <RevealStagger>
          <motion.img variants={revealItem} src={logo} alt="MediaGest" className="mx-auto h-20 w-auto opacity-95" />
          <motion.p variants={revealItem} className="mt-8 text-[10px] uppercase tracking-[0.4em] text-primary">{t.analysis.noCommit}</motion.p>
          <motion.h2 variants={revealItem} className="mt-6 font-display text-5xl leading-[1.05] sm:text-7xl">
            {t.analysis.title1}<em className="italic text-gold-gradient">{t.analysis.titleEm}</em>{t.analysis.titleEnd}
          </motion.h2>
          <motion.p variants={revealItem} className="mx-auto mt-8 max-w-xl text-base text-muted-foreground">{t.analysis.sub}</motion.p>
          <motion.a variants={revealItem} href={waUrl} target="_blank" rel="noreferrer" className="cta-hover mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-9 py-5 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground shadow-[var(--shadow-gold)]">
            {t.analysis.cta} <ArrowRight className="h-4 w-4" />
          </motion.a>
          <motion.p variants={revealItem} className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">{t.analysis.foot}</motion.p>
        </RevealStagger>
      </div>
    </section>
  );
}
