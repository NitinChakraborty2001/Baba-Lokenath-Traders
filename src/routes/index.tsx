import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Packages } from "@/components/landing/Packages";
import { TourTypes } from "@/components/landing/TourTypes";
import { Services } from "@/components/landing/Services";
import { Personas } from "@/components/landing/Personas";
import { Process } from "@/components/landing/Process";
import { ContactFooter } from "@/components/landing/ContactFooter";
import { BUSINESS, PHONE_DISPLAY } from "@/lib/business";

const TITLE = "Baba Lokenath Traders — Tour Packages & Digital Services, Hooghly";
const DESCRIPTION =
  "Affordable North Bengal, Sikkim, Kashmir & Andaman tour packages plus AEPS, recharge, PAN and ticketing help from Baba Lokenath Traders, Narayantala, Hooghly.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: BUSINESS.name,
          description: DESCRIPTION,
          email: BUSINESS.email,
          telephone: PHONE_DISPLAY,
          founder: { "@type": "Person", name: BUSINESS.owner },
          areaServed: ["Bansberia", "Mogra", "Narayantala", "Hooghly, West Bengal"],
          sameAs: [BUSINESS.gbp],
          makesOffer: [
            "Domestic Travel Management",
            "Transport Service",
            "AEPS Super Distributor",
            "Mobile Multi-Recharge Super Distributor",
            "PAN Card Center (UTI) Super Distributor",
            "Customized Package Tour",
            "Group Tour",
            "Honeymoon Tour",
            "Homestay & Hotel Booking",
          ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Header />
      <Hero />
      <Packages />
      <TourTypes />
      <Services />
      <Personas />
      <Process />
      <ContactFooter />
    </main>
  );
}
