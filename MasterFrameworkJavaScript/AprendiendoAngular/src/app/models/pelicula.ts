//Este seria nuestro modelo para el componente peliculas
//utilizamos la palabra export para poder utilizarlo fuera del archivo local
export class Pelicula {
    // public title:string;
    // public year:number;
    // public image:string;

    // constructor(title, year, image) {
    //     this.title = title;
    //     this.year = year;
    //     this.image = image;
    // }

    constructor(

        public title:string,
        public year:number,
        public image:string
    ) {}
}