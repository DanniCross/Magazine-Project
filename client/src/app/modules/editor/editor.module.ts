import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { HomeEditorComponent } from './home-editor/home-editor.component';

@NgModule({
  declarations: [HomeEditorComponent],
  imports: [
    CommonModule,
    EditorRoutingModule
  ],
  exports:[
    HomeEditorComponent
  ]
})
export class EditorModule { }
