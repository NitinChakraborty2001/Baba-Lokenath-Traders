import { BUSINESS, PHONE_DISPLAY, PHONE_TEL, whatsappLink } from "@/lib/business";
import { Reveal } from "./Reveal";

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-ink py-20 text-ink-foreground sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="eyebrow text-gold">Talk to us</p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-tight sm:text-5xl">
            Tell us where you want to go. We&rsquo;ll handle the rest.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappLink(`Hello, ${BUSINESS.name}! I would like to enquire.`)}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Chat On WhatsApp
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="rounded-full border border-ink-foreground/25 px-6 py-3.5 text-sm font-medium transition-colors hover:border-gold hover:text-gold"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 border-t border-ink-foreground/15 pt-8 sm:grid-cols-3">
          <div>
            <p className="eyebrow text-ink-foreground/50">E-Mail Address:</p>
            <a
              href={`mailto:${BUSINESS.email}`}
              className="mt-2 block text-sm text-ink-foreground/85 hover:text-gold"
            >
              {BUSINESS.email}
            </a>
          </div>
          <div>
            <p className="eyebrow text-ink-foreground/50">Find Us:</p>
            <a
              href={BUSINESS.gbp}
              target="_blank"
              rel="noreferrer"
              className="mt-2 block text-sm text-ink-foreground/85 hover:text-gold"
            >
              Google Business Profile
            </a>
          </div>
          <div>
            <p className="eyebrow text-ink-foreground/50">Service Area:</p>
            <p className="mt-2 text-sm text-ink-foreground/85">{BUSINESS.area}</p>
          </div>
        </div>

        <p className="mt-12 text-xs text-ink-foreground/45">
          Copyright © {new Date().getFullYear()} {BUSINESS.name} - All Rights Reserved! <br />·
          Proprietor: {BUSINESS.owner} | Domestic Travel Management &amp; Assisted Digital Services.{" "}
          <br />· Powered By <a href="https://www.nexadigitalservices.agency">Nexa</a>, A Digital
          Agency By{" "}
          <a href="https://www.linkedin.com/in/NitinChakraborty2001/">Nitin Chakraborty</a>.
        </p>
      </div>
    </footer>
  );
}
