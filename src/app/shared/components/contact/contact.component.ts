import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SOCIAL_LINKS } from '@core/data/site';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.html',
})
export class ContactComponent {
  protected readonly socialLinks = SOCIAL_LINKS;
}
