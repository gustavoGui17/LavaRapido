import Veiculo from "../models/Veiculo.js";

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

export default {
    createService,
    findAllService,
    findByIdService,
    updateService,
}