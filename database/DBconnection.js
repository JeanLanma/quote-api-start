const mongoose = require('mongoose');

const connectionString = `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.uua7q.azure.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology:true, useFindAndModify:false});

const db = mongoose.connection;

mongoose.Promise = global.Promise;

db.on('error', console.error.bind(console, 'Error al conectar a MongoDB'));

const { Frase } = require('../models/index');




//CRUD
//Create
exports.crear_frase = (req,res) => {
    let frase = new Frase({
        mensaje: req.body.mensaje,
        autor: req.body.autor
    });

    frase.save((err) => {
        if(err) return console.log(err);

        res.status(200).json({"message" : "registro agregado"});
    });
}

//READ
exports.leer_frases = (req,res) => {
    Frase.find({}, (err,frase) => {
        if(err) return console.log(err);

        res.status(200).json(frase)
    });
}

//Read One
exports.leer_frase = (req,res) => {
    Frase.findById(req.query.id, (err,frase) => {
        if(err) return console.log(err);

        res.status(200).json(frase)
    });
}



