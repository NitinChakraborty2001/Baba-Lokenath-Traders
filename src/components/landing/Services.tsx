import { BUSINESS, whatsappLink } from "@/lib/business";
import { Reveal } from "./Reveal";

const SERVICES = [
  {
    name: "AEPS Super Distributor",
    text: "Aadhaar-enabled cash withdrawal, balance check and mini statement over the counter.",
  },
  {
    name: "Mobile Multi-Recharge",
    text: "Super distributor for all operators — prepaid, DTH and data packs in seconds.",
  },
  {
    name: "PAN Card Centre (UTI)",
    text: "New PAN, corrections and reprints filed and tracked for you as a super distributor.",
  },
  {
    name: "Bus, Rail & Air Ticketing",
    text: "Tatkal trains, buses and flight itineraries booked without you touching an app.",
  },
  {
    name: "Insurance Products",
    text: "Travel and general insurance explained in plain Bengali before you sign.",
  },
  {
    name: "Transport Service",
    text: "Cars, tempo travellers and buses for pickups, weddings and long-route travel.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="eyebrow text-primary">Digital &amp; financial counter</p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-tight sm:text-5xl">
            Walk in, and we do the digital part for you!
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Tickets, PAN, recharges and everyday banking — the errands that turn into an hour of
            forms online take a few minutes across our counter in Narayantala.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 80}>
              <div className="h-full rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-ink/10">
                <div className="h-0.5 w-10 bg-gold" />
                <h3 className="mt-4 text-xl">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10">
            <a
              href={whatsappLink(
                `Hello, ${BUSINESS.name}! I need help with a digital or banking service.`,
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Ask About A Service
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
