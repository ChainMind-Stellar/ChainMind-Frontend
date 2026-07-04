# ChainMind Frontend

ChainMind is an autonomous AI-powered smart contract security auditor built on the Stellar blockchain. Users upload Solidity contracts, and ChainMind's agentic AI detects vulnerabilities, simulates thousands of attack transactions via Foundry, and records results immutably on Stellar via Soroban smart contracts.

Built with Next.js 16 (App Router), React 19, and TailwindCSS v4.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: JavaScript (ES2022+)
- **Styling**: TailwindCSS v4
- **Charts**: Chart.js + react-chartjs-2, Recharts
- **Animations**: Framer Motion
- **Wallet**: Stellar Freighter API
- **Blockchain**: stellar-sdk, soroban-client
- **HTTP**: Axios
- **PDF**: jsPDF + html2canvas
- **Icons**: Lucide React
- **State**: TanStack React Query
- **Code Quality**: ESLint, Prettier

## Routes

| Route           | Page    | Description                                                    |
| --------------- | ------- | -------------------------------------------------------------- |
| `/`             | Home    | Hero, upload `.sol` file, start audit, features                |
| `/results/[id]` | Results | Vulnerability report, attack scenarios, logs, AI patches, chat |
| `/history`      | History | Past audit archive with search and management                  |

## Local Setup

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Environment Variables**
   Copy `.env.example` to `.env.local` and configure:
   - `NEXT_PUBLIC_API_URL` — Backend API endpoint
   - `NEXT_PUBLIC_STELLAR_RPC_URL` — Stellar RPC
   - `NEXT_PUBLIC_PAYMENT_GATEWAY_ID` — Soroban payment contract
   - `NEXT_PUBLIC_SIMULATION_REGISTRY_ID` — Soroban simulation registry
   - Additional contract IDs and USDC issuer

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── globals.css              # Tailwind v4 import
│   │   ├── layout.js                # Root layout (Navbar, footer, providers)
│   │   ├── page.js                  # Home — upload + hero + features
│   │   ├── history/
│   │   │   └── page.js              # Audit history archive
│   │   └── results/
│   │       └── [id]/
│   │           └── page.js          # Audit results + chat
│   ├── components/
│   │   ├── Navbar.js                # Global navigation + wallet connect
│   │   └── SimulationTimeline.jsx   # Chart.js line chart component
│   ├── config/
│   │   └── index.js                 # Stellar network + contract constants
│   ├── context/
│   │   └── index.js                 # Stellar wallet + React Query providers
│   └── lib/
│       ├── stellar.js               # Stellar SDK utilities
│       └── web3.js                  # Payment + contract interaction
├── package.json
├── next.config.mjs
├── postcss.config.mjs
└── jsconfig.json                    # Path alias: @/ → ./src
```

## Development Workflow

- **Branching**: Always branch off `main` (`feature/my-feature`).
- **Committing**: Ensure the build passes before committing.
- **Validation**:
  - `npm run build` — Verify Next.js compilation
  - `npm run lint` — ESLint
  - `npm run format` — Prettier check
  - `npx tsc --noEmit` — TypeScript checks (if .ts files added)

## Continuous Integration

Defined in `.github/workflows/ci.yml`:

- **Lint** — `npm run lint`
- **Type Check** — `npx tsc --noEmit`
- **Format Check** — `npm run format`
- **Build** — `npm run build` (with `.next/cache` caching)
- **Test** — `npm test` (no-op until tests added)

The `main` branch requires CI to pass before merging.

## Design System

ChainMind uses a purple-based design system. See [DESIGN_SUBMISSION.md](./DESIGN_SUBMISSION.md) for full details.

- **Primary:** Purple `#4E4363`, Purple Accent `#804297`, Lighter Purple `#6F5EAA`
- **Backgrounds:** Warm off-whites (`#F8F6F3`, `#F8F8F8`, `#F4F1EC`)
- **Typography:** Syne (headings), DM Sans (body)
- **Icons:** Lucide React
- **All tokens prefixed with `cm-`**



### Brand & Style

The design system for this product is built on a narrative of "Autonomous Intelligence and Immutable Trust." It positions the platform as a high-precision instrument for the Stellar ecosystem. The aesthetic is a hybrid of **Minimalism** and **Glassmorphism**, emphasizing clarity, technical sophistication, and an "AI-first" developer experience.

The UI should feel clinical but approachable, using a sophisticated purple-tinted neutral palette to differentiate from traditional fintech blues. It evokes the feeling of a specialized laboratory—clean, organized, and powerful.

