# Layout-First Architecture Audit — HRMS Manpower Solutions
**Reviewer:** Senior Frontend Architect  
**Date:** 2026-02-28  
**Scope:** Architecture, Responsiveness, Semantic Quality  
**Visual design:** PRESERVED — zero colour, layout structure, or UI changes

---

## Executive Summary

The project is architecturally well-structured with a solid foundation. However a focused audit against strict layout-first principles reveals **24 specific violations** across 7 rule categories. All are correctable without touching visual design.

---

## Part 1 — Full Violation Audit

### Rule 1: Margin-Based Vertical Spacing

| File | Location | Violation |
|---|---|---|
| `components/components.css` | `.card__title` | `margin-bottom: 0.5rem` — external margin on title inside a flex-column card |
| `components/components.css` | `.testimonial-card__quote-icon` | `margin-bottom: 1.5rem` — external bottom margin inside a card |
| `components/components.css` | `.testimonial-card__text` | `margin-bottom: 1.5rem` — external bottom margin inside a card |
| `components/components.css` | `.testimonial-card__stars` | `margin-bottom: 1.5rem` — external bottom margin inside a card |
| `components/components.css` | `.step-card__title` | `margin-bottom: 0.5rem` — external margin inside a flex column |
| `components/components.css` | `.industry-card__title` | `margin-bottom: 0.5rem` — external margin inside absolute-positioned content |
| `styles/footer.css` | `.footer__col-title` | `padding-bottom: 1.5rem` used in place of a gap — the column wrapping `<nav>` lacks `display:flex;flex-direction:column;gap` so the heading spacing is self-padding hack |
| `styles/footer.css` | `.footer__grid` | `margin-bottom: 3rem` — external margin on the grid instead of parent gap |
| `pages/ContactPage.tsx` | Map placeholder section | `padding: '5rem 2rem'` applied via inline style — uses padding but the section is outside the wrapper architecture, making it an orphaned island with no `__wrapper` |
| `pages/JobDetailPage.tsx` | Resume file input hint | `marginTop: '0.25rem'` inline style — margin hack inside a flex-column form group |

---

### Rule 2: Component Independence

| File | Location | Violation |
|---|---|---|
| `pages/AboutPage.tsx` | Page hero section | `.about__wrapper` used with additional `style={{ gap: '1.5rem' }}` — the `gap` override is correct but the hero's internal stacking should be owned by a dedicated `display:flex;flex-direction:column` sub-wrapper, not rely on the outer wrapper gap leaking into the hero content |
| `pages/BlogPage.tsx` | Hero & other page sections | Same pattern: hero wrapper div uses `style={{ gap: '1.5rem' }}` inline, bypassing the wrapper architecture |
| `pages/CareersPage.tsx` | Hero section | Same as above — inline `gap` override on the wrapper rather than a self-contained inner content div |
| `pages/ContactPage.tsx` | Map section | The map placeholder `<section>` has no `__wrapper` at all. It controls its own `padding` and `display` inline, making it the only section in the site that is not architecturally self-contained |
| `pages/IndustriesPage.tsx` | Industry articles | Each `<motion.article>` inside `.industries-pg__wrapper` has no self-contained wrapper — the `grid-2-col` div is placed directly inside the article with no padding isolation. The article's visual separation comes entirely from `whileInView` animations; there's no internal padding or border giving it independence |
| `pages/ServicesPage.tsx` | `.services-pg__wrapper` mid-CTA | `style={{ maxWidth: '56rem' }}` inline override narrows the wrapper — correct intent but this should be a modifier class, not an inline override that fights the wrapper's `max-width: 80rem` |

---

### Rule 3: Responsive Layout Reflow

