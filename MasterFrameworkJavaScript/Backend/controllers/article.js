'use strict';

var validator = require('validator');
var Article = require('../models/article');

let controller = {
    datosCurso: (req, res)=> {
        var hola = req.body.hola;
    
        return res.status(200).send({
            curso: 'Master en Framework JS',
            autor: 'Victor Robles',
            url: 'victorroblesweb.es',
            hola
        });
    },

    test: (req, res) => {
        return res.status(200).send({
            message: 'soy la accion test de mi controlador de articulos'
        });
    },

    save: (req, res) => {
        //Recoger parametros  por post
        var params  =req.body;

        //validar datos (validator)
        try {
            //ESto va a dar true cuando params.title no este vacio
            var validateTitle = !validator.isEmpty(params.title);

            //ESto va a dar true cuando params.content no este vacio
            var validateContent = !validator.isEmpty(params.content);

        } catch (err) {
            return res.status(200).send({
                status: 'error',
                article: 'Faltan datos por enviar'
            });
        }

        //Comprobamos si la validacion es correcta
        if(validateTitle && validateContent) {
            //Crear el objeto a guardar
            var article = new Article();

            //Asignar valores
            article.title = params.title;
            article.content = params.content;
            article.image  = null;

            //Guardar el articulo
            article.save((err, articleStore) => {

                if(err || !articleStore) {
                    return res.status(404).send({
                        status: 'error',
                        message: "El articulo no se ha guardado !!"
                    });
                }else {
                    //Devolver una respuesta
                    return res.status(200).send({
                        status: 'success',
                        article: articleStore
                    });
                }


            });

            //Devolver una respuesta
            return res.status(200).send({
                status: 'success',
                article
            });
        }else {
            return res.status(200).send({
                status: 'error',
                message: "Los datos no son validos !!"
            });
        }

    }
};//end controller

module.exports = controller;