const express = require ('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://otimizarme!1983sepol##@cluster0-shard-00-00-bvm49.mongodb.net:27017,cluster0-shard-00-01-bvm49.mongodb.net:27017,cluster0-shard-00-02-bvm49.mongodb.net:27017/week10?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority' , {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
})

app.use(express.json());

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


app.get('/' , (request, response) => {
return response.json({
    message: 'Olá'
});
})

app.listen(3333);