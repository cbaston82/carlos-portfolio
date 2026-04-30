# Carlos Portfolio — Project Context

## What This Is
A personal portfolio website for Carlos Baston. Single page, smooth scroll. Dark theme.

## Tech Stack
- React (JavaScript, no TypeScript)
- Vite (scaffolded with `npm create vite@latest`)
- Plain CSS (no CSS framework for now)
- No routing library — single page, anchor-based navigation

## Sections (in order)
1. Hero
2. About
3. Skills (tech stack only)
4. Portfolio (coding projects + freelance work)
5. Resume (displayed inline, not a PDF download)
6. Contact (form + LinkedIn link)

## Design Rules
- Dark background: `#0d1117`
- Surface/cards: `#161b22` / `#21262d`
- Accent color: `#58a6ff` (blue)
- Text: `#e6edf3`
- Muted text: `#8b949e`
- Border: `#30363d`
- Fixed nav with glass blur effect
- Smooth scroll via `html { scroll-behavior: smooth }`

## Component Rules
- One component per file
- Components live in `src/components/`
- Each component has its own CSS file next to it (e.g. `Nav.jsx` + `Nav.css`)
- No inline styles
- Props over hardcoded content where it makes sense

## Coding Rules
- JavaScript only (no TypeScript)
- Functional components with hooks only (no class components)
- Keep components small and focused — one job per component
- Name components with PascalCase, files to match
- No third-party UI libraries unless we agree on one first

## Status
- [x] Scaffold done (Vite + React)
- [x] Nav
- [x] Hero
- [x] About
- [ ] Skills
- [ ] Portfolio
- [ ] Resume
- [ ] Contact
- [ ] Footer
- [ ] Deploy
