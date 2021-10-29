import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Proyecto } from '../interfaces/Proyecto.interface';

@Component({
  selector: 'detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  @Input() proyecto: Proyecto;
  @Output() borrarProyecto: EventEmitter<Proyecto>

  constructor() {
    this.proyecto = {
      titulo: 'string',
      departamento: 'string',
      descripcion: 'string',
      activo: false
    };
    this.borrarProyecto = new EventEmitter();
  }


  ngOnInit(): void {
  }

  eliminarProyecto(proyecto: Proyecto) {
    this.borrarProyecto.emit(proyecto);

  }

}
