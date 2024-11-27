import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; // Import du RouterModule et des Routes
import { HttpClientModule } from '@angular/common/http'; // Importer HttpClientModule

import { AppComponent } from './app.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { ResetPasswordEmailComponent } from './reset-password-email/reset-password-email.component';
import { ResetPasswordPhoneComponent } from './reset-password-phone/reset-password-phone.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { AssistantComponent } from './assistant/assistant.component';
import { AccoutantComponent } from './accoutant/accoutant.component';

// Définir les routes pour chaque composant
const routes: Routes = [
  { path: 'update-password', component: UpdatePasswordComponent },
  { path: 'reset-password-email', component: ResetPasswordEmailComponent },
  { path: 'reset-password-phone', component: ResetPasswordPhoneComponent },
  { path: 'accoutant', component: AccoutantComponent },
  { path: 'assistant', component: AssistantComponent },
  { path: '', redirectTo: '/update-password', pathMatch: 'full' }, // Redirection par défaut
  { path: '**', redirectTo: '/update-password' }, // Gestion des routes inexistantes
];

@NgModule({
  declarations: [
    AppComponent,
    UpdatePasswordComponent,
    ResetPasswordEmailComponent,
    ResetPasswordPhoneComponent,
    NotFoundComponentComponent,
    AssistantComponent,
    AccoutantComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes), // Configuration des routes
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
