
import { Component, inject, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { ThemeService } from '@core/services/theme.service';
import { NAV_LINKS } from '@core/data/site';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.html',
  styleUrl: './header.css',
  host: {
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class HeaderComponent {
  private readonly themeService = inject(ThemeService);

  protected readonly menuOpen = signal(false);
  protected readonly isDark = computed(() => this.themeService.theme() === 'dark');

  protected readonly links = NAV_LINKS;

  protected toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
