'use strict';

let express = require('express');
let articleController = require('../controllers/article');

let router = express.Router();

let multipart = require('connect-multiparty');
let md_upload = multipart({ uploadDir: './upload/articles' });



//Rutas de prueba
router.post('/datos-curso', articleController.datosCurso);
router.get('/test-de-controlador', articleController.test);

//rutas utiles
router.post('/save', articleController.save);
router.get('/articles/:last?', articleController.getArticles); //colocamos la interrogacion al final para que el parametro last sea opcional
router.get('/article/:id', articleController.getArticle); //Aqui el parametro id si es obligatorio
router.put('/article/:id', articleController.upate);
router.delete('/article/:id', articleController.delete);
router.post('/upload-image/:id', md_upload, articleController.upload);
router.get('/get-image/:image', articleController.getImage);
router.get('/search/:search', articleController.search);

 

module.exports = router;