const express = require('express');
const { celebrate, Joi, Segments } = require('celebrate');
const crypto = require('crypto');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate(
    {
        [Segments.BODY]: Joi.object().keys(
            {
                name: Joi.string().required(),
                email: Joi.string().required().email(),
                whatsapp: Joi.string().required().min(10).max(11),
                city: Joi.string().required(),
                uf: Joi.string().required().length(2),
            }
        )
    }
), OngController.create);

routes.get('/profile', celebrate(
    {
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required()
        }).unknown()
    }
), ProfileController.index);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object(
        {
            page: Joi.number(),
        }
    )
}), IncidentController.index);

routes.post('/incidents', celebrate(
    {
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required()
        }).unknown(),
        [Segments.BODY]: Joi.object().keys(
            {
                title: Joi.string().required().max(50).min(5),
                description: Joi.string().required().max(500).min(10),
                value: Joi.number().required(),
            }
        )
    }), IncidentController.create);

routes.delete('/incidents/:id', celebrate(
    {
        [Segments.PARAMS]: Joi.object({
            id: Joi.number().required(),
        })
    }), IncidentController.delete);

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