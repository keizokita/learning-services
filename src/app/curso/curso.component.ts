import { Component, OnInit } from '@angular/core';

import { CursosService } from './curso.service';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss'],
  providers: [CursosService]
})
export class CursoComponent implements OnInit {

  cursos: string[] = []; 
  cursosService: any;
  //cursosService: CursosService;

  constructor(cursosService: CursosService) { 
    //this.cursosService = new CursosService();
    //this.cursosService = cursosService;
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

    CursosService.criouNovoCurso.subscribe();
    (    curso: any) => this.cursos.push(curso)
  }

}