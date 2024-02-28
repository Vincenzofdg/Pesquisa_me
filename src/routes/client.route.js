const { Router } = require("express");

const { client: controller } = require('../controllers');

const { getAll, createClient } = controller;
const { token } = require('../middlewares');

const client = Router();

client
     .get("/", [token, getAll])
     .post("/", [token, createClient])

module.exports = client;