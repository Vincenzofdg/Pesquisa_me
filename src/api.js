const express = require("express");
require("express-async-errors");

const routes = require("./routes");
const { cors } = require("./tools");
const { errorHandler } = require("./middlewares");

const api = express();

api.use(express.json());
api.use(cors);

const SERVER_INDEX = "pesquisa";

// Requests
api.use(`/${SERVER_INDEX}/login`, routes.login);
api.use(`/${SERVER_INDEX}/search`, routes.search);

api.use(errorHandler);

module.exports = api;
