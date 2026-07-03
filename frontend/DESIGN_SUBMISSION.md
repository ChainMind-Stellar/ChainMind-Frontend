# ChainMind UI/UX Design System and High-Fidelity Screens Submission

## Figma File

[ChainMind Design - Figma](https://www.figma.com/design/FeRXem1Wb2QtYapR7iK02e/Untitled?node-id=0-1&p=f&t=s6dJ066FlwbjaIBN-0)

## Overview

This submission provides the cohesive design system and high-fidelity screens for ChainMind — an autonomous AI-powered smart contract security auditor built on Stellar. Users upload Solidity contracts, and ChainMind's agentic AI detects vulnerabilities, simulates thousands of attack transactions via Foundry, and records results immutably on Stellar via Soroban smart contracts.

## Deliverables Addressed

### 1. Landing Page

- Modern landing page with Hero section ("Autonomous Security powered by AI."), Upload/dropzone area, Features section (AI Sim Simulation, Vulnerability Detection, On-Chain Reputation), multi-step audit progress animation, and Footer with Stellar branding and agent ID.

### 2. Audit Results Page

- Comprehensive results display including Contract identity panel, Risk score ring gauge, Bug count and simulation metrics, Agent reputation sidebar card, Transaction simulation timeline chart, Tabbed content (Vulnerabilities, Attack Scenarios, Simulation Logs, AI Patches), and Interactive AI chat sidebar.

### 3. Audit History Page

- Archive management with Search functionality, Data table of past audits (name, date, risk status, blockchain proof, actions), Empty state for first-time users, and Delete entry capability.

### 4. Wallet Integration

- Freighter wallet connect/disconnect flow, Multi-state CTA button (disconnected, ready, loading), Upload area enabled/disabled states based on connection, and Truncated public key display.

### 5. Mobile Experience

- Mobile-responsive layouts for Landing page, Results page (stacked grid, scrollable tabs), and History page (horizontal scroll table).

## Design System

### Brand Personality

- **Core Values:** Autonomous, Trustworthy, Cutting-edge, Transparent, Secure, AI-first
- **Tone:** Technical but approachable, confident, precise, futuristic but credible

### Primary Brand Colors

| Color          | Hex       | Usage                                                         |
| -------------- | --------- | ------------------------------------------------------------- |
| Purple         | `#4E4363` | Buttons, headings, footer, active states, sidebar wallet card |
| Purple accent  | `#804297` | Icons, step indicators, stat highlights                       |
| Lighter purple | `#6F5EAA` | Links, inline highlights, chat responses                      |
| Hover dark     | `#433955` | Button hover states                                           |

### Backgrounds

| Hex       | Usage                             |
| --------- | --------------------------------- |
| `#F8F6F3` | Landing page, page body           |
| `#F8F8F8` | Section backgrounds, sidebar      |
| `#F4F1EC` | Feature card backgrounds          |
| `#EDE6F5` | Terminal/simulation log container |
| `#F1EAF8` | Active sidebar item               |
| `#E8E1F4` | Badge background                  |
| `#F3F0FA` | Chat bubble (user)                |
| `#F1EBF8` | Agent info card background        |

### Text Colors

| Hex                                           | Usage                      |
| --------------------------------------------- | -------------------------- |
| `#000000`                                     | Main headings              |
| `#101828`                                     | Feature headings           |
| `#0B1C30` / `#0B1736`                         | Stat headings              |
| `#1D1D1D`                                     | Accordion titles           |
| `#2B2F38`                                     | Secondary headings, labels |
| `#667185`                                     | Body text, subtitle        |
| `#6B7280`                                     | Feature descriptions       |
| `#7A7A7A` / `#7A7482` / `#7B8190` / `#7C7C7C` | Muted text                 |
| `#98A2B3`                                     | Light muted text           |

### Borders & Dividers

| Hex       | Usage                              |
| --------- | ---------------------------------- |
| `#EAEAEA` | Sidebar border, chat header border |
| `#E7E7E7` | Navbar border                      |
| `#EFEFEF` | Chat input border                  |
| `#D9D9D9` | Feature card borders               |
| `#D0D5DD` | Input border                       |
| `#E5E7EB` | Divider line                       |
| `#E4E4E4` | Secondary button border            |
| `#8D8D8D` | Dashed step line                   |

### Typography

| Role     | Font    | Sizes                                               | Weight        |
| -------- | ------- | --------------------------------------------------- | ------------- |
| Headings | Syne    | 52px–64px hero, 28px–36px section, 20px–24px card   | 600–700       |
| Body     | DM Sans | 14px–16px body, 12px–13px small, 10px–11px captions | 400, 500, 700 |

### Spacing

- Base unit: 4px
- Page max-width: 1280px
- Section padding: 16px–32px horizontal, 80px+ vertical
- Card padding: 24px–48px

### Border Radius

- Cards/panels: 12px
- Icons/buttons: 8px, 16px
- Badges: 999px
- Code blocks: 12px

### Component Naming Convention

All design tokens and components prefixed with `cm-` (e.g., `cm-purple-primary`, `cm-bg-page`, `cm-text-body`, `cm-border-card`, `cm-button-primary`).

## Design Alignment

- **Brand Personality:** Autonomous, Trustworthy, Cutting-edge, Transparent, Secure, AI-first
- **Colors:** Accurately utilized Primary Colors (Purple `#4E4363`, Purple Accent `#804297`, Lighter Purple `#6F5EAA`) with defined background, text, and border palette
- **Typography:** Employed Syne for Headings and DM Sans for Body

## Acceptance Criteria Met

- [x] Figma file is publicly accessible
- [x] Consistent use of ChainMind brand colors and typography
- [x] Responsive desktop and mobile layouts
- [x] Clear user flows and navigation
- [x] Organized design system/components with proper naming
- [x] Screens are implementation-ready
