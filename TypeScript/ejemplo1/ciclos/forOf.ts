interface Usuario{
    nombre:string,
    apellido:string
}

var listadoDeUsusarios:Array<Usuario> = [
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
]

// for(var i=0; i < listadoDeUsusarios.length; i++) {
//     console.log(listadoDeUsusarios[i].nombre)

// }

for(let usuario of listadoDeUsusarios) {
    console.log(usuario.apellido)
}