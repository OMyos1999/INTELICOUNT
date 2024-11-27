import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordEmailComponent } from './reset-password-email/reset-password-email.component';
import { ResetPasswordPhoneComponent } from './reset-password-phone/reset-password-phone.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { NotFoundComponentComponent } from'./not-found-component/not-found-component.component';

const routes: Routes = [
  { path: 'reset-password-email', component: ResetPasswordEmailComponent }, // Page 1
  { path: 'reset-password-phone', component: ResetPasswordPhoneComponent }, // Page 2
  { path: 'update-password', component: UpdatePasswordComponent },          // Page 3
  { path: '', redirectTo: '/reset-password-email', pathMatch: 'full' },     // Redirection par défaut (page 1)
  { path: '**', redirectTo: '/reset-password-email' },                      // Gestion des routes inexistantes
  {path : '**' , component:NotFoundComponentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
