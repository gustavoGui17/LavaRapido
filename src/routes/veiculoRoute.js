const route = require('express').Router();
const veiculoControler = require('../controllers/veiculoControler');

route.post("/", veiculoControler.create)

module.exports = route;