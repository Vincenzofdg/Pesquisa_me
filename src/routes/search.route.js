const { Router } = require("express");

const { search: controller } = require('../controllers');

const { getAll, getById, getByClientId, createSearch } = controller;
const { token } = require('../middlewares');

const search = Router();

search
     .get("/", [token, getAll])
     .get("/:id", [token, getById])
     .get("/main/:clientId", [token, getByClientId])
     .post("/", [token, createSearch])

module.exports = search;