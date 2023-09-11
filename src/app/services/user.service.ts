import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from 'src/constants/user-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:8089/users';

  constructor(
    private http: HttpClient
  ) { }

  getUser(userId: string): Observable<User> {
    const reqHeaders = new HttpHeaders()
     .set('Content-Type', 'application/json')
     .set('Accept', 'application/json')
     .set("X-userId", userId)

    return this.http.get<User>(`${this.baseUrl}/5`, {
      headers: reqHeaders
    });
  }

  createUser(user: User): Observable<User> {
    const reqHeaders = new HttpHeaders()
     .set('Content-Type', 'application/json')
     .set('Accept', 'application/json')
     .set("X-userId", user.userId)

    return this.http.post<User>(this.baseUrl, user, {
      headers: reqHeaders
    });
  }
}
