const express = require ('express');
const mongoose = require('mongoose');
const routes = require('../routes');

const app = express();
mongoose.connect('mongodb+srv://otimizarme:!1983sepol##@cluster0-bvm49.mongodb.net/week10?retryWrites=true&w=majority' , {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
})

app.use(express.json());
app.use(routes);

// Métodos HTTP
// GET (pegar uma informação)
// POST (quando salvar um produto, cadastrar um usuário)
// PUT ( quando quer editar alguma informaçãp)
// DELETE ( deletar alguma informação)

// Tipos de parametros são usados 90% nos métodos GET
// Query Params: request.query (Filtros , ordenação, paginação, ...)
// Route Params: request.params (identificar um recurso na alteração ou remoção) será usado basicamente para PUT e DELETE 
// Body: request.body (dados para criação ou alteraçãode um registro) Utilizado para POST e PUT

// MongoDB (Não Relacional)



app.listen(3333);