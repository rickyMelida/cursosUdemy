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
let articleRutes  = require('./routes/article');

//Agregar prefijos a rutas / cargar rutas
app.use('/api', articleRutes);


//Exportar modulo (fichero actual)
module.exports = app;