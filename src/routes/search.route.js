const { Router } = require("express");

const { search: controller } = require('../controllers');

const { getAll } = controller;
const { token } = require('../middlewares');

const search = Router();

search
     .get("/", [token, getAll])

module.exports = search;