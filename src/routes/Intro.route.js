const { Router } = require("express");

const { intro: controller } = require('../controllers');

const { getById } = controller;
const { token } = require('../middlewares');

const intro = Router();

intro
     .get("/:id", [token, getById])

module.exports = intro;