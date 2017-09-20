'use strict';

const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3789;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://pablo384:2323@pruebas-shard-00-00-uiwkf.mongodb.net:27017,pruebas-shard-00-01-uiwkf.mongodb.net:27017,pruebas-shard-00-02-uiwkf.mongodb.net:27017/test?ssl=true&replicaSet=pruebas-shard-0&authSource=admin', {useMongoClient: true})
    .then(() => {
        console.log('la conexion a la base de datos esta correcta...');
        app.listen(port,() => {
            console.log('Servidor local con NOde y express Corre correctamente...');
        });

    })
    .catch(err => console.log(err));