import { Component } from '@angular/core';

@Component({
  selector: 'app-self-reflection',
  templateUrl: './self-reflection.component.html',
  styleUrls: ['./self-reflection.component.scss']
})
export class SelfReflectionComponent {
  questions: string[] = [
    "O que eu aprendi sobre mim mesmo hoje?",
    "Como posso melhorar minha resposta emocional a certas situações?",
    "Quais foram os momentos mais desafiadores do meu mês?",
    "O que me trouxe alegria recentemente?",
    "Como posso ser mais gentil comigo mesmo?"
  ];
  
  currentQuestionIndex: number = 0;
  answers: string[] = [];
  chatMessages: { question: string, answer: string }[] = [];
  isTyping: boolean = false;
  userAnswer: string = '';

  handleAnswer(answer: string) {
    if (answer.trim()) { 
      this.chatMessages.push({ question: this.questions[this.currentQuestionIndex], answer });
      this.currentQuestionIndex++;
      this.userAnswer = ''; 
      this.simulateTyping();
    }
  }

  simulateTyping() {
    this.isTyping = true;
    setTimeout(() => {
      this.isTyping = false;
    }, 3000); 
  }

  get isLastQuestion() {
    return this.currentQuestionIndex === this.questions.length;
  }

  get finalResponse() {
    return "Obrigado por refletir! Lembre-se de que a auto-reflexão é um passo importante para o crescimento pessoal.";
  }
}