const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();

mongoose.connect('mongodb://otimizarme:!1983sepol##@cluster0-shard-00-00-bvm49.mongodb.net:27017,cluster0-shard-00-01-bvm49.mongodb.net:27017,cluster0-shard-00-02-bvm49.mongodb.net:27017/week10?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority' , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});



app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de Parâmetros
// Query Params: req.query (Filtros, Ordenação, Paginação ...)
// Route Params:
// Body:

app.listen(3333);