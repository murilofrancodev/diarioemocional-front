import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageDialogComponent } from '../../../../shared/components/message-dialog/message-dialog.component'; 
import { AuthService } from '../../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  passwordVisible: boolean = false; 

  constructor(private dialog: MatDialog, private router: Router, private toastr: ToastrService, private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        if (response && response.token) {
          this.authService.setToken(response.token); 
          this.router.navigate(['/home']); 
        } else {
          this.toastr.warning('Usuário ou senha incorretos.'); 
        }
      },
      error: (error) => {
        if (error.status === 401) { 
          this.toastr.warning('Usuário ou senha incorretos.'); 
        } else {
          this.toastr.warning('Erro ao conectar ao servidor.'); 
        }
      }
    });
  }

  openDialog(title: string, message: string) {
    this.dialog.open(MessageDialogComponent, {
      data: { title, message }
    });
  }
  
}