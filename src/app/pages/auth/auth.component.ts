import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  showLogin: boolean = true; 
  showOnboarding: boolean = true; 

  constructor(private router: Router) {}

  closeOnboarding() {
    this.showOnboarding = false; 
  }

  toggleForm() {
    this.showLogin = !this.showLogin; 
  }

  goToRegister() {
    if (this.showLogin) {
      this.router.navigate(['auth/register']); 
    } else {
      this.router.navigate(['auth/login']); 
    }
    this.toggleForm(); 
  }
}