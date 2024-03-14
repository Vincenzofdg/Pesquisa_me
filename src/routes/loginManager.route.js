const { Router } = require("express");

const { loginManager: controller } = require('../controllers');

const { clientAcess } = controller;

const loginManager = Router();

loginManager
     .post("/", clientAcess);

module.exports = loginManager;