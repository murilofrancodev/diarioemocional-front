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
    localStorage.removeItem('authToken');
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
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return this.token || localStorage.getItem('authToken');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  private addAuthHeader(req: HttpRequest<any>): HttpRequest<any> {
    const token = this.getToken();
    if (token) {
      return req.clone({
        headers: new HttpHeaders({
          'Authorization': `Bearer ${token}`
        })
      });
    }
    return req;
  }

  private createAuthorizationHeader(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  private handleError(error: any) {
    console.error('Ocorreu um erro:', error);
    return throwError(error); 
  }
}