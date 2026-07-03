<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:chainmind-rules -->

# ChainMind Frontend — Agent Guidelines

## Project Overview

ChainMind is an AI-powered smart contract auditor on Stellar. Users upload `.sol` files, the backend analyzes them via Gemini + Llama/Groq + Foundry, and results are recorded on-chain via Soroban.

## Architecture

- Next.js 16 App Router — all pages are `"use client"` in JavaScript (no TypeScript)
- TailwindCSS v4 — no `tailwind.config.js`, theme via `@import "tailwindcss"` in `globals.css`
- Stellar Freighter API for wallet connection
- TanStack React Query for data fetching
- Framer Motion for animations
- Chart.js + react-chartjs-2 for the simulation timeline

## Routes

- `/` — Home page (upload, hero, features)
- `/results/[id]` — Audit results (vulnerabilities, attacks, logs, fixes, chat)
- `/history` — Audit history archive

## Design System (Purple Palette)

| Token            | Hex                             |
| ---------------- | ------------------------------- |
| Purple (primary) | `#4E4363`                       |
| Purple accent    | `#804297`                       |
| Lighter purple   | `#6F5EAA`                       |
| Hover dark       | `#433955`                       |
| Page bg          | `#F8F6F3`                       |
| Card bg          | `#F4F1EC`                       |
| Terminal bg      | `#EDE6F5`                       |
| Badge bg         | `#E8E1F4`                       |
| Chat user bg     | `#F3F0FA`                       |
| Text headings    | `#000000`                       |
| Text body        | `#667185`                       |
| Text muted       | `#98A2B3`                       |
| Borders          | `#EAEAEA`, `#E7E7E7`, `#D9D9D9` |
| Font headings    | Syne                            |
| Font body        | DM Sans                         |

## Code Conventions

- All components are `"use client"` (no RSC)
- Use `@/` path alias for imports (e.g., `@/context`, `@/components/Navbar`)
- Icons from `lucide-react`, import by name
- Colors are currently hardcoded as Tailwind utilities — migrate to CSS variables using `cm-` prefix
- No barrel files — import directly from the component file
- No TypeScript — pure JavaScript with JSX

## Running the Project

```bash
npm run dev      # Development server
npm run build    # Production build + type check
npm run lint     # ESLint
npm run format   # Prettier check (use format:fix to auto-fix)
```

## Wallet Flow

1. User lands → sees orange/purple "Connect Freighter Wallet" button
2. Clicks → Freighter extension prompts → wallet connects
3. Address displayed as truncated (e.g., `GBCD34...aBcD`)
4. Upload area enables, CTA button turns purple "Audit with ChainMind"

## Audit Flow

1. User selects `.sol` file → clicks Audit
2. Frontend digests contract → sends SHA-256 hash
3. Payment via `payForAudit()` (Soroban USDC transfer)
4. File uploaded to `POST /api/simulate`
5. Progress steps animate: Paying → Parsing → Analyzing → Simulating → Recording
6. On success → redirects to `/results/[id]`
7. Result data cached in `localStorage` under `chainmind_sim_${id}`
8. History tracked in `localStorage` under `chainmind_history`

## Key Dependencies

- next@16, react@19, react-dom@19
- @stellar/freighter-api, stellar-sdk, soroban-client
- @tanstack/react-query, axios
- chart.js, react-chartjs-2, recharts
- framer-motion
- lucide-react
- jspdf, html2canvas

<!-- END:chainmind-rules -->
