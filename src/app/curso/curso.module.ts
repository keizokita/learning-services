import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosService } from './curso.service';
import { CursoComponent } from './curso.component';

@NgModule({
  declarations: [
    CursoComponent
],
  imports: [
    CommonModule
  ],
  exports: [CursoComponent]//,
  //providers: [CursosService]
})
export class CursosModule { }
