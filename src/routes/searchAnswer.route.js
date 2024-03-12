const { Router } = require("express");

const { searchAnswer: controller } = require('../controllers');

const { create } = controller;
const { token } = require('../middlewares');

const searchAnswer = Router();

searchAnswer
     .post("/", [token, create])

module.exports = searchAnswer;