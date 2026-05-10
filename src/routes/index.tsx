import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Film, Instagram, Megaphone, Palette, Check, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import madeira from "@/assets/madeira.jpg";
import logo from "@/assets/mediagest-logo.png";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const WHATSAPP_URL = "https://wa.me/351000000000?text=Hello%20MediaGest%2C%20I%27d%20like%20a%20free%20brand%20analysis.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MediaGest Creative Studios — Cinematic Social Media, Madeira" },
      { name: "description", content: "Premium social media management, reels, branding and Meta ads strategy from Madeira. Get your free brand analysis in 24h." },
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
      <Pricing />
      <AnalysisCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-16">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-radial-gold)" }}
      />

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8 animate-float-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-primary">
            <Sparkles className="h-3 w-3" /> Madeira · A Cineadd company
          </div>
          <h1 className="font-display text-5xl leading-[0.95] text-foreground sm:text-7xl lg:text-[5.5rem]">
            Social media that <em className="not-italic text-gold-gradient">builds empires</em>,
            not just feeds.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We craft the cinematic content, the strategy and the ads that turn ambitious brands into the ones everyone follows.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.02]"
            >
              Talk on WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#services" className="text-sm uppercase tracking-[0.2em] text-foreground/80 underline-offset-8 hover:text-primary hover:underline">
              Explore services
            </a>
          </div>

          <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-border/50 pt-8">
            {[
              ["+24h", "Brand analysis"],
              ["100%", "In-house production"],
              ["Meta", "Ads certified"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-2xl text-gold-gradient sm:text-3xl">{k}</dt>
                <dd className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative lg:col-span-4 lg:mt-12">
          <div className="relative mx-auto aspect-[3/4] max-w-sm overflow-hidden rounded-sm border border-primary/20 shadow-[var(--shadow-deep)]">
            <img src={madeira} alt="Madeira coastline" className="h-full w-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary">Studio</p>
              <p className="mt-1 font-display text-2xl text-foreground">Funchal, Madeira</p>
            </div>
          </div>
          <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-full border border-primary/30 lg:block" />
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Reels", "Strategy", "Branding", "Meta Ads", "Content", "Direction", "Reels", "Strategy", "Branding", "Meta Ads"];
  return (
    <div className="border-y border-border/40 bg-onyx py-6 overflow-hidden">
      <div className="flex animate-[shimmer_30s_linear_infinite] gap-12 whitespace-nowrap text-sm uppercase tracking-[0.4em] text-muted-foreground"
           style={{ animation: "none" }}>
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            <span>{t}</span>
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary">01 — Studio</p>
          <h2 className="mt-6 font-display text-5xl leading-tight sm:text-6xl">
            A creative house born in <span className="text-gold-gradient">Madeira</span>.
          </h2>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7">
          <p className="text-foreground/90">
            MediaGest Creative Studios is the social media division of <span className="text-primary">Cineadd</span> —
            a group of cinematographers, strategists and producers obsessed with how brands move on screen.
          </p>
          <p>
            From our studio in Madeira we serve restaurants, hotels, founders and challenger brands across Portugal and Europe — pairing
            the production value of a film set with the rigor of a performance marketing team.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { title: "Cineadd group", text: "Film-grade production heritage." },
              { title: "Madeira HQ", text: "Atlantic light, island discipline." },
            ].map((c) => (
              <div key={c.title} className="rounded-sm border border-border/60 bg-card/40 p-5">
                <p className="font-display text-lg text-primary">{c.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: Film,
      title: "Premium Reels",
      text: "Cinematic short-form built to stop the scroll — direction, shoot and edit handled in-house.",
    },
    {
      icon: Instagram,
      title: "Instagram & Facebook Management",
      text: "Daily posts, stories and community — tone, calendar and analytics owned end-to-end.",
    },
    {
      icon: Palette,
      title: "Branding",
      text: "Visual systems, typography and art direction so your brand looks the part across every platform.",
    },
    {
      icon: Megaphone,
      title: "Meta Ads Strategy",
      text: "Funnels, creative testing and reporting on Instagram and Facebook ads that actually move the needle.",
    },
  ];
  return (
    <section id="services" className="relative border-t border-border/40 bg-onyx py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-primary">02 — Services</p>
            <h2 className="mt-6 font-display text-5xl leading-tight sm:text-6xl">
              What we <span className="text-gold-gradient">build</span> for you.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            One studio, four disciplines — wired together so creative, strategy and performance never disagree.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-sm border border-border/60 bg-border/60 md:grid-cols-2">
          {services.map(({ icon: Icon, title, text }, i) => (
            <article key={title} className="group relative bg-background p-10 transition-colors hover:bg-card">
              <div className="mb-8 flex items-center justify-between">
                <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
                <Icon className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
              </div>
              <h3 className="font-display text-3xl text-foreground">{title}</h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{text}</p>
              <div className="mt-10 h-px w-12 bg-primary transition-all group-hover:w-24" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "€250",
      cadence: "/ month",
      desc: "Monthly content production and full management — every post, story and reel optimized for visibility.",
      features: [
        "Monthly content production",
        "Full social media management",
        "Posts, stories & reels",
        "Visibility-first optimization",
      ],
      featured: false,
    },
    {
      name: "Growth",
      price: "€400",
      cadence: "/ month",
      desc: "Premium content, dynamic reels and Meta ads — designed for accelerated, measurable growth.",
      features: [
        "Premium content production",
        "Dynamic reels + pro posts",
        "Advanced management",
        "Meta ads included",
        "Accelerated growth strategy",
      ],
      featured: true,
    },
    {
      name: "Custom",
      price: "On request",
      cadence: "",
      desc: "A fully personalized proposal after a free brand analysis delivered to you in 24 hours.",
      features: [
        "Free brand analysis in 24h",
        "Personalized proposal",
        "Bespoke production scale",
        "Dedicated strategy team",
      ],
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary">03 — Pricing</p>
          <h2 className="mt-6 font-display text-5xl leading-tight sm:text-6xl">
            Plans built for <span className="text-gold-gradient">ambition</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground">
            Transparent monthly investment. No hidden fees. Cancel any time.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-sm border p-10 transition-all ${
                t.featured
                  ? "border-primary/60 bg-gradient-to-b from-primary/10 via-card to-card shadow-[var(--shadow-gold)] lg:-translate-y-4"
                  : "border-border bg-card/40 hover:border-primary/40"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-primary px-4 py-1 text-[10px] uppercase tracking-[0.3em] text-primary-foreground">
                  <Star className="h-3 w-3" /> Most chosen
                </div>
              )}
              <p className="text-xs uppercase tracking-[0.3em] text-primary">{t.name}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className={`font-display text-5xl ${t.featured ? "text-gold-gradient" : "text-foreground"}`}>
                  {t.price}
                </span>
                <span className="text-sm text-muted-foreground">{t.cadence}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
              <ul className="mt-8 space-y-3 border-t border-border/50 pt-8">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className={`mt-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all ${
                  t.featured
                    ? "bg-primary text-primary-foreground hover:scale-[1.02]"
                    : "border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Start with {t.name} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnalysisCTA() {
  return (
    <section id="analysis" className="relative overflow-hidden border-y border-primary/20 py-32">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial-gold)" }} />
      <img src={heroBg} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30" loading="lazy" />
      <div className="absolute inset-0 -z-10 bg-background/70" />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <img src={logo} alt="MediaGest" className="mx-auto h-20 w-auto opacity-95" />
        <p className="mt-8 text-[10px] uppercase tracking-[0.4em] text-primary">No commitment</p>
        <h2 className="mt-6 font-display text-5xl leading-[1.05] sm:text-7xl">
          Get your free brand analysis <em className="not-italic text-gold-gradient">in 24 hours</em>.
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base text-muted-foreground">
          Send us a message on WhatsApp. We'll audit your social presence and return a complete diagnosis within 24 hours — yours to keep, no strings attached.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-9 py-5 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.02]"
        >
          Request my free analysis <ArrowRight className="h-4 w-4" />
        </a>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">Direct response · WhatsApp · Madeira</p>
      </div>
    </section>
  );
}
