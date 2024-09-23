import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string = ''; 
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  pin: string = ''; 
  passwordVisible: boolean = false; 
  passwordStrength: string = '';
  currentStep: number = 1; 

  checkPasswordStrength() {
    const password = this.password;
    const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 
    const mediumPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (strongPasswordPattern.test(password)) {
      this.passwordStrength = 'Forte';
    } else if (mediumPasswordPattern.test(password)) {
      this.passwordStrength = 'Média';
    } else {
      this.passwordStrength = 'Fraca';
    }
  }

  getPasswordStrengthPercentage(): number {
    if (this.passwordStrength === 'Forte') {
      return 100;
    } else if (this.passwordStrength === 'Média') {
      return 60;
    } else {
      return 30; 
    }
  }

  addToPin(digit: string) {
    if (this.pin.length < 4) {
      this.pin += digit; 
    }
  }

  removeLastDigit() {
    this.pin = this.pin.slice(0, -1); 
  }

  clearPin() {
    this.pin = ''; 
  }

  onSubmit() {
    if (this.currentStep === 1) {
      this.currentStep++;
    } else if (this.currentStep === 2) {
      if (this.password === this.confirmPassword) {
        this.currentStep++; 
      } else {
        alert('As senhas não coincidem.');
      }
    } else if (this.currentStep === 3) {
      if (this.pin.length === 4) {
        alert('Registro bem-sucedido!'); 
      } else {
        alert('Por favor, digite um PIN de 4 dígitos.');
      }
    }
  }
}