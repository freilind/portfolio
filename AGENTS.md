
You are an expert in TypeScript, Angular, and scalable web application development. You write functional, maintainable, performant, and accessible code following Angular and TypeScript best practices.

## Project Context

- Personal portfolio of Freilin Manzano (Backend Engineer: Java, Spring, microservices, AWS, Terraform).
- Stack: Angular 22, TypeScript 6, Tailwind CSS 4 (via `@tailwindcss/postcss`), deployed to GitHub Pages.
- Single-page app: sections are anchors (`#about`, `#experience`, `#skills`, `#projects`, `#contact`), not routes.
- UI copy is in Spanish (`lang="es"`). Keep all user-facing text in Spanish.
- Import aliases: `@app/*`, `@core/*`, `@shared/*`.

## Project Structure

- `src/app/core/data/site.ts`: single source of truth for `NAV_LINKS` and `SOCIAL_LINKS`. Never duplicate nav or social links (or their SVG paths) in components.
- `src/app/core/services/theme.service.ts`: light/dark theme (toggles `.dark` on `<html>`, persists in `localStorage` under `portfolio-theme`).
- `src/app/shared/components/<name>/`: one folder per section (`<name>.component.ts` + `<name>.html`, optional `.css`).
- `src/styles.css`: theme tokens and the design system. There is NO `tailwind.config.js`; do not create one.
- `src/index.html`: SEO meta tags and the inline anti-flash theme script. Keep the script in sync with `ThemeService` (same storage key).

## Tailwind CSS v4 Rules

- Configure tokens only in the `@theme` block of `src/styles.css` (`primary-*` and `secondary-*` from 50 to 900, `--font-sans`, `--font-mono`).
- Dark mode is class-based: `@custom-variant dark (&:where(.dark, .dark *));`. Always provide `dark:` variants.
- Use v4 syntax: `bg-linear-to-*` (not `bg-gradient-to-*`), `!` suffix for important (`p-5!`), `@utility` for custom utilities.
- Component CSS files that use `@apply` must start with `@reference "../../../../styles.css";` (with semicolon).
- Use the `slate` gray scale, not `gray`.
- Prefer existing design-system classes over ad-hoc utilities:
  - Layout: `.section`, `.section-container`, `.grid-layout`
  - Headings: `.section-header`, `.section-eyebrow`, `.section-title`, `.section-lead`
  - UI: `.card`, `.chip`, `.btn-primary`, `.btn-secondary`, `.project-link`, `.form-input`
  - Utilities: `text-gradient`, `bg-grid`
- Shared component classes go in `@layer components` of `styles.css`; avoid tiny per-component CSS files.

## Design Conventions

- Every section follows this pattern:
  ```html
  <section id="name" class="section" aria-labelledby="name-title">
    <div class="section-container">
      <header class="section-header">
        <p class="section-eyebrow">// 0N · nombre</p>
        <h2 id="name-title" class="section-title">Título</h2>
        <p class="section-lead">Subtítulo opcional</p>
      </header>
      <!-- content -->
    </div>
  </section>
  ```
- Alternate section backgrounds: plain, then `bg-slate-50 dark:bg-slate-900/40`.
- Mobile-first spacing: use compact values on mobile and grow them with breakpoints (e.g. `gap-4 md:gap-6`, `p-5 md:p-8`). Avoid large fixed paddings.
- Decorative elements (e.g. the hero code window) are hidden below `lg` with `hidden lg:block` and marked `aria-hidden="true"`.
- Highlight colors: text uses `text-primary-700` (light) and `dark:text-primary-400` (dark) to meet AA contrast.
- Use `.chip` for technology tags and SVG icons with `aria-hidden="true"`.

## Content & Assets

- Static assets live in `public/`. Reference them with RELATIVE paths (`certifications/x.png`, no leading `/`) so they work with `--base-href /portfolio/`.
- Content (experience, skills, projects, stats) lives as typed `readonly` arrays in each component's `.ts` file.
- Do not add placeholder or fake content (fake projects, invented metrics). Mark missing content with `// TODO`.
- The contact form posts to Formspree (`FORM_ENDPOINT` in `contact.component.ts`); there is no backend.

## Accessibility Specifics

- Only ONE `<h1>` per page (in the hero). Sections use `<h2>`; cards use `<h3>`.
- External links: `target="_blank" rel="noopener noreferrer"` plus an "(se abre en una pestaña nueva)" hint via `aria-label` or `.sr-only`.
- Icon-only buttons and links need an `aria-label`.
- Form controls: a `<label for>`, plus `aria-invalid` and `aria-describedby` on error, with status messages in `role="status" aria-live="polite"`.
- Keep the skip link (`#main`) in `app.html` and respect `prefers-reduced-motion`.

## Commands

- `npm start`: dev server
- `npm run build`: production build
- `npm run build:gh`: GitHub Pages build (`--base-href /portfolio/` + `404.html`)
- `npm test`: unit tests

## TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

## Angular Best Practices

- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default in Angular v20+.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.

## Accessibility Requirements

- It MUST pass all AXE checks.
- It MUST follow all WCAG AA minimums, including focus management, color contrast, and ARIA attributes.

### Components

- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator
- Prefer inline templates for small components
- Prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead
- When using external templates/styles, use paths relative to the component TS file.
- Template-only members should be `protected readonly`.

## State Management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

## Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Do not assume globals like (`new Date()`) are available.
- Do not write arrow functions in templates (they are not supported).

## Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Use the `inject()` function instead of constructor injection
