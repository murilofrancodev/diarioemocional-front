import { Component } from '@angular/core';
import { EmotionService } from '../../services/emotion.service';
import { Note } from '../../models/note.model'; 
import { EmotionEnum } from '../../models/enums/emotion.enum'; 
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedDate: Date | null = null;
  selectedEmotions: string[] = [];
  noteContent: string = '';
  notes: Note[] = []; 
  isLoading: boolean = true;

  constructor(private emotionService: EmotionService, private toastr: ToastrService) {
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
      this.isLoading = false; 
    }, () => { 
      this.toastr.warning('Ocorreu um erro ao carregar as suas notas, por favor tente novamente.'); 
      this.isLoading = false; 
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