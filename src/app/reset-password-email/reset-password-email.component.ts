import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password-email',
  templateUrl: './reset-password-email.component.html',
  styleUrls: ['./reset-password-email.component.css']
})
export class ResetPasswordEmailComponent {
  constructor(private router: Router) {}

  onResetPassword() {
    this.router.navigate(['/update-password']);
  }
}
