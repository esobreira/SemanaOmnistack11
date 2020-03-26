const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', (request, response) => {
    return response.send('Hello World');
});

/**
 * GET:
 * POST:
 * PUT:
 * DELETE:
 */

/**
 * Query Params : Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params : Parâmetros utilizados para identificar recursos
 * Request Body : Corpo da requisição, utilizado para criar ou alterar recursos
 */

// app.get('/users', (request, response) => {
//     const params = request.query;

//     console.log(params);

//     return response.json({
//         evento: 'Semana Omnistack 11.0',
//         aluno: 'Eberton Sobreira'
//     });
// });


app.listen(3333);