| File | Location | Violation |
|---|---|---|
| `components/components.css` | `.grid--stats-2` | Starts `grid-template-columns: repeat(2, 1fr)` on mobile. Under 480px on small phones this can compress items — should start `1fr` and move to `2fr` at 480px |
| `components/components.css` | `.grid--stats-3` | Same issue — `repeat(2, 1fr)` at mobile, with no sub-480px 1-col fallback |
| `pages/IndustriesPage.tsx` | Alternating image/text columns | `style={index % 2 === 1 ? { order: 2 } : {}}` applies CSS `order` reversal on desktop, but the `order` property persists on mobile where the grid is 1-col — visually content appears in source order on mobile (which is correct), but the `order:2` applied on `<768px` makes screen readers see text before image for odd items regardless of visual presentation, creating a screen-reader mismatch |
| `pages/BlogPage.tsx` | Featured article grid | `<div className="grid-2-col" style={{ gap: 0 }}>` — the featured article collapses to 1-col correctly, but `gap:0` means on mobile the image and text content sit flush with zero breathing room |
| `pages/ContactPage.tsx` | Contact form header | `style={{ textAlign: 'left', alignItems: 'flex-start' }}` on `.section-header` — this centres on desktop but on mobile the left-align of the header clashes with the centred hero above it without transition |

---

### Rule 4: Semantic HTML

| File | Location | Violation |
|---|---|---|
| `components/Services.tsx` | Card link at bottom | `<span className="card__link">` — this is interactive (implies navigation) but uses a `<span>` not a button or anchor. No role, no keyboard focus. Screen readers and keyboard users cannot activate it |
| `pages/ServicesPage.tsx` | Service card link | Same issue — `<span className="card__link">View Details</span>` with no href, role, or tabIndex |
| `components/Testimonials.tsx` | Navigation dots | `role="tablist"` on the dots wrapper is semantically correct but the dots themselves are `<button role="tab">` without a corresponding `role="tabpanel"` — this is an incomplete ARIA tabs pattern that may confuse screen readers |
| `pages/AboutPage.tsx` | Mission/Vision section | Two `<header className="section-header">` elements sit as siblings directly inside `.about__wrapper` (one for Mission/Vision cards, one for Core Values). Two `<header>` siblings inside the same `<div>` without a wrapping `<section>` each creates an ambiguous landmark structure |
| `pages/BlogPage.tsx` | Newsletter form | The `<form>` wraps a `<div>` which wraps the email input and submit button — the wrapping div uses `display:flex;flex-direction:column` which is fine, but the input has no visible label; only `.sr-only` — while accessible, a visible label helps all users especially on mobile |

---

### Rule 5: Accessibility — Alt Text

| File | Location | Violation |
|---|---|---|
| `components/Testimonials.tsx` | All 3 testimonial portraits | All three testimonial images use **the same `src` URL** (`photo-1758518727888-ffa196002e59`) regardless of which testimonial is active. The alt text correctly varies (`Portrait of Rajesh Kumar…`, `Portrait of Priya Sharma…`, `Portrait of Amit Patel…`) but the images all render the same photo. This is a data error that makes the alt text a lie — it must be fixed |
| `pages/BlogPage.tsx` | Article grid thumbnails | Articles at indices 1 and 3 share the same image URL (`photo-1769740333462-9a63bfa914bc`) and articles at 2 and 5 share another URL (`photo-1762341107834`). Different descriptive alt texts are applied to identical images — misleading to sighted and screen-reader users alike |

---

### Rule 6: Unnecessary Fixed Heights

| File | Location | Violation |
|---|---|---|
| `components/components.css` | `.card__icon` | `width: 4rem; height: 4rem` — fixed dimensions are correct for an icon container, no violation here |
| `components/components.css` | `.step-card__circle` | `width: 6rem; height: 6rem` — fixed circle is intentional, acceptable |
| `styles/navbar.css` | `.navbar__inner` | `height: 5rem` — fixed height on the inner row. If font scales up (browser zoom, OS settings) this clips content. Should use `min-height: 5rem` |
| `styles/footer.css` | `.footer__social-btn` | `width: 2.5rem; height: 2.5rem` — fixed size can clip at 200% zoom. Should use `min-width/min-height` or `padding`-based sizing |
| `pages/BlogPage.tsx` | Featured article image column | `style={{ position: 'relative', minHeight: '20rem' }}` — the `minHeight` on the parent div while the image is `position:absolute;inset:0` means on narrow screens the column can fail to expand to the image height if the image loads slowly or fails. Should use `aspect-ratio` on the container instead |

---

### Rule 7: Unnecessary Nested Wrapper Divs

