const { Router } = require("express");

const { note: controller } = require('../controllers');

const { getAll, getByUserId, createNote, updateNote, destroyNote } = controller;
const { token } = require('../middlewares');

const note = Router();

note
     .get("/", [token, getAll])
     .get("/:id", [token, getByUserId])
     .post("/", [token, createNote])
     .put("/", [token, updateNote])
     .delete("/", [token, destroyNote])

module.exports = note;