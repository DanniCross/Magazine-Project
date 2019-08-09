import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AutorRoutingModule } from "./autor-routing.module";
import { HomeAutorComponent } from "./home-autor/home-autor.component";
import { ReviewArticlesComponent } from "./review-articles/review-articles.component";
import { ListArticlesComponent } from "./list-articles/list-articles.component";
import { SendArticlesComponent } from "./send-articles/send-articles.component";

@NgModule({
  declarations: [
    HomeAutorComponent, 
    ReviewArticlesComponent,
    ListArticlesComponent,
    SendArticlesComponent
  ],
  imports: [CommonModule, AutorRoutingModule]
})
export class AutorModule {}
