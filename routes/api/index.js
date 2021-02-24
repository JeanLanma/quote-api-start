const express = require('express');
const routerApi = express.Router();
const dbManager = require('../../database/DBconnection');

const { borrar_frase , actualizar_frases } = require('../../services/index');

routerApi.get('/', (req,res) => {
    res.status(200).send('Todo Ok');
});

routerApi.get('/frases', (req,res) => {
    dbManager.leer_frases(req,res);
})
routerApi.get('/frase', (req,res) => {
    dbManager.leer_frase(req,res);
})
routerApi.post('/frases', (req,res) => {
    dbManager.crear_frase(req,res);
})
routerApi.put('/frases', (req,res) => {
    actualizar_frases(req,res);
})

routerApi.delete('/frases', (req,res) => {
    borrar_frase(req,res);
})

module.exports = routerApi;
