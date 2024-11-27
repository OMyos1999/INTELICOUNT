import { Component } from '@angular/core';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css'],
})
export class UpdatePasswordComponent {
onCancel() {
throw new Error('Method not implemented.');
}
  onSubmit() {
    console.log('Mot de passe mis à jour avec succès');
  }
}
