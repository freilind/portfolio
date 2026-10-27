
import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Experience {
  id: number;
  role: string;
  company: string;
  client?: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience.html',
})
export class ExperienceComponent {
  protected readonly experiences: Experience[] = [
    {
      id: 1,
      role: 'Senior Developer',
      company: 'Nisum Latam',
      period: '2016 — Presente',
      current: true,
      summary: 'Desarrollo de productos digitales para el sector bancario.',
      highlights: [
        'Descomposición de un monolito en una arquitectura de microservicios con Java y Spring.',
        'Desarrollo del producto de crédito hipotecario y de la app para pymes.',
        'Apoyo a la transformación digital y a la adopción de metodologías ágiles.',
      ],
      technologies: ['Java', 'Spring Boot', 'Microservicios', 'Docker', 'Jenkins', 'Scrum'],
    },
    {
      id: 2,
      role: 'Full Stack Developer',
      company: 'Lorebi C.A.',
      period: '2015 — 2016',
      summary: 'Plataforma de WiFi gratuito financiada con publicidad segmentada.',
      highlights: [
        'Desarrollo integral de la aplicación con Java, Spring MVC y el patrón DAO.',
        'Dashboard de métricas y comportamiento de los usuarios de la red.',
      ],
      technologies: ['Java', 'Spring MVC', 'Angular', 'Python', 'PostgreSQL', 'SVN'],
    },
    {
      id: 3,
      role: 'Especialista IT',
      company: 'Corporación Wimac Systems C.A.',
      client: 'Movilnet',
      period: '2013 — 2014',
      summary: 'Sistema de gestión de reclamos y fallas masivas en telecomunicaciones.',
      highlights: [
        'Desarrollo de las capas de vista y controlador del módulo de reclamos.',
        'Estadísticas y reportes para la toma de decisiones de la gerencia.',
      ],
      technologies: ['Java', 'PrimeFaces', 'PostgreSQL', 'JBoss'],
    },
    {
      id: 4,
      role: 'Java Developer',
      company: 'Eliexir CM Computer C.A.',
      client: 'Telefónica Venezuela',
      period: '2012 — 2013',
      summary: 'Módulo de VPN de voz para el Centro Virtual de Servicio al Cliente (CVSC+).',
      highlights: [
        'Web services SOAP para activar y desactivar planes y servicios mediante stored procedures.',
        'Asociación de números a grupos empresariales con planes y condiciones especiales.',
      ],
      technologies: ['Java', 'WebLogic', 'SOAP', 'PL/SQL', 'Maven'],
    },
  ];
}
