import { Component, OnInit } from "@angular/core";
import { AutorService } from "src/app/services/autor/autor.service";
import { ArticleModel } from "src/app/models/article/ArticleModel";

@Component({
  selector: "app-list-articles",
  templateUrl: "./list-articles.component.html",
  styleUrls: ["./list-articles.component.css"]
})
export class ListArticlesComponent implements OnInit {
  constructor(private autorService: AutorService) {
    this.getInfo();
  }

  ngOnInit() {}

  articles: ArticleModel[] = [];

  getInfo() {
    this.autorService.GetFileData().subscribe(items => {
      this.articles = items;
    });
  }
}
