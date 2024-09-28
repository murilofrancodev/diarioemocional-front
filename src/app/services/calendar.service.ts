import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment.development';
import { AddCalendar } from '../models/calendar.model'; 
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class CalendarService {
  private apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient, private authService: AuthService) {}

  addCalendarEntry(entry: AddCalendar): Observable<any> {
    const headers = this.authService.createAuthorizationHeader();
    return this.http.post(`${this.apiUrl}/calendar/entry`, entry, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('Ocorreu um erro:', error);
    return throwError(error); 
  }
}