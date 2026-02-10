import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private readonly THEME_KEY = 'portfolio-theme';

  theme = signal<Theme>(this.getInitialTheme());

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.applyTheme(this.theme());
      localStorage.setItem(this.THEME_KEY, this.theme());
    }
  }

  toggleTheme(): void {
    const nextTheme: Theme = this.theme() === 'light' ? 'dark' : 'light';
    this.setTheme(nextTheme);
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.applyTheme(theme);
    localStorage.setItem(this.THEME_KEY, theme);
  }

  private getInitialTheme(): Theme {
    if (!isPlatformBrowser(this.platformId)) {
      return 'light';
    }

    const savedTheme = localStorage.getItem(this.THEME_KEY) as Theme | null;
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  private applyTheme(theme: Theme): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const enableDark = theme === 'dark';

    document.documentElement.classList.toggle('dark', enableDark);
    document.body.classList.toggle('dark', enableDark);
    document.documentElement.style.colorScheme = theme;
  }
}
