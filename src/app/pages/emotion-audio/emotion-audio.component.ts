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
  notes: any;

  onEmotionSelected(emotion: string) {
    this.selectedEmotion = emotion;
  }


}