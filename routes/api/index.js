const express = require('express');
const routerApi = express.Router();
const dbManager = require('../../database/DBconnection');

const { borrar_frase , actualizar_frases, leer_frases, leer_frase, crear_frase } = require('../../services');

routerApi.get('/', (req,res) => {
    res.status(200).send('Todo Ok');
});

routerApi.get('/frases', (req,res) => {
    leer_frases(req,res);
})
routerApi.get('/frase', (req,res) => {
    leer_frase(req,res);
})
routerApi.post('/frases', (req,res) => {
    crear_frase(req,res);
})
routerApi.put('/frases', (req,res) => {
    actualizar_frases(req,res);
})

routerApi.delete('/frases', (req,res) => {
    borrar_frase(req,res);
})

module.exports = routerApi;
