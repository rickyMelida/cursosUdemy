'use strict'

//cargar modulos de node para crear servidor
let express = require('express');
let bodyParser = require('body-parser');

//Ejecutar express (http)
let app = express();

//cargar ficheros rutas


//Middlewares es siempre lo que se carga antes de ejecutar una ruta o una ruta
//cargamos el body-parser para el middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Cargar CORS para realizar peticiones desde frontend

//Agregar prefijos a rutas

//Ruta o metodo de prueba para el API REST
//req es lo que recibo y res es lo que respondo
app.get('/probando', (req, res)=> {
    
    return res.status(200).send({
        curso: 'Master en Framework JS',
        autor: 'Victor Robles',
        url: 'victorroblesweb.es'
    });
});



//Exportar modulo (fichero actual)
module.exports = app;