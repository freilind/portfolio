# Portfolio Profesional

Un portafolio moderno, elegante y profesional construido con Angular 21 y Tailwind CSS.

## 🚀 Características

- ✨ Diseño moderno y profesional
- 🌓 Modo oscuro/claro con transiciones suaves
- 📱 Diseño mobile-first con CSS Grid
- ⚡ Angular 21 con componentes standalone
- 🎨 Tailwind CSS para estilos
- 🔧 TypeScript estricto
- ♿ Accesible (WCAG AA)
- 🎯 Señales de Angular para gestión de estado
- 📊 CSS Grid con templates personalizados

## 📦 Stack Tecnológico

- **Framework**: Angular 21
- **Lenguaje**: TypeScript 5.7
- **Estilos**: Tailwind CSS 3.4
- **Gestión de Estado**: Angular Signals
- **Formularios**: Reactive Forms

## 🏗️ Estructura del Proyecto

```
portfolio/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   └── services/
│   │   │       └── theme.service.ts
│   │   ├── shared/
│   │   │   └── components/
│   │   │       ├── header.component.ts
│   │   │       ├── hero.component.ts
│   │   │       ├── about.component.ts
│   │   │       ├── experience.component.ts
│   │   │       ├── projects.component.ts
│   │   │       ├── skills.component.ts
│   │   │       ├── contact.component.ts
│   │   │       └── footer.component.ts
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── styles.css
│   ├── main.ts
│   └── index.html
├── tailwind.config.js
├── tsconfig.json
├── angular.json
└── package.json
```

## 🎨 Características del Diseño

### CSS Grid Layout
- Grid mobile-first: 1 columna en móvil
- Grid tablet: 2 columnas
- Grid desktop: 12 columnas
- Templates de grid personalizados para diferentes secciones

### Sistema de Temas
- Modo claro y oscuro
- Transiciones suaves entre temas
- Persistencia en localStorage
- Detección automática de preferencia del sistema
- Paleta de colores personalizada con primary y secondary

### Componentes

1. **Header**: Navegación sticky con theme toggle
2. **Hero**: Sección de bienvenida con gradientes
3. **About**: Información personal con estadísticas
4. **Experience**: Timeline de experiencia laboral
5. **Projects**: Grid de proyectos con cards interactivas
6. **Skills**: Barras de progreso para habilidades
7. **Contact**: Formulario de contacto reactivo
8. **Footer**: Links y redes sociales

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start

# Compilar para producción
npm run build
```

## 📝 Personalización

### Cambiar Información Personal

1. **Hero Section** (`hero.component.ts`):
  - Actualiza tu nombre, título y descripción

2. **About Section** (`about.component.ts`):
  - Modifica la biografía y estadísticas

3. **Experience** (`experience.component.ts`):
  - Edita el array `experiences` con tu experiencia laboral

4. **Projects** (`projects.component.ts`):
  - Actualiza el array `projects` con tus proyectos

5. **Skills** (`skills.component.ts`):
  - Modifica `frontendSkills`, `backendSkills` y `tools`

6. **Contact** (`contact.component.ts`):
  - Actualiza email, teléfono y ubicación

### Cambiar Colores del Tema

Edita `tailwind.config.js` para modificar la paleta de colores:

```javascript
colors: {
  primary: {
    // Tu paleta de color primario
  },
  secondary: {
    // Tu paleta de color secundario
  }
}
```

## 🎯 Mejores Prácticas Implementadas

- ✅ Componentes standalone
- ✅ Signals para estado reactivo
- ✅ ChangeDetectionStrategy.OnPush
- ✅ Formularios reactivos
- ✅ TypeScript estricto
- ✅ Control flow nativo (@if, @for)
- ✅ Class y style bindings (sin ngClass/ngStyle)
- ✅ Arquitectura limpia y escalable

## 📱 Responsive Design

- Mobile: < 768px (1 columna)
- Tablet: 768px - 1024px (2 columnas)
- Desktop: > 1024px (12 columnas)

## ♿ Accesibilidad

- Atributos ARIA apropiados
- Gestión de foco
- Navegación por teclado
- Contraste de colores WCAG AA
- Labels semánticos

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría realizar.

## 📧 Contacto

- Email: -
- LinkedIn: [freilind](https://www.linkedin.com/in/freilind/)
- GitHub: [freilind](https://github.com/freilind)
