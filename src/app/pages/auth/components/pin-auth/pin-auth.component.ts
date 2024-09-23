import { Component } from '@angular/core';

@Component({
  selector: 'app-pin-auth',
  templateUrl: './pin-auth.component.html',
  styleUrls: ['./pin-auth.component.scss']
})
export class PinAuthComponent {
  pin: string = ''; 
  maxLength: number = 4; 

  onSubmit() {
    if (this.pin.length === this.maxLength) {
      alert(`PIN digitado: ${this.pin}`);
    } else {
      alert('Por favor, digite um PIN de 4 dígitos.');
    }
  }
}