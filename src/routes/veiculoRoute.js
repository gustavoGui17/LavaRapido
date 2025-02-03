const route = require('express').Router();
const veiculoControler = require('../controllers/veiculoControler');

route.post("/", veiculoControler.create)
route.get("/", veiculoControler.findAll);
route.get("/:id", veiculoControler.findById)

module.exports = route;