import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @ViewChild('menu', { static: false }) menu!: ElementRef;

  constructor(private navigationService: NavigationService) {}

  setCurrentSection(section: string) {
    this.navigationService.changeSection(section);
  }

  toggleMenu() {
    const menuElement = this.menu.nativeElement;
    if (menuElement.classList.contains('open')) {
      menuElement.classList.remove('open');
    } else {
      menuElement.classList.add('open');
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const nav = document.querySelector('nav');
    if (window.pageYOffset > 50) { 
      nav?.classList.add('transparent');
    } else {
      nav?.classList.remove('transparent');
    }
  }
}
