const { Router } = require("express");

const { user: controller } = require('../controllers');

const { getOverview } = controller;
const { token } = require('../middlewares');

const user = Router();

user
     .get("/:id", [token, getOverview])

module.exports = user;