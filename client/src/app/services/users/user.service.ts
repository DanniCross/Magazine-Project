import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/models/user/UserModel';
import { isNullOrUndefined } from 'util';

const url = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  Register(username, email, password, rol): Observable<UserModel> {
    return this.http.post<UserModel>(`${url}Users`, { username, email, password, rol }, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  Login(email, password): Observable<UserModel> {
    return this.http.post<UserModel>(`${url}Users/login?include=user`, { email, password }, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    })
  }

  SaveUser(user, token) {
    localStorage.setItem('UserInfo', JSON.stringify(user));
    localStorage.setItem('TokenID', token);
  }

  getToken() {
    return localStorage.getItem('TokenID');
  }

  getUserInfo() {
    let user = localStorage.getItem('UserInfo');
    if (!isNullOrUndefined(user)) {
      return JSON.parse(user);
    }
  }




}
