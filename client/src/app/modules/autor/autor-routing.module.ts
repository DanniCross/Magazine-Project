import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListArticlesComponent } from "./list-articles/list-articles.component";
import { HomeAutorComponent } from "./home-autor/home-autor.component";
import { SendArticlesComponent } from "./send-articles/send-articles.component";
import { ReviewArticlesComponent } from "./review-articles/review-articles.component";

const routes: Routes = [
  { path: "Autor/List", component: ListArticlesComponent },
  { path: "Autor/Home", component: HomeAutorComponent },
  { path: "Autor/Send", component: SendArticlesComponent },
  { path: "Autor/Review", component: ReviewArticlesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutorRoutingModule {}
