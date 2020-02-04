'use strict';

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
    }
};//end controller

module.exports = controller;