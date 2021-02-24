const { Frase } = require('../models');

const crear_frase = (req,res) => {
    let frase = new Frase({
        mensaje: req.body.mensaje,
        autor: req.body.autor
    });

    frase.save((err) => {
        if(err) return console.log(err);

        res.status(200).json({"message" : "registro agregado"});
    });
}

module.exports = crear_frase;