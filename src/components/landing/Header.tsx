import { BUSINESS, whatsappLink } from "@/lib/business";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-foreground/10 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="group flex items-baseline gap-2 text-ink-foreground">
          <span className="font-display text-xl leading-none sm:text-2xl">
            Baba Lokenath <span className="text-gold">Traders</span>
          </span>
          <span className="hidden text-[0.68rem] tracking-[0.16em] text-ink-foreground/60 uppercase sm:inline">
            Est. Narayantala
          </span>
        </a>
        <nav className="flex items-center gap-5">
          <a
            href="#packages"
            className="hidden text-sm text-ink-foreground/75 transition-colors hover:text-gold md:inline"
          >
            Packages
          </a>
          <a
            href="#services"
            className="hidden text-sm text-ink-foreground/75 transition-colors hover:text-gold md:inline"
          >
            Services
          </a>
          <a
            href={whatsappLink(`Hello, ${BUSINESS.name}! I would like to plan a trip.`)}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            WhatsApp Us
          </a>
        </nav>
      </div>
    </header>
  );
}
