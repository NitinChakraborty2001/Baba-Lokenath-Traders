import { Reveal } from "./Reveal";

const PERSONAS = [
  {
    title: "Friend groups",
    text: "Ten, fifteen, twenty friends and one weekend free — we fit the cars, rooms and budget so nobody argues over money.",
  },
  {
    title: "Families",
    text: "Lodging, sightseeing cars and meals arranged end to end, with one number to call if anything changes on the road.",
  },
  {
    title: "Local shop owners",
    text: "Cash withdrawal, recharges and PAN work finished in the neighbourhood, without shutting your shop for half a day.",
  },
];

export function Personas() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="eyebrow text-primary">Who we serve</p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-tight sm:text-4xl">
            Neighbours first, customers second!
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PERSONAS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="h-full border-t-2 border-gold pt-5">
                <h3 className="text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
