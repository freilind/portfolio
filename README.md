# Portfolio · Freilin Manzano

Portafolio profesional de **Freilin Manzano**, Backend Engineer especializado en Java, Spring, microservicios y AWS.

Construido con **Angular 22**, **Tailwind CSS v4** y Signals. Se despliega en **GitHub Pages**.

## 🚀 Características

- 🎨 Estética de ingeniero backend: oscuro por defecto, tipografía monoespaciada y paleta azul/violeta
- 🌓 Modo claro y oscuro controlado por clase, sin parpadeo al cargar
- 📱 Mobile-first: espaciado compacto en móvil y elementos decorativos solo en escritorio
- ♿ Accesible (WCAG AA): skip link, foco visible, ARIA y contraste revisado en ambos temas
- ⚡ Componentes standalone, `OnPush` y Signals
- 📨 Formulario de contacto reactivo con validación accesible (Formspree)
- 🔗 Navegación y redes sociales centralizadas en un único archivo de datos

## 📦 Stack Tecnológico

| Área | Tecnología |
|------|------------|
| Framework | Angular 22 (standalone, signals, control flow nativo) |
| Lenguaje | TypeScript 6 (modo estricto) |
| Estilos | Tailwind CSS 4 (`@tailwindcss/postcss`) |
| Formularios | Reactive Forms |
| Fuentes | Inter + JetBrains Mono (Google Fonts) |
| Hosting | GitHub Pages |
| Runtime | Node.js ≥ 24, npm ≥ 10 |

## 🏗️ Estructura del Proyecto

```
portfolio/
├── public/
│   └── certifications/          # Badges de certificaciones (PNG)
├── scripts/
│   └── create-404.mjs           # Copia index.html → 404.html para GitHub Pages
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── data/
│   │   │   │   └── site.ts      # NAV_LINKS y SOCIAL_LINKS (fuente única)
│   │   │   └── services/
│   │   │       └── theme.service.ts
│   │   ├── shared/
│   │   │   └── components/
│   │   │       ├── header/      # Nav sticky, menú móvil, toggle de tema
│   │   │       ├── hero/        # Presentación, ventana de código, certificaciones
│   │   │       ├── about/       # Bio, estadísticas y principios
│   │   │       ├── experience/  # Timeline de experiencia
│   │   │       ├── skills/      # Stack agrupado por categoría
│   │   │       ├── projects/    # Tarjetas de proyectos
│   │   │       ├── contact/     # Redes + formulario reactivo
│   │   │       └── footer/
│   │   ├── app.component.ts
│   │   ├── app.html
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── index.html               # SEO, fuentes y script anti-parpadeo de tema
│   ├── main.ts
│   └── styles.css               # Tema y sistema de diseño (Tailwind v4)
├── .postcssrc.json
├── angular.json
└── package.json
```

Aliases de importación: `@app/*`, `@core/*` y `@shared/*`.

## 🧩 Secciones

| # | Sección | Ancla | Contenido |
|---|---------|-------|-----------|
| — | Header | — | Logo `<freilin />`, navegación, CTA, tema y menú móvil accesible |
| — | Hero | — | Nombre, rol, chips de tecnologías, CTAs, redes y certificaciones verificables en Credly |
| 01 | About | `#about` | Biografía, estadísticas y principios de trabajo |
| 02 | Experience | `#experience` | Timeline con logros y stack por puesto |
| 03 | Skills | `#skills` | Tecnologías agrupadas (Backend, Cloud & DevOps, Datos, Frontend & prácticas) |
| 04 | Projects | `#projects` | Proyectos con enlaces al repositorio y a la demo |
| 05 | Contact | `#contact` | Redes, ubicación y formulario |
| — | Footer | — | Navegación, redes y copyright |

## 🎨 Sistema de Diseño

Todo el sistema está en `src/styles.css`. **No hay `tailwind.config.js`**, porque Tailwind v4 se configura desde CSS.

### Tema

- Los colores `primary` (azul) y `secondary` (violeta) se definen en el bloque `@theme`, con tonos del 50 al 900.
- Las fuentes son `--font-sans` (Inter) y `--font-mono` (JetBrains Mono).
- El modo oscuro usa `@custom-variant dark (&:where(.dark, .dark *))` y lo controla `ThemeService`.

### Clases reutilizables

