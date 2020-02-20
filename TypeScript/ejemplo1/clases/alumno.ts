class Alumno {
    private nombre: string;
    private apellido: string;
    private peso: number;

    constructor(name:string, lastName:string, pess:number) {
        this.nombre = name;
        this.apellido = lastName;
        this.peso = pess;

        this.mostrarMensaje();
    }

    private mostrarMensaje(){
        console.log('Hola ' + this.nombre + ' ' + this.apellido)
    }

    modificar(nombreParametro:string, apellidoParametro:string, pesoParametro:number) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.peso = pesoParametro;
        //this.mostrarMensaje();
    }
}


//Instanciamos la clase Alumno que sea de tipo Alumno
var alumno1: Alumno = new Alumno('Ricardo', 'Melida', 59);
//alumno1.asignar('Ricardo', 'Melida', 59);


// alumno1.nombre = 'Juan';
// alumno1.apellido = 'Gonzalez';
// alumno1.peso = 78;


var alumno2: Alumno = new Alumno('Nelly', 'Ruiz Diaz', 70);
//alumno2.asignar('Anahi', 'Encina', 70);
//alumno2.mostrarMensaje();

