import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = "https://localhost:7248/api/Auth/login";
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const body = {
      email: email,
      password: password
    };

    return this.http.post<any>(this.apiUrl, body);
  }

  saveToken(token: string){
    localStorage.setItem('access_token', token);
  }

  isloggedIn(): boolean {
    return !!localStorage.getItem('access_token');
  }

  deleteToken() {
    localStorage.removeItem('access_token');
    location.reload();
  }

}