| Clase | Uso |
|-------|-----|
| `.section` | Espaciado vertical responsive de cada sección (`py-12` → `lg:py-28`) |
| `.section-container` | Contenedor centrado (`max-w-6xl`) |
| `.section-header` / `.section-eyebrow` / `.section-title` / `.section-lead` | Encabezado estándar: `// 0N · nombre` + título + subtítulo |
| `.grid-layout` | Grid de 1, 2 o 12 columnas |
| `.card` | Tarjeta con borde, sombra y elevación al pasar el cursor |
| `.chip` | Etiqueta monoespaciada para tecnologías |
| `.btn-primary` / `.btn-secondary` | Botones |
| `.project-link` | Botón de icono (proyectos, footer) |
| `.form-input` | Inputs y textarea, con estado `aria-invalid` |
| `text-gradient` / `bg-grid` | Utilidades (`@utility`) para el texto degradado y el fondo cuadriculado |

Las secciones alternan entre fondo blanco y `bg-slate-50 dark:bg-slate-900/40`.

### Responsive

| Breakpoint | Comportamiento |
|------------|----------------|
| `< 768px` (móvil) | 1 columna, espaciado compacto y menú hamburguesa |
| `768px – 1023px` (tablet) | 2 columnas y navegación completa |
| `≥ 1024px` (desktop) | Grid de 12 columnas, ventana de código en el hero y hero a pantalla completa |

## 🛠️ Instalación y Scripts

```bash
npm install        # Instalar dependencias
npm start          # Servidor de desarrollo → http://localhost:4200
npm run build      # Build de producción
npm run build:gh   # Build para GitHub Pages (base-href /portfolio/ + 404.html)
npm test           # Tests unitarios
```

## 🚢 Despliegue (GitHub Pages)

1. `npm run build:gh`
2. Publica `dist/portfolio/browser/`.

Las rutas de assets son **relativas** (`certifications/...`, sin `/` inicial), así respetan el `base-href`.

## 📝 Personalización

| Qué | Dónde |
|-----|-------|
| Nombre, rol, chips, ventana de código y certificaciones | `hero/hero.component.ts` y `hero.html` |
| Biografía, estadísticas y principios | `about/about.component.ts` y `about.html` |
| Experiencia laboral | `experience/experience.component.ts` → `experiences` |
| Stack técnico | `skills/skills.component.ts` → `groups` |
| Proyectos | `projects/projects.component.ts` → `projects` |
| Navegación y redes sociales | `core/data/site.ts` → `NAV_LINKS`, `SOCIAL_LINKS` |
| Formulario de contacto | `contact/contact.component.ts` → `FORM_ENDPOINT` |
| Colores y fuentes | `src/styles.css` → bloque `@theme` |
| Título, descripción y Open Graph | `src/index.html` |

### Formulario de contacto

GitHub Pages no tiene backend, así que el formulario envía los datos a [Formspree](https://formspree.io):

1. Crea un formulario en Formspree.
2. Reemplaza `TU_ID` en `FORM_ENDPOINT` (`contact.component.ts`).

### Añadir una sección nueva

1. Crea el componente en `shared/components/<nombre>/`.
2. Usa `<section id="..." class="section" aria-labelledby="...">` con `.section-header`.
3. Añádelo a `app.component.ts` y `app.html`.
4. Si debe aparecer en la navegación, agrégalo a `NAV_LINKS`.

## ♿ Accesibilidad

- Enlace "Saltar al contenido" y foco visible con `:focus-visible`
- Un solo `<h1>` (en el hero) y jerarquía de encabezados correcta
- Menú móvil con `aria-expanded` y `aria-controls`, que se cierra con `Escape`
- Toggle de tema con `aria-pressed`
- Enlaces externos con aviso "(se abre en una pestaña nueva)"
- Errores de formulario con `aria-invalid`, `aria-describedby` y estado `aria-live`
- Se respeta `prefers-reduced-motion`
- Contraste AA verificado: `primary-700` en modo claro y `primary-400` en oscuro

Verifica con **Lighthouse** o **axe DevTools** en ambos temas.

## 📄 Licencia

Código abierto bajo licencia MIT.

## 📧 Contacto

- LinkedIn: [freilind](https://www.linkedin.com/in/freilind/)
- GitHub: [freilind](https://github.com/freilind)
- Credly: [freilin-manzano](https://www.credly.com/users/freilin-manzano)
```
