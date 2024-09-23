import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth.service'; // Importe o serviço de autenticação
import { HttpClient } from '@angular/common/http';

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

  constructor(private authService: AuthService, private http: HttpClient) {}

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

  async onSubmit() {
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
        try {
          const userCredential = await this.authService.register(this.email, this.password);
          const idToken = await userCredential.user.getIdToken();
          this.http.post('http://localhost:3000/verifyToken', { token: idToken })
            .subscribe(response => {
              alert('Registro bem-sucedido e token verificado!');
            }, error => {
              alert('Erro ao verificar token: ' + error.message);
            });
        } catch (error) {
          alert('Erro ao registrar: ');
        }
      } else {
        alert('Por favor, digite um PIN de 4 dígitos.');
      }
    }
  }
}