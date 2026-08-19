# Product Requirements Document — Baba Lokenath Traders Landing Page

> **One-page marketing site** for a neighbourhood travel-and-digital-services
> shop in Narayantala, Hooghly (West Bengal). The page must convert walk-in
> visitors and WhatsApp-first customers by showcasing tour packages, digital
> counter services, and a clear path to enquiry.

---

## 1 · Business Context

| Field | Detail |
|-------|--------|
| **Business name** | Baba Lokenath Traders |
| **Proprietor** | Suman Saha |
| **Location** | Narayantala, Bansberia, Hooghly, West Bengal |
| **Service area** | Bansberia · Mogra · Narayantala & nearby Hooghly |
| **Email** | blt.travels24@gmail.com |
| **Google Business Profile** | [g.co/kgs/uX1Pa9o](https://g.co/kgs/uX1Pa9o) |
| **Primary CTA channel** | WhatsApp (all enquiry buttons deep-link to `wa.me`) |

### Core Offerings

1. **Domestic package tours** — North Bengal, Sikkim, Himachal, Andaman, Kashmir, Goa, Vizag, Meghalaya, Nepal.
2. **Tour formats** — Customized packages, group tours (10–15+), honeymoon tours, homestay & hotel booking.
3. **Digital & financial counter** — AEPS cash withdrawal, mobile multi-recharge, PAN card centre (UTI), bus / rail / air ticketing, insurance products, transport service.

---

## 2 · Target Audience

| Persona | Need |
|---------|------|
| **Friend groups** | Budget-friendly group holidays (10–20 people) with shared vehicles and group hotel rates. |
| **Families** | End-to-end holiday planning — lodging, sightseeing, meals — with a single point of contact on the road. |
| **Local shop owners** | Quick, in-neighbourhood access to Aadhaar banking, recharges, PAN cards without closing shop for half a day. |

---

## 3 · Goals & Success Metrics

| Goal | Metric |
|------|--------|
| Drive WhatsApp enquiries | Click-through rate on WhatsApp CTA buttons |
| Build local trust | Google Business Profile click-throughs |
| Boost organic discoverability | Indexed for "tour packages Bansberia / Hooghly" and related long-tail queries |
| Fast first impression | Largest Contentful Paint (LCP) < 2.5 s on 4G mobile |

---

## 4 · Information Architecture (Single Page)

The landing page is composed of **eight sequential sections**, each implemented as a dedicated React component:

```
┌──────────────────────────────────────────────┐
│  Header (fixed, glass-blur nav)              │
│  ├── Brand wordmark                          │
│  ├── Packages / Services anchor links        │
│  └── WhatsApp Us CTA button                  │
├──────────────────────────────────────────────┤
│  Hero                                        │
│  ├── Parallax background (hill landscape)    │
│  ├── Headline + sub-copy                     │
│  ├── "Plan my trip on WhatsApp" CTA          │
│  ├── "Call" secondary CTA                    │
│  └── Trust strip (Proprietor / Area / GBP)   │
├──────────────────────────────────────────────┤
│  Packages (9 destination cards)              │
│  ├── Featured card: North Bengal (2-col)     │
│  └── 8 standard cards with hover zoom        │
├──────────────────────────────────────────────┤
│  Tour Types (4-column numbered grid)         │
│  ├── Customized Package Tour                 │
│  ├── Group Tour                              │
│  ├── Honeymoon Tour                          │
│  └── Homestay & Hotel Booking                │
├──────────────────────────────────────────────┤
│  Services (6 service cards)                  │
│  ├── AEPS · Recharge · PAN · Ticketing       │
│  ├── Insurance · Transport                   │
│  └── "Ask about a service" CTA              │
├──────────────────────────────────────────────┤
│  Personas (3 audience columns)               │
│  ├── Friend groups                           │
│  ├── Families                                │
│  └── Local shop owners                       │
├──────────────────────────────────────────────┤
│  Process (4-step booking flow)               │
│  ├── Message or visit                        │
│  ├── We build the plan                       │
│  ├── Confirm with a deposit                  │
│  └── Travel with support                     │
├──────────────────────────────────────────────┤
│  Contact Footer                              │
│  ├── "Chat on WhatsApp" / "Call" CTAs        │
│  ├── Email · GBP · Service area              │
│  └── © copyright line                        │
└──────────────────────────────────────────────┘
```

---

## 5 · Design System

### 5.1 · Colour Palette

All colours are defined in **oklch** and applied as CSS custom properties with a full light/dark token set.

| Token | Role | Light value |
|-------|------|-------------|
| `--ink` | Deep midnight blue, primary background for dark sections | `oklch(0.235 0.058 258)` |
| `--primary` | Saffron orange, CTA buttons | `oklch(0.655 0.176 48)` |
| `--gold` | Warm gold, accents and highlight text | `oklch(0.762 0.118 82)` |
| `--sand` | Light warm tint, alternate section background | `oklch(0.955 0.02 84)` |
| `--background` | Warm off-white, page background | `oklch(0.982 0.009 85)` |

### 5.2 · Typography

| Family | Usage | Stack |
|--------|-------|-------|
| **Instrument Serif** | Headings (h1–h3), display text | `"Instrument Serif", ui-serif, Georgia, serif` |
| **Work Sans** | Body, buttons, labels, eyebrows | `"Work Sans", ui-sans-serif, system-ui, sans-serif` |

### 5.3 · Components & Patterns

- **Eyebrow** — A small-caps, letter-spaced label above each section heading (`0.72rem`, `0.18em` tracking).
- **Reveal** — Intersection-Observer–driven fade-up animation (`opacity 0 → 1`, `translateY(18px) → 0`), respects `prefers-reduced-motion`.
- **Parallax hero** — Background image translates at `0.18×` scroll speed via `requestAnimationFrame`.
- **CTA buttons** — Rounded-full, saffron-orange fill with `hover:scale[1.03]` micro-interaction and `shadow-lg` glow.
- **Package cards** — `overflow-hidden rounded-xl` with image zoom on hover (`scale-105`, 700 ms transition), gradient overlay, and "Most booked" badge for the featured card.

### 5.4 · Responsive Behaviour

- **Mobile-first** layout with Tailwind CSS v4 breakpoints (`sm`, `md`, `lg`).
- Navigation links collapse on small screens; only the WhatsApp CTA remains visible.
- Package grid: 1 → 2 → 3 columns. Service grid: 1 → 2 → 3 columns. Tour types: 1 → 2 → 4 columns.

### 5.5 · Accessibility

- `prefers-reduced-motion` media query disables all animations and transitions.
- Semantic HTML throughout (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<dl>`).
- All images carry descriptive `alt` text.
- Interactive elements use visible focus styles via Tailwind's ring utilities.

---

## 6 · SEO & Structured Data

| Feature | Implementation |
|---------|---------------|
| **Title tag** | "Baba Lokenath Traders — Tour Packages & Digital Services, Hooghly" |
| **Meta description** | Long-tail description with destination names + service keywords |
| **Canonical URL** | `<link rel="canonical" href="/">` |
| **Open Graph** | `og:title`, `og:description`, `og:type=website`, `og:url` |
| **Twitter card** | `summary_large_image` |
| **JSON-LD** | `@type: TravelAgency` with `name`, `email`, `telephone`, `founder`, `areaServed`, `sameAs`, and `makesOffer` listing all services |

---

## 7 · Tech Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| **Framework** | TanStack Start (React) | File-based routing via `@tanstack/react-router` |
| **Language** | TypeScript | Strict mode |
| **Styling** | Tailwind CSS v4 | With `tw-animate-css`, oklch tokens, custom utilities |
| **UI primitives** | Radix UI | Accordion, Dialog, Tooltip, Tabs, Select, and more |
| **Icons** | Lucide React | SVG icon library |
| **Bundler** | Vite 8 | With `@vitejs/plugin-react`, `vite-tsconfig-paths` |
| **Server** | Nitro (beta) | Lightweight server for TanStack Start SSR |
| **Data fetching** | TanStack Query | Client-side async state management |
| **Forms** | React Hook Form + Zod | Validation-ready (not yet used on landing) |
| **Charts** | Recharts v2 | Available (not yet used on landing) |
| **Deployment** | Lovable | Connected via Lovable's Vite plugin; syncs with GitHub |

---

## 8 · Project Structure

```
src/
├── assets/               # Hero + package destination images (JPG)
├── components/
│   ├── landing/           # Page-section components
│   │   ├── Header.tsx     # Fixed glass-blur navigation bar
│   │   ├── Hero.tsx       # Parallax hero with CTAs & trust strip
│   │   ├── Packages.tsx   # 9 destination cards grid
│   │   ├── TourTypes.tsx  # 4-column tour format grid
│   │   ├── Services.tsx   # 6 digital-services cards
│   │   ├── Personas.tsx   # 3 audience-segment columns
│   │   ├── Process.tsx    # 4-step booking process
│   │   ├── ContactFooter.tsx  # Footer with CTAs & contact info
│   │   └── Reveal.tsx     # IntersectionObserver animation wrapper
│   └── ui/                # Radix-based shadcn/ui primitives
├── hooks/                 # Custom React hooks
├── lib/
│   ├── business.ts        # Centralised business facts & WhatsApp link helper
│   └── utils.ts           # Utility functions (cn)
├── routes/
│   ├── __root.tsx          # Root layout (fonts, global head)
│   └── index.tsx           # Landing page route (SEO head + component composition)
├── router.tsx              # TanStack Router config
├── server.ts               # Nitro server entry
├── start.ts                # TanStack Start entry
└── styles.css              # Design system tokens, base styles, custom utilities
```

---

## 9 · Development

### Prerequisites

- **Node.js** ≥ 18 (install via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- **npm** (bundled with Node)

### Getting Started

```sh
# Clone the repository
git clone <repository-url>
cd <repository-name>

# Install dependencies
npm install

# Start the dev server (hot-reload)
npm run dev
```

### Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `vite dev` | Start local dev server with HMR |
| `build` | `vite build` | Production build |
| `build:dev` | `vite build --mode development` | Development build |
| `preview` | `vite preview` | Preview the production build locally |
| `lint` | `eslint .` | Run ESLint |
| `format` | `prettier --write .` | Auto-format all files |

---

## 10 · Configuration Notes

> [!IMPORTANT]
> **Phone number is a placeholder.** The values `PHONE_DISPLAY`, `PHONE_TEL`,
> and `WHATSAPP_NUMBER` in [`src/lib/business.ts`](src/lib/business.ts) are set
> to `+91 90000 00000`. Replace them with the real business phone number before
> going live.

---

## 11 · Lovable Integration

This project is connected to [Lovable](https://lovable.dev). Key points:

- Every push to the connected branch syncs back into the Lovable editor.
- **Do not** rewrite published git history (no force-push, rebase, amend, or squash of pushed commits).
- The Lovable Vite plugin (`@lovable.dev/vite-tanstack-config`) handles SSR and routing configuration.

---

## 12 · Future Scope

The following features are **not** in the current build but are natural next steps:

- [ ] **Real phone number** — Replace placeholder in `business.ts`.
- [ ] **WhatsApp Chat Widget** — Floating button for mobile users.
- [ ] **Testimonials / Reviews** — Pull Google reviews or add a manual carousel.
- [ ] **Photo Gallery** — Past trip photos to build trust.
- [ ] **Blog / Travelogues** — SEO content targeting "Darjeeling trip from Hooghly" etc.
- [ ] **Online Booking Form** — Collect trip details (dates, pax, budget) directly on-site.
- [ ] **Multi-language support** — Bengali + English toggle for local accessibility.
- [ ] **Analytics** — Google Analytics 4 / Plausible for conversion tracking.
- [ ] **Performance** — Lazy-load package images with blur-up placeholders; convert to WebP/AVIF.

---

*Built with TanStack Start · TypeScript · React · Tailwind CSS v4*
