const {Frase} = require('../models')

//READ
const leer_frases = (req,res) => {
    Frase.find( {} , (err,frase) => {
        if(err) return console.log(err);

        res.status(200).json(frase)
    });
}

//Read One
const leer_frase = (req,res) => {
    Frase.findById(req.query.id, (err,frase) => {
        if(err) return console.log(err);

        res.status(200).json(frase)
    });
}

module.exports = {
    leer_frases,
    leer_frase
}