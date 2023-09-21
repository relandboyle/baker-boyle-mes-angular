import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { User } from 'src/constants/user-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:8089/users';
  reqHeaders: HttpHeaders;

  constructor(
    private http: HttpClient
  ) {
    this.reqHeaders = new HttpHeaders()
     .set('Content-Type', 'application/json')
     .set('Accept', 'application/json')
  }

  getUser(userId: string): Observable<HttpResponse<User>> {
    return this.http.get<User>(`${this.baseUrl}/${userId}`, {
      headers: this.reqHeaders,
      observe: 'response'
    });
  }

  createUser(user: User): Observable<HttpResponse<User>> {
    return this.http.post<User>(this.baseUrl, user, {
      headers: this.reqHeaders,
      observe: 'response'
    });
  }
}
