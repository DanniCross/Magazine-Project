import { Component, OnInit } from "@angular/core";
import { EditorService } from "src/app/services/editor/editor.service";
import { UserModel } from "src/app/models/user/UserModel";

@Component({
  selector: "app-admin-users",
  templateUrl: "./admin-users.component.html",
  styleUrls: ["./admin-users.component.css"]
})
export class AdminUsersComponent implements OnInit{
  constructor(private editorService: EditorService) {
  }

  ngOnInit() {
    this.getUsers();
  }


  usersAutors: UserModel[] = [];
  usersEditors: UserModel[] = [];

  getUsers() {
    this.editorService.getUsers().subscribe(items1 => {
      for (let i = 0; i < items1.length; i++) {
        if (items1[i]['rol'] == 1){
          console.log(items1[i], 1);
          this.usersAutors.push(items1[i]);
        }else if (items1[i]['rol'] == 2) {
          console.log(items1[i], 2);
          this.usersEditors.push(items1[i]);
        }
      }
    });
  }

}
