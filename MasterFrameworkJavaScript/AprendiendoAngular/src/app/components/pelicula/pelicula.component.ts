import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})

export class PeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula;
  @Output() MarcarFavorita = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(event, pelicula){
    //Emitimos o pasamos los datos de la pelicula a MarcarFavorita
    //que a su vez lleva por el @Output al elemento padre
    this.MarcarFavorita.emit({
      pelicula: pelicula
    });
  }
}
