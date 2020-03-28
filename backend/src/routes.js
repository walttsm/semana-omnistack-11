/**
 * Rotas / recursos:
 */

/**
 * Métodos HTTP:
 * GET: Buscar info no back-end.
 * POST: Add info no back-end.
 * PUT: Editar info no back-end.
 * DELETE: Deletar info no back-end.
 */

/**
 * Tipos de parametros:
 * Query params: Parâmetros nomeados enviados na rota
 * Route params: Parâmetros de rota usados para identificar recursos
 * Request body: Usado para adicionar ou alterar recursos na aplicacão
 */

const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const ongController = require("./controllers/OngController");
const IncidentsController = require("./controllers/IncidentsController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get(
  "/ongs",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  ongController.index
);
routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.string()
        .required()
        .min(10)
        .max(11),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2)
    })
  }),
  ongController.create
);

routes.get(
  "/incidents",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number()
    })
  }),
  IncidentsController.index
);
routes.post("/incidents", IncidentsController.create);
routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  }),
  IncidentsController.delete
);

routes.get("/profile", ProfileController.index);

module.exports = routes;
