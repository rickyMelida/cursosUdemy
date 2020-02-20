interface Alumno {
    nombre: string,
    apellido: string
}

var alumno: Alumno[] = [];


alumno.push({nombre: 'Rick', apellido: 'Melida'})
alumno.push({nombre: 'Anahi', apellido: 'Encina'})
alumno.push({nombre: 'Andrea', apellido: 'Rotela'})


alumno.forEach((alumno) => {
    console.log(alumno.nombre);
    console.log(alumno.apellido)
})