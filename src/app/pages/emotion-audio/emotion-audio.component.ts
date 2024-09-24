import { Component } from '@angular/core';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-emotion-audio',
  templateUrl: './emotion-audio.component.html',
  styleUrls: ['./emotion-audio.component.scss']
})
export class EmotionAudioComponent {
  selectedEmotion: string = '';
  noteContent: string = '';
  notes: Note[] = [];

  onEmotionSelected(emotion: string) {
    this.selectedEmotion = emotion;
  }

  saveNote() {
    if (this.noteContent.trim()) {
      const newNote: Note = {
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        emotion: this.selectedEmotion,
        emoji: '😊',
        content: this.noteContent
      };
      this.notes.push(newNote);
      this.noteContent = '';
      this.selectedEmotion = '';
    } else {
      alert('Por favor, escreva algo antes de salvar.');
    }
  }
}