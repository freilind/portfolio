import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  repoUrl?: string;
  demoUrl?: string;
}

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.html',
})
export class ProjectsComponent {
  protected readonly githubProfile = 'https://github.com/freilind';

  protected readonly projects: Project[] = [
    {
      id: 1,
      title: 'Portafolio personal',
      description:
        'Este sitio: SPA con Angular 22, signals, Tailwind CSS v4, modo oscuro accesible y despliegue en GitHub Pages.',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'GitHub Pages'],
      repoUrl: 'https://github.com/freilind/portfolio',
      demoUrl: 'https://freilind.github.io/portfolio/',
    },
  ];
}
