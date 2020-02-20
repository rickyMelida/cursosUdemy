var nombres:string[] = ['Ana', 'Maria', 'Juana'];

nombres.push('Ricardo');

console.log(nombres); 

interface Alumno {
    nombre:string,
    apellido:string
}

var alumnos: Alumno[] = [];

var ana: Alumno = {
    nombre: 'Ana',
    apellido: 'Garmendia'
}

//alumnos.push({nombre: 'Ricardo', apellido: 'Melida'})
alumnos.push(ana)

console.log(alumnos);