//Declaramos la variable tipo array con el tipo de datos que va a tener el array
var listaDeNombres: Array<string> = ['Juana', 'Maria', 'Ana', 'Carmen']

var listadoDeNumeros: Array<number> = [15, 25, 36, 695, 95]

interface Alumnos{
    nombre: string,
    edad: number
}

var listadoDeAlumnos: Array<Alumnos> = [
    {
        nombre: 'Maria',
        edad:15
    },
    {
        nombre: 'Rocio',
        edad: 16
    },
    {
        nombre: 'Johana',
        edad: 14
    }
]

console.log(listadoDeAlumnos[0].nombre)

