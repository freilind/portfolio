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
      title: 'Senior Developer',
      company: 'Nisum Latam',
      period: '2016 - Presente',
      description: 'Desarrollo de producto crédito hipotecario y app pyme para el sector bancario. Destructurando el monolito en nuevos componentes para arquitectura de microservicios. Apoyando a la organización en la transformación digital y metodologías ágiles.',
      technologies: ['Java', 'Spring', 'Jenkins', 'Docker', 'Scrum']
    },
    {
      id: 2,
      title: 'Developer full stack',
      company: 'Lorebi c.a.',
      period: '2015 - 2016',
      description: 'Desarrollo de una plataforma de wifi gratuita que requiere que la persona observe publicidad segmentada antes de permitirle navegar por un tiempo determinado. Mi función era el desarrollo de toda la aplicación utilizando java y framework Spring mvc. utilizando el patrón DAO. Desarrollo de un dashboard que donde se visualicen las métricas y comportamiento de los usuarios del wifi.',
      technologies: ['Angular', 'Java', 'Python', 'PostgreSQL', 'Svn']
    },
    {
      id: 3,
      title: 'Especialista IT',
      company: 'Corporación Wimac Systems, C.A',
      period: '2013 - 2014',
      description: 'Proyecto sobre reclamos y fallas masivas. Telecomunicaciones Movilnet C.A. Desarrollo de módulo para registrar los reclamos de los clientes y generar estadísticas y reportes que ayudaran a la gerencia del negocio a tomar decisiones con respecto a las fallas. Mi función era el desarrollo de la capa vista y controlador del sistema..',
      technologies: ['Java', 'Primefaces', 'PostgreSQL', 'Jboss']
    },
    {
      id: 4,
      title: 'Developer java',
      company: 'Eliexir Cm Computer C.A',
      period: '2012 - 2013',
      description: 'Proyecto en el área postpago en VPN de Voz módulo para CVSC+ (Centro Virtual de Servicio al Cliente). Telefónica Venezuela C.A. Desarrollo de módulo para asociar números telefónicos a grupos definidos por los clientes empresariales y vpn con la finalidad de lograr la comunicación directa con planes y condiciones especiales. Mi función era el desarrollo de webservice que utilizaran los stored procedured corespondientes para la activación y desactivación de planes y servicios en el módulo de VPN de voz. ',
      technologies: ['Java', 'Weblogic', 'Web services sopap', 'Plsql', 'maven']
    }
  ]);
}
