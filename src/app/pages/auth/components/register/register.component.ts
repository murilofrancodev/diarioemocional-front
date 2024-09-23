import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  passwordVisible: boolean = false; 
  passwordStrength: string = '';

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
      return 30; // Fraca
    }
  }

  onSubmit() {
    if (this.password === this.confirmPassword) {
      alert('Registro bem-sucedido!');
    } else {
      alert('As senhas não coincidem.');
    }
  }
}