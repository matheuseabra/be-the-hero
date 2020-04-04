const routes = require('express').Router();
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./api/ongs/ong.controller');
const IncidentController = require('./api/incidents/incident.controller');
const ProfileController = require('./api/profile/profile.controller');
const SessionController = require('./api/auth/session.controller');

routes.get('/', (req, res) =>
  res.status(200).json({ message: 'The API is up!' })
);

routes.get('/ongs', OngController.index);

routes.post(
  '/ongs',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(11),
      city: Joi.string().required(),
      state: Joi.string().required(),
    }),
  }),
  OngController.create
);

routes.get(
  '/incidents',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  }),
  IncidentController.index
);

routes.post('/incidents', IncidentController.create);

routes.delete(
  '/incidents/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  IncidentController.delete
);

routes.get(
  '/profile',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      Authorization: Joi.string().required(),
    }).unknown(),
  }),
  ProfileController.index
);

routes.post('/sessions', SessionController.create);

module.exports = routes;
