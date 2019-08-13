import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ArticleModel } from "src/app/models/article/ArticleModel";
import { Observable } from "rxjs";
import { UserService } from "../users/user.service";

const url = "http://localhost:3000/api/";

@Injectable({
  providedIn: "root"
})
export class AutorService {
  constructor(private http: HttpClient, private user: UserService) {
    this.token = this.user.getToken();
  }

  UploadFile(file) {
    let data = new FormData();
    data.append("Articles[]", file, file.name);
    return this.http.post(
      `${url}containers/Articles/upload?access_token=${this.token}`,
      data
    );
  }

  token = "";

  GetFile(file) {
    return this.http.get(`${url}containers/Articles/files/${file}`, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  GetFiles() {
    return this.http.get(`${url}containers/Articles`, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  UploadArticle(file): Observable<ArticleModel> {
    return this.http.post<ArticleModel>(
      `${url}Articles?access_token=${this.token}`,
      file,
      {
        headers: new HttpHeaders({
          "content-type": "application/json"
        })
      }
    );
  }

  GetFileData(): Observable<ArticleModel[]> {
    return this.http.get<ArticleModel[]>(`${url}Articles`, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }
}
