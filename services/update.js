const { Frase } = require('../models/index');
//Update

const actualizar_frases = (req,res) => {
    Frase.findByIdAndUpdate(req.query.id,{ $set: req.body} , (err, frase) => {
        if(err) return console.log(err);

        res.status(200).json({"message": "Registro Actualizado", "Actualizado" : frase})
    });
}

module.exports = actualizar_frases;