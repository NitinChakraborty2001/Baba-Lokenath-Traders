import { Reveal } from "./Reveal";

const STEPS = [
  { title: "Message or visit", text: "Tell us the dates, headcount and a rough budget." },
  { title: "We build the plan", text: "Itinerary, hotels, cars and tickets quoted together." },
  { title: "Confirm with a deposit", text: "Pay part now, the rest before departure." },
  { title: "Travel with support", text: "One number to call any day of the trip." },
];

export function Process() {
  return (
    <section className="border-y border-border bg-sand py-16">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl">How booking works?</h2>
        </Reveal>
        <ol className="mt-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <li className="list-none">
                <span className="eyebrow text-muted-foreground">Step {i + 1}</span>
                <h3 className="mt-2 text-xl">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
