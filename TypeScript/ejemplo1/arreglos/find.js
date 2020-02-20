var alumno = [];
alumno.push({ alumnoId: 1, nombre: 'Rick', apellido: 'Melida' });
alumno.push({ alumnoId: 2, nombre: 'Anahi', apellido: 'Encina' });
alumno.push({ alumnoId: 3, nombre: 'Andrea', apellido: 'Rotela' });
//console.log(alumno)
var alumnoEncontrado = alumno.find(function (alumnos) {
    //return alumnos.alumnoId == 2;
    return alumnos.nombre.includes('nd');
});
console.log(alumnoEncontrado);
