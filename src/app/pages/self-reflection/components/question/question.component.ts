import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() question: string = '';
  @Output() onAnswer = new EventEmitter<string>();
  answer: string = '';

  submitAnswer() {
    this.onAnswer.emit(this.answer);
    this.answer = '';
  }
}