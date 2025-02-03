const Veiculo = require('../models/Veiculo');

const createService = (body) => Veiculo.create(body)

const findAllService = () => Veiculo.find();

const findByIdService = (id) => Veiculo.findById(id);

module.exports = {
    createService,
    findAllService,
    findByIdService,
}