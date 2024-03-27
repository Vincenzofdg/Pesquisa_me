const { Router } = require("express");

const { searchHistory: controller } = require('../controllers');

const { getAll, getByClientId } = controller;
const { token } = require('../middlewares');

const searchHistory = Router();

searchHistory
     .get("/", [token, getAll])
     .get("/:clientId", [token, getByClientId]);

module.exports = searchHistory;