#### Colors

The palette is dominated by deep purples and warm neutrals, creating a "Warm Tech" environment that moves away from cold, dark-mode terminal clichés.

- **Primary & Secondary:** Used for core branding, primary actions, and navigational structure.
- **Surface Layering:** The background logic follows a tiered approach: `#F8F6F3` for the canvas, transitioning to `#F4F1EC` for structural cards.
- **Functional Spaces:** Specialized areas like the AI terminal and chat interfaces use distinct purple-tinted backgrounds (`#EDE6F5`, `#F3F0FA`) to visually separate automated logic from user interactions.
- **Semantic Status:** Critical errors use a bold red, while the brand's accent purple is repurposed for "Secure" states, reinforcing that the brand identity itself is synonymous with safety.

#### Typography

The typographic system creates a tension between the expressive, avant-garde nature of **Syne** and the utilitarian, balanced nature of **DM Sans**.

- **Headings:** Syne should be used with tight letter spacing for a modern, architectural look.
- **Body:** DM Sans provides high legibility for long-form audit reports and technical documentation.
- **Code Blocks:** Utilize the system's default monospace for smart contract snippets, ensuring developers feel at home with familiar character widths.
- **Hierarchy:** Maintain a clear vertical rhythm by ensuring line heights are always multiples of the 8px base grid.

#### Layout & Spacing

This design system utilizes an **8px linear grid** to govern all spatial relationships.

- **Grid Logic:** A 12-column fluid grid is used for desktop layouts, transitioning to a single-column stack on mobile.
- **Containers:** Content is housed within a max-width container of 1280px to maintain readability on ultra-wide monitors.
- **Internal Padding:** Use `cm-md` (16px) for standard component internals and `cm-lg` (24px) for card-level padding.
- **Terminal Layouts:** For code-heavy views, use a "Dashboard" approach with fixed-height scroll areas rather than a long-form page scroll to simulate an IDE environment.

#### Elevation & Depth

Elevation is used sparingly to maintain the clean, "scientific" aesthetic.

- **Shadows:** Use a soft, tinted shadow for interactive elements. The shadow is defined as `0px 4px 20px rgba(78, 67, 99, 0.08)`.
- **Glow Effects:** Primary buttons and active AI states utilize a "soft purple glow" (`rgba(78, 67, 99, 0.4)`) to signify the active "Mind" of the AI.
- **Layering:**
  - **Level 0 (Base):** Page background (`cm-bg-page`).
  - **Level 1 (Card):** Raised surface (`cm-bg-card`) with a 1px border of `#E8E1F4`.
  - **Level 2 (Overlay):** Dropdowns and Modals with the standard soft purple shadow.
- **Navigation:** The Navbar uses a `backdrop-filter: blur(12px)` with a semi-transparent `cm-bg-page` (80% opacity) to provide a sense of persistent orientation without obscuring the content.

#### Shapes

The shape language is "Soft-Geometric." It avoids the extreme playfulness of full-roundedness but rejects the harshness of sharp corners.

- **Cards:** Defined by a 12px radius, providing a modern, friendly structure.
- **Buttons:** Toggle between 8px (Standard) and 16px (Promotional/CTA) radii depending on the hierarchy.
- **Badges:** Always fully rounded (pill-shaped) to distinguish them from interactive buttons.
- **Inputs:** Follow the 8px button radius for consistency in form groups.

#### Components

- **Buttons:** Primary buttons use `cm-primary` background with white text and a `cm-primary` glow on hover. Secondary buttons use a `cm-primary` outline.
- **Chips & Badges:** Use `cm-badge-bg` with `cm-accent` text. For status badges (Critical/Warning), use a light version of the status color for the background and the core status color for text.
- **Lists:** Audit findings are presented in list items with `cm-md` padding, separated by 1px dividers of color `#E8E1F4`.
- **Input Fields:** Use a subtle background fill of `#F4F1EC` and a 1px border that shifts to `cm-accent` on focus.
- **Terminal:** The code terminal uses `cm-bg-terminal`, `cm-code` typography, and includes a "pulsing" indicator in `cm-accent` to show the AI is processing.
- **User Chat Bubbles:** Styled with `cm-bg-chat` and right-aligned to distinguish user input from AI-generated report insights.


figma 
https://www.figma.com/design/FeRXem1Wb2QtYapR7iK02e/ChainMind?node-id=0-1&p=f&t=s6dJ066FlwbjaIBN-0
