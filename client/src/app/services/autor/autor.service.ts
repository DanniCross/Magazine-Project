import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ArticleModel } from "src/app/models/article/ArticleModel";
import { Observable, observable } from "rxjs";

const url = "http://localhost:3000/api/";

@Injectable({
  providedIn: "root"
})
export class AutorService {
  constructor(private http: HttpClient) {}

  UploadFile(file) {
    console.log(file);
    return this.http.post(`${url}containers/Articles/upload`, file, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  GetFile(file) {
    return this.http.get(`${url}containers/Articles/files/${file}`, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  UploadArticle(file): Observable<ArticleModel> {
    return this.http.post<ArticleModel>(`${url}Articles`, file, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }
}