import { Component } from '@angular/core';
import { Proyecto } from './interfaces/Proyecto.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GestionProyectos';

  arrProyectos: Proyecto[];

  constructor() {
    this.arrProyectos = [];
  }

  nuevoProyecto($event: Proyecto) {
    this.arrProyectos.push($event);
  }
}
