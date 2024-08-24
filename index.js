// Requerimos los paquetes de express
const express = require('express');

// Ejecutaremos express y lo asiganremos a una variables
const server = express();

//Middelwares
server.use(express.json());
server.use(express.urlencoded({extended: false}));

//Rutas del servidor
const usuarios_routes = require('./routes/usuarios')
server.use('/usuarios', usuarios_routes)

// Declara una variable para el puerto
const port = 3000;

// Levantar nuestro servidor
server.listen(port);
console.log('Servidor corriendo en el puerto: ', port);
