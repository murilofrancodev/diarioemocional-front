import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmotionService } from '../../../../services/emotion.service';
import { Emotion } from '../../../../models/emotion.model';

@Component({
  selector: 'app-emotion-selector',
  templateUrl: './emotion-selector.component.html',
  styleUrls: ['./emotion-selector.component.scss']
})
export class EmotionSelectorComponent implements OnInit {
  @Output() emotionSelected = new EventEmitter<string>();
  emotions: Emotion[] = [];
  selectedEmotion: string | null = null; 

  constructor(private emotionService: EmotionService) {}

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
    this.emotionSelected.emit(emotion);
  }
}