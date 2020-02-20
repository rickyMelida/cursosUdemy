var Alumno = /** @class */ (function () {
    function Alumno(name, lastName, pess) {
        this.nombre = name;
        this.apellido = lastName;
        this.peso = pess;
        this.mostrarMensaje();
    }
    Alumno.prototype.mostrarMensaje = function () {
        console.log('Hola ' + this.nombre + ' ' + this.apellido);
    };
    Alumno.prototype.modificar = function (nombreParametro, apellidoParametro, pesoParametro) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.peso = pesoParametro;
        //this.mostrarMensaje();
    };
    return Alumno;
}());
//Instanciamos la clase Alumno que sea de tipo Alumno
var alumno1 = new Alumno('Ricardo', 'Melida', 59);
//alumno1.asignar('Ricardo', 'Melida', 59);
// alumno1.nombre = 'Juan';
// alumno1.apellido = 'Gonzalez';
// alumno1.peso = 78;
var alumno2 = new Alumno('Nelly', 'Ruiz Diaz', 70);
//alumno2.asignar('Anahi', 'Encina', 70);
//alumno2.mostrarMensaje();
