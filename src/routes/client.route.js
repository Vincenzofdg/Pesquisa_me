const { Router } = require("express");

const { client: controller } = require('../controllers');

const { getAll, createClient, getById } = controller;
const { token } = require('../middlewares');

const client = Router();

client
     .get("/", [token, getAll])
     .get("/:id", [token, getById])
     .post("/", [token, createClient])

module.exports = client;
