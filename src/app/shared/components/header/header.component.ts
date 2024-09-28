import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  isLoggedIn: boolean = false;

  constructor() {
    this.checkLoginStatus(); 
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  checkLoginStatus() {
    this.isLoggedIn = !!localStorage.getItem('authToken');
  }
}