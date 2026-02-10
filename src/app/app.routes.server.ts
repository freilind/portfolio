import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**', // Aplica a todas las rutas
    renderMode: RenderMode.Prerender // Genera HTML estático (ideal para portafolios)
  }
];
