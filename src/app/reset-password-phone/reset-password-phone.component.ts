import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password-phone',
  templateUrl: './reset-password-phone.component.html',
  styleUrls: ['./reset-password-phone.component.css'],
})
export class ResetPasswordPhoneComponent {
  constructor(private router: Router) {}

  onCancel() {
    this.router.navigate(['/reset-password-email']); // Retour à la page 1
  }

  onSubmit() {
    this.router.navigate(['/update-password']); // Aller à la page 3
  }
}
