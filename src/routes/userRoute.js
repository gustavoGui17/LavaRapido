const route = require('express').Router();
const userController = require('../controllers/userControler');

route.post("/", userController.create)

module.exports = route;