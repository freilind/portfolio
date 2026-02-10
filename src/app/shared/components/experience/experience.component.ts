import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience.html'
})
export class ExperienceComponent {
  experiences = signal<Experience[]>([
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Tech Company Inc.',
      period: '2022 - Presente',
      description: 'Lidero el desarrollo de aplicaciones web empresariales utilizando Angular y TypeScript. Implemento arquitecturas escalables y mantenibles.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Tailwind CSS', 'NgRx']
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Solutions LLC',
      period: '2020 - 2022',
      description: 'Desarrollé aplicaciones web completas desde el diseño hasta la implementación. Trabajé tanto en frontend como en backend.',
      technologies: ['Angular', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB']
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'StartUp XYZ',
      period: '2018 - 2020',
      description: 'Creé interfaces de usuario intuitivas y responsivas. Colaboré estrechamente con diseñadores y equipos de backend.',
      technologies: ['React', 'JavaScript', 'CSS3', 'REST APIs', 'Git']
    }
  ]);
}
