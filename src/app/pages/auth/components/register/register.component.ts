// src/app/pages/auth/components/register/register.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth.service'; 
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string = ''; 
  displayName: string = '';
  password: string = '';
  confirmPassword: string = '';
  passwordVisible: boolean = false; 
  passwordStrength: string = '';
  currentStep: number = 1; 

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {} // Injete o ToastrService

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

  onSubmit() {
    if (this.currentStep === 1) {
      this.currentStep++;
    } else if (this.currentStep === 2) {
      if (this.password === this.confirmPassword) {
        this.authService.register(this.email, this.password).subscribe({
          next: (data) => {
            console.log('Registro bem-sucedido:', data);
            this.toastr.success('Registro realizado com sucesso!', 'Sucesso'); 
            this.router.navigate(['/home']); 
          },
          error: (error) => {
            console.error('Erro no registro:', error);
            this.toastr.error('Erro ao registrar. Tente novamente.', 'Erro'); 
          }
        });
      } else {
        this.toastr.warning('As senhas não coincidem.', 'Atenção'); 
      }
    } 
  }
}