import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl; 
  private token: string | null = null;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/sign-in`, { email, password }).pipe(
      catchError(this.handleError) 
    );
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/sign-up`, { email, password }).pipe(
      catchError(this.handleError) 
    );
  }

  logout() {
    this.token = null;
    this.removeTokenFromStorage();
  }

  getUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user`, {
      headers: this.createAuthorizationHeader()
    }).pipe(
      catchError(this.handleError) 
    );
  }

  setToken(token: string) {
    this.token = token;
    this.saveTokenToStorage(token);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn(); 
  }

  getToken(): string | null {
    return this.token || this.getTokenFromStorage();
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  public createAuthorizationHeader(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  private handleError(error: any) {
    console.error('Ocorreu um erro:', error);
    return throwError(error); 
  }

  private saveTokenToStorage(token: string) {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('authToken', token);
    }
  }

  private removeTokenFromStorage() {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('authToken');
    }
  }

  private getTokenFromStorage(): string | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('authToken');
    }
    return null;
  }
}