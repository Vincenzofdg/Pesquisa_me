const { Router } = require("express");

const { question: controller } = require('../controllers');

const { getById } = controller;
const { token } = require('../middlewares');

const question = Router();

question
     .get("/:id", [token, getById])

module.exports = question;