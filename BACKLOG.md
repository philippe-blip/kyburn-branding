# Branding & Design — Backlog

Items specific to the concept pages (design, layout, copy, visuals). Project-level items live in [`../../TODO.md`](../../TODO.md).

## Layout & responsive
- [x] Add media queries for all sections (hero, stats, services, cases, process, footer)
- [x] Mobile nav (hamburger or drawer)
- [x] Fix hero portal-small image crop/zoom
- [x] Test dark + light theme on mobile

## Copy & content
- [x] Fix image alt texts (remove "Contemplative", "Untitled" etc.)
- [x] Replace placeholder text (Juvet Hotel → Amsterdam, NL)
- [x] Anonymize case study names (EDN → Facility Services, Windward → Charter Company)
- [ ] Rewrite hero headline (test variants)
- [ ] "How we work" steps — more precise descriptions
- [ ] Case study numbers need owner review (1.3M€ is total revenue not SEO; Kyburn doesn't sell SEO — rethink positioning)
- [ ] Replace placeholder imagery with relevant visuals

## Navigation
- [ ] Smooth scroll to internal sections
- [ ] Active link highlighting for current page/section
- [ ] Link to team profiles from nav (Team / About dropdown?)

## Profiles
- [ ] Verify/enrich Julien profile (experiences, dates)
- [ ] Profile pages also need responsive treatment

## Tech stack section
- [ ] Replace placeholder SVG icons with actual tool logos (with brand colors)

## Assets
- [ ] Rename images: Untitled.png, Untitled (1).png, juvet$.webp → descriptive names
- [ ] Optimize image sizes (some PNGs are 1-2MB)
- [ ] Create og-image.jpg (1200×630px) for social sharing previews

## Architecture
- [ ] Migrate to Eleventy — shared layouts, Markdown blog, auto-generated sitemap
      Decision: Eleventy over Astro (pure static content, no interactive components needed)
      See TODO.md for rationale
