import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NAV_LINKS, SOCIAL_LINKS } from '@core/data/site';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();
  protected readonly navLinks = NAV_LINKS;
  protected readonly socialLinks = SOCIAL_LINKS;
}
