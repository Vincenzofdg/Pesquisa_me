const { Router } = require("express");

const { login: controller } = require('../controllers');

const { clientAcess, mainAcess } = controller;

const login = Router();

login
     .post("/", clientAcess)
     .post("/main", mainAcess);

module.exports = login;