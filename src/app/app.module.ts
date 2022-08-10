import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosModule } from './curso/curso.module';
import { CursosService } from './curso/curso.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent,
],
  imports: [
    BrowserModule,
    CursosModule,
    CriarCursoModule
  ],
  providers: [LogService],
  //providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
