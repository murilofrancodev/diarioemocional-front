import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmotionService } from '../../../../services/emotion.service';
import { Emotion } from '../../../../models/emotion.model';
import { ToastrService } from 'ngx-toastr';
import { CalendarService } from '../../../../services/calendar.service';

@Component({
  selector: 'app-emotion-selector',
  templateUrl: './emotion-selector.component.html',
  styleUrls: ['./emotion-selector.component.scss']
})
export class EmotionSelectorComponent implements OnInit {
  @Output() emotionSelected = new EventEmitter<string>();
  emotions: Emotion[] = [];
  selectedEmotion: string = '';
  selectedEmoji: string = '';
  isModalOpen: boolean = false; 
  noteContent: string = ''; 

  constructor(private emotionService: EmotionService, private toastr: ToastrService, private calendarService: CalendarService) {} 

  ngOnInit() {
    this.loadEmotions();
  }

  loadEmotions() {
    this.emotionService.getEmotions().subscribe((data: Emotion[]) => {
      this.emotions = data; 
    });
  }

  selectEmotion(emotion: string) {
    this.selectedEmotion = emotion; 
    const selectedEmotionData = this.emotions.find(e => e.name === emotion); 
    this.selectedEmoji = selectedEmotionData ? selectedEmotionData.emoji : '';
    this.emotionSelected.emit(emotion); 
    this.openModal(); 
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  saveNote(noteData: { emotion: string, note: string }) { 
    const { emotion, note } = noteData; 

    if (note.trim()) {
      this.emotionService.addEmotion(emotion, note).subscribe(
        response => {
          this.toastr.success('Sua emoção foi salva com sucesso!'); 
          this.noteContent = '';
          const emotionId = response.emotionId;
          this.calendarService.addCalendarEntry({
            emotionId: emotionId, 
            date: new Date().toISOString() 
          }).subscribe(
            () => {
              this.closeModal();
            },
          );
        },
      );
    } else {
      this.toastr.warning('Por favor, escreva algo antes de salvar.', 'Atenção'); 
    }
  }
}