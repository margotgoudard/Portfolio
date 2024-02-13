import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ProfilComponent } from './components/profil/profil.component';

export const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }, // Redirect empty path to 'accueil'
  { path: 'accueil', component: AccueilComponent },
  { path: 'profil', component: ProfilComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
