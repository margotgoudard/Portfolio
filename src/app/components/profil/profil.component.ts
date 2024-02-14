import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent {

  showAccueil: boolean = true;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  toggleDisplay() {
    this.showAccueil = !this.showAccueil;
    const accueilElement = this.el.nativeElement.querySelector('.composant-accueil');
    if (this.showAccueil) {
      this.renderer.removeClass(accueilElement, 'hide');
    } else {
      this.renderer.addClass(accueilElement, 'hide');
    }
  }
  
}