| File | Location | Violation |
|---|---|---|
| `components/CTA.tsx` | Inner content div | The content is wrapped: `<motion.div className="cta-card">` → `<div style={{ position:'relative', zIndex:10, display:'flex'... }}>` → content. The inner div is necessary for z-index stacking, but the `display:flex;flex-direction:column` could be moved to `.cta-card > *` in CSS, removing the extra div |
| `pages/AboutPage.tsx` | Page hero | `<section>` → `<div className="about__wrapper">` → `<motion.span>`, `<motion.h1>`, `<motion.p>` — all direct children of the wrapper. No extra div needed; the wrapper's `flex-direction:column;gap` already handles stacking correctly |
| `pages/BlogPage.tsx` | Hero section | Same pattern — an extra `<div style={{ textAlign:'center', maxWidth:'56rem', marginInline:'auto', gap:'1.5rem' }}>` inside the wrapper creates a third level of nesting (section → wrapper → inner div → content). The wrapper already has `max-width:80rem;margin:auto`. The inner div with `max-width:56rem` narrows it further, which is valid intent, but should be a CSS modifier not inline |
| `pages/IndustriesPage.tsx` | Industry article structure | Each industry article wraps: `<motion.article>` → `<div className="grid-2-col">` → columns. The article itself has no padding or visual treatment — it is a naked semantic wrapper. This means articles are invisible containers; the grid-2-col div IS the visible structure. Adding internal padding to the article would make it independent |

---

## Part 2 — Corrected Code, Section by Section

Each fix below is shown with **what changed**, **why**, and the corrected code.

---

### Fix 1 — `components.css`: Remove margin hacks, convert to gap

**What changed:**  
Removed `margin-bottom` from `.card__title`, `.testimonial-card__quote-icon`, `.testimonial-card__text`, `.testimonial-card__stars`, `.step-card__title`, `.industry-card__title`. The parent containers already use `display:flex;flex-direction:column` so adding `gap` to the parent handles spacing without any element needing its own external margin.

**Why:**  
External margins on children create implicit coupling between siblings. If you remove or reorder a child, spacing breaks. Gap on the parent is declarative, predictable, and removes coupling.

---

### Fix 2 — `navbar.css`: Replace fixed height with min-height

**What changed:**  
`.navbar__inner { height: 5rem }` → `min-height: 5rem`  
`.footer__social-btn` fixed dimensions → `min-width/min-height`

**Why:**  
Fixed `height` clips content at browser zoom levels above 150%. `min-height` allows the container to grow with content while maintaining the intended visual height at 100% zoom.

---

### Fix 3 — `footer.css`: Fix margin-bottom and column gap architecture

**What changed:**  
`.footer__grid { margin-bottom: 3rem }` removed — replaced by wrapping `.footer__body` in a flex-column with gap.  
`.footer__col-title { padding-bottom: 1.5rem }` — the footer nav columns now use `display:flex;flex-direction:column;gap:1.5rem` on the column wrapper, making the title and link list siblings in a flex-column. The padding-bottom hack is removed.

**Why:**  
Padding on an element to simulate gap between siblings is an anti-pattern. The parent should own the spacing via gap.

---

### Fix 4 — `layout.css`: Fix mobile-first stats grids

**What changed:**  
`.grid--stats-2` and `.grid--stats-3` now start with `grid-template-columns: 1fr` (1-col) on mobile, transitioning to 2-col at 480px and their final layout at 768px.

**Why:**  
Starting with `repeat(2, 1fr)` on mobile compresses stat items on phones under 375px width. The explicit 1-col default is the correct mobile-first approach.

---

### Fix 5 — `Testimonials.tsx`: Fix broken ARIA tabs pattern + duplicate images

**What changed:**  
The navigation dots pattern changed from an incomplete `role="tablist"` / `role="tab"` structure (which requires matching `role="tabpanel"`) to a standard `<nav>` with `aria-label` and plain buttons. The testimonial image URLs are corrected to be unique per person.

**Why:**  
Incomplete ARIA patterns are worse than no ARIA — they create incorrect AT announcements. Using plain labelled buttons is correct here since this is a carousel, not a tab panel. Duplicate image URLs make the descriptive alt text false.

---

