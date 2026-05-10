import { Link } from "@tanstack/react-router";
import logo from "@/assets/mediagest-logo.png";
import { useI18n } from "@/lib/i18n";
import { LangSwitch } from "./LangSwitch";

export function Header() {
  const { t } = useI18n();
  return (
    <header className="fixed top-0 z-40 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="MediaGest" className="h-9 w-auto" />
          <span className="hidden font-display text-base tracking-wide text-foreground/90 sm:inline">
            MediaGest <span className="text-gold-gradient">Creative</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex">
          <a href="/#about" className="transition-colors hover:text-primary">{t.nav.about}</a>
          <a href="/#services" className="transition-colors hover:text-primary">{t.nav.services}</a>
          <a href="/#pricing" className="transition-colors hover:text-primary">{t.nav.pricing}</a>
          <a href="/#analysis" className="transition-colors hover:text-primary">{t.nav.analysis}</a>
        </nav>
        <div className="flex items-center gap-3">
          <LangSwitch />
          <a
            href="/#analysis"
            className="hidden rounded-full border border-primary/40 px-4 py-2 text-xs uppercase tracking-[0.18em] text-primary transition-all hover:bg-primary hover:text-primary-foreground lg:inline-block"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
