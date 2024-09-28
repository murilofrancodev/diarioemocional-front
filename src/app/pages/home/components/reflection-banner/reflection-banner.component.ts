import { Component } from '@angular/core';

@Component({
  selector: 'app-reflection-banner',
  templateUrl: './reflection-banner.component.html',
  styleUrls: ['./reflection-banner.component.scss']
})
export class ReflectionBannerComponent {
  title: string = 'Reflexões Pessoais';
  description: string = 'Reserve um momento para pensar sobre suas emoções e experiências.';
}