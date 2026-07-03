This project uses a chain of agent instruction files. Load them in order:

1. `AGENTS.md` — Start here. Contains Next.js version warnings and ChainMind-specific rules (routing, design tokens, conventions, wallet flow, audit flow).
2. `DESIGN_SUBMISSION.md` — Full design system documentation (colors, typography, spacing, components, screens).

## Quick Reference

- **Framework:** Next.js 16 App Router, React 19, JavaScript (no TypeScript)
- **Styling:** TailwindCSS v4 (`@import "tailwindcss"` in globals.css)
- **Primary palette:** Purple `#4E4363`, Accent `#804297`, Light `#6F5EAA`
- **Background:** `#F8F6F3` page, `#F4F1EC` cards
- **Fonts:** Syne (headings), DM Sans (body)
- **Paths:** `@/` alias → `./src/*`
- **Routes:** `/` (upload), `/results/[id]` (audit), `/history` (archive)
- **Commands:** `npm run dev`, `npm run build`, `npm run lint`, `npm run format`
- **AUDIT:** Always run `npm run build && npm run lint` before finalizing code changes.
