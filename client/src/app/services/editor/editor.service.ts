import { Injectable } from "@angular/core";
import { UserService } from "../users/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserModel } from "src/app/models/user/UserModel";
import { Observable } from "rxjs";

const url = "http://localhost:3000/api/";

@Injectable({
  providedIn: "root"
})
export class EditorService {
  constructor(private http: HttpClient, private user: UserService) {
    this.token = this.user.getToken();
  }

  token = "";

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${url}Users`, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  updateUser(user: UserModel): Observable<UserModel> {
    return this.http.put<UserModel>(`${url}Users/${user.id}`, user, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }
}
