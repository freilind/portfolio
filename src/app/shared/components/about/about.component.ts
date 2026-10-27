import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Stat {
  value: string;
  label: string;
}

interface Principle {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.html',
})
export class AboutComponent {
  protected readonly stats: Stat[] = [
    { value: '10+', label: 'Años de experiencia' },
    { value: '5', label: 'Certificaciones' },
    { value: '3', label: 'Sectores: banca, telecom y adtech' },
  ];

  protected readonly principles: Principle[] = [
    {
      title: 'Microservicios',
      description: 'Descomposición de monolitos en servicios desacoplados y escalables.',
      icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
    },
    {
      title: 'Cloud & IaC',
      description: 'Arquitecturas en AWS con infraestructura reproducible en Terraform.',
      icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    },
    {
      title: 'Código limpio',
      description: 'Software mantenible, testeable y fácil de evolucionar.',
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    },
    {
      title: 'Agilidad',
      description: 'Entregas continuas de valor bajo marcos como Scrum.',
      icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    },
  ];
}
