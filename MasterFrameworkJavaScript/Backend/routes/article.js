'use strict';

let express = require('express');
let articleController = require('../controllers/article');

let router = express.Router();

router.post('/datos-curso', articleController.datosCurso);
router.get('/test-de-controlador', articleController.test);

module.exports = router;