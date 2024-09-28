import { Component } from '@angular/core';
import { EmotionService } from '../../services/emotion.service';
import { Note } from '../../models/note.model'; 
import { EmotionEnum } from '../../models/enums/emotion.enum'; 

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  selectedDate: Date | null = null;
  selectedEmotions: string[] = [];
  noteContent: string = '';
  notes: Note[] = []; 

  constructor(private emotionService: EmotionService) {
    this.loadEmotionNotes();
  }

  loadEmotionNotes() {
    this.emotionService.findEmotion().subscribe((response: { emotions: Note[] }) => {
      this.notes = response.emotions.map(emotion => ({
        time: emotion.createdAt ? new Date(emotion.createdAt).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : 'Hora não disponível',
        emotion: EmotionEnum[emotion.emotion as keyof typeof EmotionEnum] || '', 
        note: emotion.note,
        isOpen: false
      })).reverse();
    }, error => {
      console.error('Erro ao carregar notas de emoções:', error);
    });
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
}