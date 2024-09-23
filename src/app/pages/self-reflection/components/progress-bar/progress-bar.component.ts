import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  @Input() current: number = 0;
  @Input() total: number = 1;

  get progress() {
    return (this.current / this.total) * 100;
  }
}