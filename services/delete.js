const { Frase } = require('../models/index');

const borrar_frase = (req,res) => {
    Frase.findByIdAndDelete(req.query.id, (err, frase) => {
        if(err) return console.log(err);

        res.status(200).json({"message": "Registro Borrado!!!"})
    });
}

module.exports = borrar_frase;