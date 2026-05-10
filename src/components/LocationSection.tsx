import { MapPin, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const MAPS_URL = "https://maps.app.goo.gl/dKtayVj9gDv2gAV78";
const EMBED_URL =
  "https://www.google.com/maps?q=32.729063,-16.774512&hl=en&z=15&output=embed";

export function LocationSection() {
  const { lang } = useI18n();
  const copy =
    lang === "pt"
      ? {
          label: "04 — Localização",
          title1: "Encontre-nos na ",
          titleEm: "Madeira",
          sub: "O nosso estúdio está aberto a parceiros, marcas e amigos. Marque visita.",
          city: "Madeira, Portugal",
          coords: "32.7290° N · 16.7745° W",
          cta: "Abrir no Google Maps",
        }
      : {
          label: "04 — Location",
          title1: "Find us in ",
          titleEm: "Madeira",
          sub: "Our studio is open to partners, brands and friends. Book a visit.",
          city: "Madeira, Portugal",
          coords: "32.7290° N · 16.7745° W",
          cta: "Open in Google Maps",
        };

  return (
    <section id="location" className="relative border-t border-border/40 bg-onyx py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary">{copy.label}</p>
          <h2 className="mt-6 font-display text-5xl leading-tight sm:text-6xl">
            {copy.title1}<span className="text-gold-gradient">{copy.titleEm}</span>.
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">{copy.sub}</p>

          <div className="mt-10 space-y-4 border-t border-border/50 pt-8">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="font-display text-lg text-foreground">{copy.city}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{copy.coords}</p>
              </div>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-primary/40 px-5 py-3 text-xs uppercase tracking-[0.2em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              {copy.cta}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-8">
          <div className="relative overflow-hidden rounded-sm border border-primary/20 shadow-[var(--shadow-deep)]">
            <iframe
              title="MediaGest Creative Studios — Madeira"
              src={EMBED_URL}
              width="100%"
              height="480"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full grayscale-[40%] contrast-110"
              style={{ border: 0, filter: "grayscale(35%) contrast(1.05) brightness(0.85)" }}
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-primary/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
