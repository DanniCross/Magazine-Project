import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluatorRoutingModule } from './evaluator-routing.module';
import { HomeEvaluadorComponent } from './home-evaluador/home-evaluador.component';


@NgModule({
  declarations: [HomeEvaluadorComponent],
  imports: [
    CommonModule,
    EvaluatorRoutingModule
  ]
})
export class EvaluatorModule { }
