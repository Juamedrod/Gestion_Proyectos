import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Proyecto } from '../interfaces/Proyecto.interface';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() proyectoCreado: EventEmitter<Proyecto>;
  titulo: string;
  departamento: string;
  descripcion: string;

  constructor() {
    this.proyectoCreado = new EventEmitter();
    this.titulo = '';
    this.departamento = '';
    this.descripcion = '';
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let proyectoNuevo = {
      titulo: this.titulo,
      departamento: this.departamento,
      descripcion: this.descripcion,
      activo: false,
    }
    this.proyectoCreado.emit(proyectoNuevo);
  }
}
