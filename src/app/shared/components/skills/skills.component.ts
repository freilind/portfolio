import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface Skill {
  id: number;
  name: string;
  level: number;
  category: string;
}

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skills.html'
})
export class SkillsComponent {
  frontendSkills = signal<Skill[]>([
    { id: 1, name: 'Angular', level: 95, category: 'frontend' },
    { id: 2, name: 'TypeScript', level: 90, category: 'frontend' },
    { id: 3, name: 'React', level: 85, category: 'frontend' },
    { id: 4, name: 'Tailwind CSS', level: 88, category: 'frontend' },
    { id: 5, name: 'RxJS', level: 82, category: 'frontend' }
  ]);

  backendSkills = signal<Skill[]>([
    { id: 6, name: 'Node.js', level: 88, category: 'backend' },
    { id: 7, name: 'Express', level: 85, category: 'backend' },
    { id: 8, name: 'PostgreSQL', level: 80, category: 'backend' },
    { id: 9, name: 'MongoDB', level: 82, category: 'backend' },
    { id: 10, name: 'REST APIs', level: 90, category: 'backend' }
  ]);

  tools = signal<string[]>([
    'Git & GitHub',
    'Docker',
    'VS Code',
    'Figma',
    'Jira',
    'Postman',
    'Firebase',
    'Vercel'
  ]);
}
