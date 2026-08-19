import { Reveal } from "./Reveal";

const TYPES = [
  {
    name: "Customized Package Tour",
    text: "Your dates, your budget, your pace — an itinerary written for your family alone.",
  },
  {
    name: "Group Tour",
    text: "Friend groups of 10–15+ handled with shared vehicles and group hotel rates.",
  },
  {
    name: "Honeymoon Tour",
    text: "Quiet hill or beach stays, private cars and small touches that matter.",
  },
  {
    name: "Homestay & Hotel Booking",
    text: "Verified rooms and family-run homestays booked and confirmed for you.",
  },
];

export function TourTypes() {
  return (
    <section className="bg-ink py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="eyebrow text-gold">Ways to travel</p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-tight text-ink-foreground sm:text-4xl">
            4 ways we put a holiday together:
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl bg-ink-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
          {TYPES.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <div className="h-full bg-ink-soft p-6">
                <span className="font-display text-3xl text-gold">0{i + 1}</span>
                <h3 className="mt-4 text-xl text-ink-foreground">{t.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-foreground/75">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
