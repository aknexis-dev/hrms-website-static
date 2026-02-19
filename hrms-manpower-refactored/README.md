# HRMS Manpower Solutions — Refactored Frontend

> **Phase: Frontend Refactoring & Component Architecture**
> Prepared by AKnexis Development Team — 2026

---

## 📁 Project Structure

```
hrms-refactored/
├── index.html                        # Semantic HTML shell
├── package.json                      # Minimal, clean dependencies
├── vite.config.ts                    # Vite + React + Tailwind
├── tsconfig.json
└── src/
    ├── main.tsx                      # App entry point
    ├── App.tsx                       # Root router + layout shell
    ├── styles/
    │   ├── index.css                 # Master import (all modules)
    │   ├── fonts.css                 # Font face declarations
    │   ├── theme.css                 # Design tokens / CSS variables
    │   ├── layout.css                # Global layout primitives
    │   ├── navbar.css                # Navigation component
    │   ├── hero.css                  # Hero section
    │   ├── components.css            # Reusable UI components
    │   └── footer.css                # Footer component
    ├── components/
    │   ├── Navbar.tsx                # Site navigation
    │   ├── Hero.tsx                  # Landing hero
    │   ├── TrustStrip.tsx            # Scrolling credential marquee
    │   ├── Industries.tsx            # Industry grid
    │   ├── Services.tsx              # Service card grid
    │   ├── WhyChooseUs.tsx           # Benefits section
    │   ├── Process.tsx               # 5-step process
    │   ├── Testimonials.tsx          # Client quote carousel
    │   ├── CTA.tsx                   # Call-to-action band
    │   ├── Footer.tsx                # Site footer
    │   ├── ImageWithFallback.tsx     # Graceful image component
    │   └── ScrollToTop.tsx           # Route-change scroll reset
    └── pages/
        ├── HomePage.tsx
        ├── ServicesPage.tsx
        ├── IndustriesPage.tsx
        ├── ProcessPage.tsx
        ├── AboutPage.tsx
        ├── ContactPage.tsx
        ├── CareersPage.tsx
        ├── JobDetailPage.tsx
        └── BlogPage.tsx
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## 🎨 Design Tokens (theme.css)

All brand colours, radii, shadows, and transitions live in `src/styles/theme.css` as CSS custom properties:

| Token | Value |
|-------|-------|
| `--color-primary` | `#2563eb` |
| `--color-primary-dark` | `#1e40af` |
| `--color-accent` | `#facc15` |
| `--color-dark` | `#0f172a` |
| `--radius-3xl` | `2rem` |

---

## 🧩 Reusable CSS Classes

### Buttons
```html
<a class="btn btn--primary btn--lg">Primary</a>
<a class="btn btn--yellow">Yellow CTA</a>
<a class="btn btn--white">White on dark</a>
```

### Cards
```html
<article class="card card--hover">...</article>
```

### Form elements
```html
<input class="form-input" />
<select class="form-select"></select>
<textarea class="form-textarea"></textarea>
```

### Layout helpers
```html
<div class="container">...</div>         <!-- Max-width centred -->
<section class="band--dark">...</section> <!-- Dark gradient band -->
<div class="grid-2-col">...</div>         <!-- Responsive 2-col -->
```

---

## ♿ Accessibility Highlights

- Semantic HTML5 elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- `aria-label` and `aria-labelledby` on all landmark regions
- `aria-current="page"` on active nav links
- `aria-live="polite"` on testimonial carousel
- `role="list"` on `<ul>` elements used as lists
- `<dl>` / `<dt>` / `<dd>` for statistics
- `<blockquote>` and `<figcaption>` for testimonial data
- All interactive icons have `aria-hidden="true"`, text-equivalent labels provided

---

## 🌿 Git Branching Workflow

```
main (protected)
 └── develop
      ├── feature/navbar-refactor
      ├── feature/hero-section
      ├── feature/services-page
      └── ...
```

Rules:
- Never push directly to `main`
- Open a Pull Request for all changes
- Meaningful commit messages: `feat:`, `fix:`, `refactor:`, `style:`

---

## 📦 Key Dependencies

| Package | Purpose |
|---------|---------|
| `react` + `react-dom` | UI framework |
| `react-router` | Client-side routing |
| `motion` | Animations |
| `lucide-react` | Icon set |
| `@radix-ui/react-accordion` | Accessible accordion (FAQs) |
| `tailwindcss` + `@tailwindcss/vite` | Utility CSS |

---

*HRMS Manpower Solutions Frontend Refactoring Phase — 2026*
