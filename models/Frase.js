const mongoose = require('mongoose');

const FraseSchema = new mongoose.Schema({
    mensaje:{type: String, required: true},
    autor:  {type: String, required: true}
});

module.exports = mongoose.model('Frase', FraseSchema)