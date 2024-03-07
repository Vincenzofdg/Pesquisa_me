const { Router } = require("express");

const { user: controller } = require('../controllers');

const { getById } = controller;
const { token } = require('../middlewares');

const user = Router();

user
     .get("/:id", [token, getById])

module.exports = user;