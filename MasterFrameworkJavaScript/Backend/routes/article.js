'use strict';

let express = require('express');
let articleController = require('../controllers/article');

let router = express.Router();

//Rutas de prueba
router.post('/datos-curso', articleController.datosCurso);
router.get('/test-de-controlador', articleController.test);

//rutas utiles
router.post('/save', articleController.save);

module.exports = router;