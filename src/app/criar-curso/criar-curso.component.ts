import { Component, OnInit } from '@angular/core';

import { CursosService } from '../curso/curso.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.scss'],
  providers: [CursosService]
})
export class CriarCursoComponent implements OnInit {

  curso: string[] = [];

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.curso = this.cursosService.getCursos();
  }

  onAddCurso(curso: string){
    this.cursosService.addCurso(curso);
  }

}
