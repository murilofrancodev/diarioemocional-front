import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment.development';
import { AuthService } from './auth.service'; 
import { Emotion } from '../models/emotion.model'; 
import { EmotionEnum } from '../models/enums/emotion.enum'; 

@Injectable({
  providedIn: 'root'
})
export class EmotionService {
  private apiUrl = environment.apiUrl; 
  private emotions: Emotion[] = [];

  constructor(private http: HttpClient, private authService: AuthService) { 
    this.initializeEmotions();
  } 

  private initializeEmotions() {
    this.emotions = Object.keys(EmotionEnum).map(key => ({
      name: key,
      emoji: EmotionEnum[key as keyof typeof EmotionEnum]
    }));
  }

  addEmotion(emotion: string, note: string): Observable<any> {
    const headers = this.authService.createAuthorizationHeader(); 
    return this.http.post(`${this.apiUrl}/emotions`, { emotion, note }, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  findEmotion(): Observable<any> {
    const headers = this.authService.createAuthorizationHeader(); 
    return this.http.get(`${this.apiUrl}/emotions/find`, { headers }).pipe(
      catchError(this.handleError)
    );
}

  private handleError(error: any) {
    console.error('Ocorreu um erro:', error);
    return throwError(error); 
  }

  getEmotions(): Observable<Emotion[]> {
    return of(this.emotions); 
  }
}