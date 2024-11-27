import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password-email',
  templateUrl: './reset-password-email.component.html',
  styleUrls: ['./reset-password-email.component.css'],
})
export class ResetPasswordEmailComponent {
onResetPassword() {
throw new Error('Method not implemented.');
}
  constructor(private router: Router) {}

  onSubmit() {
    // Navigation vers la page Update Password
    this.router.navigate(['/update-password']);
  }
}
