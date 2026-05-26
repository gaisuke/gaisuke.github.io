# Akhmad Dani Munif — Portfolio Website

A premium, elegant, and minimal developer portfolio showcasing engineering experience, projects, live coding stats, and personal writing. Built using a modern, performant, and type-safe front-end architecture.

---

## 🚀 Tech Stack

- **Core Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Programming Language**: [TypeScript](https://www.typescriptlang.org/) (Strictly typed data schemas)
- **Styling Engine**: [Tailwind CSS v4](https://tailwindcss.com/) (Fluid design and utility-first layout tokens)
- **Typography**: Vercel's [Geist Sans & Geist Mono](https://vercel.com/font) (Highly readable sans-serif and monospace font stacks)

---

## ✨ Features

### 1. Minimalist & Premium Design System
- Sleek dark and light mode harmony utilizing `bg-white`, `text-zinc-900`, and subtle `text-zinc-500` shades.
- Elegant micro-interactions and smooth transition animations on all links, project cards, and navigation headers.

### 2. Live Coding Activity Integration (`/components/wakatime.tsx`)
- Integrates directly with WakaTime's public data endpoints to dynamically query real-time coding language stats.
- Renders an advanced, interactive GitHub-style **Activity Grid** (`/components/activity-grid.tsx`) mapping coding intensity across the last 365 days.
- Designed with height-preserving safety locks to protect against Next.js hydration mismatches.

### 3. Dynamic Reflections Feed (`/components/blogs.tsx`)
- Pulls from a curated collection of Medium articles (stored in the centralized type-safe dataset at `/lib/data.ts`).
- Employs a custom client-side shuffle algorithm to show a random set of exactly **three** articles upon every fresh page mount.
- Features a height-preserving transparent skeleton layout to completely eliminate Cumulative Layout Shift (CLS) and ensure a flawless pre-rendering and hydration score.

---

## 🛠️ Development and Scripts

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Run Development Server
To launch the Turbopack development server locally:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### Build for Production
To generate a fully optimized, statically generated production bundle:
```bash
npm run build
```

### Code Quality & Linting
To inspect the code for potential bugs and formatting alignment:
```bash
npm run lint
```

---

## 📂 Project Structure

```text
├── app/
│   ├── layout.tsx         # App layout with Geist font configurations
│   ├── page.tsx           # Home entrypoint rendering portfolio modules
│   └── globals.css        # Global CSS importing Tailwind v4
├── components/
│   ├── nav.tsx            # Sticky blurring navigation header
│   ├── hero.tsx           # Headline and digital contact information
│   ├── experience.tsx     # Work experience history layout
│   ├── wakatime.tsx       # Live Wakatime API wrapper
│   ├── activity-grid.tsx  # Dynamic 365-day coding density grid map
│   ├── blogs.tsx          # Dynamic Reflections Grid with client-side shuffling
│   ├── projects.tsx       # Showcased projects grid
│   └── contact.tsx        # Structured footer contact list
├── lib/
│   └── data.ts            # Centralized type-safe portfolio data schemas
└── public/                # Static public asset directories
```
