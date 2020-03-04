//EL metodo Docheck se ejecuta cada vez que se ejecute cualquier tipo de cambio 
//o se ejecute cualquier evento dentro del componente

//El metodo OnDestroy se ejecuta justo antes de que el componente se destruya 
//Es decir eliminado del DOM
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

//Importamos el modelo Pelicula
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public peliculas: Pelicula[];

  //El constructor es para asignar valores, NO es para meter logica dentro
  constructor() { 
    this.titulo = 'Componente Peliculas';
    this.peliculas = [
      new Pelicula('SpideMan 4', 2019, 'https://wipy.tv/wp-content/uploads/2020/01/Kraven-the-Hunter-apareceri%CC%81a-en-spiderman-3-1.jpg'),
      new Pelicula('Los Vengadores Endgame', 2018, 'https://www.infobae.com/new-resizer/Q0mcG4O1g_azb4mIsKSRLDDgpYI=/750x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/04/28204703/Avengers-Endgame-1212.png'),
      new Pelicula('Batman vs Superman', 2015, 'https://i.ytimg.com/vi/Vzi5Q5aIGJU/maxresdefault.jpg'),
      new Pelicula('Batman vs Superman', 2015, 'https://i.ytimg.com/vi/Vzi5Q5aIGJU/maxresdefault.jpg')

      // {  year: 2019, titulo: 'SpideMan 4',  image: 'https://wipy.tv/wp-content/uploads/2020/01/Kraven-the-Hunter-apareceri%CC%81a-en-spiderman-3-1.jpg'},
      // {  year: 2018, titulo: 'Los Vengadores Endgame',  image: 'https://www.infobae.com/new-resizer/Q0mcG4O1g_azb4mIsKSRLDDgpYI=/750x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/04/28204703/Avengers-Endgame-1212.png'},
      // {  year: 2015, titulo: 'Batman vs Superman', image: 'https://i.ytimg.com/vi/Vzi5Q5aIGJU/maxresdefault.jpg'},
      // {  year: 2011, titulo: 'Batman vs Superman', image: 'https://i.ytimg.com/vi/Vzi5Q5aIGJU/maxresdefault.jpg'}

    ];
  }

  //El metodo ngOnInit() SI es para meter logica dentro de ella antes de que se ejecute todo el componente
  ngOnInit(): void {
    console.log(this.peliculas)
    console.log('Evento OnInit lanzado');
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

}
