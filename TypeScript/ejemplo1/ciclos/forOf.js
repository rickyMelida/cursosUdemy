var listadoDeUsusarios = [
    {
        nombre: 'Ricardo',
        apellido: 'Melida'
    },
    {
        nombre: 'Anahi',
        apellido: 'Encina'
    },
    {
        nombre: 'Luis',
        apellido: 'Ibarra'
    }
];
// for(var i=0; i < listadoDeUsusarios.length; i++) {
//     console.log(listadoDeUsusarios[i].nombre)
// }
for (var _i = 0, listadoDeUsusarios_1 = listadoDeUsusarios; _i < listadoDeUsusarios_1.length; _i++) {
    var usuario = listadoDeUsusarios_1[_i];
    console.log(usuario.apellido);
}
