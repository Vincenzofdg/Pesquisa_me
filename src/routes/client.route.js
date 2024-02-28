const { Router } = require("express");

const { client: controller } = require('../controllers');

const { getAll } = controller;
const { token } = require('../middlewares');

const client = Router();

client
     .get("/", [token, getAll])

module.exports = client;