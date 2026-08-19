# Product Requirements Document (PRD)

## Baba Lokenath Traders — Landing Page

> **One-page marketing website** for a neighbourhood travel-and-digital-services
> shop in Narayantala, Hooghly (West Bengal). The page must convert walk-in
> visitors and WhatsApp-first customers by showcasing domestic tour packages,
> digital counter services, and a clear path to enquiry — all within a single,
> fast-loading, mobile-first experience.

---

## Table of Contents

1. [Business Context](#1--business-context)
2. [Target Audience](#2--target-audience)
3. [Goals & Success Metrics](#3--goals--success-metrics)
4. [Information Architecture](#4--information-architecture-single-page)
5. [Section-Level Specifications](#5--section-level-specifications)
6. [Design System](#6--design-system)
7. [SEO & Structured Data](#7--seo--structured-data)
8. [Tech Stack](#8--tech-stack)
9. [Project Structure](#9--project-structure)
10. [Development](#10--development)
11. [Configuration Notes](#11--configuration-notes)
12. [Lovable Integration](#12--lovable-integration)
13. [Future Scope](#13--future-scope)

---

## 1 · Business Context

| Field                       | Detail                                                                          |
| --------------------------- | ------------------------------------------------------------------------------- |
| **Business Name**           | Baba Lokenath Traders                                                           |
| **Proprietor**              | Suman Saha                                                                      |
| **Location**                | Narayantala, Bansberia (Pin Code: 712502), Hooghly, West Bengal, India           |
| **Service Area**            | Bansberia · Mogra · Narayantala & nearby Hooghly                                |
| **Email**                   | blt.travels24@gmail.com                                                         |
| **Phone**                   | +91 94322 73708                                                                 |
| **Google Business Profile** | [g.co/kgs/uX1Pa9o](https://g.co/kgs/uX1Pa9o)                                  |
| **Primary CTA Channel**    | WhatsApp — all enquiry buttons deep-link to `wa.me/919432273708`                |
| **Website Powered By**      | [Nexa Digital Services](https://www.nexadigitalservices.agency), a digital agency by [Nitin Chakraborty](https://www.linkedin.com/in/NitinChakraborty2001/) |

### Core Offerings

1. **Domestic Package Tours** — North Bengal, Sikkim, Himachal, Andaman, Kashmir, Goa, Vizag, Meghalaya, Nepal.
2. **Tour Formats** — Customized packages, group tours (10–15+ people), honeymoon tours, homestay & hotel booking.
3. **Digital & Financial Counter** — AEPS cash withdrawal, mobile multi-recharge, PAN card centre (UTI), bus / rail / air ticketing, insurance products, transport service.

---

## 2 · Target Audience

| Persona              | Need                                                                                                                                         |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **Friend Groups**    | Budget-friendly group holidays (10–20 people) with shared vehicles and group hotel rates. One plan, no arguing over money.                   |
| **Families**         | End-to-end holiday planning — lodging, sightseeing cars, meals — with a single point of contact on the road if anything changes.             |
| **Local Shop Owners**| Quick, in-neighbourhood access to Aadhaar banking, recharges, PAN cards without closing their shop for half a day.                           |

---

## 3 · Goals & Success Metrics

| Goal                                | Metric                                                                       |
| ----------------------------------- | ----------------------------------------------------------------------------- |
| Drive WhatsApp enquiries            | Click-through rate on WhatsApp CTA buttons across all sections               |
| Build local trust                   | Google Business Profile click-throughs from the hero and footer              |
| Boost organic discoverability       | Indexed for "tour packages Bansberia / Hooghly" and related long-tail queries |
| Fast first impression               | Largest Contentful Paint (LCP) < 2.5 s on 4G mobile                         |
| Mobile-first conversion             | Bounce rate < 50% on mobile viewports                                        |

---

## 4 · Information Architecture (Single Page)

The landing page is composed of **eight sequential sections**, each implemented as a dedicated React component:

```
┌──────────────────────────────────────────────┐
│  Header (fixed, glass-blur nav)              │
│  ├── Brand wordmark + "Est. Narayantala"     │
│  ├── Packages / Services anchor links        │
│  └── "WhatsApp Us" CTA button               │
├──────────────────────────────────────────────┤
│  Hero                                        │
│  ├── Parallax background (hill landscape)    │
│  ├── Eyebrow: "Travel & Digital Services"    │
│  ├── Headline + descriptive sub-copy         │
│  ├── "Plan My Trip On WhatsApp" primary CTA  │
│  ├── "Call" secondary CTA                    │
│  └── Trust strip (Proprietor / Area / GBP)   │
├──────────────────────────────────────────────┤
│  Packages (9 destination cards)              │
│  ├── Featured card: North Bengal (2-col)     │
│  └── 8 standard cards with hover zoom        │
├──────────────────────────────────────────────┤
│  Tour Types (4-column numbered grid)         │
│  ├── 01 Customized Package Tour              │
│  ├── 02 Group Tour                           │
│  ├── 03 Honeymoon Tour                       │
│  └── 04 Homestay & Hotel Booking             │
├──────────────────────────────────────────────┤
│  Services (6 service cards)                  │
│  ├── AEPS · Recharge · PAN · Ticketing       │
│  ├── Insurance · Transport                   │
│  └── "Ask About A Service" CTA              │
├──────────────────────────────────────────────┤
│  Personas (3 audience columns)               │
│  ├── Friend groups                           │
│  ├── Families                                │
│  └── Local shop owners                       │
├──────────────────────────────────────────────┤
│  Process (4-step booking flow)               │
│  ├── Step 1 — Message or visit               │
│  ├── Step 2 — We build the plan              │
│  ├── Step 3 — Confirm with a deposit         │
│  └── Step 4 — Travel with support            │
├──────────────────────────────────────────────┤
│  Contact Footer                              │
│  ├── "Chat On WhatsApp" / "Call" CTAs        │
│  ├── Email · GBP · Service area              │
│  └── © copyright + Powered by Nexa           │
└──────────────────────────────────────────────┘
```

---

## 5 · Section-Level Specifications

### 5.1 · Header (`Header.tsx`)

| Attribute          | Specification                                                              |
| ------------------ | -------------------------------------------------------------------------- |
| **Position**       | Fixed, top-pinned, z-index 50                                              |
| **Visual**         | Midnight-blue `bg-ink/85` with `backdrop-blur-md` glass effect             |
| **Brand**          | "Baba Lokenath **Traders**" in Instrument Serif — "Traders" in gold accent |
| **Tagline**        | "Est. Narayantala" label, hidden on mobile                                 |
| **Nav links**      | "#packages" and "#services" anchor links — hidden below `md` breakpoint    |
| **Primary CTA**    | "WhatsApp Us" → saffron-orange rounded-full button, always visible         |

### 5.2 · Hero (`Hero.tsx`)

| Attribute           | Specification                                                                  |
| ------------------- | ------------------------------------------------------------------------------ |
| **Background**      | `hero-hills.jpg` (1920×1200 JPG) with parallax at `0.18×` scroll speed via `requestAnimationFrame` |
| **Overlay**         | Three-stop linear gradient: `from-ink/75 via-ink/55 to-ink`                    |
| **Eyebrow**         | "Travel & Digital Services · Hooghly" in gold                                  |
| **Headline**        | "Get ready to explore the world with us!" (h1, 4xl → 7xl responsive)          |
| **Sub-copy**        | One-stop holiday planning and digital commerce pitch                           |
| **Primary CTA**     | "Plan My Trip On WhatsApp" → deep-links to WhatsApp with pre-filled message    |
| **Secondary CTA**   | "Call +919432273708" → `tel:` link                                             |
| **Trust strip**     | 3-column `<dl>` — Proprietor name, Service area, Google Business Profile link  |

### 5.3 · Packages (`Packages.tsx`)

| Attribute           | Specification                                                               |
| ------------------- | --------------------------------------------------------------------------- |
| **Eyebrow**         | "Package tours"                                                             |
| **Heading**         | "9 destinations we know by heart"                                           |
| **Grid**            | 1 → 2 → 3 columns responsive. North Bengal card spans 2 columns as featured |
| **Card design**     | `overflow-hidden rounded-xl` with gradient overlay; image zoom-on-hover (`scale-105`, 700ms) |
| **Featured badge**  | "Most Booked" gold pill on the North Bengal card                            |
| **Per-card CTA**    | "Ask For Price →" → WhatsApp with destination-specific pre-filled message   |

**Destinations:** North Bengal (featured), Sikkim, Himachal, Andaman, Kashmir, Goa, Vizag, Meghalaya, Nepal.

### 5.4 · Tour Types (`TourTypes.tsx`)

| Attribute      | Specification                                                              |
| -------------- | -------------------------------------------------------------------------- |
| **Background** | Full-width `bg-ink` (midnight blue) section                                |
| **Grid**       | 1 → 2 → 4 columns. Cards separated by 1px gaps on a `bg-ink-foreground/15` track |
| **Numbering**  | Large display numerals "01"–"04" in gold                                   |
| **Types**      | Customized Package Tour, Group Tour, Honeymoon Tour, Homestay & Hotel Booking |

### 5.5 · Services (`Services.tsx`)

| Attribute        | Specification                                                             |
| ---------------- | ------------------------------------------------------------------------- |
| **Background**   | `bg-sand` (warm tint) section                                             |
| **Grid**         | 1 → 2 → 3 columns                                                        |
| **Card design**  | White card with border, rounded-xl, subtle hover shadow lift              |
| **Gold accent**  | Thin gold bar (`h-0.5 w-10`) at the top of each card                     |
| **Section CTA**  | "Ask About A Service" saffron-orange button → WhatsApp                   |

**Services:** AEPS Super Distributor, Mobile Multi-Recharge, PAN Card Centre (UTI), Bus/Rail/Air Ticketing, Insurance Products, Transport Service.

### 5.6 · Personas (`Personas.tsx`)

| Attribute        | Specification                                                             |
| ---------------- | ------------------------------------------------------------------------- |
| **Heading**      | "Neighbours first, customers second!"                                     |
| **Grid**         | 1 → 3 columns at `md` breakpoint                                         |
| **Card design**  | Gold top-border (2px) with persona title and descriptive copy             |
| **Segments**     | Friend Groups, Families, Local Shop Owners                                |

### 5.7 · Process (`Process.tsx`)

| Attribute        | Specification                                                             |
| ---------------- | ------------------------------------------------------------------------- |
| **Background**   | `bg-sand` with top and bottom border                                      |
| **Layout**       | Ordered list, 1 → 2 → 4 columns                                         |
| **Step labels**  | "Step 1" through "Step 4" in eyebrow style                               |
| **Steps**        | Message or visit → We build the plan → Confirm with a deposit → Travel with support |

### 5.8 · Contact Footer (`ContactFooter.tsx`)

| Attribute        | Specification                                                             |
| ---------------- | ------------------------------------------------------------------------- |
| **Background**   | Full-width `bg-ink` (midnight blue)                                       |
| **Heading**      | "Tell us where you want to go. We'll handle the rest."                    |
| **CTAs**         | "Chat On WhatsApp" (primary) + "Call" (secondary, outlined)              |
| **Info grid**    | 3 columns: Email address, Google Business Profile, Service area           |
| **Copyright**    | Dynamic year, proprietor name, "Powered By Nexa" with external links     |

---

## 6 · Design System

### 6.1 · Colour Palette

All colours use **oklch** colour space and are applied as CSS custom properties with a full light/dark token set.

| Token        | Role                                   | Light Value                  | Dark Value                   |
| ------------ | -------------------------------------- | ---------------------------- | ---------------------------- |
| `--ink`      | Deep midnight blue, dark section bg    | `oklch(0.235 0.058 258)`    | `oklch(0.235 0.058 258)`    |
| `--primary`  | Saffron orange, CTA buttons & ring     | `oklch(0.655 0.176 48)`     | `oklch(0.705 0.17 48)`      |
| `--gold`     | Warm gold, accents & highlight text    | `oklch(0.762 0.118 82)`     | `oklch(0.79 0.115 82)`      |
| `--sand`     | Light warm tint, alternate bg          | `oklch(0.955 0.02 84)`      | `oklch(0.315 0.062 258)`    |
| `--background` | Warm off-white page background       | `oklch(0.982 0.009 85)`     | `oklch(0.18 0.045 258)`     |

### 6.2 · Typography

| Family               | Usage                        | Stack                                                |
| -------------------- | ---------------------------- | ---------------------------------------------------- |
| **Instrument Serif** | Headings (h1–h3), display text, numerals | `"Instrument Serif", ui-serif, Georgia, serif`     |
| **Work Sans**        | Body, buttons, labels, eyebrows          | `"Work Sans", ui-sans-serif, system-ui, sans-serif` |

Fonts are loaded via Google Fonts with `display=swap` and `preconnect` hints for performance.

### 6.3 · Components & Design Patterns

| Pattern              | Specification                                                                                              |
| -------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Eyebrow**          | Small-caps, letter-spaced label above section headings (`0.72rem`, `0.18em` tracking, uppercase, `font-weight: 600`) |
| **Reveal**           | IntersectionObserver-driven fade-up animation (`opacity 0→1`, `translateY(18px)→0`, 700ms ease). Respects `prefers-reduced-motion`. Configurable `delay` prop with staggered entry per item. |
| **Parallax Hero**    | Background image translates at `0.18×` scroll speed via `requestAnimationFrame`, with `translate3d` for GPU acceleration |
| **CTA Buttons**      | Rounded-full (`border-radius: 9999px`), saffron-orange fill, `hover:scale[1.03]` micro-interaction, `shadow-lg shadow-primary/25` glow |
| **Secondary Buttons**| Rounded-full, transparent with `border-ink-foreground/25`, hover transitions to gold border + gold text    |
| **Package Cards**    | `overflow-hidden rounded-xl` with image zoom on hover (`scale-105`, 700ms transition), gradient overlay, "Most Booked" badge for featured |
| **Service Cards**    | White bg with border, gold top-accent bar, hover shadow lift (`shadow-lg shadow-ink/10`)                   |
| **Glass Header**     | `backdrop-blur-md` with semi-transparent ink background (`bg-ink/85`)                                      |

### 6.4 · Responsive Behaviour

- **Mobile-first** layout built with Tailwind CSS v4 breakpoints (`sm: 640px`, `md: 768px`, `lg: 1024px`).
- Navigation "Packages" and "Services" anchor links collapse below `md`; only the WhatsApp CTA remains visible.
- Package grid: **1 → 2 → 3** columns. Service grid: **1 → 2 → 3** columns. Tour types: **1 → 2 → 4** columns.
- Hero headline scales: `text-4xl` → `text-6xl` (sm) → `text-7xl` (lg).
- Trust strip and footer info grid: stacked on mobile, 3-column on `sm` / `md`.
- All max-width containers capped at `max-w-6xl` (72rem) with `px-5` inline padding.

### 6.5 · Accessibility

- `prefers-reduced-motion` media query disables all animations and transitions (duration set to `0.001ms`).
- Semantic HTML throughout: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<dl>`, `<ol>`.
- All images carry descriptive `alt` text (e.g., "Mist rolling over tea-garden hills at sunrise in the Darjeeling foothills").
- Interactive elements use visible focus styles via Tailwind's ring utilities.
- `lang="en"` on `<html>` element.
- External links use `rel="noreferrer"` and `target="_blank"`.

---

## 7 · SEO & Structured Data

| Feature              | Implementation                                                                                   |
| -------------------- | ------------------------------------------------------------------------------------------------ |
| **Title Tag**        | "Baba Lokenath Traders — Tour Packages & Digital Services, Hooghly"                              |
| **Meta Description** | Long-tail description with destination names + service keywords                                   |
| **Canonical URL**    | `<link rel="canonical" href="/">`                                                                |
| **Open Graph**       | `og:title`, `og:description`, `og:type=website`, `og:url`, `og:site_name`                       |
| **Twitter Card**     | `summary_large_image`                                                                             |
| **Charset & Viewport** | `utf-8`, `width=device-width, initial-scale=1`                                                 |
| **Author**           | `<meta name="author" content="Baba Lokenath Traders">`                                          |
| **Favicon**          | `/Favicon.png`                                                                                   |
| **JSON-LD**          | `@type: TravelAgency` with `name`, `email`, `telephone`, `founder`, `areaServed`, `sameAs`, and `makesOffer` listing all 9 services |

### JSON-LD Schema (Condensed)

```json
{
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Baba Lokenath Traders",
  "email": "blt.travels24@gmail.com",
  "telephone": "+919432273708",
  "founder": { "@type": "Person", "name": "Suman Saha" },
  "areaServed": ["Bansberia", "Mogra", "Narayantala", "Hooghly, West Bengal"],
  "sameAs": ["https://g.co/kgs/uX1Pa9o"],
  "makesOffer": [
    "Domestic Travel Management",
    "Transport Service",
    "AEPS Super Distributor",
    "Mobile Multi-Recharge Super Distributor",
    "PAN Card Center (UTI) Super Distributor",
    "Customized Package Tour",
    "Group Tour",
    "Honeymoon Tour",
    "Homestay & Hotel Booking"
  ]
}
```

---

## 8 · Tech Stack

| Layer             | Technology                         | Notes                                                         |
| ----------------- | ---------------------------------- | ------------------------------------------------------------- |
| **Framework**     | TanStack Start (React 19)          | File-based routing via `@tanstack/react-router`               |
| **Language**      | TypeScript 5.8                     | Strict mode enabled                                           |
| **Styling**       | Tailwind CSS v4                    | With `tw-animate-css`, oklch tokens, custom utilities         |
| **UI Primitives** | Radix UI                           | Accordion, Dialog, Tooltip, Tabs, Select, and more            |
| **Icons**         | Lucide React                       | SVG icon library                                              |
| **Bundler**       | Vite 8                             | With `@vitejs/plugin-react`, `vite-tsconfig-paths`            |
| **Server**        | Nitro (3.0 beta)                   | Lightweight server for TanStack Start SSR                     |
| **Data Fetching** | TanStack Query                     | Client-side async state management                            |
| **Forms**         | React Hook Form + Zod              | Validation-ready (not yet used on landing)                    |
| **Charts**        | Recharts v2                        | Available (not yet used on landing)                           |
| **Deployment**    | Lovable                            | Connected via `@lovable.dev/vite-tanstack-config`; syncs with GitHub |

---

## 9 · Project Structure

```
src/
├── assets/                    # Hero + package destination images (10 JPGs, ~1.4 MB total)
│   ├── hero-hills.jpg         # Hero parallax background (260 KB)
│   ├── pkg-north-bengal.jpg   # Featured destination
│   ├── pkg-sikkim.jpg
│   ├── pkg-himachal.jpg
│   ├── pkg-andaman.jpg
│   ├── pkg-kashmir.jpg
│   ├── pkg-goa.jpg
│   ├── pkg-vizag.jpg
│   ├── pkg-meghalaya.jpg
│   └── pkg-nepal.jpg
├── components/
│   ├── landing/               # Page-section components (8 files)
│   │   ├── Header.tsx         # Fixed glass-blur navigation bar
│   │   ├── Hero.tsx           # Parallax hero with CTAs & trust strip
│   │   ├── Packages.tsx       # 9 destination cards grid
│   │   ├── TourTypes.tsx      # 4-column tour format grid
│   │   ├── Services.tsx       # 6 digital-services cards
│   │   ├── Personas.tsx       # 3 audience-segment columns
│   │   ├── Process.tsx        # 4-step booking process
│   │   ├── ContactFooter.tsx  # Footer with CTAs & contact info
│   │   └── Reveal.tsx         # IntersectionObserver animation wrapper
│   └── ui/                    # Radix-based shadcn/ui primitives
├── hooks/                     # Custom React hooks
├── lib/
│   ├── business.ts            # Centralised business facts & WhatsApp link helper
│   └── utils.ts               # Utility functions (cn)
├── routes/
│   ├── __root.tsx             # Root layout (fonts, global head, error/404 pages)
│   └── index.tsx              # Landing page route (SEO head + component composition)
├── router.tsx                 # TanStack Router config
├── server.ts                  # Nitro server entry
├── start.ts                   # TanStack Start entry
└── styles.css                 # Design system tokens, base styles, custom utilities
```

---

## 10 · Development

### Prerequisites

- **Node.js** ≥ 18 (install via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- **npm** (bundled with Node)

### Getting Started

```sh
# Clone the repository
git clone https://github.com/NitinChakraborty2001/Baba-Lokenath-Traders.git
cd Baba-Lokenath-Traders

# Install dependencies
npm install

# Start the dev server (hot-reload)
npm run dev
```

### Available Scripts

| Script      | Command                        | Description                           |
| ----------- | ------------------------------ | ------------------------------------- |
| `dev`       | `vite dev`                     | Start local dev server with HMR       |
| `build`     | `vite build`                   | Production build                      |
| `build:dev` | `vite build --mode development`| Development build                     |
| `preview`   | `vite preview`                 | Preview the production build locally  |
| `lint`      | `eslint .`                     | Run ESLint                            |
| `format`    | `prettier --write .`           | Auto-format all files                 |

---

## 11 · Configuration Notes

> [!IMPORTANT]
> **Centralised Business Data.** All business facts — name, proprietor, email,
> phone numbers, WhatsApp number, Google Business Profile URL, and service area —
> are maintained in a single file: [`src/lib/business.ts`](src/lib/business.ts).
> Update this file to change any contact information across the entire site.

> [!NOTE]
> The `whatsappLink()` helper in `business.ts` generates `wa.me` deep-links with
> pre-filled messages. Each section uses a context-specific message
> (e.g., destination name for package cards, general enquiry for the footer).

---

## 12 · Lovable Integration

This project is connected to [Lovable](https://lovable.dev). Key points:

- Every push to the connected branch syncs back into the Lovable editor.
- **Do not** rewrite published git history (no force-push, rebase, amend, or squash of pushed commits).
- The Lovable Vite plugin (`@lovable.dev/vite-tanstack-config`) handles SSR and routing configuration.

---

## 13 · Future Scope

The following features are **not** in the current build but are natural next steps:

- [ ] **WhatsApp Chat Widget** — Floating button for mobile users, always accessible.
- [ ] **Testimonials / Reviews** — Pull Google reviews or add a manual carousel section.
- [ ] **Photo Gallery** — Past trip photos to build trust and showcase experiences.
- [ ] **Blog / Travelogues** — SEO content pages targeting "Darjeeling trip from Hooghly" etc.
- [ ] **Online Booking Form** — Collect trip details (dates, pax, budget) directly on-site via React Hook Form + Zod.
- [ ] **Multi-language Support** — Bengali + English toggle for local accessibility.
- [ ] **Analytics** — Google Analytics 4 / Plausible for conversion tracking and CTA click attribution.
- [ ] **Performance Optimisation** — Lazy-load package images with blur-up placeholders; convert JPGs to WebP/AVIF.
- [ ] **Dark Mode Toggle** — The design system already includes full dark-mode tokens; surface a user-facing toggle.
- [ ] **PWA Support** — Service worker + web app manifest for offline access and home-screen install.

---

*Built with ❤️ using TanStack Start · TypeScript · React 19 · Tailwind CSS v4*

*Powered by [Nexa Digital Services](https://www.nexadigitalservices.agency) — A digital agency by [Nitin Chakraborty](https://www.linkedin.com/in/NitinChakraborty2001/).*
