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

for(let posicion in listadoDeUsusarios) {
    console.log('Hola ' + listadoDeUsusarios[posicion].nombre)
}