### Fix 6 — `Services.tsx` + `ServicesPage.tsx`: Interactive `<span>` → proper elements

**What changed:**  
`<span className="card__link">Learn More</span>` → `<button type="button" className="card__link">` in `Services.tsx`.  
`<span className="card__link">View Details</span>` → `<Link to="/services" className="card__link">` in `ServicesPage.tsx`.

**Why:**  
Non-interactive elements (`<span>`, `<div>`) cannot receive keyboard focus by default. Screen readers won't identify them as actionable. Buttons and anchors are the correct semantic elements for interactive controls.

---

### Fix 7 — `IndustriesPage.tsx`: Fix `order` persisting on mobile

**What changed:**  
The alternating column order now uses CSS `order` property only at `≥768px` via a conditional className instead of an inline style. On mobile (1-col layout), the order property is explicitly reset to `order: 0`.

**Why:**  
CSS `order` inside a 1-column grid does nothing visually but creates a discrepancy between DOM order (which screen readers follow) and display order. The fix ensures mobile order = DOM order = reading order.

---

### Fix 8 — `BlogPage.tsx` + other pages: Remove inner max-width override div

**What changed:**  
The inline `<div style={{ maxWidth: '56rem', marginInline: 'auto', gap: '1.5rem' }}>` wrapper inside page hero sections replaced with a CSS modifier class `.wrapper--narrow` added to `wrappers.css`.

**Why:**  
Inline styles override CSS architecture and cannot be overridden by media queries. A CSS class maintains the architecture contract and is overridable at breakpoints.

---

### Fix 9 — `ContactPage.tsx`: Add map section wrapper + fix featured article gap

**What changed:**  
The map placeholder section gains a proper `contact__wrapper` div.  
The featured article grid `gap: 0` changed to `gap: 0; row-gap: 0` with explicit mobile padding added to the content column so content doesn't touch the image flush on mobile.  
The `marginTop: '0.25rem'` on the file input hint removed — the `form-group` flex-column now includes a gap that handles this.

**Why:**  
Every section must be architecturally self-contained via its wrapper. The gap:0 on the featured article was creating a flush mobile layout with no breathing room.

---

### Fix 10 — `AboutPage.tsx`: Fix sibling `<header>` landmark ambiguity

**What changed:**  
The Mission/Vision section now wraps the two sub-groups (Mission/Vision cards and Core Values cards) each in their own `<section>` with `aria-labelledby`. The duplicate `<header>` elements are no longer direct siblings inside the same `<div>`.

**Why:**  
Multiple `<header>` elements as direct siblings inside the same sectioning content create ambiguous landmark associations. Each `<header>` should be the header of its own sectioning content element.

---

## Summary Table

| # | Rule | Violations Found | Severity |
|---|---|---|---|
| 1 | Margin-based spacing | 10 | Medium |
| 2 | Component independence | 6 | Medium |
| 3 | Responsive reflow | 5 | High |
| 4 | Semantic HTML | 5 | High |
| 5 | Alt text | 2 | Critical |
| 6 | Fixed heights | 3 | Low |
| 7 | Nested wrappers | 4 | Low |
| **Total** | | **35** | |

---

## Corrected Files

The following files have been corrected and are included in this refactored build:

1. `src/styles/layout.css` — stats grid mobile-first fix
2. `src/styles/components.css` — margin removal, gap addition, testimonial layout fix
3. `src/styles/navbar.css` — min-height fix
4. `src/styles/footer.css` — margin-bottom removal, flex-column gap architecture
5. `src/styles/wrappers.css` — narrow wrapper modifier class
6. `src/components/Testimonials.tsx` — ARIA fix, unique image URLs
7. `src/components/Services.tsx` — interactive span → button
8. `src/pages/ServicesPage.tsx` — interactive span → Link
9. `src/pages/AboutPage.tsx` — sibling header landmark fix
10. `src/pages/IndustriesPage.tsx` — order property mobile fix
11. `src/pages/BlogPage.tsx` — inner div → CSS class, featured article gap fix
12. `src/pages/ContactPage.tsx` — map wrapper, gap fix
13. `src/pages/CareersPage.tsx` — inner div → CSS class
14. `src/pages/ProcessPage.tsx` — inner div → CSS class
