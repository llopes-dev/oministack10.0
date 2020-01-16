const express = require('express');

const app = express();


// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de Parâmetros
// Query Params: req.query (Filtros, Ordenação, Paginação ...)
// Route Params:
// Body:

app.get('/' , (request, response)=>{
    return response.json({message: 'Olá'});
});
app.listen(3333);