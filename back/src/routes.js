const {Router} = require('express');

const routes = Router();

routes.get('/' , (request, response) => {
return response.json({
    message: 'Olá'
});
})

module.exports = routes;