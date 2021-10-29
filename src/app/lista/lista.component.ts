import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from '../interfaces/Proyecto.interface';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() arrProyectos: Proyecto[];

  constructor() {
    this.arrProyectos = [];
  }

  ngOnInit(): void {
  }

  onBorrarProyecto($event: Proyecto) {
    this.arrProyectos.splice(this.arrProyectos.findIndex(proyecto => proyecto === $event), 1);
  }

}
