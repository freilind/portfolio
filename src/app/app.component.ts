import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '@shared/components/header/header.component';
import { HeroComponent } from '@shared/components/hero/hero.component';
import { AboutComponent } from '@shared/components/about/about.component';
import { ExperienceComponent } from '@shared/components/experience/experience.component';
import { ProjectsComponent } from '@shared/components/projects/projects.component';
import { ContactComponent } from '@shared/components/contact/contact.component';
import { FooterComponent } from '@shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html'
})
export class AppComponent {}
