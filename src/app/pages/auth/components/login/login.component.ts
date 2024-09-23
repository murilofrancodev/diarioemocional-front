import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageDialogComponent } from '../../../../shared/components/message-dialog/message-dialog.component'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  passwordVisible: boolean = false; 

  constructor(private dialog: MatDialog, private router: Router) {}

  onSubmit() {
    const mockUsername = 'Teste';
    const mockPassword = 'Teste';

    if (this.username === mockUsername && this.password === mockPassword) {
      this.router.navigate(['/notes']); 
    } else {
      this.openDialog('Erro', 'Usuário ou senha incorretos.'); 
    }
  }

  openDialog(title: string, message: string) {
    this.dialog.open(MessageDialogComponent, {
      data: { title, message }
    });
  }
}