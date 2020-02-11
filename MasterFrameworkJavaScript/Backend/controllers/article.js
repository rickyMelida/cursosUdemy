'use strict';

var validator = require('validator');
var fs = require('fs'); //modulo file system para manejo de archivos
var path = require('path'); //modulo path para manejo de rutas 
var Article = require('../models/article');

let controller = {
    //metodo de los datos del curso
    datosCurso: (req, res)=> {
        var hola = req.body.hola;
    
        return res.status(200).send({
            curso: 'Master en Framework JS',
            autor: 'Victor Robles',
            url: 'victorroblesweb.es',
            hola
        });
    },

    //Metodo test 
    test: (req, res) => {
        return res.status(200).send({
            message: 'soy la accion test de mi controlador de articulos'
        });
    },

    //Metodo para guardar datos en la BD MongoDB
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

    },

    //Metodo para obtener datos de la BD
    getArticles: (req, res) => {

        //Hacemos un find para sacar datos de la BD
        //Se podria pasar las condiciones para extrer los datos pero esta vez lo dejamos vacios para extraer todos los datos
        var query = Article.find();

        var last = req.params.last;

        if(last || last != undefined) {
            //Le ponemos el limite de articulos de la BD
            query.limit(5);
        }
        //el metodo sort() le decimos en que orden nos va a mostrar los datos y en base a que, y si le ponemos un menos(-), nos invierte el orden
        query.sort('-_id').exec((err, article)=>{

            if(err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los datos !!'
                });
            }

            if(!article) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar!!'
                });
            }

            return res.status(200).send({
                status: 'success',
                article
            });
        });

    },

    //Metodo para extraer un solo articulo
    getArticle: (req, res) => {
        //Recoger el id de la url
        var articleId = req.params.id;

        //Comprobar que existe
        if(!articleId || articleId == null) {
            res.status(404).send({
                status: 'Error',
                message: 'No existe el articulo'
            });
        }

        //Buscar el articulo
        Article.findById(articleId, (err, article) => {
            
            if(err || !article) {
                res.status(404).send({
                    status: 'Error',
                    message: 'No existe el articulo!!'
                });
            }


            //Devolver una respuesta en json
            res.status(200).send({
                status: 'success',
                article
            });        
        });
        
    },

    //Metodo para actualizar datos
    upate: (req, res) => {
        //Recoger el id del articulo que viene por la URL
        var articleId = req.params.id;

        //Recoger los datos que llegan por el metodo put
        var params = req.body;

        //validar los datos
        try {
            var validateTitle = !validator.isEmpty(params.title);
            var validateContent = !validator.isEmpty(params.content);

        } catch (err) {
            return res.status(200).send({
                status: 'Error',
                message: 'Faltan datos por enviar!!'
            });
        }

        if(validateTitle && validateContent) {
            //Realizar un find and update
            Article.findOneAndUpdate({_id: articleId}, params, {new: true}, (err, articleUpdated)=> {
                if(err) {
                    return res.status(500).send({
                        status: 'Error',
                        message: 'Error al actualizar!!'
                    });
                }

                if(!articleUpdated) {
                    return res.status(404).send({
                        status: 'Error',
                        message: 'No existe el articulo!!'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    article: articleUpdated
                });
            });

        }else {
            return res.status(200).send({
                status: 'Error',
                message: 'La validacion no es correcta!!'
            });
        }


    },

    //Metodo para eliminar datos de la BD
    delete: (req, res) => {

        //Recoger el id de la url
        var articleId = req.params.id;

        //Find and Delete
        Article.findOneAndDelete({_id: articleId}, (err, articleRemoved) => {

            if(err) {
                return res.status(500).send({
                    status: 'Error',
                    message: 'Error al borrar !!'
                });
            }
            

            if(!articleRemoved) {
                return res.status(404).send({
                    status: 'Error',
                    message: 'No se ha borrado el articulo, posiblemente no exista !!'
                });
            }

            return res.status(200).send({
                status: 'success',
                article: articleRemoved
            });
        });
    },

    //Metodo para subir archivos
    upload: (req, res) => {
        //Configurar el modulo connect multiparty router/article.js

        //Recoger el fichero de la peticion 
        var file_name = 'Imagen no subida...';

        if(!req.files) {
            return res.status(404).send({
                status: 'Error',
                message: file_name
            });
        }

        //Conseguir el nombre y la extension del archivo
        var file_path = req.files.file0.path;

        //Con split separamos el archivo en partes donde tengan '/'
        var file_split = file_path.split('/');

        //Nombre del archivo
        var file_name = file_split[2];

        //Sacamos la extension del archivo
        var extension_split = file_name.split('.');
        var file_ext = extension_split[1];
        

        //Comprobar la extension, solo imagenes, si no es valido borrar fichero
        if(file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg' && file_ext != 'gif') {
            //borra archivo subido
            fs.unlink(file_path, (err) => {
                return res.status(200).send({
                    status: 'Error',
                    message: 'La extension de la imagen no es valido'
                });
            });
        }else {
            //Sacamos el id de la url
            var articleId = req.params.id;

            //Si todo es valido, buscar articulo, asignarle el nombre de la imagen y actualizar
            Article.findOneAndUpdate({_id: articleId}, {image: file_name}, {new: true}, (err, articleUpdated) => {

                if(err || !articleUpdated){
                    return res.status(200).send({
                        status: 'Error',
                        message: 'Error al guardar la imagen  de articulo'
                    });
                }


                return res.status(200).send({
                    status: 'success',
                    articleUpdated
                });
            });
            
            
        }




        
    },//end upload files


    //Metodo para sacar la imagen
    getImage: (req, res) => {
        var file = req.params.image;
        var path_file = './upload/articles/' + file;

        //Comprobamos si existe el fichero
        fs.exists(path_file, (exists) => {
            if(exists) {
                //Si existe la imagen retornamos la ruta del path para que esta la introduzca dentro de una etiqueta img
                //sendFile seria metodo de express
                return res.sendFile(path.resolve(path_file));
            }else {
                res.status(404).send({
                    status: 'Error',
                    message: 'La imagen no existe !!'
                }); 
            }
        });
        
    },

    //Buscador de articulos
    search: (req, res) => {
        //Sacar el string a buscar
        var searchString = req.params.search;

        //Find or
        Article.find({ "$or": [
            //Cuando el titulo o el contenido contenga el searchString, entonces me va a sacar los articulos
            {"title": {"$regex": searchString, "$options": "i"}},
            {"content": {"$regex": searchString, "$options": "i"}}
        ]})
        .sort([['date', 'descending']])
        .exec((err, article) => {

            if(err) {
                res.status(500).send({
                    status: 'Error',
                    message: 'Error en la peticion !!'
                })
            }

            if(!article || article.length <= 0) {
                res.status(404).send({
                    status: 'Error',
                    message: 'No hay que coincidan con tu buscqueda !!'
                })
            }


            res.status(200).send({
                status: 'Success',
                article
            });
        })
        
    }
};//end controller

module.exports = controller;