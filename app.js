const express = require('express');
const app =       express();
const cors = require('cors');
require('dotenv').config();

const bodyParser = require('body-parser');
const router = require('./routes/index');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());


app.use(cors());

app.use('/', router);

app.use((req,res) => {
    res.status(404).send({"message": `Recurso no encontrado en: ${req.method} - ${req.url}`, "statusCode": 404, "status": "error"});
});

app.listen(PORT, () => {
    console.log(`Aplicacion corriendo en http://localhost:${PORT}`);
});