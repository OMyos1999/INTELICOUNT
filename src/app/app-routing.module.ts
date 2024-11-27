import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordEmailComponent } from './reset-password-email/reset-password-email.component';
import { ResetPasswordPhoneComponent } from './reset-password-phone/reset-password-phone.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { NotFoundComponentComponent } from'./not-found-component/not-found-component.component';
import {AccoutantComponent} from "./accoutant/accoutant.component";

const routes: Routes = [
  { path: 'reset-password-email', component: ResetPasswordEmailComponent }, // Page 1
  { path: 'reset-password-phone', component: ResetPasswordPhoneComponent }, // Page 2
  { path: 'update-password', component: UpdatePasswordComponent },          // Page 3
  { path: 'accoutant', component: AccoutantComponent }, // Page 4

  { path: '', redirectTo: 'accoutant', pathMatch: 'full' },     // Redirection par défaut (page 1)
  {path : '**' , component:NotFoundComponentComponent},                    // Gestion des routes inexistantes


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
