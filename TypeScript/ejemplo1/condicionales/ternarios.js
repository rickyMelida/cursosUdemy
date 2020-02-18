var nombre;
var edad = 1;
if (edad > 10) {
    nombre = 'Juan';
}
console.log(nombre);
//Si edad es mayor que 10 asigna Juan de ternario a la variable nombre, sino asigna No se cumplio a la variable nombre
nombre = edad > 10 ? 'Juan de ternario' : 'No se cumplio';
console.log(nombre);
