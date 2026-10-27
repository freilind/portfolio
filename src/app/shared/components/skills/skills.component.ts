import { Component, ChangeDetectionStrategy } from '@angular/core';

interface SkillGroup {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skills.html',
})
export class SkillsComponent {

  protected readonly groups: SkillGroup[] = [
    {
      id: 'backend',
      title: 'Backend',
      description: 'Servicios robustos y APIs bien diseñadas.',
      icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
      skills: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Spring Cloud', 'Hibernate', 'REST', 'SOAP', 'Maven'],
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps',
      description: 'Infraestructura reproducible y despliegues automatizados.',
      icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
      skills: ['AWS', 'Terraform', 'Docker', 'Jenkins', 'CI/CD', 'Git'],
    },
    {
      id: 'data',
      title: 'Datos',
      description: 'Modelado y persistencia eficiente.',
      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
      skills: ['PostgreSQL', 'Oracle', 'PL/SQL', 'SQL'],
    },
    {
      id: 'practices',
      title: 'Frontend & prácticas',
      description: 'Visión completa del producto y del proceso.',
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      skills: ['Angular', 'TypeScript', 'PrimeFaces', 'Scrum', 'Clean Code', 'Code Review'],
    },
  ];
}
