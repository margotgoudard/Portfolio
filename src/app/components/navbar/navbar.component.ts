import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @ViewChild('menu', { static: false }) menu!: ElementRef;

  toggleMenu() {
    const menuElement = this.menu.nativeElement;
    if (menuElement.classList.contains('open')) {
      menuElement.classList.remove('open');
    } else {
      menuElement.classList.add('open');
    }
  }

}
