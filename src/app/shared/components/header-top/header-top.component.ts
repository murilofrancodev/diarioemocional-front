import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrl: './header-top.component.scss'
})
export class HeaderTopComponent {

  constructor(private authService: AuthService) {}

  logout() {
    localStorage.removeItem('authToken');
    this.authService.logout();
  }
}
