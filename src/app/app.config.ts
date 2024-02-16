import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routes";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AccueilComponent } from "./components/accueil/accueil.component";
import { ProfilComponent } from "./components/profil/profil.component";
import { ProjetComponent } from "./components/projet/projet.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { EducationComponent } from "./components/education/education.component";
import { NgModule } from "@angular/core";
import { FooterComponent } from "./components/footer/footer.component";
import { CompetencesComponent } from "./components/competences/competences.component";
import { PrincipalComponent } from "./components/principal/principal.component";
import { ContactComponent } from "./components/contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ProfilComponent,
    ProjetComponent,
    ExperienceComponent,
    NavbarComponent,
    EducationComponent,
    FooterComponent,
    CompetencesComponent,
    PrincipalComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }