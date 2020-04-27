//EL metodo Docheck se ejecuta cada vez que se ejecute cualquier tipo de cambio 
//o se ejecute cualquier evento dentro del componente

//El metodo OnDestroy se ejecuta justo antes de que el componente se destruya 
//Es decir eliminado del DOM
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

//Importamos el modelo Pelicula
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/peliculas.service';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public peliculas: Pelicula[];
  public favorita: Pelicula;
  public fecha: any;

  //El constructor es para asignar valores, NO es para meter logica dentro
  constructor(  private _peliculaService: PeliculaService  ) { 
    this.titulo = 'Componente Peliculas';
    this.peliculas = this._peliculaService.getPeliculas();

    this.fecha = new Date(2020, 8, 12);
  }

  //El metodo ngOnInit() SI es para meter logica dentro de ella antes de que se ejecute todo el componente
  ngOnInit(): void {
    console.log(this.peliculas)
    console.log('Evento OnInit lanzado');
    console.log(this._peliculaService.holaMundo());
  }

  ngDoCheck() {
    console.log('Docheck lanzado');
  }

  
  cambiarTitulo() {
    this.titulo = 'El titulo ha sido cambiado!!';
  }
  
  ngOnDestroy() {
    console.log('El componente se va a eliminar')
  }

  //Recogemos los datos que viene del elemento hijo con el metodo mostrarFavorita
  mostrarFavorita(event) {
    this.favorita = event.pelicula;
    //console.log('El titulo es ' + this.favorita.title);
  }

}
