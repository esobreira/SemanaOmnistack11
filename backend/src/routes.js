const express = require('express');
const crypto = require('crypto');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

// Receives a json request from external app.
// routes.post('/ongs', async (request, response) => {
//     const {
//         name,
//         email,
//         whatsapp,
//         city,
//         uf
//     } = request.body;

//     const id = crypto.randomBytes(4).toString('HEX');

//     await connection('ongs').insert({
//         id,
//         name,
//         email,
//         whatsapp,
//         city,
//         uf,
//     });

//     return response.json({
//         id
//     });
// });

module.exports = routes;