import { Component, OnInit } from "@angular/core";
import { AutorService } from "src/app/services/autor/autor.service";
import { ArticleModel } from "src/app/models/article/ArticleModel";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-send-articles",
  templateUrl: "./send-articles.component.html",
  styleUrls: ["./send-articles.component.css"]
})
export class SendArticlesComponent implements OnInit {
  constructor(private autorService: AutorService) { }

  ngOnInit() {
    this.UploadForm = this.FormCreator();
  }

  UploadForm: FormGroup;

  FormCreator(): FormGroup;

  FormCreator(): FormGroup {
    return new FormGroup({
      title: new FormControl('', Validators.required),
      abstract: new FormControl('', Validators.required),
      keywords: new FormControl('', Validators.required),
      file: new FormControl([], Validators.required)
    })
  }

  public get title() {
    return this.UploadForm.get('title');
  }

  public get abstract() {
    return this.UploadForm.get('abstract');
  }

  public get keywords() {
    return this.UploadForm.get('keywords');
  }

  public get file() {
    return this.UploadForm.get('file');
  }

  SetFile(File) {
    this.UploadForm.patchValue({ file: File });
  }

  SendArticle() {
    let ArticleFile: ArticleModel = {
      title: this.title.value,
      abstract: this.abstract.value,
      keywords: this.keywords.value,
      file: this.file.value,
      id: null
    };

    this.autorService.UploadFile(this.file.value).subscribe(item => {
      console.log(item);
      alert(`the item ${ArticleFile.file} has been uploaded...`)
    });

    this.autorService.UploadArticle(ArticleFile).subscribe(article => {
      console.log(article);
    });
  }
}
