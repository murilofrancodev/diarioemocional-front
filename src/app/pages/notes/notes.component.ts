import { Component } from '@angular/core';
import { Note } from '../../shared/models/note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  selectedDate: Date | null = null;
  selectedEmotions: string[] = [];
  noteContent: string = '';
  notes: Note[] = []; 
  
  emotionEmojis: { [key: string]: string } = {
    'Felicidade': '😊',
    'Tristeza': '😢',
    'Ansiedade': '😨',
    'Raiva': '😡'
  };

  mockNotes: Note[] = [
    { time: '08:30', emotion: 'Felicidade', emoji: '😊', content: 'Tive um ótimo dia!', isOpen: false },
    { time: '10:00', emotion: 'Tristeza', emoji: '😢', content: 'Senti falta de um amigo.', isOpen: false },
    { time: '14:15', emotion: 'Ansiedade', emoji: '😨', content: 'Preocupado com o trabalho.', isOpen: false },
  ];

  constructor() {
    this.notes = this.mockNotes; 
  }

  onDateSelected(date: Date) {
    this.selectedDate = date;
  }

  onEmotionSelected(emotion: string) {
    this.selectedEmotions.push(emotion);
  }

  onNoteChange(content: string) {
    this.noteContent = content;
  }

  saveNote() {
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const selectedEmotion = this.selectedEmotions.join(', ');

    const newNote: Note = {
      time: currentTime,
      emotion: selectedEmotion,
      emoji: this.emotionEmojis[selectedEmotion] || '❓', 
      content: this.noteContent
    };

    this.notes.push(newNote); 
    this.noteContent = ''; 
    this.selectedEmotions = [];
  }
}