import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Emotion } from '../models/emotion.model';

@Injectable({
  providedIn: 'root'
})
export class EmotionService {
  private emotions: Emotion[] = [
    { name: 'Felicidade', emoji: '😊' },
    { name: 'Tristeza', emoji: '😢' },
    { name: 'Ansiedade', emoji: '😨' },
    { name: 'Raiva', emoji: '😡' }
  ];

  getEmotions(): Observable<Emotion[]> {
    return of(this.emotions); 
  }
}