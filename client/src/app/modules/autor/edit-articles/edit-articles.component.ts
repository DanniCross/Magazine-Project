import { Component, OnInit } from "@angular/core";
import { ArticleModel } from "src/app/models/article/ArticleModel";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AutorService } from "src/app/services/autor/autor.service";

@Component({
  selector: "app-edit-articles",
  templateUrl: "./edit-articles.component.html",
  styleUrls: ["./edit-articles.component.css"]
})
export class EditArticlesComponent implements OnInit {
  constructor(private autorService: AutorService) {}

  ngOnInit() {
    this.UploadForm = this.FormCreator();
  }

  UploadForm: FormGroup;

  FormCreator(): FormGroup;

  FormCreator(): FormGroup {
    return new FormGroup({
      title: new FormControl("", Validators.required),
      abstract: new FormControl("", Validators.required),
      keywords: new FormControl("", Validators.required),
      file: new FormControl([], Validators.required),
      id: new FormControl("")
    });
  }

  public get id() {
    return this.UploadForm.get("id");
  }

  public get title() {
    return this.UploadForm.get("title");
  }

  public get abstract() {
    return this.UploadForm.get("abstract");
  }

  public get keywords() {
    return this.UploadForm.get("keywords");
  }

  public get file() {
    return this.UploadForm.get("file");
  }

  SetFile(File) {
    this.UploadForm.patchValue({ file: File });
  }

  EditArticle(id) {
    this.autorService.EditArticle(id).subscribe(item => {
      console.log(item);
    });
  }
}
