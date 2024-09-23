import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent {
  currentStep: number = 1;
  totalSteps: number = 3;

  @Output() close = new EventEmitter<void>(); 

  constructor(private router: Router) {}

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    } else {
      this.closeOnboarding();
    }
  }

  closeOnboarding() {
    this.close.emit(); 
    this.router.navigate(['auth/login']); 
  }
}