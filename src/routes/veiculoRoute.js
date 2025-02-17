const route = require('express').Router();
const veiculoControler = require('../controllers/veiculoControler');
const { validId, validVeiculo } = require('../middlewares/global.middlewares')

route.post("/", veiculoControler.create)
route.get("/", veiculoControler.findAll);
route.get("/:id", validId, validVeiculo, veiculoControler.findById)
route.patch("/:id", validId, validVeiculo, veiculoControler.update)

module.exports = route;