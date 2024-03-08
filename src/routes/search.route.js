const { Router } = require("express");

const { search: controller } = require('../controllers');

const { getAll, getById, createSearch } = controller;
const { token } = require('../middlewares');

const search = Router();

search
     .get("/", [token, getAll])
     .get("/:id", [token, getById])
     .post("/", [token, createSearch])

module.exports = search;