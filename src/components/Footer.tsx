import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/mediagest-logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-onyx">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <img src={logo} alt="MediaGest" className="h-14 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Cinematic social media management for brands that refuse to be invisible. Madeira · Part of the Cineadd group.
          </p>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-primary">Connect</p>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="https://instagram.com/mediagest.creative.studios" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 text-foreground/80 transition-colors hover:text-primary">
                <Instagram className="h-4 w-4" />
                @mediagest.creative.studios
              </a>
            </li>
            <li>
              <a href="https://facebook.com/MediaGestCreativeStudiosMadeira" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 text-foreground/80 transition-colors hover:text-primary">
                <Facebook className="h-4 w-4" />
                MediaGestCreativeStudiosMadeira
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-primary">Studio</p>
          <p className="text-sm text-muted-foreground">Madeira, Portugal</p>
          <p className="mt-2 text-sm text-muted-foreground">A Cineadd company</p>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 MediaGest Creative Studios. All rights reserved.</p>
          <p className="tracking-[0.25em] uppercase">Crafted in Madeira</p>
        </div>
      </div>
    </footer>
  );
}
