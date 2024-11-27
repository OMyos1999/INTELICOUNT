import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent {
  constructor(private router: Router) {}

  onSubmit() {
    console.log('Verification code submitted');
    // Logique supplémentaire pour mettre à jour le mot de passe
  }

  onCancel() {
    this.router.navigate(['/reset-password-email']); // Retourne à la première page
  }
}
