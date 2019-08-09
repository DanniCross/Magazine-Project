import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AutorModule } from "../autor/autor.module";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes), AutorModule],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
