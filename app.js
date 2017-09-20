'use strict';
const express = require('express');
const path = require('path');
const bodyParse= require('body-parser');
const app=express();


//cargar rutas
const user_routes = require('./server/routes/user');
const animal_routes = require('./server/routes/animal');



//middleware de body-parser
app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json());

//configurar cabeceras y cors
app.use((req, res, next)=>{
   res.header('Access-Control-Allow-Origin','*');
   res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
   res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
   next();
});
//rutas base

app.use('/api',user_routes);
app.use('/api',animal_routes);

app.use(express.static(path.join(__dirname, './dist')));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, './dist/index.html'));
});



module.exports= app;