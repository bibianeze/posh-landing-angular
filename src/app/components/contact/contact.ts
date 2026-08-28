import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

// Custom validator 1: rejects whitespace-only input (built-in required doesn't catch " " as empty)
function notBlank(control: AbstractControl): ValidationErrors | null {
  const isBlank = (control.value ?? '').trim().length === 0;
  return isBlank ? { notBlank: true } : null;
}

// Custom validator 2: checks the value actually looks like an email
function emailFormat(control: AbstractControl): ValidationErrors | null {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const valid = pattern.test(control.value ?? '');
  return valid ? null : { emailFormat: true };
}

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  submitted = signal(false);

  form = new FormGroup({
    name: new FormControl('', [Validators.required, notBlank]),
    email: new FormControl('', [Validators.required, emailFormat]),
    message: new FormControl('', [Validators.required, notBlank]),
  });

  onSubmit() {
    if (this.form.valid) {
      this.submitted.set(true);
    }
  }

  onBack() {
    this.submitted.set(false);
    this.form.reset();
  }
}