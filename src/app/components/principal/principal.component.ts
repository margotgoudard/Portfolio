import { Component, ElementRef, Renderer2 } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

  currentSection = 'profil'; 

  sections = ['profil', 'education', 'competences', 'experiences', 'projets', 'contacts']; // Les IDs de vos sections
  showAccueil: boolean = true;

  constructor(private el: ElementRef, private renderer: Renderer2, private navigationService: NavigationService) {
    this.navigationService.currentSection.subscribe(section => {
      this.currentSection = section;
      this.showAccueil = section === 'accueil';
    });

    this.navigationService.changeSection('profil');
  }

  toggleDisplay() {
    this.showAccueil = !this.showAccueil;
    const accueilElement = this.el.nativeElement.querySelector('.composant-accueil');
    if (this.showAccueil) {
      this.renderer.removeClass(accueilElement, 'hide');
    } else {
      this.renderer.addClass(accueilElement, 'hide');
    }
  }
  
  nextSection() {
    const currentIndex = this.sections.indexOf(this.currentSection);
    const nextIndex = (currentIndex + 1) % this.sections.length;
    this.currentSection = this.sections[nextIndex];
  }

  // Méthode pour aller à la section précédente
  previousSection() {
    const currentIndex = this.sections.indexOf(this.currentSection);
    const previousIndex = (currentIndex - 1 + this.sections.length) % this.sections.length;
    this.currentSection = this.sections[previousIndex];
  }
}
