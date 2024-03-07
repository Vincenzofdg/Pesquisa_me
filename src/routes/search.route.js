const { Router } = require("express");

const { search: controller } = require('../controllers');

const { getAll, createSearch } = controller;
const { token } = require('../middlewares');

const search = Router();

search
     .get("/", [token, getAll])
     .post("/", [token, createSearch])

module.exports = search;