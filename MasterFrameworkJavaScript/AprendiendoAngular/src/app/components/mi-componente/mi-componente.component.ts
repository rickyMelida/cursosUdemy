import { Component } from '@angular/core';

@Component ({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})

export class MiComponente {

    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPelicula: boolean;

    constructor() {
        this.titulo = 'Hola Angular desde mi componente';
        this.comentario = 'Este es mi primer componente';
        this.year = 2020;
        this.mostrarPelicula = true;

        console.log('Componente mi-componente cargado!!');
        console.log(this.titulo, this.comentario, this.year);
    }

    ocultarPeliculas() {
        this.mostrarPelicula = false;
        console.log('EL valor ahora es ' + this.mostrarPelicula);
    }
}