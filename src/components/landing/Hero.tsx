import { useEffect, useState } from "react";
import heroHills from "@/assets/hero-hills.jpg";
import { BUSINESS, PHONE_DISPLAY, PHONE_TEL, whatsappLink } from "@/lib/business";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setOffset(window.scrollY * 0.18));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink">
      <img
        src={heroHills}
        alt="Mist rolling over tea-garden hills at sunrise in the Darjeeling foothills"
        width={1920}
        height={1200}
        className="absolute inset-0 h-[118%] w-full object-cover opacity-70"
        style={{ transform: `translate3d(0, -${offset}px, 0)` }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-ink/75 via-ink/55 to-ink" />

      <div className="relative mx-auto max-w-6xl px-5 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <p className="eyebrow text-gold">Travel &amp; Digital Services · Hooghly</p>
        <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] text-ink-foreground sm:text-6xl lg:text-7xl">
          Get ready to explore the world with us!
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/80 sm:text-lg">
          One-stop holiday planning and digital commerce — affordable hill-station packages,
          tickets, hotels and everyday banking help, handled face to face by people you already
          know.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={whatsappLink(
              `Hello ${BUSINESS.name}, I want to plan a tour. Please share package details.`,
            )}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03]"
          >
            Plan My Trip On WhatsApp
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="rounded-full border border-ink-foreground/25 px-6 py-3.5 text-sm font-medium text-ink-foreground transition-colors hover:border-gold hover:text-gold"
          >
            Call {PHONE_DISPLAY}
          </a>
        </div>

        <dl className="mt-14 grid max-w-3xl gap-y-6 border-t border-ink-foreground/15 pt-8 sm:grid-cols-3">
          <div>
            <dt className="eyebrow text-ink-foreground/50">Proprietor:</dt>
            <dd className="mt-1.5 font-display text-xl text-ink-foreground">{BUSINESS.owner}.</dd>
          </div>
          <div>
            <dt className="eyebrow text-ink-foreground/50">Serving:</dt>
            <dd className="mt-1.5 text-sm text-ink-foreground/85">
              Bansberia · Mogra · Narayantala <br /> &amp; Nearby Hooghly.
            </dd>
          </div>
          <div>
            <dt className="eyebrow text-ink-foreground/50">Find Us:</dt>
            <dd className="mt-1.5 text-sm">
              <a
                href={BUSINESS.gbp}
                target="_blank"
                rel="noreferrer"
                className="text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
              >
                Google Business Profile
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
