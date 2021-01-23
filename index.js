const express = require('express');
const router = require('./routes');


//creando la app de express
const app = express();

//ruta para el home

app.use ('/', router());

app.listen(3000);
