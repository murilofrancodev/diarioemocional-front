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

  constructor(private router: Router) {
    this.checkOnboardingStatus(); 
  }

  checkOnboardingStatus() {
    if (typeof window !== 'undefined') { 
      const onboardingSeen = localStorage.getItem('onboardingSeen');
      this.showOnboarding = onboardingSeen !== 'true'; // Se 'true', não mostrar onboarding
    }
  }

  closeOnboarding() {
    this.showOnboarding = false; 
    if (typeof window !== 'undefined') { 
      localStorage.setItem('onboardingSeen', 'true'); 
    }
  }

  toggleForm() {
    this.showLogin = !this.showLogin; 
  }

  goToRegister() {
    this.toggleForm(); // Alterna entre login e registro
    if (this.showLogin) {
      this.router.navigate(['auth/register']); 
    } else {
      this.router.navigate(['auth/login']); 
    }
  }
}