import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.html'
})
export class ProjectsComponent {
  projects = signal<Project[]>([
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Plataforma de comercio electrónico completa con carrito de compras, gestión de productos y pasarela de pagos.',
      image: '',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real y notificaciones.',
      image: '',
      technologies: ['Angular', 'Firebase', 'RxJS', 'Tailwind'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Dashboard meteorológico con visualización de datos en tiempo real y pronósticos extendidos.',
      image: '',
      technologies: ['Angular', 'Chart.js', 'OpenWeather API'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 4,
      title: 'Portfolio CMS',
      description: 'Sistema de gestión de contenido para portafolios creativos con editor visual.',
      image: '',
      technologies: ['Angular', 'NestJS', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 5,
      title: 'Social Media Analytics',
      description: 'Herramienta de análisis de redes sociales con métricas detalladas y reportes automatizados.',
      image: '',
      technologies: ['Angular', 'D3.js', 'Express', 'Redis'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 6,
      title: 'Learning Platform',
      description: 'Plataforma de aprendizaje en línea con cursos interactivos y seguimiento de progreso.',
      image: '',
      technologies: ['Angular', 'GraphQL', 'Apollo', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ]);
}
