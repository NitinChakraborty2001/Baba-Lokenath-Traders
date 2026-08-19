# Baba Lokenath Traders — Immersive Landing Page

A single, high-converting landing page at `/` for Baba Lokenath Traders (Narayantala, Bansberia / Mogra, Hooghly) — travel packages plus assisted digital finance services. Built for locals who prefer talking to a person: every section ends in a WhatsApp or call action.

## Visual direction

- Palette: saffron orange (primary accent / CTAs), deep midnight blue (backgrounds, headers), warm gold (highlights, dividers, price tags), warm off-white (content surfaces).
- Type: Instrument Serif for headlines, Work Sans for body and UI.
- Layout: cinematic hero, then a package grid, then stacked service and trust sections.
- Restrained motion: soft parallax on hero image, gentle reveal-on-scroll for cards, no motion on every element.

## Page structure

1. **Sticky slim header** — brand mark "Baba Lokenath Traders", short tagline, one saffron "WhatsApp Us" button.
2. **Hero** — mountain/hill-station image, headline "Get ready to explore the world with us", subline about one-stop holiday planning and digital commerce, single primary CTA (WhatsApp / Call). Small trust strip: owner name Suman Saha, local Hooghly agency, Google Business Profile link.
3. **Destination package grid** — 9 cards: North Bengal, Sikkim, Himachal, Andaman, Kashmir, Goa, Vizag, Meghalaya, Nepal. Each with a generated destination photo, one-line hook, and "Ask for price" WhatsApp action. Featured first card highlights the specialty offbeat North Bengal circuit (Darjeeling, Sitong, Lamahatta, Kalimpong).
4. **Tour types** — Customized Package Tour, Group Tour, Honeymoon Tour, Homestay & Hotel Booking, presented as a compact four-panel band.
5. **Digital & financial services** — AEPS Super Distributor, Mobile Multi-Recharge Super Distributor, PAN Card Centre (UTI) Super Distributor, insurance products, bus/rail/air ticketing, transport service. Framed as "walk in and we do it for you" assisted services for local shop owners and families.
6. **Who we serve** — three short persona cards: friend groups (10–15+ budget weekend trips), families wanting fully managed holidays, local micro-entrepreneurs needing banking help nearby.
7. **How booking works** — 4 steps: message or visit → we build the itinerary → confirm with a deposit → travel with on-trip support.
8. **Contact / footer** — WhatsApp button, call button, blt.travels24@gmail.com, Google Business Profile link, service area line (Bansberia, Mogra, Narayantala, Hooghly).

## Technical notes

- Rewrite `src/routes/index.tsx` (replaces the template placeholder) with section components under `src/components/landing/`.
- Add palette tokens and font tokens to `src/styles.css`; load Instrument Serif + Work Sans via `<link>` in `src/routes/__root.tsx`.
- Route-level `head()` on `/`: unique title, description, og/twitter tags, `LocalBusiness` + `TravelAgency` JSON-LD (name, owner, email, area served, services), canonical.
- Generate hero and destination imagery into `src/assets/` and import them; lazy-load below-fold images, alt text everywhere.
- No backend: static page, all CTAs are `wa.me` / `tel:` links.

## One thing I need

You didn't give a phone number. I'll ship the WhatsApp and call buttons wired to a clearly marked placeholder number — send me the real number and I'll swap it in one edit.
