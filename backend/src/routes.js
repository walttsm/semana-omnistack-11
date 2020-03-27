const express = require("express");

const ongController = require("./controllers/OngController");
const IncidentsController = require("./controllers/IncidentsController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

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

routes.post("/sessions", SessionController.create);

routes.get("/ongs", ongController.index);
routes.post("/ongs", ongController.create);

routes.get("/incidents", IncidentsController.index);
routes.post("/incidents", IncidentsController.create);
routes.delete("/incidents/:id", IncidentsController.delete);

routes.get("/profile", ProfileController.index);

module.exports = routes;
