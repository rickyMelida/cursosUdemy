'use strict'

let mongoose = require('mongoose');
let app = require('./app');
let port = 3900;

//el metodo set() es para desactivar la forma antigua de trabajar con ciertos metodos para trabajar con la BD
//Digamos forzar los metodos antiguos a que se desactiven
mongoose.set('useFindAndModify', false);

//Hacemos una promesa con mongoDB para evita ciertos fallos a la hora de conectarnos o a la hora de utilizar ciertas
//cosas con mongoDB
mongoose.Promise = global.Promise;

//Hacemos la conexion a mongoDB
//Cuando se conecte va a entrar en la funcion de callback then 
//mongoose.connect(url, opciones).then(() => {
//con {useNewUrlParser: true} vamos a usar la nueva sintaxis de mongoDB o mongoose

mongoose.connect('mongodb://localhost:27017/api_rest_blog', { useNewUrlParser: true })
        .then(() => {
            console.log('La conexion a la base de datos se ha realizado correctamente!');

            //creamos el servidor y ponerme a escuchar peticiones HTTP
            app.listen(port, () => {
                console.log('Servidor corriendo en http://localhost:'+port);
            });
        });