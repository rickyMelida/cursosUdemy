import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

//Le indicamos que esto es un servicio
@Injectable()
export class PeliculaService {

    public peliculas: Pelicula[];
    
    constructor(){
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

    holaMundo() {
        return 'Hola mundo desde un servicio de angular!';
    }

    getPeliculas() {
        return this.peliculas;
    }
}