import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SOCIAL_LINKS } from '@core/data/site';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';
type ContactField = 'name' | 'email' | 'message';

const FORM_ENDPOINT = 'https://formspree.io/f/TU_ID';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
})
export class ContactComponent {
  private readonly fb = inject(NonNullableFormBuilder);

  protected readonly socialLinks = SOCIAL_LINKS;
  protected readonly status = signal<FormStatus>('idle');

  protected readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(80)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(2000)]],
  });

  protected hasError(field: ContactField): boolean {
    const control = this.form.controls[field];
    return control.invalid && control.touched;
  }

  protected async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('sending');
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(this.form.getRawValue()),
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      this.status.set('success');
      this.form.reset();
    } catch {
      this.status.set('error');
    }
  }
}
