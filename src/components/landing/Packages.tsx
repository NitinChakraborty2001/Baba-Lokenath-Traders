import northBengal from "@/assets/pkg-north-bengal.jpg";
import sikkim from "@/assets/pkg-sikkim.jpg";
import himachal from "@/assets/pkg-himachal.jpg";
import andaman from "@/assets/pkg-andaman.jpg";
import kashmir from "@/assets/pkg-kashmir.jpg";
import goa from "@/assets/pkg-goa.jpg";
import vizag from "@/assets/pkg-vizag.jpg";
import meghalaya from "@/assets/pkg-meghalaya.jpg";
import nepal from "@/assets/pkg-nepal.jpg";
import { BUSINESS, whatsappLink } from "@/lib/business";
import { Reveal } from "./Reveal";

type Pkg = { name: string; hook: string; image: string; featured?: boolean };

const PACKAGES: Pkg[] = [
  {
    name: "North Bengal",
    hook: "Our speciality — Darjeeling, Sitong, Lamahatta and Kalimpong, with offbeat homestays and shared cars for groups of 10–15.",
    image: northBengal,
    featured: true,
  },
  {
    name: "Sikkim",
    hook: "Gangtok, Lachung and Zuluk circuits with permits arranged.",
    image: sikkim,
  },
  {
    name: "Himachal",
    hook: "Shimla–Manali–Kasol runs with train or flight tickets included.",
    image: himachal,
  },
  {
    name: "Andaman",
    hook: "Port Blair, Havelock and Neil island-hopping with ferries booked.",
    image: andaman,
  },
  {
    name: "Kashmir",
    hook: "Srinagar houseboats, Gulmarg and Pahalgam in one itinerary.",
    image: kashmir,
  },
  {
    name: "Goa",
    hook: "Beach-side stays, sightseeing cabs and flexible north–south plans.",
    image: goa,
  },
  {
    name: "Vizag",
    hook: "Araku valley, Borra caves and the coastal drive from Vizag.",
    image: vizag,
  },
  {
    name: "Meghalaya",
    hook: "Shillong, Cherrapunji and Dawki's clear waters at easy pace.",
    image: meghalaya,
  },
  {
    name: "Nepal",
    hook: "Kathmandu and Pokhara by road or air, documents guided end to end.",
    image: nepal,
  },
];

export function Packages() {
  return (
    <section id="packages" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="eyebrow text-primary">Package tours</p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-tight sm:text-5xl">
            9 destinations we know by heart:
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Every itinerary is built around your dates, group size and budget — then quoted on
            WhatsApp with hotels, cars and tickets already worked out.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <Reveal
              key={p.name}
              delay={(i % 3) * 90}
              className={p.featured ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <article
                className={`group relative flex h-full flex-col justify-end overflow-hidden rounded-xl bg-ink ${
                  p.featured ? "min-h-88" : "min-h-68"
                }`}
              >
                <img
                  src={p.image}
                  alt={`${p.name} tour package`}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/55 to-transparent" />
                {p.featured && (
                  <span className="absolute top-4 left-4 rounded-full bg-gold px-3 py-1 text-[0.68rem] font-semibold tracking-[0.14em] text-gold-foreground uppercase">
                    Most Booked
                  </span>
                )}
                <div className="relative p-6">
                  <h3
                    className={`text-ink-foreground ${p.featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}
                  >
                    {p.name}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-foreground/80">
                    {p.hook}
                  </p>
                  <a
                    href={whatsappLink(
                      `Hello ${BUSINESS.name}, please send me the ${p.name} tour package details and price.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-primary"
                  >
                    Ask For Price
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
