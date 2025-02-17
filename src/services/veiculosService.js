const Veiculo = require('../models/Veiculo');

const createService = (body) => Veiculo.create(body)

const findAllService = () => Veiculo.find();

const findByIdService = (id) => Veiculo.findById(id);

const updateService = (
    id,
    placa,
    modelo,
    cor,
    nomeCliente,
    contato) => Veiculo.findOneAndUpdate(
        { _id: id },
        { placa, modelo, cor, nomeCliente, contato })

module.exports = {
    createService,
    findAllService,
    findByIdService,
    updateService,
}