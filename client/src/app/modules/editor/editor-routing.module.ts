import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeEditorComponent } from "./home-editor/home-editor.component";
import { UrlInjectionEditorGuard } from "src/app/guards/url-injection-editor.guard";
import { AdminUsersComponent } from './admin-users/admin-users.component';

const routes: Routes = [
  {
    path: "Editor/Home",
    component: HomeEditorComponent,
    canActivate: [UrlInjectionEditorGuard]
  },
  {
    path: "Editor/Admin",
    component: AdminUsersComponent,
    canActivate: [UrlInjectionEditorGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule {}
