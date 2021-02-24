const mongoose = require('mongoose');

const connectionString = `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.uua7q.azure.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology:true, useFindAndModify:false});

const db = mongoose.connection;

mongoose.Promise = global.Promise;

db.on('error', console.error.bind(console, 'Error al conectar a MongoDB'));