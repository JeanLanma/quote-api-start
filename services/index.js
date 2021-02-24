const crear_frase = require('./create');
const borrar_frase = require('./delete');
const actualizar_frases = require('./update');
const { leer_frase, leer_frases } = require('./read');


module.exports = {
    borrar_frase,
    actualizar_frases,
    leer_frase, leer_frases,
    crear_frase
}