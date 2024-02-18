import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjetComponent } from './components/projet/projet.component';
import { EducationComponent } from './components/education/education.component';
import { CompetencesComponent } from './components/competences/competences.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' }, 
  { path: '/principal', component: PrincipalComponent },
  { path: '/profil', component: PrincipalComponent },
  { path: '/experiencepro', component: PrincipalComponent },
  { path: '/projets', component: PrincipalComponent },
  { path: '/etudes', component: PrincipalComponent },
  { path: '/competences', component: PrincipalComponent },
  { path: '/contacts', component: PrincipalComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
